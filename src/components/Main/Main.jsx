import React from 'react'
import Slider from './Slider'
import { useEffect } from 'react'
import { getAllProducts, getProdByCategory, getProdByDiscounted, getProdByPopular } from '../../services/api'
import { useState } from 'react'
import Brands from './Brands'
import MainCategorySlider from './MainCategorySlider'
import MainTop from './MainTop'

function Main() {
    const [discProd, setDicsProd] = useState()
    const [popProd, setPopProd] = useState()
    const [sirniyyat, setSirniyyat] = useState()
    const [product, setProduct] = useState()

    useEffect(() => {
        getProdByDiscounted().then(meh => setDicsProd(meh))
        getProdByPopular().then(meh => setPopProd(meh))
        getProdByCategory(7).then(meh => setSirniyyat(meh))
        getAllProducts().then(meh => setProduct(meh))
    }, [])

    return (
        <div className='bg-[#F2F2F2]'>
            <div className='lg:max-w-[1200px] my-0 mx-auto'>
                <div className='bg-[#F2F2F2]'>
                    <MainTop />
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-[10px] py-[50px] px-4 sm:px-0'>
                    <div className='w-full lg:w-[32%]'>
                        <MainCategorySlider />
                    </div>
                    <div className='w-full lg:w-[68%]'>
                        <Slider data={sirniyyat} slidesPerView={4} />
                    </div>
                </div>
                <div className='mb-[100px]'>
                    <div className='flex justify-between items-center'>
                        <h4 className=' font-bold text-[#222] mb-[10px] text-[14px]'>Endirimli məhsullar</h4>
                        <h5 className='text-[#FF8203] mb-[10px] text-[14px]'><a href="#">Hamısına bax</a></h5>
                    </div>
                    <Slider data={discProd} discount={true} />
                </div>
                <div className='mb-[100px]'>
                    <div className='flex justify-between items-center'>
                        <h4 className=' font-bold text-[#222] mb-[10px] text-[14px]'>Ən çox satılanlar</h4>
                        <h5 className='text-[#FF8203] mb-[10px] text-[14px]'><a href="#">Hamısına bax</a></h5>
                    </div>
                    <Slider data={product} />
                </div>
                <div className='pb-[100px]'><Brands /></div>
            </div>
        </div>

    )
}

export default Main