import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { getProductsBySearch } from '../../services/api';
import { PiSquaresFourFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import SearchCard from './SearchCard';
import SearchSkeleton from './SearchSkeleton';

function SearchPage() {
    const { searchValue } = useParams();
    const [results, setResults] = useState();
    const [limit, setLimit] = useState(12); // limit əlavə edildi

    useEffect(() => {
        if (searchValue) {
            getProductsBySearch(searchValue).then(res => {
                setResults(res.products)
            });
        }
    }, [searchValue])

    if (!results) return <> <SearchSkeleton /> </>

    return (
        <>
            <div className='bg-[#f2f2f2]'>
                <div className='py-6 px-4 sm:px-6 lg:px-8 container mx-auto'>
                    {/* Top filter section */}
                    <div className='flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 items-start lg:items-center py-6'>
                        {/* Icons */}
                        <div className='text-gray-500 text-2xl sm:text-3xl flex gap-3 px-0 lg:px-4'>
                            <span className='text-[#ff8300] hover:text-white'><PiSquaresFourFill /></span>
                            <span className='text-[#ff8300] hover:text-white'><IoMenu /></span>
                        </div>

                        {/* Filters */}
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6'>
                            <div>
                                <span className='text-sm'>Sırala: </span>
                                <select className='py-2 px-3 rounded-full border-0 bg-white text-xs'>
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
                                <span className='text-sm'>Göstər: </span>
                                <select
                                    onChange={(e) => { setLimit(e.target.value) }}
                                    className='py-2 px-3 rounded-full border-0 bg-white text-xs'>
                                    <option className='font-extrabold' value="12">12</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="75">75</option>
                                    <option value="100">100</option>
                                </select>
                            </div>

                            <button className='bg-[#FF8300] text-white rounded-full py-2 px-4 flex items-center gap-2 text-sm'>
                                <span className="group relative">
                                    <IoMdHeartEmpty className="text-white text-lg group-hover:hidden" />
                                    <IoMdHeart className="hidden text-white text-lg group-hover:block" />
                                </span>
                                <span>Müqayisə et</span>
                            </button>
                        </div>
                    </div>

                    {/* Product cards */}
                    <div className='flex flex-wrap justify-between sm:justify-start gap-4 py-3'>
                        {results.map(item => (
                            <SearchCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
