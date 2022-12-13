import { useSelector } from "react-redux"
import { Slider, Section } from "../../components"

const Home = () => {
    const { banner, newSongEveryday, friday, top100, xone, newMusic } =
        useSelector((state) => state.app)
    console.log("newMusic", newMusic)

    return (
        <div className="h-[1000px]">
            <Slider data={banner} />
            <Section data={friday} />
            <Section data={newSongEveryday} />
            <Section data={top100} />
            <Section data={xone} />
            <Section data={newMusic} title="Nhạc mới" />
            <div className="h-[500px]"></div>
        </div>
    )
}

export default Home
