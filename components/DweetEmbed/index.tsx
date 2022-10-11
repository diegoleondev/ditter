import Avatar from "components/Avatar";
import styles from "./DweetEmbed.module.scss";

interface Props {
  avatar: string;
  username: string;
  nickname: string;
  content: string;
  timeago: string;
}

export default function DweetEmbed({
  avatar,
  username,
  nickname,
  content,
  timeago,
}: Props) {
  return (
    <div className={styles.dweetEmbed}>
      <div className={styles.dweetEmbed__avatar}>
        <Avatar src={avatar} alt={username} size="medium" />
      </div>
      <main className={styles.dweetEmbed__main}>
        <header className={styles.dweetEmbed__header}>
          <span className={styles.dweetEmbed__username}>{username}</span>
          <span className={styles.dweetEmbed__metadata}>
            <span className={styles.dweetEmbed__nickname}>{nickname}</span>
            <span>·</span>
            <span className={styles.dweetEmbed__timeago}>{timeago}</span>
          </span>
        </header>
        <p className={styles.dweetEmbed__content}>{content}</p>
      </main>
    </div>
  );
}
