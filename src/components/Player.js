import React from "react"
import { useSelector } from "react-redux"

const Player = () => {
    const { curSongId } = useSelector((state) => state.music)
    console.log("cur: ", curSongId)

    return (
        <div className=" flex h-[90px] bg-[#170f23]">
            <div className="w-[30%]">Detail</div>
            <div className="w-[40%]">Main player</div>
            <div className="w-[30%]">Something</div>
        </div>
    )
}

export default Player
