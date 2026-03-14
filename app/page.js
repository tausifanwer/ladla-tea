import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <div className={styles.logoWrap}>
          <Image
            src="/logo.jpeg"
            alt="Ladla Tea"
            width={110}
            height={110}
            className={styles.logo}
            priority
          />
        </div>

        <h1 className={styles.brand}>LADLA TEA</h1>

        <p className={styles.coming}>We are Coming Soon</p>

        <div className={styles.line} />

        <p className={styles.about}>
          Ladla Tea is a premium Indian tea brand dedicated to bringing
          you the finest hand-picked leaves — full of warmth, aroma,
          and tradition in every cup.
        </p>

        <p className={styles.desc}>
          From the lush green valleys to your kitchen, our teas are
          carefully sourced, blended, and crafted to deliver an
          authentic experience that feels like home.
        </p>

      </div>
    </main>
  );
}