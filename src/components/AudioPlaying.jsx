import React from "react"
import { Audio } from "react-loader-spinner"

const AudioPlaying = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="border-white border p-3 border-2 rounded-full">
                <Audio
                    height="40"
                    width="40"
                    color="#fff"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            </div>
        </div>
    )
}

export default AudioPlaying
