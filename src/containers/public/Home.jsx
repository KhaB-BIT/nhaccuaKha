import { useSelector } from "react-redux"
import { Slider, Section, Loading } from "../../components"
import ListNewRelease from "../../components/ListNewRelease"

const Home = () => {
    const {
        loading,
        banner,
        newSongEveryday,
        friday,
        top100,
        xone,
        newMusic,
        newRelease,
    } = useSelector((state) => state.app)

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="h-[1000px] px-10">
                    <Slider data={banner} />
                    <ListNewRelease data={newRelease} />
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
