import { useUser } from "context/UserContext";
import { useViewport } from "context/ViewportContext";
import { Stars } from "icons";
import Head from "next/head";
import { useEffect } from "react";
import { auth } from "services/firebase";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const user = useUser();
  //const auth = useAuth();
  const viewport = useViewport();

  useEffect(() => {
    console.log(viewport.size);
  }, [viewport.size]);

  return user.protectedContent(
    "LOGGED_IN",
    <div className={styles.home}>
      <Head>
        <title>Inicio / Ditter</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header className="header">
        {/* <Avatar
          className="hidden-tablet"
          src={user.data.avatar}
          alt={user.data.name}
        /> */}
        <h2>Inicio</h2>
        <Stars />
      </header>

      <main className="main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        dignissimos soluta id facilis quam officia obcaecati ipsum? Quam iure
        itaque ut molestias non dolore necessitatibus aperiam, nemo
        voluptatibus, ea deleniti.
        <button onClick={() => auth.signOut()}>logout</button>
      </main>
    </div>
  );
};

export default Home;
