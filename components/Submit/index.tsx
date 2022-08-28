import styles from "./Submit.module.scss";

interface Props {
  size: "large";
  label: string;
  variant: "black";
  wrapper: "full";
  disabled: boolean;
  onClick: () => void;
}

export default function Submit({ size, label, variant, wrapper }: Props) {
  return (
    <input
      className={`
        ${styles.submit} 
        ${styles[`submit--${size}`]} 
        ${styles[`submit--${variant}`]}
        ${styles[`submit--${wrapper}`]}
      `}
      type="submit"
      value={label}
    />
  );
}

Submit.defaultProps = {
  size: "large",
  label: "Submit",
  variant: "black",
  wrapper: "full",
  disabled: false,
  onClick: () => console.log("Click"),
};
