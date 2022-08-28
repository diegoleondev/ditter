import { Button } from "components";
import { useUser } from "context/UserContext";
import useAuth from "hooks/useAuth";
import { AppleIcon, GoogleIcon } from "icons";
import styles from "styles/Login.module.scss";

export default function Login() {
  const user = useUser();
  const auth = useAuth();

  return user.protectedContent(
    "LOGGED_OUT",
    <div className={styles.login}>
      <div className={`${styles.login__content}`}>
        <div className={`${styles.section} ${styles["section--full"]}`}>
          <h1 className={styles.section__title}>Lo que está pasando ahora</h1>
          <h2 className={styles.section__subtitle}>Únete a Ditter hoy mismo</h2>
          <nav className={styles.buttonbar}>
            <Button
              onClick={auth.signInWithGoogle}
              icon={<GoogleIcon />}
              label="Registrarse con Google"
              variant="secondary"
            />
            <Button
              onClick={() => console.log("proximamente")}
              icon={<AppleIcon />}
              label="Registrarse con Apple"
              variant="secondary"
              disabled={true}
            />
            <hr />
            <Button
              label="Usar Correo Electrónico"
              onClick={() => console.log("proximamente")}
              disabled={true}
            />
          </nav>
        </div>
        <div className={styles.login__heroimage}></div>
        <div className={styles.section}>
          <h2 className={styles.section__subtitle}> ¿Que es Ditter?</h2>
          <p className={styles.section__paragraph}>
            Ditter es un clon de Twitter Open Source desarrollado por Diego Leon
            con fines educativos.
            <br />
            <br />
            Ditter se basa en el proyecto{" "}
            <a href="https://github.com/midudev/curso-nextjs-twitter-clone">
              devter
            </a>
            , desarrollado por <a href="https://midu.dev/">Midudev</a>
          </p>
        </div>
      </div>
    </div>
  );
}
