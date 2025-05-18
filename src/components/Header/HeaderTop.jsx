import React, { useEffect, useState } from 'react';
import logo from "../../assets/images/logo/neptunlogo.png"
import aze from "../../assets/images/headerImages/aze.jpg"
import contact from "../../assets/images/headerImages/contactimg.png"
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getProductsBySearch } from '../../services/api';
import { useNavigate } from 'react-router-dom';


function HeaderTop() {
    const [inpVal, setInpVal] = useState('')
    const [search, setSearch] = useState([])
    useEffect(() => {
        if (inpVal.trim().length > 1) {
            getProductsBySearch(inpVal).then(res => setSearch(res.products.slice(0, 5)))
        }
    }, [inpVal])

    const navigate = useNavigate();
    const handleSearch = () => {
        if (inpVal.trim().length > 1) {
            navigate(`/search/${inpVal}`);
            setInpVal('');
            setSearch([]);
        }
    };

    return (
        <header className="p-4 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 h-auto lg:h-16 ">
                <div className="flex flex-row items-center justify-between gap-4 lg:gap-[30px] lg:w-auto">
                    <Link to={'/'}>
                        <img className='sm:max-w-[250px] w-[100%]' src={logo} alt="logo" />
                    </Link>
                    <div className="sm:w-[50%] flex justify-between">
                        <div>
                            <div className="flex items-center border-1 border-[#FF8300] rounded-full px-3 py-2 bg-white h-[40px] relative w-full max-w-[400px]">
                                <FiSearch className="text-[#FF8300] mr-2" />
                                <input
                                    onChange={(e) => { setInpVal(e.target.value) }}
                                    value={inpVal}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault(); 
                                            handleSearch();    
                                        }
                                    }}
                                    type="text"
                                    placeholder="Məhsulu axtarın"
                                    className="flex-1 lg:w-[300px] outline-none text-gray-600 placeholder-gray-400 bg-transparent h-[36px]"
                                />


                                <button
                                    onClick={handleSearch}
                                    className="bg-[#FF8300] text-white px-4 py-2 rounded-full hover:bg-orange-500 transition absolute right-[-5px]">
                                    Axtar
                                </button>
                                {
                                    inpVal.length > 2 && search.length > 0 &&
                                    <div className='absolute top-[105%] left-0 bg-white min-w-[100%] min-h-[350px] z-99'>
                                        <ul>
                                            {search.map(item => (
                                                <Link
                                                    key={item.id}
                                                    to={`filterle/${item.id}`}
                                                    className='flex text-[12px] h-full gap-[20px] justify-between border-b-[.5px] border-gray-500 px-[10px] py-[5px] hover:bg-gray-100'>
                                                    <div className='w-[25%]'>
                                                        <img className='w-full' src={item.img} alt="photo" />
                                                    </div>
                                                    <div className='w-[70%] flex flex-col'>
                                                        <p>{item.category.categoryName} - {item.name}</p>
                                                        <p className='text-[23px] font-bold'>{item.price}  ₼</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <img className='w-[30px]' src={aze} alt="aze" />
                        <span className="ml-1">Aze</span>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <img className='w-[100px]' src={contact} alt="nomre" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderTop