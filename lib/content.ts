export const APP_STORE_URL = "https://apps.apple.com/app/prayer-guide";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.prayerguide.prayer_guide&hl=en";

export type Feature = {
  icon: string;
  title: string;
  body: string;
  num: string;
};

const featureList = [
  {
    icon: "☀",
    title: "Daily guided prayer",
    body: "Morning, midday, and evening paths that meet you where the day finds you — never more than a few quiet minutes.",
  },
  {
    icon: "✦",
    title: "Scripture that lands",
    body: "A verse for each day to reflect on, save, or share — chosen to steady you, not to overwhelm.",
  },
  {
    icon: "◐",
    title: "Focus mode",
    body: "A gentle timer and breathing guide help you stay present and pray without the pressure to perform.",
  },
  {
    icon: "♥",
    title: "Prayer list",
    body: "Carry the people and things you love — and mark the answers with gratitude as they come.",
  },
  {
    icon: "◇",
    title: "Gentle reminders",
    body: "Soft nudges you choose, never guilt. Miss a day and the door is still open tomorrow.",
  },
  {
    icon: "✦",
    title: "Prayer Companion",
    body: "A gentle AI companion that listens, prays with you, and finds the verse for the moment — always kind, never preachy.",
  },
  {
    icon: "◍",
    title: "Pray together",
    body: "Join a live prayer room or small group, share requests, and let others carry them with you in real time.",
  },
] satisfies Omit<Feature, "num">[];

export const features: Feature[] = featureList.map((f, i) => ({
  ...f,
  num: String(i + 1).padStart(2, "0"),
}));

export type ShowcaseScreenId =
  | "hero"
  | "timer"
  | "requests"
  | "companion"
  | "group";

export type Showcase = {
  step: string;
  title: string;
  body: string;
  points: string[];
  textFirst: boolean;
  glow: string;
  screen: ShowcaseScreenId;
};

export const showcases: Showcase[] = [
  {
    step: "01 — Arrive",
    title: "Begin each morning already held",
    body: "Open to today’s scripture and a short guided path. No blank page, no scramble — just a calm place to start.",
    points: [
      "A verse chosen to steady your day",
      "Morning, midday & evening guides",
      "Under five minutes, if that’s all you have",
    ],
    textFirst: true,
    glow: "rgba(91,194,179,.2)",
    screen: "hero",
  },
  {
    step: "02 — Be still",
    title: "Pray without the pressure",
    body: "Focus mode softens the screen, breathes with you, and keeps gentle time — so stillness feels natural, not forced.",
    points: [
      "Breathing guide & gentle timer",
      "Ambient quiet, distraction dimmed",
      "End whenever you’re ready — no penalty",
    ],
    textFirst: false,
    glow: "rgba(232,179,107,.18)",
    screen: "timer",
  },
  {
    step: "03 — Carry & release",
    title: "Hold every request, mark every answer",
    body: "Keep the people and needs you’re praying for close at hand — and watch the list of answered prayers grow.",
    points: [
      "Organize by family, friends, and more",
      "Gentle daily reminders you control",
      "Celebrate answers with gratitude",
    ],
    textFirst: true,
    glow: "rgba(91,194,179,.2)",
    screen: "requests",
  },
  {
    step: "04 — Never alone",
    title: "A companion who prays with you",
    body: "Share what’s on your heart and Prayer Companion listens, responds with scripture, and prays through it beside you — gentle, private, always here.",
    points: [
      "Talk through anxieties and gratitude alike",
      "Meets you with the right verse, not a lecture",
      "Private by design — your heart stays yours",
    ],
    textFirst: false,
    glow: "rgba(91,194,179,.2)",
    screen: "companion",
  },
  {
    step: "05 — Together",
    title: "Carried by others, in real time",
    body: "Join a live prayer room or your small group, post a request, and watch it gather prayer from people around the world the moment you need it.",
    points: [
      "Live prayer rooms & private groups",
      "Shared requests with real-time prayer counts",
      "Church, family & friend circles",
    ],
    textFirst: true,
    glow: "rgba(232,179,107,.2)",
    screen: "group",
  },
];

export type Voice = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  tint: string;
};

export const voices: Voice[] = [
  {
    quote:
      "The first app that made prayer feel like rest instead of another thing I was failing at.",
    name: "Maria L.",
    role: "London, UK",
    initial: "M",
    tint: "#5BC2B3",
  },
  {
    quote:
      "Focus mode changed my mornings. Ten quiet minutes before the noise — I actually look forward to it.",
    name: "James O.",
    role: "Austin, TX",
    initial: "J",
    tint: "#E8B36B",
  },
  {
    quote:
      "Marking a prayer answered, months later, brought me to tears. It remembers what I forget.",
    name: "Grace K.",
    role: "Nairobi, KE",
    initial: "G",
    tint: "#8FE0D2",
  },
];

export const freeFacts = [
  {
    num: "01",
    title: "No subscription",
    body: "Guided prayers, plans, audio and insights are all included from the first day.",
  },
  {
    num: "02",
    title: "No ads",
    body: "Nothing is sold to you and nothing interrupts your prayer time.",
  },
  {
    num: "03",
    title: "Your data stays yours",
    body: "Prayer lists and journals are private, and we never sell what you write.",
  },
];

const marqueeBase = [
  "Free forever",
  "No ads",
  "No subscription",
  "Every feature unlocked",
  "No trial to expire",
  "Private by default",
];
export const marquee = [...marqueeBase, ...marqueeBase];

export const inlineCtaCopy = [
  "Seven quiet features, none of them locked.",
  "Ready to build the rhythm for yourself?",
  "Join the people who pray with Prayer Guide each day.",
];

export type LegalSection = {
  num: string;
  title: string;
  paras: string[];
};

export const privacySections: LegalSection[] = [
  {
    num: "01",
    title: "Information we collect",
    paras: [
      "Account information: your email address and, if you sign in with Google or Apple, the name and email they share with us.",
      "Profile data: display name, theme preference, and streak settings you choose.",
      "Activity data: prayer session timestamps and durations (used to compute your streak and Growth Insights), reading-plan and challenge progress, fasting session times, and focus-mode session times.",
      "Content you create: journal entries, prayer requests, Bible highlights/bookmarks/notes, and devotional/challenge activity.",
    ],
  },
  {
    num: "02",
    title: "What stays encrypted vs. plain text",
    paras: [
      "Journal entries are encrypted on your device before they ever reach our servers (AES-256-GCM), using a key stored only in your device’s Keychain or Keystore. We store only unreadable ciphertext — nobody at Digital Ninja Technologies, and nobody with access to our database, can read your journal.",
      "Prayer requests are stored as plain text, protected by row-level access rules restricting them to you and, for requests you explicitly mark as shared, a prayer companion you’ve paired with. We made this trade-off deliberately so requests could be shared with a companion — true end-to-end encryption would make that impossible.",
    ],
  },
  {
    num: "03",
    title: "Optional cloud backup",
    paras: [
      "If you turn on cloud backup (Settings > Privacy & encryption), a copy of your journal encryption key is stored in your personal iCloud Keychain (iOS) or your Google account’s private app-data folder (Android) — a location only you can access, not Digital Ninja Technologies. This is opt-in; without it, an encryption key that’s lost (e.g., from an uninstall with no other signed-in device) cannot be recovered by anyone, including us.",
    ],
  },
  {
    num: "04",
    title: "Who we share data with",
    paras: [
      "Supabase — our backend provider — hosts our database and handles authentication; they process data on our behalf under their own security commitments. Google and Apple process sign-in if you choose those options.",
      "We do not sell, rent, or share your personal information with advertisers or data brokers, and we do not use your content to train machine learning models.",
    ],
  },
  {
    num: "05",
    title: "Your choices",
    paras: [
      "You can edit or delete journal entries and prayer requests at any time from within the app. You can turn cloud backup on or off whenever you like.",
      "To delete your account and all associated data, go to Settings > Delete account — it takes effect immediately and can’t be undone. You can also email us at thedigitalninjatechnologies@gmail.com if you’d rather we do it for you.",
    ],
  },
  {
    num: "06",
    title: "Children’s",
    paras: [
      "Prayer Guide is not directed at children under 13, and we do not knowingly collect information from them. If you believe a child has provided us with information, contact us, and we’ll remove it.",
    ],
  },
  {
    num: "07",
    title: "Changes to this policy",
    paras: [
      "If we make a material change to how we handle your data, we’ll update the effective date above and let you know in the app.",
    ],
  },
  {
    num: "08",
    title: "Contact",
    paras: [
      "Questions about this policy? Email us at thedigitalninjatechnologies@gmail.com.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    num: "01",
    title: "Agreement",
    paras: [
      "These terms govern your use of Prayer Guide, built by Digital Ninja Technologies. By creating an account or using the app, you agree to them. If you don’t agree, please don’t use the app.",
    ],
  },
  {
    num: "02",
    title: "What Prayer Guide is for",
    paras: [
      "Prayer Guide is a personal devotional tool — guided prayer, a Bible reader, journaling, prayer requests, and a gentle habit streak. It is not a substitute for pastoral care, professional counseling, or medical or crisis support. If you’re in crisis, please contact a licensed professional or emergency services in your area.",
    ],
  },
  {
    num: "03",
    title: "Your account",
    paras: [
      "You’re responsible for keeping your login credentials secure and for everything that happens under your account. You must be able to form a binding agreement to use Prayer Guide — broadly, an adult, or a minor using it with a parent or guardian’s permission, consistent with the age requirements of your app store.",
    ],
  },
  {
    num: "04",
    title: "Your content",
    paras: [
      "You own what you write — journal entries, prayer requests, notes. By sharing a prayer request with a companion, you’re choosing to let that specific person see it; you can un-share it at any time. We don’t claim ownership of your content and don’t use it to train AI models or share it with advertisers.",
      "Journal entries are end-to-end encrypted, which also means: if you lose access to your encryption key (e.g. an uninstall with no cloud backup and no other signed-in device), we cannot recover that content for you — nobody can.",
    ],
  },
  {
    num: "05",
    title: "Acceptable use",
    paras: [
      "Use Prayer Guide the way it’s meant to be used: don’t try to break, reverse engineer, or abuse the service; don’t use it to harass, threaten, or share content that’s illegal or infringes someone else’s rights; don’t attempt to access another user’s account or data. We may suspend or terminate accounts that violate this.",
    ],
  },
  {
    num: "06",
    title: "Cost",
    paras: [
      "Prayer Guide is free to use. There is no paid tier, no subscription, no trial that expires, and no feature held back. We don’t show ads and we don’t sell your data.",
    ],
  },
  {
    num: "07",
    title: "Termination",
    paras: [
      "You can stop using Prayer Guide and delete your account at any time from Settings > Delete account, or by emailing thedigitalninjatechnologies@gmail.com. We may suspend or terminate access for accounts that violate these terms.",
    ],
  },
  {
    num: "08",
    title: "Disclaimer & limitation of liability",
    paras: [
      'Prayer Guide is provided "as is," without warranties of any kind. We work hard to keep it reliable and your data safe, but we can’t guarantee uninterrupted or error-free service. To the fullest extent permitted by law, Digital Ninja Technologies is not liable for indirect, incidental, or consequential damages arising from your use of the app.',
    ],
  },
  {
    num: "09",
    title: "Changes to these terms",
    paras: [
      "We may update these terms as the app evolves. If we make a material change, we’ll update the effective date above and let you know in the app.",
    ],
  },
  {
    num: "10",
    title: "Contact",
    paras: [
      "Questions about these terms? Email us at thedigitalninjatechnologies@gmail.com.",
    ],
  },
];
