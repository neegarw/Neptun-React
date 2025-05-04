import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function MainCategorySlider({setActiveIndex}) {
    return (
        <>
            <Swiper
                onSlideChange={(e) => {
                    setActiveIndex(e.slides[e.realIndex].id)
                }}
                loop={true}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper !max-w-[350px] sm:w-[375px] rounded-[5px]">
                <SwiperSlide id="1">
                    <div>
                        <div className='w-[375px] h-[375px] rounded-[9px] overflow-hidden relative kategoriyalar'>
                            <span className='absolute bg-[#29292991] p-[19px] text-[#fff] text-[18px]  rounded-br-4xl'>
                                <p>Kateqoriyalar:</p>
                                <p>Meyvə</p>
                            </span>
                            <a href="#">
                                <img src="https://neptun.az/image/catalog/bannerler/xususi-teklif/meyve-terevez.jpg" alt="categories_image" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="2">
                    <div>
                        <div className='w-[375px] h-[375px] rounded-[9px] overflow-hidden relative kategoriyalar'>
                            <span className='absolute bg-[#29292991] p-[19px] text-[#fff] text-[18px] rounded-br-4xl'>
                                <p>Kateqoriyalar:</p>
                                <p>Səhər yeməkləri</p>
                            </span>
                            <a href="#">
                                <img src="https://neptun.az/image/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/narmin/550x550reklam1.jpg" alt="categories_image" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="3">
                    <div>
                        <div className='w-[375px] h-[375px] rounded-[9px] overflow-hidden relative kategoriyalar'>
                            <span className='absolute bg-[#29292991] p-[19px] text-[#fff] text-[18px]  rounded-br-4xl'>
                                <p>Kateqoriyalar:</p>
                               <p>NesCake</p>
                            </span>
                            <a href="#">
                                <img src="https://neptun.az/image/catalog/bannerler/xususi-teklif/siyniyyat.jpg" alt="categories_image" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="4">
                    <div>
                        <div className='w-[375px] h-[375px] rounded-[9px] overflow-hidden relative kategoriyalar'>
                            <span className='absolute bg-[#29292991] p-[19px] text-[#fff] text-[18px]  rounded-br-4xl'>
                                <p>Kateqoriyalar:</p>
                                <p>Yalnız Neptunda</p>
                            </span>
                            <a href="#">
                                <img src="https://neptun.az/image/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/narmin/550x550reklam2.jpg" alt="categories_image" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="5">
                    <div>
                        <div className='w-[375px] h-[375px] rounded-[9px] overflow-hidden relative kategoriyalar'>
                            <span className='absolute bg-[#29292991] p-[19px] text-[#fff] text-[18px] rounded-br-4xl'>
                                <p>Kateqoriyalar:</p>
                                <p>Quru meyvələr</p>
                            </span>
                            <a href="#">
                                <img src="https://neptun.az/image/catalog/YEN%C4%B0/MEHSUL/11.05.2020/cerez.jpg" alt="categories_image" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default MainCategorySlider