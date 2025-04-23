import React from 'react'
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ShoppingList() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { id: 1, name: 'CER.PAPAYA QURUSU KG', quantity: 1, price: 11.5, img: 'img1.jpg' },
        { id: 2, name: 'CER.MANQO QURUSU KG', quantity: 1, price: 16.9, img: 'img2.jpg' },
        { id: 3, name: 'CER.ARMUD QURUSU KG', quantity: 1, price: 10.2, img: 'img3.jpg' },
    ];

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return ( 
        <div className="relative">
            <FontAwesomeIcon  onClick={() => setIsOpen(!isOpen)} className="text-white" icon={faCartShopping} />

            {
        isOpen && (
            <div className="absolute right-0 top-12 w-106 bg-white shadow-lg rounded-lg p-4 z-50  text-[12px]">
                {items.map(item => (
                    <div key={item.id} className="flex items-center justify-between border-b py-2">
                        <div className="flex items-center space-x-3">
                            <img src={item.img} alt="smcm" className="w-12 h-12 object-cover rounded" />
                            <div className='flex flex-row gap-10'>
                                <div className="text-sm font-normal w-[200px]  text-gray-500 hover:text-orange-400">{item.name}</div>
                                <div className="text-xs">x {item.quantity}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>{item.price.toFixed(2)}₼</div>
                            <FaTrash className="text-gray-500 cursor-pointer hover:text-amber-500" />
                        </div>
                    </div>
                ))}

                <div className="flex justify-end gap-1 mt-4 m-5 font-semibold">
                    <span className='font-bold'>Ümumi məbləğ:</span>
                    <span>{total}₼</span>
                </div>

                <div className="flex justify-between mt-4">
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-3xl hover:bg-orange-400 transition-all duration-300 ">Səbət</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-3xl hover:bg-orange-600 transition-all duration-300 ">Sifarişi rəsmiləşdir</button>
                </div>
            </div>
        )
    }
        </div >
    );
}

export default ShoppingList