import "./style.css";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import MainHeader from "../components/MainHeader";
import StickyHeader from "../components/StickyHeader";
import { useEffect } from "react";
// import Footer from '../components/Footer'



export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return (
        <>
            <Head>
                <title>Singhfreight Inc</title>
                <meta name="description" content="Load Board" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <ChakraProvider>
                <SessionProvider session={session}>
                    <MainHeader />
                    <StickyHeader />
                    <Component {...pageProps} />
                    {/* <Footer /> */}
                </SessionProvider>
            </ChakraProvider>
        </>
    );
}
