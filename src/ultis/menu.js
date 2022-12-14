import icons from "./icons"

const {
    MdOutlineLibraryMusic,
    AiOutlineFileSearch,
    TbChartArcs,
    MdOutlineFeed,
} = icons

export const sidebarMenu = [
    {
        path: "/personal",
        text: "Cá nhân",
        icon: <MdOutlineLibraryMusic size={20} />,
    },
    {
        path: "/discovery",
        text: "Khám phá",
        icon: <AiOutlineFileSearch size={20} />,
    },
    {
        path: "/zingchart",
        text: "#Zingchart",
        icon: <TbChartArcs size={20} />,
    },
    {
        path: "/follow",
        text: "Theo dõi",
        icon: <MdOutlineFeed size={20} />,
    },
]
