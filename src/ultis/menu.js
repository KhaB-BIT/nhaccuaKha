import icons from "./icons"

const { MdOutlineLibraryMusic, HiOutlineChartPie, TbChartArcs, MdOutlineFeed } =
    icons

export const sidebarMenu = [
    {
        path: "/personal",
        text: "Cá nhân",
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: "/discovery",
        text: "Khám phá",
        icon: <HiOutlineChartPie size={24} />,
    },
    {
        path: "/zingchart",
        text: "#Zingchart",
        icon: <TbChartArcs size={24} />,
    },
    {
        path: "/radio",
        text: "Radio",
        icon: <MdOutlineFeed size={24} />,
    },
    {
        path: "/follow",
        text: "Theo dõi",
        icon: <MdOutlineFeed size={24} />,
    },
]
