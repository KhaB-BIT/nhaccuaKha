import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import * as actions from "../store/actions"

const Slider = ({ data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId))
            dispatch(actions.play(true))
            dispatch(actions.playAlbum(false))
            dispatch(actions.setPlayList(null))
        }
        if (item?.type === 4) {
            const path = item?.link?.split(".")[0]
            navigate(path)
        } else {
            dispatch(actions.playAlbum(false))
            dispatch(actions.setPlayList(null))
        }
    }

    return (
        <div className="w-[calc(100vw_-_321px)]">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay
            >
                {data?.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="cursor-pointer">
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
