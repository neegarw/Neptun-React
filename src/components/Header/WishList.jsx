import React from 'react'

function Wishlist() {
    const products = [
        {
            img: "https://via.placeholder.com/60x60?text=Limon",
            name: "MVT.LIMON TURK EDED",
            model: "079176",
            stock: "Anbarda",
            price: "0.25₼",
        },
        {
            img: "https://via.placeholder.com/60x60?text=Nar",
            name: "MVT.NAR KG",
            model: "075908",
            stock: "Anbarda",
            price: "1.45₼",
        },
        {
            img: "https://via.placeholder.com/60x60?text=Alma",
            name: "MVT.ALMA UCUZ N1",
            model: "079447",
            stock: "B наличи",
            price: "1.50₼",
        },
    ];
    return (
        <div className='container flex flex-row m-auto text-[12px]'>
            <div className="p-6 min-h-screen">
                <h1 className="text-3xl font-semibold mb-6">Arzu siyahısı</h1>
                <div className="overflow-x-auto w-[800px]">
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-3 px-4 text-left">Şəkil</th>
                                <th className="py-3 px-4 text-left">Məhsulun adı</th>
                                <th className="py-3 px-4 text-left">Model</th>
                                <th className="py-3 px-4 text-left">Anbar</th>
                                <th className="py-3 px-4 text-left">Qiyməti</th>
                                <th className="py-3 px-4 text-left">Hərəkət</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-4">
                                        <img src={product.img} alt={product.name} className="w-14 h-14 object-cover" />
                                    </td>
                                    <td className="py-2 px-4 font-medium">{product.name}</td>
                                    <td className="py-2 px-4">{product.model}</td>
                                    <td className="py-2 px-4">{product.stock}</td>
                                    <td className="py-2 px-4 text-orange-500 font-semibold">{product.price}</td>
                                    <td className="py-2 px-4 flex gap-2">
                                        <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-full">
                                            🛒
                                        </button>
                                        <button className="bg-red-400 hover:bg-white  px-3 py-1 rounded-full">
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg">
                        Davam et
                    </button>
                </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/4 mt-10 h-[500px]">
                <h3 className="text-lg font-semibold mb-4">Hesab</h3>
                <ul className="space-y-2 text-sm text-gray-800">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Giriş / Qeydiyyat
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Şifrənizi unutmusunuz?
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Hesabım
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Ünvan kitabçası
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Arzu siyahısı
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Sifariş tarixçəsi
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Təkrarlanan ödəmələr
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Bonus xalları
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Geri qaytarma
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Əməliyyatlar
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Xəbər bülleteni
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Wishlist