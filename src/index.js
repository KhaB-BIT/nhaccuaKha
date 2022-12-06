import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reduxConfig from "./redux"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"))
const store = reduxConfig()
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
