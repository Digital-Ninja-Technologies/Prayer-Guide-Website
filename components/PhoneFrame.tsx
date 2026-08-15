import type { ReactNode } from "react";
import styles from "./PhoneFrame.module.css";

export function PhoneFrame({
  children,
  size = "large",
  float = false,
  glow,
}: {
  children: ReactNode;
  size?: "large" | "showcase";
  float?: boolean;
  glow?: string;
}) {
  return (
    <div className={styles.wrap}>
      {glow ? (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: size === "large" ? 0 : -30,
            background: `radial-gradient(circle at 50% 40%, ${glow}, transparent 62%)`,
            filter: "blur(10px)",
          }}
        />
      ) : null}
      <div
        className={`${styles.frame} ${size === "large" ? styles.frameLarge : styles.frameShowcase} ${
          float ? styles.frameFloat : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
