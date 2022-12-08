import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Album, Home, Login, Public } from "./containers/public"
import * as actions from "./store/actions"
import path from "./ultis/path"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getHome())
    }, [dispatch])

    return (
        <div>
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
                    <Route path={path.STAR} element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
