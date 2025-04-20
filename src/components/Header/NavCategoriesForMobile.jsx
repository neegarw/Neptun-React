import React, { useEffect, useState } from 'react';
import { getAllCategory } from '../../services/api';
import { Link } from 'react-router-dom';

const icons = [
    'https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg',
    'https://neptun.az/image/catalog/icon-menu/%C9%99t-v%C9%99-toyuq%20m%C9%99hsullar%C4%B1.svg',
    'https://neptun.az/image/catalog/icon-menu/Qastronom.svg',
    'https://neptun.az/image/catalog/icon-menu/%C9%99rzaq%20m%C9%99hsullar%C4%B1.svg',
    'https://neptun.az/image/catalog/icon-menu/%C5%9Eirniyyat-%C3%A7ay-v%C9%99%20q%C9%99hv%C9%99.svg',
    'https://neptun.az/image/catalog/icon-menu/%C4%B0%C3%A7kil%C9%99r.svg',
    'https://neptun.az/image/catalog/icon-menu/S%C3%BCd-m%C9%99hsullar%C4%B1.svg',
    'https://neptun.az/image/catalog/icon-menu/U%C5%9Faq-m%C9%99hsullar%C4%B1.svg',
    'https://neptun.az/image/catalog/icon-menu/Yuyucu-vasit%C9%99l%C9%99r.svg',
    'https://neptun.az/image/catalog/icon-menu/Kosmetik-v%C9%99-gigiyenik.svg',
    'https://neptun.az/image/catalog/icon-menu/M%C9%99i%C5%9F%C9%99t-m%C9%99tb%C9%99x-v%C9%99-tekstil.svg',
    'https://neptun.az/image/catalog/icon-menu/Konselyariya.svg',
    'https://neptun.az/image/catalog/icon-menu/Heyvan-yeml%C9%99ri.svg',
    'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg  ',
    'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg',
    'https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg'
];

function NavCategoriesForMobile({ sidebarOpen, setSidebarOpen }) {
    const [data, setData] = useState([]);
    const [openIndexes, setOpenIndexes] = useState({}); // Hər bir kateqoriyanın açıq olub-olmadığını saxlayır

    useEffect(() => {
        getAllCategory().then(res => setData(res));
    }, []);

    // Toggle funksiyası
    const toggleCategory = (index) => {
        setOpenIndexes(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className={`
            fixed top-0 left-0 w-64 h-full bg-white z-[999] shadow-lg transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
            <div className="flex justify-between items-center p-4 border-b">
                <span className="text-[16px] font-bold text-orange-500">Kateqoriyalar</span>
                <button onClick={() => setSidebarOpen(false)} className="text-xl text-gray-600">✕</button>
            </div>
            <div className="overflow-y-auto h-full py-2">
                {data.map((item, i) => (
                    <div className="group" key={i}>
                        <div
                            className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-orange-100 cursor-pointer transition"
                            onClick={() => toggleCategory(i)}
                        >
                            <div className="flex items-center gap-2">
                                <img src={icons[i]} alt="" className="w-5 h-5" />
                                <span className="text-sm">{item.categoryName}</span>
                            </div>
                            {item.subcategory.length > 0 && (
                                <span className="text-sm text-gray-500">{openIndexes[i] ? '▲' : '▼'}</span>
                            )}
                        </div>

                        {/* Subcategory toggle */}
                        {item.subcategory.length > 0 && openIndexes[i] && (
                            <div className="ml-10 space-y-1 text-sm text-gray-600">
                                {item.subcategory.map((elem, index) => (
                                    <Link onClick={() => setSidebarOpen(false)} to={`/category/${elem.id}`} key={elem.id} className="block px-2 py-1 hover:text-orange-500">
                                        {elem.categoryName}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavCategoriesForMobile;
