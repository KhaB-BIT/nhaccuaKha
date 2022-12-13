import React, { memo } from "react"
import { RotatingLines } from "react-loader-spinner"

const SongLoading = () => {
    return (
        <div className="border border-[3px] rounded-full w-[35px] h-[35px] flex items-center justify-center">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20px"
                visible={true}
            />
        </div>
    )
}

export default memo(SongLoading)
