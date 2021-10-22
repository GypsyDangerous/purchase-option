import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
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
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
