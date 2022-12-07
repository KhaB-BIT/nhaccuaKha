import React, { useEffect } from "react"
import * as apis from "../../apis"
import { Header } from "../../components"

const Home = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await apis.getHome()
            console.log("res: ", response)
        }
        fetchData()
    }, [])

    return (
        <div className="overflow-y-auto">
            <Header />
        </div>
    )
}

export default Home
