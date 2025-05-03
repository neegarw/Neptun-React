import React from 'react';
import freshmaker from '../../assets/images/brandImages/freshmaker.png'
import joyful from '../../assets/images/brandImages/joyful.png'
import peyman from '../../assets/images/brandImages/payman.png'
import pfanner from '../../assets/images/brandImages/pfanner.png'


function Brands() {
    return (
        <div className='container flex flex-col xl:flex-row gap-[10px] justify-between '>
            <div className='w-full sm:w-[48%] md:w-[32%] lg:w-[290px] aspect-[290/203] rounded-[9px] overflow-hidden'>
                <a href="#">
                    <img className='w-full h-full object-cover' src={freshmaker} alt="brands_image" />
                </a>
            </div>
            <div className='w-full sm:w-[48%] md:w-[32%] lg:w-[290px] aspect-[290/203] rounded-[9px] overflow-hidden'>
                <a href="#">
                    <img className='w-full h-full object-cover' src={peyman} alt="brands_image" />
                </a>
            </div>
            <div className='w-full sm:w-[48%] md:w-[32%] lg:w-[290px] aspect-[290/203] rounded-[9px] overflow-hidden'>
                <a href="#">
                    <img className='w-full h-full object-cover' src={joyful} alt="brands_image" />
                </a>
            </div>
            <div className='w-full sm:w-[48%] md:w-[32%] lg:w-[290px] aspect-[290/203] rounded-[9px] overflow-hidden'>
                <a href="#">
                    <img className='w-full h-full object-cover' src={pfanner} alt="brands_image" />
                </a>
            </div>
            
        </div>

    );
}

export default Brands;
