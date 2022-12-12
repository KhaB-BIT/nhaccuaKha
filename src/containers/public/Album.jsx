import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import * as apis from "../../apis"
import moment from "moment"
import { RxDotFilled } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../store/actions"
import ListSong from "../../components/ListSong"

const Album = () => {
    const { pid } = useParams()
    const [dataAlbum, setDataAlbum] = useState(null)
    const dispatch = useDispatch()
    const { isPlaying } = useSelector((state) => state.music)
    const cdRef = useRef()

    useEffect(() => {
        const fetchDataPlaylist = async () => {
            const response = await apis.apiGetDetailPlaylist(pid)
            setDataAlbum(response.data.data)
            const playList = response?.data.data.song.items
            dispatch(actions.setPlayList(playList))
        }
        fetchDataPlaylist()
    }, [pid])

    return (
        <div className="flex gap-10 pl-10">
            <div className="w-[30%]">
                <div
                    ref={cdRef}
                    className={`overflow-hidden w-[320px] h-[320px] rounded-xl animate transition-all ease-in-out duration-500 ${
                        isPlaying
                            ? "rounded-full animate-spin-start"
                            : "rounded-full animate-spin-end"
                    }`}
                >
                    <img
                        src={dataAlbum?.thumbnailM}
                        alt="album"
                        className="rounded-lg"
                    />
                </div>
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
                <ListSong />
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
