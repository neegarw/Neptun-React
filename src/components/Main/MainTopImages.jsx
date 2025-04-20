import React from 'react'
import img1 from "../../assets/images/headerImages/headerimg1.png"
import img2 from "../../assets/images/headerImages/headerimg2.jpg"
import img3 from "../../assets/images/headerImages/headerimg3.jpg"
import { GoArrowRight } from "react-icons/go";

function MainTopImages() {
    return (
        <div className='flex gap-[10px] flex-row justify-between'>
            <div className='w-[300px] pb-[10px] bg-white flex flex-col items-center'>
                <div className=''>
                    <img className=' object-cover' src={img1} alt="" />
                </div>
                <p className='capitalize flex justify-between items-center py-[10px] w-[100%] px-[10px]'>
                    <span className='hover:text-[#FF8300] transition text-[12px] font-bold'>50 Azn 50 bonus</span>
                    <span><GoArrowRight /></span>
                </p>
            </div>
            <div className='w-[300px] pb-[10px] bg-white flex flex-col items-center'>
                <div className='h-[85%]'>
                    <img className=' object-cover' src={img2} alt="" />
                </div>
                <p className='capitalize flex justify-between items-center py-[10px] w-[100%] px-[10px]'>
                    <span className='hover:text-[#FF8300] transition text-[12px] font-bold'>Neptunda dadlı endirimlər</span>
                    <span><GoArrowRight /></span>
                </p>
            </div>
            <div className='w-[300px] pb-[10px] bg-white lg:flex flex-col items-center hidden'>
                <div className='h-[85%]'>
                    <img className=' object-cover' src={img3} alt="" />
                </div>
                <p className='capitalize flex justify-between items-center py-[10px] w-[100%] px-[10px]'>
                    <span className='hover:text-[#FF8300] transition text-[12px] font-bold'>Həftə sonu endrimləri Neptunda</span>
                    <span><GoArrowRight /></span>
                </p>
            </div>
        </div>
    )
}

export default MainTopImages