import * as apis from "../../apis"
import actionType from "./actionTypes"

export const getHome = () => async (dispatch) => {
    try {
        const response = await apis.apiGetHome()
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_HOME,
                homeData: response.data.data.items,
            })
        } else {
            dispatch({
                type: actionType.GET_HOME,
                homeData: null,
            })
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_HOME,
            homeData: null,
        })
    }
}
