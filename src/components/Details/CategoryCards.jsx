import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTableCellsLarge, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import CategoryCard from './CategoryCard'
import { getProductsBySubID } from '../../services/api'
import { Pagination } from 'antd'
import { scrollYuxari } from '../../utils/scrollTop'
import { useParams } from 'react-router-dom';



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
    }, [id ,limit, page])
    return (
        <div className='w-[70%] my-[40px]'>
            <div className='flex justify-between gap-[20px]'>
                <div className='text-gray-500 text-[35px] flex gap-[10px]'>
                    <span><FontAwesomeIcon icon={faTableCellsLarge} /></span>
                    <span><FontAwesomeIcon icon={faBars} /></span>
                </div>
                <div className='flex items-start justify-between gap-[30px]'>
                    <div>
                        <span className='text-[14px]'>Sırala: </span>
                        <select className='py-[5px] px-[10px] rounded-[20px] border-1 text-[12px]' name="" id="">
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
                            className='py-[5px]  px-[10px] rounded-[20px] border-1 text-[12px]' name="" id="">
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
            <div className='flex items-center flex-wrap gap-[40px]'>
                {
                    data.map(item => {
                        return <CategoryCard {...item} />
                    })
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