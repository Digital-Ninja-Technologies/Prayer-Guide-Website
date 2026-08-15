"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import { LogoLockup } from "./Logo";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#rhythm", label: "How it works" },
  { href: "/#voices", label: "Stories" },
];

export function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("pg-landing-theme", next);
    } catch {
      // storage unavailable, theme just won't persist
    }
    setTheme(next);
  }

  const themeIcon = theme === "dark" ? "☀" : "☾";
  const themeLabel = theme === "dark" ? "Light" : "Dark";

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoLink}>
        <LogoLockup />
        <span className={styles.wordmark}>Prayer Guide</span>
      </Link>

      <div className={styles.right}>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
          <Link href="/#free" className={styles.linkFree}>
            Free
          </Link>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className={styles.themeToggle}
          >
            <span aria-hidden style={{ fontSize: 14, lineHeight: 1 }}>
              {themeIcon}
            </span>
            <span className={styles.themeToggleLabel}>{themeLabel}</span>
          </button>
          <Link href="/download" className={styles.cta}>
            Get the app
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.sheet}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.sheetLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#free"
            className={`${styles.sheetLink} ${styles.sheetLinkFree}`}
            onClick={() => setMenuOpen(false)}
          >
            Free
          </Link>
        </div>
      )}
    </nav>
  );
}
