import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { faArrowsRotate, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { WISHLIST } from '../../context/WishContext';


function CategoryCard({id, img, name, price, categoryName }) {
    const [hovered, setHovered] = useState(false);

    if (!img || !Array.isArray(img) || img.length === 0) {
        return <p>No image available</p>; 
    }
    const {addWishList} = useContext(WISHLIST)

    return (
        <div>
            <div className="w-[200px] min-h-[400px] p-2 shadow-lg rounded-md bg-white text-center">
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
                    <span className="text-[14px]" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <FontAwesomeIcon 
                        onClick={(e)=> {
                         e.preventDefault()
                         addWishList({id, img, name, price, categoryName })
                        }}  
                        className="text-[#FF8300]" icon={hovered ? solidHeart : regularHeart} />
                    </span>
                    <span  className="group text-[14px]">
                        <FontAwesomeIcon className="text-[#ff8300] transition-transform duration-300 group-hover:rotate-180" icon={faArrowsRotate} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard