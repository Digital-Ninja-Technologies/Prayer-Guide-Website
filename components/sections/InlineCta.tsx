import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import styles from "./InlineCta.module.css";

export function InlineCta({ copy }: { copy: string }) {
  return (
    <Reveal>
      <div className={styles.wrap}>
        <div className={styles.row}>
          <p className={styles.copy}>{copy}</p>
          <div className={styles.right}>
            <span className={styles.freeLabel}>Free forever</span>
            <Link href="/download" className={styles.button}>
              Download free<span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
