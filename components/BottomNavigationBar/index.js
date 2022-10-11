import { HomeIcon, MessageIcon, NotificationsIcon, SearchIcon } from "icons";
import Link from "next/link";
import { IconContext } from "react-icons";
import styles from "./BottomNavigationBar.module.scss";
export default function BottomNavigationBar() {
  return (
    <IconContext.Provider value={{ className: styles.icons }}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.nav__link}>
            <HomeIcon />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.nav__link}>
            <SearchIcon />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.nav__link}>
            <NotificationsIcon />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.nav__link}>
            <MessageIcon />
          </a>
        </Link>
      </nav>
    </IconContext.Provider>
  );
}
