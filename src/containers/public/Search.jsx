import React from "react"
import { Outlet } from "react-router-dom"

const Search = () => {
    return (
        <div className="p-11">
            <Outlet />
        </div>
    )
}

export default Search
