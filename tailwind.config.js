/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            backgroundColor: {
                "main-100": "#E7ECEC",
                "main-200": "#DDE4E4",
                "main-300": "#CED9D9",
                "main-400": "#C0D8D8",
                "main-500": "#0E8080",
                "overlay-30": "rgba(0,0,0,0.3)",
            },
            colors: {
                "main-100": "#E7ECEC",
                "main-200": "#DDE4E4",
                "main-300": "#CED9D9",
                "main-400": "#C0D8D8",
                "main-500": "#0E8080",
            },
            keyframes: {
                "slide-right": {
                    "0%": {
                        "-webkit-transform": " translateX(-500px);",
                        transform: "translateX(-500px);",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                    },
                },
                "slide-left": {
                    "0%": {
                        "-webkit-transform": " translateX(500px);",
                        transform: "translateX(500px);",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                    },
                },
                "slide-left2": {
                    "0%": {
                        "-webkit-transform": " translateX(500px);",
                        transform: "translateX(500px);",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                    },
                },
                "spin-to-start": {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                "spin-to-end": {
                    "0%": {
                        transform: "rotate(0deg)",
                        "border-radius": "1000px",
                    },

                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
            },
            animation: {
                "slide-right":
                    "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "slide-left":
                    "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "slide-left2":
                    "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "spin-start": "spin-to-start 12s linear infinite",
                "spin-end": "spin-to-end 1s linear 1 both",
            },
            flex: {
                4: "4 4 0%",
            },
            boxShadow: {
                myShadow:
                    "rgba(34 34 171 / 0.1) 0px 8px 24px, rgba(34 34 171 / 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
            },
        },
        screens: {
            laptop: "1600px",
        },
    },
    plugins: [],
}
