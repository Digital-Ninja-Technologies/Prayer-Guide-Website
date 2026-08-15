import { Reveal } from "@/components/Reveal";
import { PhoneFrame } from "@/components/PhoneFrame";
import { screenComponents } from "@/components/screens";
import { showcases } from "@/lib/content";
import styles from "./Showcase.module.css";

export function Showcase() {
  return (
    <section id="rhythm" className={styles.section}>
      {showcases.map((sc) => {
        const Screen = screenComponents[sc.screen];
        return (
          <Reveal key={sc.step}>
            <div className={`${styles.row} ${sc.textFirst ? "" : styles.reverse}`}>
              <div className={styles.textCol}>
                <span className={styles.step}>{sc.step}</span>
                <h3 className={styles.title}>{sc.title}</h3>
                <p className={styles.body}>{sc.body}</p>
                <ul className={styles.points}>
                  {sc.points.map((p) => (
                    <li key={p} className={styles.point}>
                      <span className={styles.check}>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.phoneCol}>
                <PhoneFrame size="showcase" glow={sc.glow}>
                  <Screen />
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
