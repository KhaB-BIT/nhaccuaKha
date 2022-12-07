import React from "react"
import icons from "../ultis/icons"
import Search from "./Search"

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

const Header = () => {
    return (
        <div className="h-[70px] mx-5 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <div className="flex gap-6">
                    <span>
                        <HiArrowNarrowLeft size="24px" color="gray" />
                    </span>
                    <span>
                        <HiArrowNarrowRight size="24px" color="gray" />
                    </span>
                </div>
                <Search />
            </div>
            <div>Login</div>
        </div>
    )
}

export default Header
