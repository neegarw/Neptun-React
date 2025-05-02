import React, { useContext, useEffect, useState } from 'react'
import { getProductsById } from '../../services/api'
import { useParams } from 'react-router-dom'
import ProductDetailSkeleton from './ProductDetailSkeleton'
import { Rate } from 'antd';
import { BASKET } from '../../context/BasketContext';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { WISHLIST } from '../../context/WishContext';


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
                <div className='container mx-auto'>
                    <div className="flex p-6">
                        <div className="w-1.5/2">
                            <img src={data.img[0]} alt="" className="rounded-xl w-full object-cover" />
                            <div className="flex space-x-2 mt-4">
                                <img src={data.img[0]} className="w-24 h-24 object-cover rounded" alt="photo" />
                                <img src={data.img[0]} className="w-24 h-24 object-cover rounded" />
                            </div>
                        </div>

                        <div className="w-1/2 px-6">
                            <h2 className="text-xl font-bold mb-2">{data.name}</h2>

                            <div className="flex items-center mb-2 space-x-1">
                                <div>
                                    <Rate allowHalf defaultValue={2.5} />
                                </div>
                                <span className="text-sm text-gray-600">0 şərh | Şərh yaz</span>
                            </div>

                            <div className="text-sm text-gray-600 mb-1">Model: <span className="font-semibold">101123</span></div>
                            <div className="text-sm text-gray-600 mb-4">Mövcudluq: <span className="text-green-600 font-semibold">✔</span></div>

                            <div className="text-3xl text-orange-500 font-bold mb-4">{data.price}</div>

                            <div className="flex items-center mb-4">
                                <button
                                    onClick={() => { incDec(-1) }}
                                    className="w-8 h-8 bg-gray-200 rounded-full text-xl">-</button>
                                <span className="px-4">{count}</span>
                                <button
                                    onClick={() => { incDec(1) }}
                                    className="w-8 h-8 bg-gray-200 rounded-full text-xl">+</button>
                                <span className="ml-2">Ədəd</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => addToBasket({...data, count})}
                                    className="bg-orange-500 text-white px-6 py-2 rounded-full">Səbətə At</button>
                                <div
                                    onClick={() => addWishList({ id, img, name, price, categoryName, count })}
                                    className="text-[19px] px-[12px] group cursor-pointer">
                                    <IoMdHeartEmpty className="text-[#ff8300] text-[23px] group-hover:hidden" />
                                    <IoMdHeart className="hidden text-[#ff8300] text-[23px] group-hover:block" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 mt-8">
                        <h2 className="text-xl font-bold text-orange-600 mb-2">Şərhlər (0)</h2>
                        <p className="text-sm mb-4">Bu məhsul üçün şərh yazılmayıb.</p>

                        <h3 className="text-lg font-semibold mb-2">Şərh yaz</h3>

                        <input type="text" placeholder="Adınız" className="w-full p-3 rounded-full mb-4  bg-gray-50" />
                        <textarea placeholder="Şərh" className="w-full p-4 rounded-xl h-40 resize-y mb-4 bg-gray-50"></textarea>

                        <p className="text-sm text-red-500 mb-2">Qeyd: <span className="text-black">HTML etiketləri işləmir!</span></p>

                        <div>
                            <Rate />
                        </div>

                        <input type="text" placeholder="Aşağıdakı kodu daxil edin **" className="w-full p-3 rounded-full mb-4" />

                        <img src="captcha.png" alt="captcha" className="mb-4" />

                        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Davam Et</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default ProductsDetail