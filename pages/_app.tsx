import "../styles/index.scss";
import Header from "../Components/Header";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import SEO from "@bradgarropy/next-seo";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SEO
        title="Leonel NGOYA"
        description="
        I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
        "
        keywords={["website", "portfolio", "ln dev", "leonel ngoya"]}
        icon="/favicon.ico"
        themeColor="#000000"
        colorScheme="light"
        twitter={{
          image: "/images/lndev.JPG",
          site: "@ln_dev7",
          card: "summary",
        }}
      />
      <GoogleAnalytics measurementId="G-E7N5LJTEWP" />
      <AnimatePresence initial={false}>
        <MouseContextProvider>
          <Cursor />
          <Header />
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}
