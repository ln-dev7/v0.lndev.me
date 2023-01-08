import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";
import { motion } from "framer-motion";
import { container, item } from "../animation";
export default function Header() {
  const router = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);
  const [open, setOpen] = useState(false);
  const openHeaderMenu = () => {
    const header: null | HTMLElement = document.querySelector(".header");
    const headerUl: null | HTMLElement = document.querySelector(".header ul");
    header?.classList.add("open");
    headerUl?.classList.add("open");
    setOpen(true);
  };
  const closeHeaderMenu = () => {
    const header: null | HTMLElement = document.querySelector(".header");
    const headerUl: null | HTMLElement = document.querySelector(".header ul");
    header?.classList.remove("open");
    headerUl?.classList.remove("open");
    setOpen(false);
  };
  return (
    <header className="header">
      <ul>
        <Link
          href="/"
          className={`${router.pathname == "/" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeHeaderMenu}
        >
          <li>Home</li>
        </Link>
        <Link
          href="/about"
          className={`${router.pathname == "/about" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeHeaderMenu}
        >
          <li>About</li>
        </Link>
        <Link
          href="/skills"
          className={`${router.pathname == "/skills" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeHeaderMenu}
        >
          <li>Skills</li>
        </Link>
        <Link
          href="/experience"
          className={`${router.pathname == "/experience" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeHeaderMenu}
        >
          <li>Experience</li>
        </Link>
        <Link
          href="/contact"
          className={`${router.pathname == "/contact" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={closeHeaderMenu}
        >
          <li>Contact</li>
        </Link>
      </ul>
      {!open ? (
        <div className="header-burger" onClick={openHeaderMenu}>
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
        <div className="header-burger" onClick={closeHeaderMenu}>
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
    </header>
  );
}
