import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import reduxConfig from "./redux"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { ChakraProvider } from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById("root"))
const { store, persistor } = reduxConfig()
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ChakraProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </PersistGate>
    </Provider>
)
