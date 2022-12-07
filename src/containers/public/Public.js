import React from "react"
import { Outlet } from "react-router-dom"
import { SidebarLeft, SidebarRight } from "../../components"

const Public = () => {
    return (
        <div className="w-full flex overflow-y-auto">
            <div className="w-[240px]">
                <SidebarLeft />
            </div>
            <div className="flex-auto">
                <Outlet />
            </div>
            <div className="w-[330px]">
                <SidebarRight />
            </div>
        </div>
    )
}

export default Public
