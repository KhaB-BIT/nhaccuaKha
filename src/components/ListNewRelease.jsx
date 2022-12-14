/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ItemNewRelease from "./ItemNewRelease"
import * as actions from "../store/actions"

const ListNewRelease = ({ data }) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState("all")
    const [song, setSong] = useState([])
    const handleClickSongNewRelease = (item) => {
        dispatch(actions.setCurSongId(item.encodeId))
        dispatch(actions.play(true))
        dispatch(actions.playAlbum(false))
        dispatch(actions.setPlayList(null))
    }

    useEffect(() => {
        if (active === "all") {
            setSong(data?.items.all.filter((item, index) => index <= 11))
        } else if (active === "vPop") {
            setSong(data?.items.vPop.filter((item, index) => index <= 11))
        } else {
            setSong(data?.items.others.filter((item, index) => index <= 11))
        }
    }, [active])

    return (
        <div className="">
            <div className="flex justify-between items-end my-10">
                <span className="text-2xl font-boldb">{data?.title}</span>
                <span>Tất cả</span>
            </div>
            <div className="flex gap-5">
                <button
                    className={`px-5 py-[2px] border rounded-l-full rounded-r-full border-gray-500 w-[120px] ${
                        active === "all" && "bg-[#9b4de0] border-[#9b4de0]"
                    }`}
                    onClick={() => setActive("all")}
                >
                    Tất cả
                </button>
                <button
                    className={`px-5 py-[2px] border rounded-l-full rounded-r-full border-gray-500 w-[120px] ${
                        active === "vPop" && "bg-[#9b4de0] border-[#9b4de0]"
                    }`}
                    onClick={() => setActive("vPop")}
                >
                    Việt Nam
                </button>
                <button
                    className={`px-5 py-[2px] border rounded-l-full rounded-r-full border-gray-500 w-[120px] ${
                        active === "others" && "bg-[#9b4de0] border-[#9b4de0]"
                    }`}
                    onClick={() => setActive("others")}
                >
                    Quốc tế
                </button>
            </div>
            <div className="flex flex-wrap justify-between gap-2 mt-5">
                {song?.map((item) => {
                    return (
                        <div
                            key={item.encodeId}
                            onClick={() => handleClickSongNewRelease(item)}
                        >
                            <ItemNewRelease dataitem={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListNewRelease
