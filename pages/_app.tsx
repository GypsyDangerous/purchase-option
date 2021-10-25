import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
    const [showHeader, setShowHeader] = useState(false);

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="https://cdn.jsdelivr.net/gh//GypsyDangerous/simple-css-reset/reset.css"
                    as="style"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh//GypsyDangerous/simple-css-reset/reset.css"
                />
                {/* TODO replace with global Style */}
                <link rel="stylesheet" href="/style.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            {showHeader && <Header />}
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
