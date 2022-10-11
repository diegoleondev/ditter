import Avatar from "components/Avatar";
import Button from "components/Button";
import { ImageIcon } from "icons";
import { ChangeEventHandler, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { User } from "types";
import styles from "./DweetPanel.module.scss";
interface Props {
  handleChange: ChangeEventHandler;
  handleSubmit: () => void;
  user: User;
  value: string;
}
export default function DweetPanel({
  handleChange,
  handleSubmit,
  user,
  value,
}: Props) {
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = textarea.current! as HTMLTextAreaElement;

    element.addEventListener("input", (event) => {
      const target = event.target as HTMLTextAreaElement;

      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    });
  }, []);

  return (
    <div className={styles.dweetPanel}>
      <div className={styles.dweetPanel__avatar}>
        <Avatar src={user.avatar} alt="avatar" size="large" />
      </div>
      <div className={styles.dweetPanel__content}>
        <main className={styles.dweetPanel__main}>
          <textarea
            className={styles.dweetPanel__textarea}
            ref={textarea}
            placeholder="¿Qué está pasando?"
            value={value}
            onChange={handleChange}
          ></textarea>
        </main>
        <footer className={styles.dweetPanel__footer}>
          <IconContext.Provider value={{ className: styles.icon }}>
            <nav className={styles.dweetPanel__nav}>
              <ImageIcon />
              <Button onClick={handleSubmit} layout="hug" label="Dweet" />
            </nav>
          </IconContext.Provider>
        </footer>
      </div>
    </div>
  );
}
