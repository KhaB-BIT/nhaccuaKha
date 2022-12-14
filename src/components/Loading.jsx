import React from "react"
import { Triangle } from "react-loader-spinner"

const Loading = () => {
    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            <Triangle
                height="120"
                width="120"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loading
