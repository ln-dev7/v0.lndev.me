import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <ul className="flex gap-12">
        <Link href="/">
          <li
            className={`cursor-pointer ${
              router.pathname == "/" ? "underline" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`cursor-pointer ${
              router.pathname == "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </header>
  );
}
