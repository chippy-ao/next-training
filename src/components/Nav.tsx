import Link from "next/link";
import clsx from "clsx";

export const Nav = () => {
  return (
    <nav>
      <ul className={clsx("flex", "gap-8")}>
        <li>
          <Link href="/" className={clsx("hover:text-accent")}>
            CUBE
          </Link>
        </li>
        <li>
          <Link href="/about" className={clsx("hover:text-accent")}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className={clsx("hover:text-accent")}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Nav.displayName = "Nav";
