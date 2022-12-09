import React from "react"
import icons from "../ultis/icons"

const { FiSearch } = icons

const Search = () => {
    return (
        <div className="flex items-center">
            <span className="translate-x-8">
                <FiSearch size="20px" color="gray" />
            </span>
            <input
                type="text"
                placeholder="Tìm kiếm bài hát, tên bài hát, nghệ sĩ..."
                className="bg-[#2f2739] rounded-3xl outline-none w-[500px] py-2 pl-9 text-gray-400"
            />
        </div>
    )
}

export default Search
