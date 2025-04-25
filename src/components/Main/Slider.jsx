import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../../style/mainSwiper.css';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BASKET } from '../../context/BasketContext';

export default function Slider({ data, slidesPerView, discount }) {
    const {addToBasket, basketArr} = useContext(BASKET)

    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: slidesPerView || 6,
                },
            }}
        >

            {data != null &&
                data.products.map((item, i) =>
                    <SwiperSlide key={i}>
                        <Link to={`/filterle/${item.id}`} className="group w-[191px] px-[10px] h-[375px] pb-[17px] rounded-[7px] flex flex-col items-center text-center bg-white relative">
                            <div className='absolute top-[10px] right-[10px] text-[#FF8203] text-[20px]'><i class="fa-regular fa-heart"></i></div>
                            <div className='w-[168px] h-[172px] '>
                                <img src={item.img[0]} alt="" className="object-cover object-center w-full" />
                            </div>
                            <div>
                                <h4 className='text-[10px] font-noto uppercase text-[#222] font-semibold w-[103px]' >{item.name}</h4>
                            </div>
                            {
                                discount ? 
                                <div className='flex items-center mb-[10px]'>
                                    <div className='bg-[#ffd9c0] transition-[0.4s] group-hover:text-[#fff] group-hover:bg-[#FF8203] py-[18px] px-[19px] rounded-[50%] text-[#4e4e4e] text-[12px] font-[700] mr-[8px] w-[20px] h-[10px] flex justify-center items-center'>
                                        <span>-{item.discount}%</span>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <span className='line-through text-[#999] text-[16px] font[400] mb-[3px]'>{item.price} ₼</span>
                                        <span className='text-[#181818] text-[22px] font-[700] leading-[23px]'>{(item.price * ((100 - item.discount) / 100)).toFixed(2)} ₼</span>
                                    </div>
                                </div> :
                                 <div className='flex items-center mb-[10px]'>
                                    <div className='flex flex-col items-start'>
                                        <span className='text-[#181818] text-[22px] font-[700] leading-[23px]'>{item.price} ₼</span>
                                    </div>
                                </div>
                            }

                            <div>
                                <div className='flex items-center justify-between'>
                                    <button className='border-none text-[#FF8203] py-[6px] px-[12px] text-[14px]'>
                                        <FaMinus />
                                    </button>
                                    <span className='text-[11px]'> 1 eded</span>
                                    <button className='border-none text-[#FF8203] py-[6px] px-[12px] text-[14px]'>
                                        <FaPlus />
                                    </button>
                                </div>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    addToBasket(item)}} className='px-[21px] py-[2px] text-[#fff] rounded-[16px] bg-[#FF8203] transition-[0.4s] hover:bg-[#DE7201] mt-[10px] mb-[6px]'>Səbətə at</button>
                            </div>

                        </Link>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
}
