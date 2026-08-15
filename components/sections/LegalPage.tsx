import Link from "next/link";
import { AmbientOrb } from "@/components/AmbientOrb";
import type { LegalSection } from "@/lib/content";
import styles from "./Legal.module.css";

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  summaryLead,
  summaryBody,
  sections,
  crossLink,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  summaryLead: string;
  summaryBody: string;
  sections: LegalSection[];
  crossLink: { title: string; href: string; label: string };
}) {
  return (
    <div className={styles.wrap}>
      <AmbientOrb
        style={{
          top: -220,
          right: -160,
          width: 460,
          height: 460,
          background: "radial-gradient(circle, rgba(91,194,179,.14), transparent 62%)",
          animation: "drift 14s ease-in-out infinite",
        }}
      />
      <main className={styles.main}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.effective}>{effectiveDate}</p>

        <div className={styles.summary}>
          <p className={styles.summaryLead} style={summaryBody ? undefined : { marginBottom: 0 }}>
            {summaryLead}
          </p>
          {summaryBody && <p className={styles.summaryBody}>{summaryBody}</p>}
        </div>

        <div className={styles.sections}>
          {sections.map((s) => (
            <section key={s.num} className={styles.section}>
              <span className={`mono ${styles.sectionNum}`}>{s.num}</span>
              <div>
                <h2 className={styles.sectionTitle}>{s.title}</h2>
                <div className={styles.sectionParas}>
                  {s.paras.map((p, i) => (
                    <p key={i} className={styles.sectionPara}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className={styles.crossLink}>
          <p className={styles.crossLinkTitle}>{crossLink.title}</p>
          <Link href={crossLink.href} className={styles.crossLinkButton}>
            {crossLink.label}
            <span>→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
