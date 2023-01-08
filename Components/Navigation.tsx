import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";
import { motion } from "framer-motion";
import { container, item } from "../animation";
export default function Navigation() {
  const router = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);
  const [open, setOpen] = useState(false);
  const openNavMenu = () => {
    const nav: null | HTMLElement = document.querySelector(".nav");
    const navUl: null | HTMLElement = document.querySelector(".nav ul");
    nav?.classList.add("open");
    navUl?.classList.add("open");
    setOpen(true);
  };
  const closeNavMenu = () => {
    const nav: null | HTMLElement = document.querySelector(".nav");
    const navUl: null | HTMLElement = document.querySelector(".nav ul");
    nav?.classList.remove("open");
    navUl?.classList.remove("open");
    setOpen(false);
  };
  return (
    <nav className="nav">
      <ul>
        <Link
          href="/"
          className={`${router.pathname == "/" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeNavMenu}
        >
          <li>Home</li>
        </Link>
        <Link
          href="/about"
          className={`${router.pathname == "/about" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeNavMenu}
        >
          <li>About</li>
        </Link>
        <Link
          href="/skills"
          className={`${router.pathname == "/skills" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeNavMenu}
        >
          <li>Skills</li>
        </Link>
        <Link
          href="/experience"
          className={`${router.pathname == "/experience" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeNavMenu}
        >
          <li>Experience</li>
        </Link>
        <Link
          href="/contact"
          className={`${router.pathname == "/contact" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeNavMenu}
        >
          <li>Contact</li>
        </Link>
      </ul>
      {!open ? (
        <div className="nav-burger" onClick={openNavMenu}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="style=linear">
                {" "}
                <g id="menu-hotdog">
                  {" "}
                  <path
                    id="vector"
                    d="M5 6H19"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_2"
                    d="M3 12H21"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_3"
                    d="M5 18H19"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      ) : (
        <div className="nav-burger" onClick={closeNavMenu}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="style=linear">
                {" "}
                <g id="close">
                  {" "}
                  <path
                    id="vector"
                    d="M6.75024 6.74512L17.2551 17.25"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_2"
                    d="M17.255 6.74512L6.75006 17.2499"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      )}
    </nav>
  );
}
