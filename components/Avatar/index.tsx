import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  alt: string | null;
  src: string | null;
  size: "small" | "medium" | "large";
}

export default function Avatar({ alt, src, size }: Props) {
  return (
    <div className={`${styles.avatar} ${styles[`avatar--${size}`]}`}>
      <Image
        src={src ?? "/avatar-placeholder.jpg"}
        alt={alt ?? "Avatar"}
        layout="fill"
      />
    </div>
  );
}
