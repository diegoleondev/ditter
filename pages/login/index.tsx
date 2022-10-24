import { Button, DitterByDiegoLeon } from "components";
import { useUser } from "context/UserContext";
import useAuth from "hooks/useAuth";
import { AppleIcon, GoogleIcon } from "icons";
import Head from "next/head";
import { useState } from "react";
import styles from "styles/Login.module.scss";

export default function Login() {
  const user = useUser();
  const auth = useAuth();

  const [error, setError] = useState<string | null>(null);

  const handleSignInWithGoogle = () =>
    auth
      .signInWithGoogle()
      .catch(() =>
        setError("Error al iniciar sesión en Google, inténtalo de nuevo.")
      );

  return user.protectedContent(
    "LOGGED_OUT",
    <div className={styles.login}>
      <Head>
        <title>Login / Ditter</title>
      </Head>
      <div className={`${styles.login__content}`}>
        <DitterByDiegoLeon />
        <div className={`${styles.section} ${styles["section--full"]}`}>
          <h1 className={styles.section__title}>Lo que está pasando ahora</h1>
          <h2 className={styles.section__subtitle}>Únete a Ditter hoy mismo</h2>
          <nav className={styles.buttonbar}>
            <Button
              onClick={handleSignInWithGoogle}
              icon={<GoogleIcon />}
              label="Registrarse con Google"
              variant="secondary"
              layout="fill"
            />
            <Button
              onClick={() => console.log("proximamente")}
              icon={<AppleIcon />}
              label="Registrarse con Apple"
              variant="secondary"
              disabled={true}
              layout="fill"
            />
            <hr />
            <Button
              label="Usar Correo Electrónico"
              onClick={() => console.log("proximamente")}
              disabled={true}
              layout="fill"
            />
          </nav>
          {error && <p>{error}</p>}
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
        <div className={styles.section}>
          <h2 className={styles.section__subtitle}>Github</h2>
          <p className={styles.section__paragraph}>Puedes descarga el codigo</p>
        </div>
      </div>
    </div>
  );
}
