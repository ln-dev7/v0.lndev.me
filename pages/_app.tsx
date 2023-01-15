import "../styles/index.scss";
import Nav from "../Components/Navigation";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { NextSeo } from "next-seo";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { useEffect, useState, useRef } from "react";
import Link from "next/link.js";
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
      <NextSeo
        title="Leonel NGOYA"
        description="Hey, my name is Leonel NGOYA but I am much better known as LN. I am frontend developer and web integrator from Cameroon, I’m passionate about creating beautiful, intuitive and responsive websites."
        canonical="https://lndev.me/"
        openGraph={{
          url: "https://lndev.me/",
          title: "Leonel NGOYA",
          description:
            "Hey, my name is Leonel NGOYA but I am much better known as LN. I am frontend developer and web integrator from Cameroon, I’m passionate about creating beautiful, intuitive and responsive websites.",
          images: [
            {
              url: "https://leonelngoya.vercel.app/assets/img/lndev.JPG",
              alt: "LN Dev",
              type: "image/jpeg",
              secureUrl: "https://leonelngoya.vercel.app/assets/img/lndev.JPG",
            },
          ],
          siteName: "Leonel NGOYA | Frontend Developer",
        }}
        twitter={{
          handle: "@ln_dev7",
          site: "@ln_dev7",
          cardType: "summary_large_image",
        }}
      />
      <GoogleAnalytics measurementId="G-E7N5LJTEWP" />
      <AnimatePresence initial={false}>
        <MouseContextProvider>
          <Cursor />
          <header className="header">
            <Link href="/" className="header-logo">
              <svg
                width="155"
                height="39"
                viewBox="0 0 155 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9945 1V0.5H5.4945H1H0.5V1V37.5554V38.0554H1H5.4945H5.9945V37.5554V1ZM37.4051 38.0554H37.9051V37.5554V21.5995C37.9051 17.7559 36.8583 14.7438 34.6922 12.6462C32.5433 10.5323 29.7436 9.49065 26.3417 9.49065C24.4271 9.49065 22.6555 9.88447 21.0347 10.6777L21.0347 10.6777L21.0309 10.6796C19.9097 11.2403 18.9479 11.9666 18.1491 12.8573V10.4846V9.98464H17.6491H13.1546H12.6546V10.4846V37.5554V38.0554H13.1546H17.6491H18.1491V37.5554V22.5874C18.1491 19.8327 18.821 17.8175 20.087 16.4594C21.3933 15.0933 23.147 14.3932 25.4033 14.3932C27.6296 14.3932 29.3309 15.0784 30.5692 16.4076L30.5692 16.4076L30.5731 16.4118C31.8054 17.7044 32.46 19.6202 32.46 22.2417V37.5554V38.0554H32.96H37.4051ZM62.2556 11.3371L62.2525 11.339C60.2269 12.5409 58.6336 14.2402 57.4736 16.4234C56.3089 18.5825 55.7351 21.0869 55.7351 23.9212C55.7351 26.7246 56.3097 29.2429 57.4713 31.464C58.6301 33.6799 60.2222 35.4127 62.2471 36.6484L62.2503 36.6503C64.3071 37.8846 66.5863 38.5 69.0765 38.5C71.489 38.5 73.6203 37.9725 75.4534 36.9002L75.4593 36.8966C76.7401 36.1232 77.8065 35.1994 78.6521 34.1244V37.5554V38.0554H79.1521H83.696H84.196V37.5554V1V0.5H83.696H79.1521H78.6521V1V13.7734C77.7449 12.6987 76.605 11.8019 75.2398 11.0815C73.3545 10.0536 71.3138 9.54005 69.1259 9.54005C66.6068 9.54005 64.3127 10.137 62.2556 11.3371ZM74.303 15.6072L74.3029 15.6074L74.3151 15.6141C75.643 16.3555 76.697 17.437 77.478 18.8742C78.2546 20.3035 78.6521 21.9968 78.6521 23.9706C78.6521 25.9431 78.2551 27.6542 77.477 29.1182C76.6956 30.5556 75.6401 31.655 74.3089 32.4294C73.0061 33.1736 71.5619 33.5481 69.9655 33.5481C68.3699 33.5481 66.9264 33.1739 65.6241 32.4305C64.3264 31.657 63.2861 30.5578 62.5036 29.1185C61.726 27.6555 61.3284 25.9283 61.3284 23.9212C61.3284 21.9474 61.7258 20.2541 62.5024 18.8248C63.285 17.3846 64.3247 16.3028 65.6203 15.5623C66.9236 14.8174 68.3684 14.4426 69.9655 14.4426C71.5588 14.4426 73.0009 14.832 74.303 15.6072ZM115.838 26.1996H116.289L116.335 25.751C116.436 24.7809 116.486 23.858 116.486 22.9826C116.486 20.4387 115.926 18.148 114.795 16.1236C113.696 14.0647 112.114 12.4496 110.059 11.2846C107.999 10.117 105.64 9.54005 102.997 9.54005C100.288 9.54005 97.8637 10.1334 95.7386 11.333C93.6432 12.5014 92.0123 14.1866 90.8496 16.3756C89.6856 18.5671 89.112 21.1037 89.112 23.9706C89.112 26.84 89.7031 29.3937 90.9003 31.6175L90.9019 31.6204C92.0968 33.8058 93.7417 35.5044 95.8332 36.7047L95.8362 36.7064C97.9597 37.9054 100.351 38.5 102.997 38.5C106.284 38.5 109.224 37.8124 111.419 35.9617C111.972 35.4955 112.337 35.2104 112.597 35.0136C112.675 34.9551 112.746 34.9017 112.813 34.8521C112.96 34.7432 113.082 34.6521 113.187 34.5634C113.511 34.2906 113.738 33.988 114.426 33.0736L114.498 32.9786L114.826 32.5424L114.362 32.2537L112.329 30.9866L112.329 30.9865L112.321 30.9819L111.051 30.2216L110.684 30.0023L110.41 30.33C110.338 30.4166 110.271 30.4969 110.209 30.5717C109.709 31.171 109.509 31.4102 109.287 31.607C109.094 31.778 108.891 31.9113 108.45 32.2015C108.316 32.2897 108.16 32.3924 107.976 32.5151C106.686 33.3725 104.899 33.6963 102.997 33.6963C100.742 33.6963 98.838 32.9959 97.2565 31.6019C95.833 30.2903 94.9869 28.5044 94.748 26.1996H115.838ZM109.78 17.9064L109.783 17.9115C110.41 18.9201 110.765 20.1255 110.832 21.5441H94.8131C95.1068 19.3398 95.9475 17.635 97.3071 16.3876C98.8237 15.0263 100.645 14.3438 102.799 14.3438C104.308 14.3438 105.661 14.6576 106.868 15.2767L106.875 15.2801L106.881 15.2834C108.11 15.867 109.073 16.7384 109.78 17.9064ZM140.391 9.98464H140.041L139.921 10.3127L131.993 31.956L124.018 10.3118L123.897 9.98464H123.549H118.708H117.975L118.243 10.6672L128.862 37.738L128.986 38.0554H129.327H134.563H134.904L135.028 37.738L145.647 10.6672L145.915 9.98464H145.182H140.391ZM148.51 37.3161C149.199 38.0049 150.051 38.3518 151.037 38.3518C151.993 38.3518 152.815 38.0016 153.47 37.3112C154.155 36.6232 154.5 35.7723 154.5 34.7891C154.5 33.8058 154.155 32.9549 153.47 32.2669C152.815 31.5765 151.993 31.2263 151.037 31.2263C150.051 31.2263 149.199 31.5732 148.51 32.262C147.821 32.9508 147.474 33.8034 147.474 34.7891C147.474 35.7747 147.821 36.6273 148.51 37.3161Z"
                  fill="#222"
                  stroke="#222"
                />
              </svg>
            </Link>
            <button
              onClick={toggleTheme}
              className={
                theme === "light" ? "header-theme dark" : "header-theme light"
              }
            >
              {theme === "light" ? (
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z"
                      stroke="#000000"
                    ></path>{" "}
                    <path
                      d="M12 3.5V5.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M20.5 12H18.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M5.5 12H3.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M12 18.5V20.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 7.5L18 6"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 18L7.5 16.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 6L7.5 7.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 16.5L18 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </header>
          <Nav />
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}
