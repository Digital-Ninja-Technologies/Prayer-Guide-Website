import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { freeFacts, marquee } from "@/lib/content";
import styles from "./FreePanel.module.css";

const stats = [
  { num: "$0", label: "Forever", color: "var(--text)" },
  { num: "0", label: "Ads shown", color: "var(--text)" },
  { num: "100%", label: "Unlocked", color: "var(--amber)" },
];

export function FreePanel() {
  return (
    <section id="free" className={styles.section}>
      <Reveal>
        <div className={styles.panel}>
          <div
            className={styles.orb}
            style={{ animation: "drift 11s ease-in-out infinite" }}
          />
          <div className={styles.grid}>
            <div className={styles.left}>
              <div className={styles.badge}>
                <span
                  className={styles.badgeDot}
                  style={{ animation: "glowpulse 2.4s ease-in-out infinite" }}
                />
                <span className={styles.badgeLabel}>Free to use</span>
              </div>
              <h2 className={styles.h2}>
                Every feature.
                <br />
                <span style={{ color: "var(--teal)" }}>No cost, no catch.</span>
              </h2>
              <p className={styles.body}>
                Prayer Guide is free for everyone. There is no paid tier, no
                trial that expires, and no feature held back.
              </p>
              <div className={styles.stats}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{ display: "flex", gap: 22 }}>
                    <div>
                      <div className={`mono ${styles.statNum}`} style={{ color: s.color }}>
                        {s.num}
                      </div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                    {i < stats.length - 1 && <div className={styles.statDivider} />}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.right}>
              {freeFacts.map((x) => (
                <div key={x.num} className={styles.fact}>
                  <span className={`mono ${styles.factNum}`}>{x.num}</span>
                  <div>
                    <div className={styles.factTitle}>{x.title}</div>
                    <div className={styles.factBody}>{x.body}</div>
                  </div>
                </div>
              ))}
              <Link href="/download" className={styles.downloadRow}>
                <span>Download it free</span>
                <span className={styles.downloadArrow}>→</span>
              </Link>
            </div>
          </div>

          <div className={styles.marqueeOuter}>
            <div
              className={styles.marqueeTrack}
              style={{ animation: "marquee 34s linear infinite" }}
            >
              {marquee.map((m, i) => (
                <span key={`${m}-${i}`} className={styles.marqueeItem}>
                  {m}
                  <span className={styles.marqueeSep}>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
