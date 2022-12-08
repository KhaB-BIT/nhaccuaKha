//import * as apis from "../../apis"
import actionType from "./actionTypes"

export const setCurSongId = (sid) => ({
    type: actionType.SET_CURRENT_SONG_ID,
    sid,
})

export const play = (flag) => ({
    type: actionType.PLAY,
    flag,
})
