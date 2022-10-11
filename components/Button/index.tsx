import styles from "./Button.module.scss";

interface Props {
  size: "medium";
  icon?: any;
  label?: string;
  layout: "hug" | "fill" | "circle";
  justify: "center" | "start";
  variant: "primary" | "secondary";
  disabled: boolean;
  onClick: () => void;
}

const Wrapper = () => {};

export default function Button({
  size,
  icon,
  label,
  layout,
  justify,
  variant,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[`button--${size}`]} 
        ${styles[`button--${layout}`]}
        ${styles[`button--${justify}`]}
        ${styles[`button--${variant}`]}
      `}
      disabled={disabled}
      title={label}
      onClick={onClick}
    >
      {icon && <span className={styles.button__icon}>{icon}</span>}
      {label && <span className={styles.button__text}>{label}</span>}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  justify: "center",
  variant: "primary",
  disabled: false,
};
