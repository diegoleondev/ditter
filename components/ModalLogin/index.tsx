import ReactDOM from "react-dom";
import styles from "./ModalLogin.module.scss";

export interface PropsModal {
  onClose: () => void;
  onBlur?: () => void;
}

export default function ModalLogin({ onClose }: PropsModal) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return ReactDOM.createPortal(
    <div className={styles["modal-container"]}>
      <div className={styles["modal-login"]}>
        <header>
          <button onClick={onClose}>X</button>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </header>
        <form onSubmit={handleSubmit}></form>
      </div>
    </div>,
    document.getElementById("modal")!
  );
}
