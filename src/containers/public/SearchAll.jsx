import React, { useState } from "react"
import { useSelector } from "react-redux"

const menu = ["Tất cả", "Bài hát", "Playlist/Album", "Nghệ sĩ", "MV"]

const SearchAll = () => {
    const { searchData } = useSelector((state) => state.music)
    console.log(searchData)
    const [active, setActive] = useState(0)

    return (
        <div className="border-b-[1px] border-gray-500 py-1">
            <div className="flex max-w-lg uppercase justify-around ">
                {menu.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={`${
                                index === active
                                    ? "border-b-2 border-purple-500"
                                    : ""
                            } p-2 translate-y-1`}
                            onClick={() => setActive(index)}
                        >
                            {item}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchAll
