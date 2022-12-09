import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as apis from "../../apis"
import moment from "moment"
import { RxDotFilled } from "react-icons/rx"
import { useDispatch } from "react-redux"
import * as actions from "../../store/actions"

const Album = () => {
    const { pid } = useParams()
    const [dataAlbum, setDataAlbum] = useState(null)
    const dispatch = useDispatch()
    console.log(dataAlbum)

    useEffect(() => {
        const fetchDataPlaylist = async () => {
            const response = await apis.apiGetDetailPlaylist(pid)
            setDataAlbum(response.data.data)
        }
        fetchDataPlaylist()
    }, [pid])

    const handleClickListAlbum = (sid) => {
        dispatch(actions.setCurSongId(sid))
        dispatch(actions.play(true))
    }

    return (
        <div className="flex gap-10 pl-10">
            <div className="w-[30%]">
                <img
                    src={dataAlbum?.thumbnailM}
                    alt="album"
                    className="rounded-lg"
                />
                <h1 className="font-semibold text-center mt-4 text-2xl">
                    {dataAlbum?.title}
                </h1>
                <h3 className="text-center text-gray-400">
                    {moment
                        .unix(dataAlbum?.contentLastUpdate)
                        .format("MMM Do YY")}
                </h3>
                <h3 className="text-gray-400 text-center">
                    {dataAlbum?.artistsNames}
                </h3>
                <h3 className="text-gray-400 text-center">
                    {dataAlbum?.like} người yêu thích
                </h3>
            </div>
            <div className="w-[70%] h-[calc(100vh_-_90px)] overflow-y-scroll pr-10 py-[70px]">
                <h1 className="text-gray-400">{dataAlbum?.sortDescription}</h1>
                <div className="flex my-4 text-gray-400">
                    <span className="w-[50%]">BÀI HÁT</span>
                    <span className="w-[40%]">ALBUM</span>
                    <span className="w-[10%]">THỜI GIAN</span>
                </div>
                {dataAlbum?.song?.items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleClickListAlbum(item.encodeId)}
                            className="flex justify-between items-center py-3 border-t border-t-gray-600 cursor-pointer hover:bg-gray-600"
                        >
                            <div className="flex items-center gap-5 w-[50%]">
                                <img
                                    src={item.thumbnail}
                                    alt="thumnail"
                                    className="w-[50px] h-[50px] rounded-md"
                                />
                                <div className="flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-gray-400 text-sm text">
                                        {item.artistsNames}
                                    </span>
                                </div>
                            </div>
                            <span className="text-gray-400 w-[40%] text-sm">
                                {item?.album?.title}
                            </span>
                            <span className="text-gray-400 w-[10%] text-sm">
                                {moment
                                    .utc(item.duration * 1000)
                                    .format("mm:ss")}
                            </span>
                        </div>
                    )
                })}

                <h6 className="text-sm flex gap-1 items-center text-gray-400">
                    <span>{dataAlbum?.song?.total} bài hát</span>
                    <span>
                        <RxDotFilled />
                    </span>
                    <span>
                        {moment
                            .utc(dataAlbum?.song?.totalDuration * 1000)
                            .format("HH:mm:ss")}
                    </span>
                </h6>
            </div>
        </div>
    )
}

export default Album
