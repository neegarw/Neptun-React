import React, { useContext } from 'react'
import { WISHLIST } from '../../context/WishContext'
import { useNavigate } from 'react-router-dom'
import { BASKET } from '../../context/BasketContext'

function Wishlist() {
    const { wish, clearWishList, delWishList } = useContext(WISHLIST)
    const { addToBasket } = useContext(BASKET)
    const navigate = useNavigate()
    function yonlendir(id) {
        navigate('/filterle/' + id)
    }

    return (
        <div className='container flex flex-col lg:flex-row m-auto text-[12px] gap-6 px-4'>
            <div className="p-4 lg:p-6 min-h-screen w-full lg:w-[75%]">
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 items-center'>
                    <h1 className="text-2xl sm:text-3xl font-semibold">Arzu siyahısı</h1>
                    <button onClick={clearWishList} className="bg-[#ff8300] hover:bg-amber-600 px-4 py-2 rounded-full text-white text-sm">
                        Arzularını unut
                    </button>
                </div>

                <div className="overflow-x-auto mt-4 w-full">
                    <div className="w-full">
                        {wish?.map((product, index) => (
                            <div
                                onClick={() => yonlendir(product.id)}
                                key={index}
                                className="w-full hover:bg-gray-100 flex flex-row lg:items-center bg-gray-50 items-center lg:justify-between sm:flex-row mb-4 sm:mb-0 bg-white-300 sm:bg-gray-50 sm:hover::bg-gary-100 rounded-lg sm:rounded-none shadow-sm sm:shadow-none p-4 sm:p-0 my-2"
                            >

                                <div className="py-2 px-0 sm:px-4 flex sm:table-cell items-center gap-4">
                                    <img
                                        src={product.img[0]}
                                        alt={product.name}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <div className="sm:hidden">
                                        <p className="font-semibold">{product.name}</p>
                                        <p className="text-orange-500 text-[15px]">{product.price} ₼</p>
                                    </div>
                                </div>
                                <div className="py-2 px-4 hidden sm:table-cell font-medium">{product.name}</div>
                                <div className='flex gap-[15px'>
                                    <div className="py-2 px-4 hidden sm:table-cell text-orange-500 font-semibold">
                                        {product.price} ₼
                                    </div>
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className="py-2 px-4 mt-2 sm:mt-0"
                                    >
                                        <div className="flex gap-2">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    addToBasket({
                                                        id: product.id,
                                                        img: product.img,
                                                        name: product.name,
                                                        price: product.price,
                                                        categoryName: product.categoryName,
                                                        count: product.count || 1
                                                    })
                                                }}
                                                className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-full"
                                            >
                                                🛒
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    delWishList(product.id)
                                                }}
                                                className="bg-white hover:bg-red-500 px-3 py-1 rounded-full transition"
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-base">
                        Davam et
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md w-full lg:w-[25%] mt-4 lg:mt-0">
                <h3 className="text-lg font-semibold mb-4">Hesab</h3>
                <ul className="space-y-2 text-sm text-gray-800">
                    {[
                        "Giriş / Qeydiyyat",
                        "Şifrənizi unutmusunuz?",
                        "Hesabım",
                        "Ünvan kitabçası",
                        "Arzu siyahısı",
                        "Sifariş tarixçəsi",
                        "Təkrarlanan ödəmələr",
                        "Bonus xalları",
                        "Geri qaytarma",
                        "Əməliyyatlar",
                        "Xəbər bülleteni"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Wishlist
