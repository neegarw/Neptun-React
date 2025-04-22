import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTableCellsLarge, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd'
import { getProductsBySearch } from '../../services/api';
import { PiSquaresFourFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";



import SearchCard from './SearchCard';

function SearchPage() {
    const { searchValue } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (searchValue) {
            getProductsBySearch(searchValue).then(res => {
                setResults(res.products)
            });
        }
    }, [searchValue]);

    return (
        <>
            <div className='bg-[#f2f2f2]'>
                <div className='py-[30px] px-[20px] container mx-auto'>
                    <div className='flex justify-between gap-[20px] items-center py-[30px]'>
                        <div className='text-gray-500 text-[35px] flex gap-[10px] px-[20px]'>
                            <span className='text-[#ff8300] hover:text-white'><PiSquaresFourFill /></span>
                            <span className='text-[#ff8300] hover:text-white'><IoMenu /></span>
                        </div>
                        <div className='flex items-start justify-between gap-[30px]'>
                            <div>
                                <span className='text-[14px]'>Sırala: </span>
                                <select className='py-[7px] px-[10px] rounded-[20px] border-0 bg-white text-[12px]' name="" id="">
                                    <option className='font-extrabold' value="">Əsas</option>
                                    <option value="">Ad(A-Z)</option>
                                    <option value="">Ad(Z-A)</option>
                                    <option value="">Qiymət(Aşağıdan ᐳ yuxarı)</option>
                                    <option value="">Qiymət(Yuxarı ᐳ aşağı)</option>
                                    <option value="">Reytinq(Yuxarı)</option>
                                    <option value="">Reytinq(Aşağı)</option>
                                    <option value="">Model(A-Z)</option>
                                    <option value="">Model(Z-A)</option>
                                </select>
                            </div>
                            <div>
                                <span className='text-[14px]'>Göstər: </span>
                                <select
                                    onChange={(e) => { setLimit(e.target.value) }}
                                    className='py-[5px]  px-[10px] rounded-[20px] border-0 bg-white text-[12px]' name="" id="">
                                    <option className='font-extrabold' value="12">12</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="75">75</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            <button className='bg-[#FF8300] text-white rounded-[20px] py-[5px] px-[15px] flex gap-1 text-[14px]'>
                                <span className="group">
                                    <FontAwesomeIcon className="text-white transition-transform duration-300 group-hover:rotate-180" icon={faArrowsRotate} />
                                </span>
                                <span>Müqayisə et</span>
                            </button>

                        </div>
                    </div>
                    <div className='flex container mx-auto items-center justify-between flex-wrap gap-[40px]'>
                        {results.map(item => (
                            <SearchCard {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

export default SearchPage;
