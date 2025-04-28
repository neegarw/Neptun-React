import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { getProductsBySubID } from '../../services/api'
import { Pagination } from 'antd'
import { scrollYuxari } from '../../utils/scrollTop'
import { Link, useParams } from 'react-router-dom';
import { PiSquaresFourFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";




function CategoryCards() {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(12)
    const [obj, setObj] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getProductsBySubID(id, limit, page).then(mehsul => {
            setObj(mehsul)
            setData(mehsul.products)
        }
        )
    }, [id, limit, page])
    return (
        <div className='w-[76%] my-[40px]'>
            <div className='flex justify-between gap-[20px] items-center'>
                <div className='text-gray-500 text-[35px] flex gap-[10px] px-[20px]'>
                    <span className='text-[#ff8300] hover:text-white'><PiSquaresFourFill /></span>
                    <span className='text-[#ff8300] hover:text-white'><IoMenu /></span>
                </div>
                <div className='flex items-start justify-between gap-[30px] py-[20px]'>
                    <div>
                        <span className='text-[14px]'>Sırala: </span>
                        <select className='py-[7px] px-[10px] rounded-[20px] bg-white text-[12px]' name="" id="">
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
                            className='py-[7px]  px-[10px] rounded-[20px] bg-white text-[12px]' name="" id="">
                            <option className='font-extrabold' value="12">12</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <button className='bg-[#FF8300] text-white rounded-[20px] py-[5px] px-[15px] flex gap-1 text-[14px]'>
                        <span className="group">
                            <FaArrowsRotate
                                className="text-white transition-transform duration-300 group-hover:rotate-180 text-[18px]"
                            />
                        </span>
                        <span>Müqayisə et</span>
                    </button>

                </div>
            </div>
            <div className='flex items-center flex-wrap gap-[20px] justify-between'>
                {
                    data.map(item => (
                        <Link to={`/filterle/${item.id}`}>
                            <CategoryCard {...item} />
                        </Link>
                    ))
                }
            </div>
            <div className='my-[30px]'>
                <Pagination
                    onChange={(cur) => {
                        setPage(cur);
                        scrollYuxari()
                    }}
                    total={obj?.totalProducts}
                    current={obj?.currentPage}
                    defaultPageSize={limit} />
            </div>
        </div>
    )
}

export default CategoryCards