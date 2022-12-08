import React from "react"
import logo from "../assets/logozing.svg"
import { sidebarMenu } from "../ultis/menu"
import { NavLink, useNavigate } from "react-router-dom"

const noneActiveStyle = "flex gap-2 items-center font-bold px-6 py-2"
const activeStyle = "flex gap-2 items-center text-blue-400 font-bold px-6 py-2"

const SidebarLeft = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#231b2e] h-screen sidebar_left">
            <div
                onClick={() => navigate("")}
                className="w-full h-[70px] py-5 px-12 flex justify-center items-center cursor-pointer"
            >
                <img src={logo} alt="logo zing mp3" />
            </div>

            {sidebarMenu.map((item, index) => {
                return (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? activeStyle : noneActiveStyle
                        }
                    >
                        <span className="">{item.icon}</span> {item.text}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default SidebarLeft
