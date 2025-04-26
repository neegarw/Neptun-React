import React from 'react';
import { ChevronDown } from "lucide-react";

function HeaderNavForMobile({ sidebarOpen, setSidebarOpen }) {
    return (
        <>
            {sidebarOpen && (
                <div 
                    className="fixed z-40" 
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
                sidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="p-4 space-y-2 overflow-y-auto max-h-[100vh]">
                <button onClick={() => setSidebarOpen(false)} className="text-xl text-gray-600 flex w-[100%] justify-end">✕</button>
                    <a href="#" className="block text-sm text-gray-700 font-medium py-1">Ana Səhifə</a>
                    <details>
                        <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                            Haqqımızda <ChevronDown className="h-4 w-4" />
                        </summary>
                        <div className="pl-4 mt-1 space-y-1 text-[12px]">
                            <a href="#" className="block">Siyasətimiz</a>
                            <a href="#" className="block">Yeniliklər</a>
                        </div>
                    </details>

                    <details>
                        <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                            Aksiyalar <ChevronDown className="h-4 w-4" />
                        </summary>
                        <div className="pl-4 mt-1 space-y-1 text-[12px]">
                            <a href="#" className="block">Kampaniyalar</a>
                            <a href="#" className="block">Neptun bonus kart</a>
                            <a href="#" className="block">Elektron kataloq</a>
                        </div>
                    </details>

                    <details>
                        <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                            Supermarketlər <ChevronDown className="h-4 w-4" />
                        </summary>
                        <div className="pl-4 mt-1 space-y-1 text-[12px]">
                            <a href="#" className="block">Mağazalarımız</a>
                            <a href="#" className="block">İrad və təkliflər</a>
                            <a href="#" className="block">Alıcıların nəzərinə</a>
                            <a href="#" className="block">Partnyorluq</a>
                            <a href="#" className="block">Supermarketdə reklam</a>
                        </div>
                    </details>

                    <details>
                        <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                            Karyera <ChevronDown className="h-4 w-4" />
                        </summary>
                        <div className="pl-4 mt-1 space-y-1 text-[12px]">
                            <a href="#" className="block">İşə qəbul proseduru</a>
                            <a href="#" className="block">Vakansiyalar</a>
                            <a href="#" className="block">CV yerləşdirin</a>
                        </div>
                    </details>
                    <a href="#" className="block text-sm text-gray-700 font-medium py-1">Əlaqə</a>   
                </div>
            </div>
        </>
    );
}

export default HeaderNavForMobile;
