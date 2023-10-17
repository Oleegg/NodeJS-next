import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import Image from "next/image";
import nextLogo from "../../../public/next.svg";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Contacts", path: "/contacts" },
  { id: 3, title: "Posts", path: "/posts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={nextLogo} alt="NextJS" width={100} />
      </div>
      <ul className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={pathname === path ? styles.active : null}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
