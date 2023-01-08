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
import { useEffect, useState, useRef } from "react";
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }: AppProps) {
  const [secondes, setSecondes] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((secondes) => secondes + 1);
    }, 1000);
    if (typeof window !== "undefined" && secondes > 3) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        // loader.style.zIndex = "-1700";
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [secondes]);

  const [theme, setTheme] = useState("light");
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

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
          <button
            onClick={toggleTheme}
            className={
              theme === "light" ? "theme-toggle dark" : "theme-toggle light"
            }
          >
            {theme === "light" ? (
              <svg
                fill="#000000"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>moon</title>{" "}
                  <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z"
                    stroke="#000000"
                  ></path>{" "}
                  <path
                    d="M12 3.5V5.5"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M20.5 12H18.5"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M5.5 12H3.5"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M12 18.5V20.5"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M16.5 7.5L18 6"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M6 18L7.5 16.5"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M6 6L7.5 7.5"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M16.5 16.5L18 18"
                    stroke="#000000"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}
