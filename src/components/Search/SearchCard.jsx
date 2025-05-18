import React, { useContext, useState } from 'react'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import { BASKET } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
import { WISHLIST } from '../../context/WishContext';
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

function SearchCard({ img, name, price, id, layout }) {

    const { addToBasket } = useContext(BASKET)
    const { addWishList } = useContext(WISHLIST)
    const [count, setCount] = useState(1)
    function incDec(x) {
        if (count + x > 0) setCount(count + x)
    }
    return (
        <>
            <Link
                to={'/filterle/' + id}
                className={`group/card p-4 rounded-[10px] bg-white shadow-md ${layout === 'list' ? 'flex  w-full min-h-[220px] gap-[20px]' : 'w-[230px] text-center'}`}
            >
                <img className={`${layout === 'list' ? 'w-[30%] sm:w-auto h-[200px] object-contain' : 'w-full'}`} src={img} alt="Product" />
                <div className={`${layout === 'list' ? 'w-[70%]' : 'w-full'} flex flex-col ${layout === 'list' ? 'items-start justify-start' : 'items-center'}`}>
                    <h2 className="text-[14px] font-semibold h-[45px] group-hover/card:text-[#FF8300] transition-colors duration-200">{name}</h2>
                    {
                        layout === 'list' && (
                            <span className='py-1'><Rate character={<HeartOutlined />} allowHalf /></span>
                        )
                    }
                    <h3 className="text-xl my-[10px]">{price} ₼</h3>
                    <div className="flex items-center gap-2 justify-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                incDec(-1)
                            }}
                            className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">-</button>
                        <span className="text-sm">{count} ədəd</span>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                incDec(1)
                            }}
                            className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">+</button>
                    </div>
                    <div className='flex items-center justify-between gap-3 my-[10px]'>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addToBasket({ img, name, price, id, count })
                            }}
                            className="py-[5px] px-[20px] bg-[#FF8300] text-white rounded-[20px] text-[12px]">Səbətə at</button>

                        <span className="text-[19px]">
                            <div
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    addWishList({ img, name, price, id })
                                }}
                                className="group/wishlist cursor-pointer">
                                <IoMdHeartEmpty className="text-[#FF8300] text-[23px] group-hover/wishlist:hidden" />
                                <IoMdHeart className="hidden text-[#FF8300] text-[23px] group-hover/wishlist:block" />
                            </div>
                        </span>

                        <span className="group/refresh">
                            <FaArrowsRotate className="text-[#ff8300] text-[18px] transition-transform duration-300 group-hover/refresh:rotate-180" />
                        </span>
                    </div>
                </div>
            </Link>


        </>
    )
}

export default SearchCard