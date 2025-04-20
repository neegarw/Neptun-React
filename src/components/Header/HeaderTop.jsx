import React from 'react';
import logo from "../../assets/images/logo/neptunlogo.png"
import aze from "../../assets/images/headerImages/aze.jpg"
import contact from "../../assets/images/headerImages/contactimg.png"
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function HeaderTop() {
    return (
        <header className="p-4 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 h-auto lg:h-16 ">
                <div className="flex flex-row items-center justify-between gap-4 lg:gap-[30px] lg:w-auto">
                    <Link to={'/'}>
                        <img className='sm:max-w-[250px] w-[100%]' src={logo} alt="logo" />
                    </Link>
                    <div className="sm:w-[50%] flex justify-between">
                        <div>
                            <div className="flex items-center border-2 border-[#FF8300] rounded-full px-3 py-2 bg-white h-[40px] relative w-full max-w-[400px]">
                                <FiSearch className="text-[#FF8300] mr-2" />
                                <input
                                    type="text"
                                    placeholder="Məhsulu axtarın"
                                    className="flex-1 outline-none text-gray-600 placeholder-gray-400 bg-transparent h-[36px]"
                                />
                                <button className="bg-[#FF8300] text-white px-4 py-1.5 rounded-full hover:bg-orange-500 transition absolute right-0">
                                    Axtar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <img className='w-[30px]' src={aze} alt="aze" />
                        <span className="ml-1">Aze</span>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <img className='w-[100px]' src={contact} alt="nomre" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderTop