import React, { useEffect, useState } from 'react';
import { getAllCategory } from '../../services/api';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

function NavCategories({ sidebarOpen }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCategory().then(res => setData(res));
    }, []);

    return (
        <div className={`
            w-[300px]
            bg-white shadow-md z-990
            transition-all duration-300 
            ${sidebarOpen ? 'absolute top-[0px] left-0 lg:hidden' : 'relative hidden lg:block top-[-20px] left-[-10px]'}
        `}>
            {data.map((item, i) => (
                <div className="group relative" key={i}>
                    <div className="flex items-center gap-2 text-bold px-4 py-2 hover:bg-orange-100 cursor-pointer transition">
                        <span className="text-orange-500 text-xl">
                            <img src={icons[i]} alt="" />
                        </span>
                        <span className="font-medium text-[13px] w-[100%] flex justify-between">
                            <span>{item.categoryName}</span>
                            {item.subcategory.length > 0 && <span>›</span>}
                        </span>
                    </div>

                    {item.subcategory.length > 0 && (
                        <div className="absolute top-0 left-full w-72 bg-white shadow-md border-l-2 border-[#FF8300] px-4 py-3 hidden group-hover:block max-h-[200px] overflow-y-auto">
                            <div className="space-y-2">
                                {item.subcategory.map((elem, index) => (
                                    <div key={index} className="forScroll text-[12px] text-gray-700 hover:text-orange-500 cursor-pointer">
                                        <Link to={`/category/${elem.id}`} key={elem.id}>
                                            {elem.categoryName}
                                        </Link>                                    
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default NavCategories;
