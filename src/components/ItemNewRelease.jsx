import React, { memo } from "react"
import moment from "moment"
import "moment/locale/vi"

const ItemNewRelease = ({ dataitem }) => {
    return (
        <div className="flex min-w-[380px] hover:bg-overlay-30 rounded-md p-2 cursor-pointer">
            <img
                src={dataitem?.thumbnail}
                alt="abc"
                className="mr-5 w-[60px] h-[60px] rounded-md"
            />
            <div>
                <h1 className="text-md">{`${dataitem?.title.slice(0, 30)} ${
                    dataitem.title.length > 30 ? "..." : ""
                }`}</h1>
                <h4 className="text-xs text-gray-400">
                    {dataitem?.artistsNames}
                </h4>
                <h4 className="text-xs text-gray-400">
                    {moment(dataitem?.releaseDate * 1000).fromNow()}
                </h4>
            </div>
        </div>
    )
}

export default memo(ItemNewRelease)
