import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { termsSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use — Prayer Guide",
  description: "The terms governing your use of Prayer Guide, built by Digital Ninja Technologies.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title="Terms of Use"
      effectiveDate="Effective August 2026"
      summaryLead="These terms govern your use of Prayer Guide, built by Digital Ninja Technologies. By creating an account or using the app, you agree to them. If you don't agree, please don't use the app."
      summaryBody=""
      sections={termsSections}
      crossLink={{
        title: "Looking for the Privacy Policy?",
        href: "/privacy",
        label: "Read the policy",
      }}
    />
  );
}
