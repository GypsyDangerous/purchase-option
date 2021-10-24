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
            </Head>
            {showHeader && <Header />}
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
