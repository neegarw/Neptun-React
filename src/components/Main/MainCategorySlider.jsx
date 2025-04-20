import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function MainCategorySlider() {
    return (
        <>
            <Swiper
                loop={true}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper !w-[375px]">
                {
                    Array(6).fill("").map((_, i) =>
                        <SwiperSlide>
                            <div>
                                <div className='w-[375px] h-[375px] rounded-[9px] overflow-hidden relative kategoriyalar'>
                                    <span className='absolute bg-[#29292991] p-[19px] text-[#fff] text-[18px]'>
                                        <p>Kateqoriyalar:</p>
                                        Quru meyvələr
                                    </span>
                                    <a href="#">
                                        <img src="https://neptun.az/image/catalog/YEN%C4%B0/MEHSUL/11.05.2020/cerez.jpg" alt="categories_image" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}

export default MainCategorySlider