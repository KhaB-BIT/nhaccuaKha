import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import * as actions from "../store/actions"

const Slider = () => {
    const { banner } = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId))
            dispatch(actions.play(true))
        }
    }

    return (
        <div className="w-[1000px] px-5">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay
            >
                {banner.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={item.banner}
                                alt={item.link}
                                className="rounded-lg"
                                onClick={() => handleClickBanner(item)}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider
