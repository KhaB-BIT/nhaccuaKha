import { Routes, Route } from "react-router-dom"
import { Home, Login, Public } from "./containers/public"
import path from "./ultis/path"

function App() {
  return (
    <div className="flex gap-8 justify-center items-center h-screen text-white">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
