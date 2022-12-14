import React from "react"
import { Outlet } from "react-router-dom"
import { Header, Player, SidebarLeft } from "../../components"

const Public = () => {
    return (
        <div className="overflow-y-auto h-screen">
            <div className="w-full flex relative">
                <div className="w-[240px] fixed top-0 bottom-0 left-0">
                    <SidebarLeft />
                </div>
                <div className="w-[calc(100vw_-_240px)] absolute left-[240px]">
                    <Header />
                    <Outlet />
                </div>
                {/* {showRightBar && (
                    <div className="w-[330px] hidden laptop:block animate-slide-left fixed top-0 bottom-0 right-0">
                        <SidebarRight />
                    </div>
                )} */}
            </div>
            <div className="absolute bottom-0 w-full">
                <Player />
            </div>
        </div>
    )
}

export default Public
