import React from 'react';
import AccountSec from './AccountSec';

function Registration() {
    
    return (
        <div>

            <div className="max-w-6xl mx-auto px-4 py-10">
                <nav className="text-sm text-gray-500 mb-4">
                    <span className="hover:underline cursor-pointer">Ana Səhifə</span> /{" "}
                    <span className="hover:underline cursor-pointer">Hesab</span> /{" "}
                    <span className="text-black font-medium">Qeydiyyat</span>
                </nav>

                <h1 className="text-3xl font-bold mb-2">Hesab qeydiyyatı</h1>
                <p className="text-gray-600 mb-6">
                    Əgər artıq hesabınızı yaratmışsınızsa, giriş səhifəsinə keçin.
                </p>

                <div className="flex flex-col lg:flex-row gap-10">
                    <form className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Şəxsi məlumatlar</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Ad</label>
                                    <input
                                        type="text"
                                        placeholder="Ad"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">E-mail</label>
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Telefon</label>
                                    <input
                                        type="tel"
                                        placeholder="055 555 55 55"
                                        className="w-full border border-gray-300 bg-blue-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Şifrə</h2>
                            <div>
                                <label className="block text-sm font-medium mb-1">Şifrə</label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 bg-blue-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Xəbər bülleteni</h2>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm">Abunə ol</span>
                                <label className="flex items-center space-x-1">
                                    <input type="radio" name="newsletter" className="accent-orange-500" />
                                    <span>Bəli</span>
                                </label>
                                <label className="flex items-center space-x-1">
                                    <input type="radio" name="newsletter" className="accent-orange-500" defaultChecked />
                                    <span>Xeyr</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <label className="text-sm flex items-center space-x-2">
                                <input type="checkbox" className="accent-orange-500" />
                                <span>
                                    Mən <span className="font-semibold">Qaydalar</span>-ı oxudum və razıyam
                                </span>
                            </label>
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all"
                            >
                                Davam et
                            </button>
                        </div>
                    </form>

                    <div className="w-full lg:w-[300px]">
                        <AccountSec/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Registration;
