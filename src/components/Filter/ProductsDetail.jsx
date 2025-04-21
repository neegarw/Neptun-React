import React from 'react'

function ProductsDetail({ img, name, price }) {    
    console.log(img, name, price );
    
    return (
        <div className='container mx-auto'>
            <div className="flex bg-gray-100 p-6">
                <div className="w-1.5/2">
                    <img src={img} alt="" className="rounded-xl w-full object-cover" />
                    <div className="flex space-x-2 mt-4">
                        <img src={img} className="w-24 h-24 object-cover rounded" alt="photo" />
                        <img src={img} className="w-24 h-24 object-cover rounded" />
                    </div>
                </div>

                <div className="w-1/2 px-6">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>

                    <div className="flex items-center mb-2 space-x-1">
                        <div className="flex text-orange-500 text-2xl">
                            ★★★★★
                        </div>
                        <span className="text-sm text-gray-600">0 şərh | Şərh yaz</span>
                    </div>

                    <div className="text-sm text-gray-600 mb-1">Model: <span className="font-semibold">101123</span></div>
                    <div className="text-sm text-gray-600 mb-4">Mövcudluq: <span className="text-green-600 font-semibold">✔</span></div>

                    <div className="text-3xl text-orange-500 font-bold mb-4">{price}</div>

                    <div className="flex items-center mb-4">
                        <button className="w-8 h-8 bg-gray-200 rounded-full text-xl">-</button>
                        <span className="px-4">1</span>
                        <button className="w-8 h-8 bg-gray-200 rounded-full text-xl">+</button>
                        <span className="ml-2">Ədəd</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Səbətə At</button>
                        <button className="text-orange-500 text-2xl">♡</button>
                        <button className="text-orange-500 text-2xl">↻</button>
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

                <div className="flex space-x-1 text-orange-500 text-2xl mb-4">
                    ★★★★★
                </div>

                <input type="text" placeholder="Aşağıdakı kodu daxil edin **" className="w-full p-3 rounded-full mb-4" />

                <img src="captcha.png" alt="captcha" className="mb-4" />

                <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Davam Et</button>
            </div>

        </div>
    )
}

export default ProductsDetail