import React, { useContext, useState } from 'react'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import { BASKET } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
import { WISHLIST } from '../../context/WishContext';

function SearchCard({ img, name, price, id }) {

    const { addToBasket } = useContext(BASKET)
    const { addWishList } = useContext(WISHLIST)
    const [count, setCount] = useState(1)
        function incDec(x){
            if(count + x > 0) setCount(count +x)
        }
    return (
        <>
            <Link to={'/filterle/' + id} className="w-[230px] min-h-[400px] p-4 shadow-lg rounded-md bg-white text-center">
                <img className="w-full h-auto" src={img} alt="Product" />
                <h2 className="text-[13px] font-semibold h-[45px]">{name}</h2>
                <h3 className="text-xl my-[15px]">{price} ₼</h3>
                <div className="flex items-center gap-2 mt-4 justify-center">
                    <button 
                    onClick={(e)=>{
                        e.preventDefault()
                        incDec(-1)
                    }} 
                    className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">-</button>
                    <span className="text-sm">{count} ədəd</span>
                    <button 
                    onClick={(e)=>{
                        e.preventDefault()
                        incDec(1)
                    }} 
                    className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">+</button>
                </div>
                <div className='flex items-center justify-between w-[80%] mx-auto my-[10px]'>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addToBasket({ img, name, price, id, count })
                        }}
                        className="py-[5px] px-[20px] bg-[#FF8300] text-white rounded-[20px] text-[12px]">Səbətə at</button>
                    <span className="text-[19px]">
                        <div 
                        onClick={(e)=>{
                            e.preventDefault()
                            e.stopPropagation()
                            addWishList({ img, name, price, id })
                        }}
                        className="group cursor-pointer">
                            <IoMdHeartEmpty className="text-[#FF8300] text-[23px] group-hover:hidden" />
                            <IoMdHeart className="hidden text-[#FF8300] text-[23px] group-hover:block" />
                        </div>                    
                    </span>
                    <span className="group">
                        <FaArrowsRotate className="text-[#ff8300] text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                </div>
            </Link>
        </>
    )
}

export default SearchCard