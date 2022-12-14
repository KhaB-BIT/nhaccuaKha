import { useSelector } from "react-redux"
import { Slider, Section, Loading } from "../../components"

const Home = () => {
    const { loading, banner, newSongEveryday, friday, top100, xone, newMusic } =
        useSelector((state) => state.app)

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="h-[1000px]">
                    <Slider data={banner} />
                    <Section data={friday} />
                    <Section data={newSongEveryday} />
                    <Section data={top100} />
                    <Section data={xone} />
                    <Section data={newMusic} title="Nhạc mới" />
                    <div className="h-[500px]"></div>
                </div>
            )}
        </>
    )
}

export default Home
