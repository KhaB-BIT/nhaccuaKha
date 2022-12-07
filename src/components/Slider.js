import React from "react"
import { useSelector } from "react-redux"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

const Slider = () => {
    const { banner } = useSelector((state) => state.app)

    return (
        <div className="w-[1000px] px-5">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay
                onSwiper={(swiper) => console.log(swiper)}
            >
                {banner.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={item.banner}
                                alt={item.link}
                                className="rounded-lg"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider
