import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import {
    Album,
    Home,
    Login,
    Public,
    Search,
    SearchSongs,
    SearchAll,
} from "./containers/public"
import * as actions from "./store/actions"
import path from "./ultis/path"
import { ToastContainer } from "react-toastify"
import WeekRank from "./components/WeekRank"
function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getHome())
    }, [dispatch])

    return (
        <>
            <div>
                <Routes>
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.LOGIN} element={<Login />} />
                        <Route
                            path={path.ALBUM__TITLE__PID}
                            element={<Album />}
                        />
                        <Route
                            path={path.PLAYLIST__TITLE__PID}
                            element={<Album />}
                        />
                        <Route
                            path={path.WEEKRANK__TITLE__PID}
                            element={<WeekRank />}
                        />
                        <Route path={path.SEARCH} element={<Search />}>
                            <Route
                                path={path.SEARCH_ALL}
                                element={<SearchAll />}
                            />
                            <Route
                                path={path.SEARCH_SONG}
                                element={<SearchSongs />}
                            />
                        </Route>

                        <Route path={path.STAR} element={<Home />} />
                    </Route>
                </Routes>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default App
