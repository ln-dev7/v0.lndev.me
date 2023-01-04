import "../styles/index.scss";
import Header from "../Components/Header";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence initial={false}>
      <MouseContextProvider>
        <Cursor />
        <Header />
        <Component key={router.pathname} {...pageProps} />
      </MouseContextProvider>
    </AnimatePresence>
  );
}
