import moment from "moment"
import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../store/actions"

const ListSong = () => {
    const { songs } = useSelector((state) => state.music)
    const dispatch = useDispatch()

    const handleClickListAlbum = (sid) => {
        dispatch(actions.setCurSongId(sid))
        dispatch(actions.play(true))
        dispatch(actions.playAlbum(true))
    }

    return (
        <div>
            {songs?.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => handleClickListAlbum(item.encodeId)}
                        className="flex justify-between items-center p-3 border-t border-t-gray-600 cursor-pointer hover:bg-gray-600"
                    >
                        <div className="flex items-center gap-5 w-[50%]">
                            <img
                                src={item.thumbnail}
                                alt="thumnail"
                                className="w-[50px] h-[50px] rounded-md"
                            />
                            <div className="flex flex-col">
                                <span>
                                    {item.title}{" "}
                                    {!item.isWorldWide ? "- VIP" : ""}
                                </span>
                                <span className="text-gray-400 text-sm text">
                                    {item.artistsNames}
                                </span>
                            </div>
                        </div>
                        <span className="text-gray-400 w-[40%] text-sm">
                            {item?.album?.title}
                        </span>
                        <span className="text-gray-400 w-[10%] text-sm">
                            {moment.utc(item.duration * 1000).format("mm:ss")}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(ListSong)
