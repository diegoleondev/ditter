import { DiegoLeonIcon, DitterSmallIcon } from "icons";
import styles from "./styles.module.scss";

export default function DitterByDiegoLeon() {
  return (
    <header className={styles.header}>
      <DitterSmallIcon className={styles.header__icon} />
      x
      <DiegoLeonIcon className={styles.header__icon} />
    </header>
  );
}
