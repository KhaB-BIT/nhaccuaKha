import actionType from "../actions/actionTypes"

const initState = {
    banner: [],
    friday: [],
    newSongEveryday: {},
    top100: {},
    xone: {},
    newMusic: {},
    loading: true,
    newRelease: {},
    weekChart: {},
    zingChart: {},
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return {
                ...state,
                loading: false,
                banner:
                    action.homeData?.find(
                        (item) => item.sectionId === "hSlider"
                    )?.items || null,
                friday:
                    action.homeData?.find(
                        (item) => item.sectionId === "hAutoTheme1"
                    ) || {},
                newSongEveryday:
                    action.homeData?.find(
                        (item) => item.sectionId === "hAutoTheme2"
                    ) || {},
                top100:
                    action.homeData?.find(
                        (item) => item.sectionId === "h100"
                    ) || {},
                xone:
                    action.homeData?.find(
                        (item) => item.sectionId === "hXone"
                    ) || {},
                newMusic:
                    action.homeData?.find(
                        (item) => item.sectionId === "hAlbum"
                    ) || {},
                newRelease:
                    action.homeData?.find(
                        (item) => item.sectionType === "new-release"
                    ) || {},
                weekChart:
                    action.homeData?.find(
                        (item) => item.sectionType === "weekChart"
                    ) || {},
                zingChart:
                    action.homeData?.find((item) => item.sectionId === "hZC") ||
                    {},
            }
        default:
            return state
    }
}

export default appReducer
