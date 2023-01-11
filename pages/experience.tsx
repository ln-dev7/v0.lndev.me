import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
  }

  const works: Work[] = [
    {
      name: "Mboa Digital",
      url: "https://www.mboadigital.tech/",
      position: "Front-end Developer",
      location: "Yaoundé, Cameroon",
      date: "2022 - Present",
      description:
        "I'm currently working as a Front-end Developer & Web Integrator at Mboa Digital, a digital agency based in Kinshasa, DRC. I'm responsible for creating and maintaining the front-end of the websites and web applications that we develop for our clients.",
    },
  ];
  const interships: Work[] = [
    {
      name: "Mboa Digital",
      url: "https://www.mboadigital.tech/",
      position: "Front-end Developer",
      location: "Yaoundé, Cameroon",
      date: "June 2022 - August 2022",
      description:
        "During this internship my main goal was the development of websites respecting very specific designs, it allowed me to increase my skills in ReactJS and also to work better in a team.",
    },
    {
      name: "LOHCE",
      url: "https://lohce.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "April 2022 - June 2022",
      description:
        "The main goal of this internship was to create a prototype chat bot to help people buy a travel ticket online.",
    },
    {
      name: "Genuka",
      url: "https://genuka.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "March 2022 - May 2022",
      description:
        "The main goal was the implementation of templates for Genuka stores through their API, I was also to form a team of two people for the accomplishment of this said task.",
    },
  ];
  return (
    <>
      <Head>
        <title>Leonel NGOYA | Experience</title>
        <meta
          name="description"
          content="
        I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="experience">
        <motion.div
          className="skills-certif"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="skills-certif__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Works
            </motion.h2>
          </div>
          <ul className="skills-certif__cards">
            {works.map((work, index) => (
              <motion.li key={index} variants={skillsItem}>
                {work.url && (
                  <Link
                    href={work.url}
                    passHref
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
                    </svg>
                    <span>{work.name}</span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </>
  );
}
