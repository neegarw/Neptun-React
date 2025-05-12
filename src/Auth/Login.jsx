import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AccountSec from './AccountSec'
import { login as postLoginApi } from '../services/api'
import toast from 'react-hot-toast'
import { Cookies } from 'react-cookie'

function Login() {
    const initialObj = {login: '', password: ''}
    const [obj, setObj] = useState(initialObj)
    const cook = new Cookies()
    const navigate = useNavigate()

    function loginOl() {
        postLoginApi(obj).then(res => {
            cook.set('token', res.token)
            cook.set('status', res.status)
            navigate('/user')
        }).catch(error => {
            if (error.status == 400) {
                toast.error('Yanlış şifrə və ya istifadəçi adı')
                setObj(initialObj)
            }
        })
    }

    return (
        <div>
            <Link to="/login">
                <div className="min-h-screen bg-gray-100 p-8 flex flex-col lg:flex-row gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Yeni müştəri</h2>
                        <p className="font-medium mb-2">Hesab qeydiyyatı</p>
                        <p className="text-gray-600 mb-4">Hesab yaradaraq saytın tam funksionallığından istifadə edə bilərsiniz.</p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full py-2 px-6 w-full sm:w-auto">
                            Davam et
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Daimi müştəri</h2>
                        <p className="font-medium mb-2">Mən daimi müştəriyəm</p>

                        <label className="block mb-2 text-gray-700">E-mail ünvanı</label>
                        <input value={obj.login} onChange={(e) => setObj({ ...obj, login: e.target.value })} type="email" className="w-full mb-4 p-2 bg-blue-100 rounded-full" />

                        <label className="block mb-2 text-gray-700">Şifrə</label>
                        <input value={obj.password} onChange={(e) => setObj({ ...obj, password: e.target.value })} type="password" className="w-full mb-2 p-2 bg-blue-100 rounded-full" />

                        <p className="text-sm text-blue-600 hover:underline mb-4 inline-block">Şifrənizi unutmusunuz?</p>
                        <button
                            onClick={loginOl}
                            className="bg-orange-500 ml-3 hover:bg-orange-600 text-white rounded-full font-semibold py-2 px-6 w-full sm:w-auto">
                            Giriş
                        </button>
                    </div>

                    <div className="lg:block w-full lg:w-[300px]">
                        <AccountSec />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Login;
