import { Reveal } from "@/components/Reveal";
import { features } from "@/lib/content";
import styles from "./Features.module.css";

type CardConfig = {
  span: "span7" | "span5" | "span4";
  large: boolean;
  iconBg: string;
  orb: string | null;
  accent?: boolean;
};

const cardConfig: CardConfig[] = [
  { span: "span7", large: true, iconBg: "rgba(232,179,107,.16)", orb: "rgba(232,179,107,.16)" },
  { span: "span5", large: false, iconBg: "rgba(91,194,179,.14)", orb: null },
  { span: "span4", large: false, iconBg: "rgba(91,194,179,.14)", orb: null },
  { span: "span4", large: false, iconBg: "rgba(91,194,179,.14)", orb: null },
  { span: "span4", large: false, iconBg: "rgba(91,194,179,.14)", orb: null },
  {
    span: "span7",
    large: true,
    iconBg: "rgba(91,194,179,.14)",
    orb: "rgba(91,194,179,.18)",
    accent: true,
  },
  { span: "span5", large: false, iconBg: "rgba(232,179,107,.16)", orb: null },
];

export function Features() {
  return (
    <section id="features" className={styles.section}>
      <Reveal>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Everything you need to be still</p>
            <h2 className={styles.h2}>A gentle structure for an unhurried faith</h2>
          </div>
          <a href="#rhythm" className={styles.seeHow}>
            See how it works
            <span className={styles.seeHowArrow}>→</span>
          </a>
        </div>
      </Reveal>

      <div className={styles.bento}>
        {features.map((f, i) => {
          const cfg = cardConfig[i];
          return (
            <Reveal
              key={f.title}
              delay={(i % 3) * 60}
              className={[
                styles.card,
                styles[cfg.span],
                cfg.large ? styles.cardLarge : "",
                cfg.accent ? styles.accentTeal : "",
              ].join(" ")}
            >
              {cfg.orb && (
                <div className={styles.orb} style={{ background: `radial-gradient(circle, ${cfg.orb}, transparent 68%)` }} />
              )}
              <div className={styles.cardTop}>
                <span className={styles.iconTile} style={{ background: cfg.iconBg }}>
                  {f.icon}
                </span>
                <span className={`mono ${styles.cardIndex}`}>{f.num}</span>
              </div>
              <h3 className={`${styles.cardTitle} ${cfg.large ? styles.cardTitleLarge : ""}`}>
                {f.title}
              </h3>
              <p className={`${styles.cardBody} ${cfg.large ? styles.cardBodyLarge : ""}`}>
                {f.body}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
