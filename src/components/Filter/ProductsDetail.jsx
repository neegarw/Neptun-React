import React, { useContext, useEffect, useState } from 'react'
import { getProductsById } from '../../services/api'
import { useParams } from 'react-router-dom'
import ProductDetailSkeleton from './ProductDetailSkeleton'
import { Rate } from 'antd';
import { BASKET } from '../../context/BasketContext';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { WISHLIST } from '../../context/WishContext';
import { FaArrowsRotate } from 'react-icons/fa6';
import captcha from '../../assets/images/captcha.png'

function ProductsDetail() {
    const [data, setData] = useState()
    const { id } = useParams()

    const [count, setCount] = useState(1)
    function incDec(x) {
        if (count + x > 0) setCount(count + x)
    }
    const { addToBasket } = useContext(BASKET)
    const { addWishList } = useContext(WISHLIST)

    useEffect(() => {
        getProductsById(id).then(res => setData(res))
    }, [id])

    if (!data) return <> <ProductDetailSkeleton /> </>

    return (
        <>
            <div className='bg-[#f2f2f2]'>
                <div className='container mx-auto px-3 sm:px-6'>
                    <div className="flex flex-col lg:flex-row p-4 sm:p-6 gap-6">
                        <div className="w-full sm:w-[40%]">
                            <img src={data.img[0]} alt="" className="rounded-xl w-full object-cover" />
                            <div className="flex space-x-2 mt-4 overflow-x-auto">
                                <img src={data.img[0]} className="w-24 h-24 object-cover rounded" alt="photo" />
                                <img src={data.img[0]} className="w-24 h-24 object-cover rounded" />
                            </div>
                        </div>

                        <div className="w-full sm:w-[60%] px-0 lg:px-6 mt-6 lg:mt-0">
                            <h2 className="text-lg sm:text-xl font-bold mb-2">{data.name}</h2>

                            <div className="flex items-center mb-2 space-x-1">
                                <div>
                                    <Rate allowHalf defaultValue={2.5} />
                                </div>
                                <span className="text-sm text-gray-600">0 şərh | Şərh yaz</span>
                            </div>

                            <div className="text-sm text-gray-600 mb-1">Model: <span className="font-semibold">101123</span></div>
                            <div className="text-sm text-gray-600 mb-4">Mövcudluq: <span className="text-green-600 font-semibold">✔</span></div>

                            <div className="text-2xl sm:text-3xl text-orange-500 font-bold mb-4">{data.price} ₼</div>

                            <div className="flex items-center mb-4 flex-wrap gap-2 sm:gap-4">
                                <button
                                    onClick={() => { incDec(-1) }}
                                    className="w-8 h-8 bg-gray-200 rounded-full text-xl">-</button>
                                <span className="px-4">{count}</span>
                                <button
                                    onClick={() => { incDec(1) }}
                                    className="w-8 h-8 bg-gray-200 rounded-full text-xl">+</button>
                                <span className="ml-2">Ədəd</span>
                            </div>

                            <div className="flex items-center flex-wrap gap-3">
                                <button
                                    onClick={() => addToBasket({ ...data, count })}
                                    className="bg-orange-500 text-white px-6 py-2 rounded-full">Səbətə At</button>

                                <div
                                    onClick={() =>
                                        addWishList({
                                            id: data.id,
                                            img: data.img,
                                            name: data.name,
                                            price: data.price,
                                            categoryName: data.categoryName,
                                            count,
                                        })
                                    }
                                    className="text-[19px] px-[12px] group cursor-pointer">
                                    <IoMdHeartEmpty className="text-[#ff8300] text-[23px] group-hover:hidden" />
                                    <IoMdHeart className="hidden text-[#ff8300] text-[23px] group-hover:block" />
                                </div>

                                <span className="group text-[14px]">
                                    <FaArrowsRotate className="text-[#ff8300] text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 sm:p-6 mt-8 rounded-xl">
                        <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">Şərhlər (0)</h2>
                        <p className="text-sm mb-4">Bu məhsul üçün şərh yazılmayıb.</p>

                        <h3 className="text-base sm:text-lg font-semibold mb-2">Şərh yaz</h3>

                        <input type="text" placeholder="Adınız" className="w-full p-3 rounded-full mb-4 bg-gray-50" />
                        <textarea placeholder="Şərh" className="w-full p-4 rounded-xl h-40 resize-y mb-4 bg-gray-50"></textarea>

                        <p className="text-sm text-red-500 mb-2">Qeyd: <span className="text-black">HTML etiketləri işləmir!</span></p>

                        <div><Rate /></div>

                        <input type="text" placeholder="Aşağıdakı kodu daxil edin **" className="w-full p-2 text-[12px] rounded-full mb-4 mt-4 bg-white" />
                        <div className='w-[130px]'>
                            <img src={captcha} alt="captcha" className="mb-4 w-full" />
                        </div>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Davam Et</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsDetail
