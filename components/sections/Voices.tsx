import { Reveal } from "@/components/Reveal";
import { voices } from "@/lib/content";
import styles from "./Voices.module.css";

export function Voices() {
  return (
    <section id="voices" className={styles.section}>
      <Reveal>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stories from the still</p>
          <h2 className={styles.h2}>A rhythm that stayed</h2>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {voices.map((v, i) => (
          <Reveal key={v.name} delay={i * 60} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>&ldquo;{v.quote}&rdquo;</p>
            <div className={styles.attribution}>
              <span className={styles.initial} style={{ background: v.tint }}>
                {v.initial}
              </span>
              <div>
                <div className={styles.name}>{v.name}</div>
                <div className={styles.role}>{v.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
