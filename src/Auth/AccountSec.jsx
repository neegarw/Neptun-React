import React from 'react';
import { Link } from 'react-router-dom';

function AccountSec() {
    return (
        <div className="block bg-white border border-gray-200 rounded-lg p-4 w-full h-auto shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Hesab</h2>
            <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <Link to="/registration" className="hover:text-orange-500">
                        Giriş / Qeydiyyat
                    </Link>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Şifrənizi unutmusunuz?</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Hesabım</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Ünvan kitabçası</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Arzu siyahısı</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Sifariş tarixçəsi</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Təkrarlanan ödəmələr</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Bonus xalları</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Geri qaytarma</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Əməliyyatlar</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span>Xəbər bülleteni</span>
                </li>
            </ul>
        </div>
    );
}

export default AccountSec;
