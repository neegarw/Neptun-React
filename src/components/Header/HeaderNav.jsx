import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { FaLock } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart, IoIosArrowDown } from "react-icons/io";
import NavCategoriesForMobile from "./NavCategoriesForMobile";
import NavCategories from "./NavCategories";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import ShoppingList from "./ShoppingList";
import HeaderNavForMobile from "./HeaderNavForMobile";
import { FaArrowsRotate } from "react-icons/fa6";



function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarOpen2, setSidebarOpen2] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const toggleSidebar2 = () => setSidebarOpen2(!sidebarOpen2);
    const { location } = useLocation()
    return (
        <div>
            <header className="bg-[#FF8300] py-[10px] mt-[10px] sticky top-0 z-50 px-[10px] shadow-[0_6px_12px_rgba(0,0,0,0.2)]">
                <div className="mx-auto flex container justify-between items-center">
                    <div className="flex justify-between gap-[50px] px-[17px] container mx-auto pt-[40px] ">
                        <div className="absolute">
                            <NavCategories />
                        </div>
                        <nav className="hidden xl:flex space-x-6 items-center justify-end">
                            <div className="w-[250px]"></div>
                            <a href="#" className="transition text-[12px] text-white font-bold whitespace-nowrap">Ana Səhifə</a>
                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Haqqımızda
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-40 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100">Siyasətimiz</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100">Yeniliklər</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Aksiyalar
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-40 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Kampaniyalar</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Neptun bonus kart</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Elektron kataloq</a>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Supermarketlər
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-52 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Mağazalarımız</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">İrad və təkliflər</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Alıcıların nəzərinə</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Partnyorluq</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Supermarketdə reklam</a>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Karyera
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-48 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">İşə qəbul proseduru</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Vakansiyalar</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">CV yerləşdirin</a>
                                </div>
                            </div>
                            <a href="#" className="transition text-[12px] text-white font-bold">Əlaqə</a>
                        </nav>
                        <div className="flex items-center justify-between w-full mx-0">
                            <div className="flex xl:hidden">
                                <span className="text-[20px] text-white" onClick={() => setSidebarOpen(true)}>
                                    <HiMenuAlt2 />
                                </span>
                            </div>
                            {sidebarOpen && <NavCategoriesForMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                            <div className="flex items-center">
                                <div className="flex items-center">
                                </div>
                                <div className="text-[12px] font-bold flex items-center border-r border-white pr-[12px]">
                                    <FaLock className="text-white" />
                                    <span className="text-white ml-[5px]">Giriş</span>
                                </div>

                                <div className="relative group mx-3">
                                    <button className="flex items-center text-[12px] text-white font-bold transition">
                                        <span className="hidden sm:flex">Hesabım</span>
                                        <span className="flex sm:hidden"></span>
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-48 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Hesabım</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Əməliyyatlar</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Yükləmələr</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Sifarişi rəsmiləşdir</a>
                                    </div>
                                </div>

                                <Link to={'/wishlist'} className="text-[19px] px-[12px] group cursor-pointer">
                                    <IoMdHeartEmpty className="text-white text-[23px] group-hover:hidden" />
                                    <IoMdHeart className="hidden text-white text-[23px] group-hover:block" />
                                </Link>
                                <span className="text-[19px] px-[12px] transition-transform duration-300 hover:rotate-180">
                                    <FaArrowsRotate className="text-white text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                                </span>
                                <span className="text-[19px] px-[12px]">
                                    <ShoppingList />
                                </span>
                            </div>
                        </div>
                    </div>
                    <button onClick={toggleSidebar2} className="flex xl:hidden">
                        <Menu className="h-6 w-6 text-white" />
                    </button>
                </div>
                <HeaderNavForMobile sidebarOpen={sidebarOpen2} setSidebarOpen={setSidebarOpen2} />
            </header>
        </div>
    );
}

export default HeaderNav;
