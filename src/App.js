import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const [value, setValue] = useState("")
  const { test } = useSelector((state) => state.app)
  console.log("test: ", test)

  return (
    <div className="flex gap-8 justify-center items-center h-screen text-white">
      Clone Zingmp3
    </div>
  )
}

export default App
