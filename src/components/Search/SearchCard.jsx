import React from 'react'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";

function SearchCard({ img, name, price }) {

    return (
        <>
            <div className="w-[230px] min-h-[400px] p-4 shadow-lg rounded-md bg-white text-center">
                <img className="w-full h-auto" src={img} alt="Product" />
                <h2 className="text-[13px] font-semibold h-[45px]">{name}</h2>
                <h3 className="text-xl my-[15px]">{price} ₼</h3>
                <div className="flex items-center gap-2 mt-4 justify-center">
                    <button className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">-</button>
                    <span className="text-sm">1 ədəd</span>
                    <button className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">+</button>
                </div>
                <div className='flex items-center justify-between w-[80%] mx-auto my-[10px]'>
                    <button className="py-[5px] px-[20px] bg-[#FF8300] text-white rounded-[20px] text-[12px]">Səbətə at</button>
                    <span className="text-[19px]">
                        <div className="group cursor-pointer">
                            <IoMdHeartEmpty className="text-[#FF8300] text-[23px] group-hover:hidden" />
                            <IoMdHeart className="hidden text-[#FF8300] text-[23px] group-hover:block" />
                        </div>                    </span>
                    <span className="group">
                        <FaArrowsRotate className="text-[#ff8300] text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchCard