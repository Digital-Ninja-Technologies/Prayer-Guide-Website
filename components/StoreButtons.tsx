import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/content";
import styles from "./StoreButtons.module.css";

export function AppleIcon({
  className,
  color = "var(--bg)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
        fill="#00C3FF"
      />
      <path d="M3.609 1.814 16.802 8.88 13.792 12z" fill="#00E676" />
      <path d="M3.61 22.186 16.802 15.12 13.792 12z" fill="#FF3D00" />
      <path
        d="M16.802 8.88 20.317 10.906c.877.534.877 1.703 0 2.208L16.802 15.12 13.792 12z"
        fill="#FFD500"
      />
    </svg>
  );
}

export function StoreButtons() {
  return (
    <div className={styles.row}>
      <div className={styles.appleWrap}>
        <span className={styles.comingSoon}>Coming soon</span>
        <div
          aria-disabled="true"
          className={`${styles.button} ${styles.apple} ${styles.disabled}`}
        >
          <AppleIcon className={styles.icon} />
          <div className={styles.textBlock}>
            <div className={styles.subLabel}>Download on the</div>
            <div className={styles.mainLabel} style={{ color: "var(--bg)" }}>
              App Store
            </div>
          </div>
        </div>
      </div>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.play}`}
      >
        <PlayIcon className={styles.icon} />
        <div className={styles.textBlock}>
          <div className={styles.subLabel}>Get it on</div>
          <div className={styles.mainLabel}>Google Play</div>
        </div>
      </a>
    </div>
  );
}
