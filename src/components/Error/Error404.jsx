import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <>
            <div className='container mx-auto h-[50vh] flex justify-center items-center'>
                <div className='flex flex-col gap-[30px] items-start '>
                    <h2 className='text-[29px]'>Səhifə mövcud deyil!</h2>
                    <p className='text-gray-500'>Bu səhifə müvcud deyil, yaxud da pozulub. <br />
                        Ana səhifəyə qayıdıb, alış verişə davam edə bilərsiniz.
                    </p>
                    <div className='flex gap-[20px]'>
                        <Link to={'/'} className='bg-[#ff8300] text-white py-[5px] px-[25px] rounded-[20px] uppercase hover:bg-gray-400 transition'>Davam et</Link>
                        <button className='bg-[#ff8300] text-white py-[5px] px-[25px] rounded-[20px] uppercase hover:bg-gray-400 transition'>Əlaqə</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404