import { Reveal } from "@/components/Reveal";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StoreButtons } from "@/components/StoreButtons";
import { HeroScreen } from "@/components/screens/HeroScreen";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div>
        <Reveal>
          <div className={styles.badge}>
            <span
              className={styles.badgeDot}
              style={{ animation: "glowpulse 2.4s ease-in-out infinite" }}
            />
            <span className={styles.badgeLabel}>Free on iOS &amp; Android</span>
          </div>
        </Reveal>
        <Reveal delay={40}>
          <h1 className={styles.h1}>
            A quiet place
            <br />
            to return to,
            <br />
            <span style={{ color: "var(--teal)" }}>each day.</span>
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className={styles.sub}>
            Guided prayers, daily scripture, and gentle reminders — a calm
            companion for a prayer life you can actually keep. No
            streaks to shame you. Only presence. Free to use — every
            feature, no subscription.
          </p>
        </Reveal>
        <Reveal delay={120} style={{ marginBottom: 0 }}>
          <div className={styles.ctaRow}>
            <StoreButtons />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <span className={styles.avatar} style={{ background: "#2E9488" }} />
              <span className={styles.avatar} style={{ background: "var(--amber)" }} />
              <span className={styles.avatar} style={{ background: "var(--surface2)" }} />
            </div>
            <div>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.proofLabel}>Loved by 1,000+ people at prayer</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80} style={{ display: "block" }}>
        <div className={styles.phoneCol}>
          <PhoneFrame size="large" float glow="rgba(91,194,179,.2)">
            <HeroScreen />
          </PhoneFrame>
        </div>
      </Reveal>
    </header>
  );
}
