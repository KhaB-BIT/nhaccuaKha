import actionType from "../actions/actionTypes"

const initState = {
    curSongId: null,
    isPlaying: false,
    atAlbum: false,
    songs: null,
    searchData: {},
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CURRENT_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null,
            }
        case actionType.PLAY:
            return {
                ...state,
                isPlaying: action.flag,
            }
        case actionType.SET_ALBUM:
            return {
                ...state,
                atAlbum: action.flag,
            }
        case actionType.PLAY_LIST:
            return {
                ...state,
                songs: action.songs || null,
            }
        case actionType.SEARCH:
            return {
                ...state,
                searchData: action.data || null,
            }
        default:
            return state
    }
}

export default musicReducer
