import Link from "next/link";
import styles from "./Footer.module.css";
import { FlameMark } from "./Logo";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <FlameMark size={26} />
        <span className={styles.wordmark}>Prayer Guide</span>
        <span className={styles.tagline}>© 2026 · Be still.</span>
      </div>
      <div className={styles.links}>
        <Link href="/#features" className={styles.link}>
          Features
        </Link>
        <Link href="/#voices" className={styles.link}>
          Stories
        </Link>
        <Link href="/#free" className={styles.link}>
          Free
        </Link>
        <Link href="/privacy" className={styles.link}>
          Privacy
        </Link>
        <Link href="/terms" className={styles.link}>
          Terms
        </Link>
      </div>
    </footer>
  );
}
