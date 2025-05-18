import React, { useContext, useState } from 'react'
import { WISHLIST } from '../../context/WishContext';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import { BASKET } from '../../context/BasketContext';
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';


function CategoryCard({ id, img, name, price, categoryName, layout }) {
    const [hovered, setHovered] = useState(false);
    const [count, setCount] = useState(1)

    const { addWishList } = useContext(WISHLIST)
    const { addToBasket } = useContext(BASKET)

    function incDec(x) {
        if (count + x > 0) setCount(count + x)
    }

    if (!img || !Array.isArray(img) || img.length === 0) {
        return <p>No image available</p>;
    }

    return (
        <div>
            <div className={`p-4 rounded-[10px] bg-white shadow-md ${layout === 'list' ? 'flex gap-[20px] w-full' : 'w-[200px] text-center'}`}>
                <img className={`${layout === 'list' ? 'w-[30%]' : 'w-full'} h-auto`} src={img} alt="Product" />

                <div className={`${layout === 'list' ? 'w-[70%]' : 'w-full'} flex flex-col ${layout === 'list' ? 'items-start' : 'items-center'}`}>
                    <h2 className="text-[13px] font-semibold h-[45px]">{name}</h2>

                    {layout === 'list' && (
                        <span><Rate character={<HeartOutlined />} allowHalf /></span>
                    )}

                    <h3 className="text-xl my-[15px]">{price} ₼</h3>

                    <div className="flex items-center gap-2 mt-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                incDec(-1)
                            }}
                            className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">-</button>

                        <span className="text-sm w-[50px] text-center">{count} ədəd</span>

                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                incDec(1)
                            }}
                            className="px-2 py-1 text-[#FF8300] font-bold text-[20px]">+</button>
                    </div>

                    <div className={`flex gap-2 items-center my-[10px] ${layout === 'list' ? 'w-[30%]' : 'w-full justify-around'}`}>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                addToBasket({ id, img, name, price, categoryName, count })
                            }}
                            className="py-[5px] px-[10px] bg-[#FF8300] text-white rounded-[20px] text-[14px]">Səbətə at
                        </button>

                        <span
                            className="text-[14px]"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <div className="group cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault()
                                    addWishList({ id, img, name, price, categoryName })
                                }}>
                                <IoMdHeartEmpty className="text-[#FF8300] text-[23px] group-hover:hidden" />
                                <IoMdHeart className="hidden text-[#FF8300] text-[23px] group-hover:block" />
                            </div>
                        </span>

                        <span className="group text-[14px]">
                            <FaArrowsRotate className="text-[#ff8300] text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
