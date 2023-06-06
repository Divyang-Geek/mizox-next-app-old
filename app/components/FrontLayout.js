"use client";

// Components
import Header from "./Header";
import localFont from "next/font/local";

const poppinsFont = localFont({
    src: [
        {
            path: "../../assets/fonts/Poppins-Italic.woff2",
            weight: "normal",
            style: "italic",
        },
        {
            path: "../../assets/fonts/Poppins-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../assets/fonts/Poppins-Regular.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../../assets/fonts/Poppins-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../assets/fonts/Poppins-Bold.woff2",
            weight: "bold",
            style: "normal",
        },
    ],
});

const rasaFont = localFont({
    src: [
        {
            path: "../../assets/fonts/Rasa-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
});

const FrontLayout = ({ children }) => {
    return (
        <>
            <style jsx global>{`
                :root {
                    --primary_font: ${poppinsFont.style.fontFamily};
                    --secondary_font: ${rasaFont.style.fontFamily};
                }
            `}</style>

            <Header />
            {children}
        </>
    );
};

export default FrontLayout;
