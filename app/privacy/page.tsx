import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { privacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — Prayer Guide",
  description: "Your prayers stay yours. How Prayer Guide collects, encrypts, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your prayers stay yours."
      effectiveDate="Effective August 2026"
      summaryLead="Your journal is end-to-end encrypted — we cannot read it, even if we wanted to. We don't sell your data, we don't show ads, and we don't use your prayers or journal to train any AI model."
      summaryBody="This page explains exactly what we collect and why."
      sections={privacySections}
      crossLink={{
        title: "Looking for the Terms of Use?",
        href: "/terms",
        label: "Read the terms",
      }}
    />
  );
}
