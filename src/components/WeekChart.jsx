import React from "react"
import { Link } from "react-router-dom"
import ZingChart from "./ZingChart"

const WeekChart = ({ data }) => {
    console.log(data)
    return (
        <div className="my-10">
            <ZingChart />

            <div className="flex justify-between my-10">
                {data.items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[32%] rounded-lg overflow-hidden cursor-pointer"
                        >
                            <Link to={item?.link?.split(".")[0]}>
                                <img
                                    key={index}
                                    src={item.banner}
                                    alt="weekChart"
                                    className="scale-110 hover:scale-125 transition-all duration-500 ease-linear"
                                />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WeekChart
