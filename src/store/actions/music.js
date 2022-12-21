import actionType from "./actionTypes"
import * as apis from "../../apis"

export const setCurSongId = (sid) => ({
    type: actionType.SET_CURRENT_SONG_ID,
    sid,
})

export const play = (flag) => ({
    type: actionType.PLAY,
    flag,
})

export const playAlbum = (flag) => ({
    type: actionType.SET_ALBUM,
    flag,
})

// export const fetchDetailPlayList = (pid) => async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlaylist(pid)
//         if (response?.data.err === 0) {
//             dispatch({
//                 type: actionType.PLAY_LIST,
//                 songs: response?.data.data.song.items,
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type: actionType.PLAY_LIST,
//             songs: null,
//         })
//     }
// }

export const setPlayList = (songs) => ({
    type: actionType.PLAY_LIST,
    songs,
})

export const search = (keywork) => async (dispatch) => {
    try {
        const response = await apis.apiSearch(keywork)
        if (response.data.err === 0) {
            dispatch({
                type: actionType.SEARCH,
                data: response?.data.data,
            })
        } else {
            dispatch({
                type: actionType.SEARCH,
                data: null,
            })
        }
    } catch (error) {
        dispatch({
            type: actionType.SEARCH,
            data: null,
        })
    }
}
