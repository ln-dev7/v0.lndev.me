import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2003, 10, 20);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Leonel NGOYA | About</title>
        <meta
          name="description"
          content="
    I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
    "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        {/* <div className="about-illus">
          <Image
            src="/illustrations/1.png"
            alt="illustration"
            width={200}
            height={200}
            
          />
        </div> */}
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            Hey, my name is Leonel NGOYA but I am much better known as LN. I am
            a FrontEnd Engineer, Web Integrator and{" "}
            <a
              href="https://www.awwwards.com/jury-member/ln-dev"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              Awwwards Young Jury
            </a>{" "}
            from Cameroon, I’m passionate about creating beautiful, intuitive
            and responsive websites. I also like to listen to{" "}
            <a
              href="https://open.spotify.com/playlist/2akHeWgVqLdf453oKj4lPH?si=ZdA5H7VMTm2OtjfdxFiEtg"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              music
            </a>{" "}
            and in my spare time I often write{" "}
            <a
              href="https://laravel.cm/user/ln-dev7"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              articles
            </a>{" "}
            about development and I also make{" "}
            <a
              href="https://www.youtube.com/c/LNDev"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              youtube videos
            </a>
          </motion.p>
          <div className="about-left__langs">
            <motion.h3 variants={item}>LANGUAGES</motion.h3>
            <motion.li variants={item}>
              <span>French</span>
              <span>Native</span>
            </motion.li>
            <motion.li variants={item}>
              <span>Italian</span>
              <span>Fluent</span>
            </motion.li>
            <motion.li variants={item}>
              <span>English</span>
              <span>Basic</span>
            </motion.li>
          </div>
          <div className="about-left__links">
            <motion.a
              variants={item}
              href="https://drive.google.com/file/d/1yYlEicWb4syCYfJDgkY7MESFpJTLyXdW/view?usp=sharing"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>{" "}
              Resume
            </motion.a>
            <motion.a
              variants={item}
              href="https://testimonial.to/ln-dev/all"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>{" "}
              Testimonials
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="about-right"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: "25%", opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="about-right__image">
            <Image
              src="/images/ln-dev.jpg"
              alt="leonel ngoya"
              width={3024}
              height={4032}
            />
          </div>
        </motion.div>
      </main>
    </>
  );
}
