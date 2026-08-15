import type { Metadata } from "next";
import { AmbientOrb } from "@/components/AmbientOrb";
import { StoreButtons, AppleIcon, PlayIcon } from "@/components/StoreButtons";
import { QrCode } from "@/components/QrCode";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Download — Prayer Guide",
  description: "Scan, install, and be still. Get Prayer Guide free on iOS and Android.",
};

const stores = [
  {
    label: "iOS · iPhone & iPad",
    name: "App Store",
    note: "Requires iOS 16 or later. Free, with every feature included.",
    url: APP_STORE_URL,
    iconBg: "#ECEAE3",
    icon: <AppleIcon />,
  },
  {
    label: "Android · phone & tablet",
    name: "Google Play",
    note: "Requires Android 9 or later. Free, with every feature included.",
    url: PLAY_STORE_URL,
    iconBg: "#0E1513",
    icon: <PlayIcon />,
  },
];

export default function DownloadPage() {
  return (
    <div className={styles.wrap}>
      <AmbientOrb
        style={{
          top: -220,
          right: -160,
          width: 460,
          height: 460,
          background: "radial-gradient(circle, rgba(91,194,179,.16), transparent 62%)",
          animation: "drift 14s ease-in-out infinite",
        }}
      />
      <AmbientOrb
        style={{
          bottom: -220,
          left: -180,
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(232,179,107,.13), transparent 64%)",
          animation: "drift 18s ease-in-out infinite",
        }}
      />

      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeLabel}>Free to download</span>
            </div>
            <h1 className={styles.h1}>
              Scan, install,
              <br />
              and <span style={{ color: "var(--teal)" }}>be still.</span>
            </h1>
            <p className={styles.sub}>
              Point your camera at the code for your device. You&rsquo;ll be
              at prayer in under a minute.
            </p>

            <StoreButtons />

            <div className={styles.rating}>
              <div className={styles.stars}>★★★★★</div>
              <span className={styles.ratingLabel}>4.9 · loved by 1,000+ at prayer</span>
            </div>
          </div>

          <div className={styles.storeCards}>
            {stores.map((s) => (
              <div key={s.name} className={styles.storeCard}>
                <div className={styles.qrTile}>
                  <QrCode data={s.url} />
                </div>
                <div className={styles.storeInfo}>
                  <div className={styles.storeLabelRow}>
                    <span className={styles.storeIcon} style={{ background: s.iconBg }}>
                      {s.icon}
                    </span>
                    <span className={styles.storeLabel}>{s.label}</span>
                  </div>
                  <h3 className={styles.storeName}>{s.name}</h3>
                  <p className={styles.storeNote}>{s.note}</p>
                </div>
              </div>
            ))}
            <p className={styles.hint}>Open your camera and point it at a code to install.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
