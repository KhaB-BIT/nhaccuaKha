import React from "react"
import { Outlet } from "react-router-dom"
import { Player, SidebarLeft, SidebarRight } from "../../components"

const Public = () => {
    return (
        <div className="overflow-y-auto">
            <div className="w-full flex">
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
            <div className="absolute bottom-0 w-full">
                <Player />
            </div>
        </div>
    )
}

export default Public
