import React, { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { BASKET } from '../../context/BasketContext';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


function ShoppingList() {
    const [isOpen, setIsOpen] = useState(false);
    const { basketArr, removeFromBasket, clearBasket } = useContext(BASKET);

    const total = basketArr.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2);

    const navigate = useNavigate()
    function yonlendir(id) {
        navigate('/filterle/' + id)
    }

    return (
        <div className="relative">
            <HiOutlineShoppingCart
                onClick={() => setIsOpen(!isOpen)}
                className="text-white cursor-pointer text-[21px]"
            />
            {isOpen && (
                <div className="absolute right-0 top-7 sm:top-9 lg:w-106 w-[330px] bg-white shadow-lg border-t-2 border-[#ff8300] p-4 z-50 text-[12px]">
                    {basketArr.length === 0 ? (
                        <p className="text-center text-gray-500">Səbət boşdur</p>
                    ) : (
                        <>
                            {basketArr.map(item => (
                                <div onClick={(e) => yonlendir(item.id)} key={item.id} className="flex items-center justify-between border-b py-2">
                                    <div className="flex items-center space-x-3">
                                        <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                        <div className='flex flex-row gap-10'>
                                            <div className="text-sm font-normal w-[200px] text-gray-500 hover:text-orange-400">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs">x {item.count}</div>
                                    <div className="flex items-center gap-3">
                                        <div>{(item.price * item.count).toFixed(2)}₼</div>
                                        <FaTrash 
                                        onClick={(e)=> {
                                            e.stopPropagation()
                                            removeFromBasket(item.id)}}
                                        className="text-gray-500 cursor-pointer hover:text-amber-500" />
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-end gap-1 mt-4 m-5 font-semibold">
                                <span className='font-bold'>Ümumi məbləğ:</span>
                                <span>{total}₼</span>
                            </div>

                            <div className="flex justify-between mt-4">
                                <button onClick={clearBasket} className="bg-gray-600 text-white px-4 py-2 rounded-3xl hover:bg-orange-400 transition-all duration-300">
                                    Səbəti təmizlə
                                </button>
                                <button className="bg-[#ff8300] text-white px-4 py-2 rounded-3xl hover:bg-orange-600 transition-all duration-300">
                                    Sifarişi rəsmiləşdir
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default ShoppingList;
