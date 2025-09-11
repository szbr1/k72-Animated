import localFont from "next/font/local";


export const Lausanne = localFont({
    src: [
        {
            path: "../public/Fonts/Lausanne-300.ttf",
            weight: "300",
            style: "normal"
        },
        {
            path: "../public/Fonts/Lausanne-500.ttf",
            weight: "500",
            style: "normal"
        }
    ],
    variable: "--font-Lausanne"
})