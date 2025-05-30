import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsBySearch } from '../../services/api';
import { PiSquaresFourFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import SearchCard from './SearchCard';
import SearchSkeleton from './SearchSkeleton';
import { FaArrowsRotate } from 'react-icons/fa6';

function SearchPage() {
    const { searchValue } = useParams();
    const [results, setResults] = useState();
    const [limit, setLimit] = useState(12);
    const [layout, setLayout] = useState('grid')


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
                    <div className='flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 items-start lg:items-center py-6'>
                        <div className='text-gray-500 text-[35px] flex gap-[10px] px-[20px]'>
                            <span
                                className={`cursor-pointer ${layout === 'grid' ? 'text-[#ff8300]' : 'text-gray-400'}`}
                                onClick={() => setLayout('grid')}
                            >
                                <PiSquaresFourFill />
                            </span>
                            <span
                                className={`cursor-pointer ${layout === 'list' ? 'text-[#ff8300]' : 'text-gray-400'}`}
                                onClick={() => setLayout('list')}
                            >
                                <IoMenu />
                            </span>
                        </div>
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
                                <span className="group flex gap-1">
                                    <FaArrowsRotate
                                        className="text-white transition-transform duration-300 group-hover:rotate-180 text-[18px]"
                                    />
                                    <span>Müqayisə et</span>
                                </span>
                                
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-wrap sm:justify-between justify-center gap-3 py-3'>
                        {results.map(item => (
                            <SearchCard key={item.id} {...item} layout={layout} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
