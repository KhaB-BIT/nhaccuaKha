import React, { useEffect, useRef, useState } from "react"
import { MdClear } from "react-icons/md"
import icons from "../ultis/icons"
import * as actions from "../store/actions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import path from "../ultis/path"

const { FiSearch } = icons

const SearchInput = () => {
    const [keyword, setKeyword] = useState("")
    const inputRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeValue = (e) => {
        setKeyword(e.target.value)
    }

    const handleClearInput = () => {
        setKeyword("")
        inputRef.current.focus()
    }

    const handleSearch = async (e) => {
        if (e.key === "Enter") {
            dispatch(actions.search(keyword))
            navigate(`/${path.SEARCH}/${path.SEARCH_ALL}`)
        }
    }

    return (
        <div className="flex items-center">
            <span className="translate-x-8 cursor-pointer">
                <FiSearch size="20px" color="gray" />
            </span>
            <input
                ref={inputRef}
                type="text"
                placeholder="Tìm kiếm bài hát, tên bài hát, nghệ sĩ..."
                className="bg-[#2f2739] rounded-3xl outline-none w-[500px] py-2 pl-9 text-gray-400"
                value={keyword}
                onChange={handleChangeValue}
                onKeyUp={handleSearch}
            />
            {keyword && (
                <div
                    className="-translate-x-9 z-10 cursor-pointer"
                    onClick={handleClearInput}
                >
                    <MdClear color="gray" size={24} />
                </div>
            )}
        </div>
    )
}

export default SearchInput
