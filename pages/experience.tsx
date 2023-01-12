import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
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
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image: string;
  }

  const works: Work[] = [
    {
      name: "Mboa Digital",
      url: "https://www.mboadigital.tech/",
      position: "Front-end Developer",
      location: "Yaoundé, Cameroon",
      date: "2022 - Present",
      description:
        "More than a front-end developer, I am here a Digital consultant. My goal is to design robust web applications with good UI/UX. While working as a team.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "Freelance",
      position: "Front-end Developer",
      location: "Remote",
      date: "From June 2021",
      description:
        " a freelancer I have worked for many independent clients and agencies around the world, especially in the position of front-end developer and also web integrator, my goal is to create robust web applications with a good UI/UX.",
    },
    {
      name: "AfritechHub",
      url: "https://afritechh.com/",
      position: "Web Trainer",
      location: "Douala",
      date: "April 2021",
      description:
        "For two weeks I trained students to become apprentices in web development including the basics of HTML5 CSS3 JavaScript.",
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
  const sideProjects: PersonalWork[] = [
    {
      name: "LNUI",
      url: "https://lnui.vercel.app/",
      image: "/projects/lnui.png",
    },
    {
      name: "Cameroon Portfolios",
      url: "https://cameroon-portfolios.vercel.app/",
      image: "/projects/camer-portfolio.png",
    },
    {
      name: "Web App Photography",
      url: "https://webappphotography.leonelngoya.com/",
      image: "/projects/1.png",
    },
    {
      name: "Queen Elizabeth II",
      url: "https://queenelizabeth2.leonelngoya.com/",
      image: "/projects/2.png",
    },
    {
      name: "Canon Yaounde",
      url: "https://canon-yaounde.leonelngoya.com/",
      image: "/projects/3.png",
    },
    {
      name: "Flutter Cameroon",
      url: "https://flutter-cameroon.leonelngoya.com/",
      image: "/projects/4.png",
    },
    {
      name: "Peef Dev",
      url: "https://peef.leonelngoya.com/",
      image: "/projects/5.png",
    },
    {
      name: "CamerDjoss",
      url: "https://camer-djoss.leonelngoya.com/",
      image: "/projects/6.png",
    },
    {
      name: "ESF Website",
      url: "https://esf-website.leonelngoya.com/",
      image: "/projects/7.png",
    },
    {
      name: "Warifa",
      url: "https://warfira.leonelngoya.com/",
      image: "/projects/8.png",
    },
    {
      name: "App Formation",
      url: "https://app-formation.leonelngoya.com/",
      image: "/projects/9.png",
    },
    {
      name: "Monarc",
      url: "https://monarc.leonelngoya.com/",
      image: "/projects/10.png",
    },
    {
      name: "Cameroon Logo",
      url: "https://cmr-logo-inte.vercel.app/",
      image: "/projects/11.png",
    },
    {
      name: "Star Wars",
      url: "https://star-wars-lime.vercel.app/",
      image: "/projects/12.png",
    },
    {
      name: "Space Tourism",
      url: "https://space-tourism-ln-dev7.vercel.app/",
      image: "/projects/13.png",
    },
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };
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
        <div className="page__lines"></div>
        <motion.div
          className="experience-works"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="experience-works__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Works
            </motion.h2>
          </div>
          <ul className="experience-works__cards">
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
        <motion.div
          className="experience-personal"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="experience-personal__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
          <div className="experience-personal__cards">
            <div className="personal-view">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={imageName}
                  width={500}
                  height={500}
                />
              )}
            </div>
            <ul className="personal-lists">
              {sideProjects.map((project, index) => (
                <li key={index}>
                  <Link
                    href={project.url}
                    passHref
                    onMouseEnter={() => {
                      cursorChangeHandler("hovered");
                      handleMouseEnter(project.image, project.name);
                    }}
                    onMouseLeave={() => {
                      cursorChangeHandler("");
                      handleMouseLeave();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <span>{project.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="experience-personal__seemore">
            <Link
              href="https://github.com/ln-dev7?tab=repositories"
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
              <span>See more on GitHub</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
