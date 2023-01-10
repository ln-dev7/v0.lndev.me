import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import useMousePosition from "../Components/Cursor/UseMousePosition";

export default function Contact() {
  const { cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const illusRef = useRef(null);

  useEffect(() => {
    const illus: null | HTMLElement = document.querySelector(".contact-illus");
    if (illus) {
      illus.style.transform = `rotate(${x}deg) translateX(-30px) rotate(${y}deg)`;
    }
  }, []);

  useEffect(() => {
    const illus: null | HTMLElement = document.querySelector(".contact-illus");
    window.addEventListener("mousemove", (e) => {
      if (illus) {
        illus.style.transform = `rotate(${
          (e.clientX - x) / 100
        }deg) translateX(-30px) rotate(${(e.clientY - y) / 100}deg)`;
      }
    });
  }, [illusRef.current]);

  return (
    <>
      <Head>
        <title>Leonel NGOYA | Contact</title>
        <meta
          name="description"
          content="
    I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
    "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        className="contact"
      >
        <div className="contact-illus">
          <Image
            src="/illustrations/3.png"
            alt="illustration"
            width={2160}
            height={2160}
            ref={illusRef}
          />
        </div>
        <div className="page__lines"></div>
        <div className="contact-title">
          <motion.h2
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Contact
          </motion.h2>
        </div>
        <div className="contact-infos">
          <div className="contact-infos__left">
            <div>
              <h4>Email</h4>
              <a href="mailto:me@leonelngoya.com">me@leonelngoya.com</a>
            </div>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/ln-dev7/">ln-dev7</a>
            </div>
          </div>
          <motion.div
            className="contact-infos__right"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h4>Social Medias :</h4>
            <div>
              <motion.li variants={item}>
                <Link href="https://twitter.com/ln_dev7">Twitter</Link>
              </motion.li>
            </div>
            <div>
              <motion.li variants={item}>
                <Link href="https://www.linkedin.com/in/lndev/">LinkedIn</Link>
              </motion.li>
            </div>
            <div>
              <motion.li variants={item}>
                <Link href="https://www.youtube.com/c/LNDev">YouTube</Link>
              </motion.li>
            </div>
            <div>
              <motion.li variants={item}>
                <Link href="https://www.instagram.com/ln_dev7">Instagram</Link>
              </motion.li>
            </div>
            <div>
              <motion.li variants={item}>
                <Link href="https://www.twitch.tv/ln_dev7">Twitch</Link>
              </motion.li>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
