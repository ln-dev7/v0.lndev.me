import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
export default function Header() {
  const router = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <header className="header">
      <ul>
        <Link
          href="/"
          className={`${router.pathname == "/" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <li>Home</li>
        </Link>
        <Link
          href="/about"
          className={`${router.pathname == "/about" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <li>About</li>
        </Link>
        <Link
          href="/skills"
          className={`${router.pathname == "/skills" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <li>Skills</li>
        </Link>
        <Link
          href="/experience"
          className={`${router.pathname == "/experience" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <li>Experience</li>
        </Link>
        <Link
          href="/contact"
          className={`${router.pathname == "/contact" ? "active" : ""}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}