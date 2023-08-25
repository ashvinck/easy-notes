import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.greeting}>
          {/* ------ Greetings ---- */}
          <h1>
            <span className={styles.hello}>Hello,</span>
            <span className={styles.welcome}>Welcome to Easy Notes</span>
          </h1>
        </div>

        {/* ------ Image -------- */}
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/images/easynoteslanding.png'
            alt='Next.js Logo'
            width={600}
            height={600}
            priority
          />
        </div>
        {/* -------- Links to Notes -------- */}
        <div className={styles.actions}>
          <Link href='/notes'>
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
