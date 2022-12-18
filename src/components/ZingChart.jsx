/* eslint-disable no-unused-vars */
import React, { memo, useEffect, useState } from "react"
import bg from "../assets/bg-chart.jpg"
import { Line } from "react-chartjs-2"
import { useSelector } from "react-redux"
import { Chart } from "chart.js/auto"

const ZingChart = () => {
    const [data, setData] = useState(null)
    const { zingChart } = useSelector((state) => state.app)

    const options = {
        responsive: true,
        pointRadius: 0,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: "rgba(255,255,255,0.1)", drawTicks: false },
                border: { dash: [3, 4] },
            },
            x: {
                ticks: { color: "white" },
                grid: { color: "transparent", drawTicks: false },
            },
        },
        plugins: {
            legend: false,
        },
        hover: {
            mode: "dataset",
            intersect: false,
        },
    }

    useEffect(() => {
        const labels = zingChart?.chart.times
            .filter((item) => item.hour % 2 === 0)
            .map((item) => `${item.hour}:00`)

        const datasets = []
        for (let i = 0; i < 3; i++) {
            const arr = zingChart.chart.items[
                Object.keys(zingChart.chart.items)[i]
            ]
                .filter((item) => item.hour % 2 === 0)
                .map((item) => item.counter)
            datasets.push({
                data: arr,
                borderColor:
                    i === 1 ? "#4a90e2" : i === 2 ? "#d94c51" : "#52aead",
                tension: 0.2,
                borderWidth: 3,
                pointBackgroundColor: "white",
                pointHoverRadius: 5,
            })
        }

        setData({ labels, datasets })
    }, [zingChart])
    return (
        <div className="flex relative ">
            <img
                src={bg}
                alt="chart"
                className="w-full h-[420px] object-cover rounded-xl"
            />
            <div className="w-full absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-gradient-to-t from-violet-700 to-fuchsia-700 opacity-90"></div>
            <div className="absolute top-[50%] -translate-y-1/2 w-full flex">
                <div className="w-[40%]">
                    <h1 className="z-10 text-3xl font-bold ml-5">#zingchart</h1>
                    {zingChart?.items
                        .filter((item, index) => index < 3)
                        .map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-3 bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.1)] m-4 rounded-md"
                                >
                                    <span
                                        className="text-3xl font-bold number-rank-zingchart Webkit"
                                        style={{
                                            WebkitTextStroke: `1px ${
                                                index === 0
                                                    ? "#50e3c2"
                                                    : index === 1
                                                    ? "#4a90e2"
                                                    : "#e35050"
                                            }`,
                                        }}
                                    >
                                        {index + 1}
                                    </span>
                                    <img
                                        src={item.thumbnail}
                                        alt="abc"
                                        className="w-[60px] h-[60px]"
                                    />
                                    <div>
                                        <h2 className="text-md">
                                            {item.title}
                                        </h2>
                                        <h3 className="text-sm text-gray-400">
                                            {item.artistsNames}
                                        </h3>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="w-[60%]">
                    {data && <Line data={data} options={options} />}
                </div>
            </div>
        </div>
    )
}

export default memo(ZingChart)
