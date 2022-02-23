import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Travel App</title>
        <meta
          name='description'
          content='Practive Travel App from Youtube Series'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Hero />
    </div>
  );
}
