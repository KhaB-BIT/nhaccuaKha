import React from "react"
import { Outlet } from "react-router-dom"
import { Header, Player, SidebarLeft, SidebarRight } from "../../components"

const Public = () => {
    return (
        <div className="overflow-y-auto h-screen">
            <div className="w-full flex">
                <div className="w-[240px]">
                    <SidebarLeft />
                </div>
                <div className="flex-auto">
                    <Header />
                    <Outlet />
                </div>
                <div className="w-[330px] hidden laptop:block animate-slide-left">
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
