import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Contact() {
  const { cursorChangeHandler } = useContext(MouseContext);
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
        <div>
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Let's Talk
          </motion.h1>
        </div>
        <div>
          <div>
            <h4>Find me:</h4>
          </div>
          <div>
            <motion.ul variants={container} initial="hidden" animate="show">
              <div>
                <motion.li variants={item}>
                  <Link href="https://twitter.com">Twitter </Link>
                </motion.li>
              </div>
              <div>
                <motion.li variants={item}>
                  <Link href="https://instagramotion.com">Instagram</Link>
                </motion.li>
              </div>
              <div>
                <motion.li variants={item}>
                  <Link href="https://dribbble.com"> Dribbble</Link>
                </motion.li>
              </div>
              <div>
                <motion.li variants={item}>
                  <Link href="https://gmail.com"> Email</Link>
                </motion.li>
              </div>
            </motion.ul>
          </div>
        </div>
      </motion.main>
    </>
  );
}
