import style from "./Input.module.scss";

interface InputProps {
  type: "text" | "password" | "email" | "number";
  name: string;
  value?: string;
  placeholder: string;
  message?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <label className={style.input}>
      <p className={style.placeholder}>{placeholder}</p>
      <input type={type} value={value} name={name} onChange={onChange} />
      <p className={style.message}>{style.message}</p>
    </label>
  );
}

Input.defaultProps = {
  placeholder: "Input",
};
