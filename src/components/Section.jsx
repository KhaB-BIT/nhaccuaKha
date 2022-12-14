import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Section = ({ data, title }) => {
    const navigate = useNavigate()
    const handleClickAlbum = (item) => {
        const path = item.link.split(".")[0]
        navigate(path)
    }

    return (
        <div className="">
            <div className="flex justify-between items-end my-10">
                <span className="text-2xl font-boldb">
                    {data?.title || title}
                </span>
                <span>Tất cả</span>
            </div>
            <div className="flex justify-between">
                {data?.items
                    ?.filter((item, index) => index <= 4)
                    .map((item) => {
                        return (
                            <div
                                key={item.encodeId}
                                className="w-[220px]"
                                onClick={() => handleClickAlbum(item)}
                            >
                                <div className="overflow-hidden rounded-lg cursor-pointer hover:opacity-60">
                                    <img
                                        src={item.thumbnailM}
                                        alt="abc"
                                        className="rounded-lg hover:scale-110 transition-all duration-300 ease-linear"
                                    />
                                </div>
                                {data.sectionId === "hAlbum" ? (
                                    <div>
                                        <h3 className="mt-3 text-ellipsis overflow-hidden whitespace-pre">
                                            {item.title}
                                        </h3>
                                        <h5 className="text-sm  text-gray-500">
                                            {item.artistsNames}
                                        </h5>
                                    </div>
                                ) : (
                                    <h4 className="mt-3">
                                        {`${item.sortDescription.slice(
                                            0,
                                            60
                                        )} ${
                                            item.sortDescription.length <= 60
                                                ? ""
                                                : "..."
                                        }`}
                                    </h4>
                                )}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Section
