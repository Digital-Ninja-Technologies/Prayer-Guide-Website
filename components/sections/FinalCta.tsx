import { Reveal } from "@/components/Reveal";
import { StoreButtons } from "@/components/StoreButtons";
import { FlameMark } from "@/components/Logo";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section id="get" className={styles.section}>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.orb} />
          <div className={styles.content}>
            <FlameMark size={48} />
            <h2 className={styles.h2}>Begin your quietest habit today</h2>
            <p className={styles.body}>
              Join 1,000+ people returning, each day, to a place of stillness.
              Free to download and free to keep.
            </p>
            <div className={styles.buttons}>
              <StoreButtons />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
