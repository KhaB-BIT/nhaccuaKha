import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import reduxConfig from "./redux"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
const store = reduxConfig()
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
