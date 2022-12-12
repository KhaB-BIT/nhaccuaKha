import React, { useEffect, useRef, useState } from "react"
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import * as apis from "../apis"
import icons from "../ultis/icons"
import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg"
import { FiRepeat } from "react-icons/fi"
import { BsShuffle } from "react-icons/bs"
import * as actions from "../store/actions"
import moment from "moment"

const { AiOutlineHeart, FiMoreHorizontal } = icons
let interval

const Player = () => {
    const dispatch = useDispatch()
    const { curSongId, isPlaying } = useSelector((state) => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [audio, setAudio] = useState(new Audio())
    const [currentSecond, setCurrentSecond] = useState(0)
    const thumbRef = useRef()

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId),
            ])

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }

            if (res2.data.err === 0) {
                audio.pause()
                setAudio(new Audio(res2.data.data["128"]))
            }
        }
        fetchDetailSong()
    }, [curSongId])

    useEffect(() => {
        audio.load()
        if (isPlaying) {
            audio.play()
        }
    }, [audio])

    useEffect(() => {
        if (isPlaying) {
            interval = setInterval(() => {
                let percent =
                    Math.round(
                        (audio.currentTime * 10000) / songInfo?.duration
                    ) / 100
                thumbRef.current.style.cssText = `right: ${100 - percent}%`
                setCurrentSecond(Math.round(audio.currentTime))
            }, 1000)
        } else {
            clearInterval(interval)
        }
    }, [isPlaying])

    const handlePlayMusic = () => {
        if (isPlaying) {
            audio.pause()
            dispatch(actions.play(false))
        } else {
            audio.play()
            dispatch(actions.play(true))
        }
    }

    return (
        <div className=" flex h-[90px] bg-[#170f23]">
            <div className="w-[30%] flex gap-4 items-center p-4">
                <div>
                    <img
                        src={songInfo?.thumbnail}
                        alt="thumbnail"
                        className="w-[64px] h-[64px] rounded-md"
                    />
                </div>
                <div>
                    <h4>{songInfo?.title}</h4>
                    <h5 className="text-gray-500">{songInfo?.artistsNames}</h5>
                </div>
                <div className="flex gap-3">
                    <AiOutlineHeart />
                    <FiMoreHorizontal />
                </div>
            </div>
            <div className="w-[40%] flex flex-col p-[10px]">
                <div className="flex justify-around items-center w-[60%] h-[60%] m-auto">
                    <span
                        title="Bật phát ngẫu nhiên"
                        className="cursor-pointer"
                    >
                        <BsShuffle size="20px" />
                    </span>
                    <span title="Bài hát trước" className="cursor-pointer">
                        <TbPlayerSkipBack size="20px" />
                    </span>
                    <span
                        title="Dừng/chơi nhạc"
                        className="cursor-pointer"
                        onClick={handlePlayMusic}
                    >
                        {isPlaying ? (
                            <CgPlayPauseO size="35px" />
                        ) : (
                            <CgPlayButtonO size="35px" />
                        )}
                    </span>
                    <span title="Bài hát tiếp theo" className="cursor-pointer">
                        <TbPlayerSkipForward size="20px" />
                    </span>
                    <span title="Bật phát tất cả" className="cursor-pointer">
                        <FiRepeat size="20px" />
                    </span>
                </div>
                <div className="flex gap-4 items-center">
                    <span>
                        {moment.utc(currentSecond * 1000).format("mm:ss")}
                    </span>
                    <div className="flex-1 relative h-1 bg-slate-300 rounded-md w-10">
                        <div
                            ref={thumbRef}
                            className="bg-green-600 h-1 rounded-md absolute left-0"
                        ></div>
                    </div>
                    <span>
                        {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
                    </span>
                </div>
            </div>
            <div className="w-[30%]">Something</div>
        </div>
    )
}

export default Player
