import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import '../../style/headerSwiper.css'

function MainTopSlider() {
    const [data, setData] = useState([
        "https://neptun.az/image/cache/webp/catalog/01.01.01/insert-banner-2-1130x413.webp?v=9",
        "https://neptun.az/image/cache/webp/catalog/2.2024/esas-1130x413.webp?v=9",
        "https://neptun.az/image/cache/webp/catalog/2.2024/heftesonnu-banneri-1-doymak-1130x413.webp?v=9",

    ])
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper h-[180px] sm:h-[250px] md:h-[300px] lg:h-[336px] w-full"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="slider" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    )
}

export default MainTopSlider