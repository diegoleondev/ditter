import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  alt: string | null;
  className?: string;
  src: string | null;
}

export default function Avatar({ alt, className, src }: Props) {
  return (
    <Image
      className={`${styles.avatar} ${className}`}
      src={src ?? "/ditter-logo.png"}
      alt={alt ?? "Avatar"}
      width={44}
      height={44}
    />
  );
}
