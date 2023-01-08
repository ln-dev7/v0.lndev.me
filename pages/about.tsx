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
        <div className="about-left">
          <div className="about-left__title">
            <h2>About</h2>
          </div>
          <p className="about-left__text">
            Hey, my name is Leonel NGOYA but I am much better known as LN. I am
            a {age} year old frontend developer and web integrator from
            Cameroon, I’m passionate about creating beautiful, intuitive and
            responsive websites. I also like to listen to{" "}
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
          </p>
          <div className="about-left__links">
            <a
              href="#"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              Resume
            </a>
            <a
              href="https://testimonial.to/ln-dev/all"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              Testimonials
            </a>
          </div>
        </div>
        <div className="about-right">
          <div className="about-right__image">
            <Image
              src="/images/ln-pic.jpg"
              alt="leonel ngoya"
              width={200}
              height={200}
            />
          </div>
        </div>
      </main>
    </>
  );
}
