import { site } from "../config";

/** Full English content. Other locales (ko/zh-tw/ja) provide partial overrides
 * and fall back to these strings until translated. Headlines may contain <em>
 * for the amber emphasis word and are rendered with set:html. */
export const en = {
  meta: {
    title: "TempoSeeker — Camera-based putting coach for iPhone",
    description:
      "TempoSeeker reads your putting stroke through your iPhone camera — tempo, ball speed, distance and direction. No hardware. Train the same pendulum rhythm the Tour uses.",
  },

  common: {
    downloadSmall: "Download on the",
    downloadBig: "App Store",
    freeNote: `${site.freeDailyPutts} free putts every day · no credit card`,
  },

  hero: {
    eyebrow: "Camera-based putting coach · iPhone",
    h1: "Putt like the Tour trains — with the <em>iPhone</em> in your pocket.",
    lead: "TempoSeeker reads your stroke through the camera: tempo, ball speed, distance and direction. No hardware. Just your phone and a mat.",
  },

  trust: {
    points: [
      { title: "Private by design", body: "Your putts are analyzed right on your iPhone — never recorded, never uploaded." },
      { title: "Works offline", body: "No connection needed. Everything runs on-device, anywhere you practise." },
      { title: "No sign-up", body: "No account, no cloud login. Just set up your profile and putt." },
    ],
  },

  how: {
    eyebrow: "How it works",
    h2: "Three steps. <em>About a minute</em> to set up.",
    steps: [
      { n: "01", title: "Set the phone beside the mat", body: "Stand your phone on a tripod to the side of the mat, about chest height, aimed down the lane. Keep your ball-to-target line parallel to the phone's long edge.", alt: "TempoSeeker camera view looking down a putting mat, ready to putt" },
      { n: "02", title: "Set the zone, then putt", body: "Tap the ball on screen — tracking boxes lock onto it. Press SET, place your ball, and when it reads READY TO PUTT, just putt.", alt: "Tracking zone boxes locked onto the ball on the mat" },
      { n: "03", title: "Get your numbers instantly", body: "A second later your stroke is on screen — tempo, ball speed, distance and direction, with coaching on exactly what to fix.", alt: "Result card showing tempo ratio, backswing and forward-swing timing" },
    ],
  },

  features: {
    eyebrow: "What it measures",
    h2: "Four numbers that actually <em>move your putting.</em>",
    lead: "Every putt, automatically — no wearables, no sensors on the club.",
    items: [
      { title: "Tempo ratio", body: "Backswing time divided by your through-stroke — the rhythm great putters repeat on every putt. TempoSeeker times it to the millisecond. Target ≈ 2.0." },
      { title: "Ball speed", body: "Velocity straight off the face the instant you make contact — the truth about how hard you actually struck it." },
      { title: "Predicted distance", body: "How far that putt would roll on a real green at your chosen stimp speed, so range practice maps to the course." },
      { title: "Direction & deviation", body: "Your start-line angle and how far offline the ball would finish at the target distance — left or right, in centimetres." },
    ],
  },

  demo: {
    eyebrow: "Interactive demo",
    h2: "See it work. <em>Tap through</em> a real session.",
    lead: "No download needed — step through the actual app screens right here.",
  },

  science: {
    eyebrow: "The science",
    h2: "Groove a <em>tour</em> rhythm.",
    lead: "Great putters don't hit harder — they keep one tempo and change distance with backswing length. The stroke is a pendulum: the backswing runs about twice as long as the through-stroke, every single putt.",
    ratioCap: "The 2 : 1 stroke",
    ratioBack: "Backswing",
    ratioThru: "Through",
    ratioNote: "TempoSeeker times every stroke to the millisecond and scores it against this ratio.",
    stats: [
      { value: "80–85%", text: "of your start line is set by face angle at impact — not swing path." },
      { value: "≤ 0.03s", text: "stroke-duration consistency is the mark of tour-level putting." },
      { value: "~40%", text: "of every round is putts. It's the cheapest place to drop strokes." },
    ],
    profilesTitle: "Tour tempo profiles",
    tableHeaders: ["Profile", "Backswing", "Through-stroke", "Character"],
    profiles: [
      { name: "Fast / brisk", back: "0.52–0.58s", thru: "0.28–0.31s", feel: "Crisp and compact — Snedeker" },
      { name: "Standard", back: "0.60–0.68s", thru: "0.30–0.34s", feel: "Classic pendulum — Tiger" },
      { name: "Slow / sweeping", back: "0.68–0.75s", thru: "0.34–0.38s", feel: "Heavy, deliberate — Crenshaw" },
    ],
  },

  coaching: {
    eyebrow: "AI coaching",
    h2: "Know <em>why</em> you missed.",
    lead: "Every putt comes back with plain language, not a wall of numbers — what happened, what it means, and exactly how to fix it.",
    coachingAlt: "Stroke analysis card explaining why you received this result, what it means, and how to improve",
    wwh: [
      { term: "Why", desc: "The reading behind the result — the timing or speed that gave it away." },
      { term: "What it means", desc: "How that pattern shows up on the course, in golfer's terms." },
      { term: "How to fix it", desc: "One concrete adjustment to groove on your next putt." },
    ],
    benchEyebrow: "History & stats",
    benchH3: "See your <em>improvement</em> — charted against the Tour.",
    benchmarks: [
      { label: "Tempo ratio", you: "2.0", tour: "2.0 tour" },
      { label: "Backswing", you: "0.60s", tour: "tour pace" },
      { label: "Through-stroke", you: "0.30s", tour: "tour pace" },
      { label: "Total stroke", you: "0.90s", tour: "tour pace" },
    ],
    benchNote: "Every putt is saved and scored against true Tour benchmarks — clean-strike %, average tempo and best streaks, trending week over week.",
  },

  pricing: {
    eyebrow: "Pricing",
    h2: `Start free — <em>${site.freeDailyPutts} putts a day.</em>`,
    lead: "No credit card, no catch. Every feature is unlocked on the free plan. Go Pro only when you want marathon practice.",
    localNote: "", // shown only for non-US locales (Apple bills in local currency)
    free: {
      name: "Free",
      unit: "putts / day",
      list: ["Every feature unlocked", "AI coaching — why · what · how", "Tempo training & full stats", "No credit card required"],
    },
    pro: {
      tag: "Most practice",
      name: "Pro",
      perMonth: "/ month",
      perYear: `or ${site.pricePerYear} / year`,
      list: ["Unlimited putts", "Marathon practice sessions", "Everything in Free", "Cancel anytime"],
    },
  },

  faq: {
    eyebrow: "FAQ",
    h2: "Good questions, <em>straight answers.</em>",
    items: [
      { q: "What do I need to use it?", a: "An iPhone, a putting mat, a tripod, and a white golf ball. You also stick a small coloured marker (about 2×2 cm, any colour but white) where the ball sits — TempoSeeker locks its tracking onto that. Even, indirect light works best." },
      { q: "Why the coloured marker?", a: "The ball is white and so are most mat lines, so TempoSeeker keys its tracking off a colour it can find unambiguously. You place the ball right on the marker — in Tempo-only mode the marker even stands in for the ball." },
      { q: "Do I need a special mat or putter?", a: "Any putter works — if its head is dark or shiny, add a strip of bright tape across the top so the camera can see it. A mat with no markings is best; thin white lines under ~1 cm are fine, but avoid bold lines." },
      { q: "Is my video recorded or uploaded?", a: "No. Frames are analysed on your phone to measure the putt and are never recorded or uploaded. Nothing leaves your device." },
      { q: "Does it work for left-handed golfers?", a: "Not yet. TempoSeeker is currently iPhone-only and built for right-handed golfers. Left-handed support and other platforms are planned." },
      { q: "How accurate is it?", a: "TempoSeeker uses computer vision to measure tempo, ball speed and distance on every putt, with a two-minute setup and no calibration headaches. It's pre-launch, so we're not publishing accuracy figures we haven't earned yet — those come once there's real-world data." },
      { q: `What's "Stimp"?`, a: "Stimp is golf's measure of green speed. Your mat at home rolls slower than a real green, so you tell TempoSeeker which speed to simulate (default 10.0) and it turns ball speed into a realistic distance prediction." },
      { q: "What does it cost?", a: `Free forever: ${site.freeDailyPutts} putts a day with every feature unlocked, no credit card. Go Pro for unlimited putts — ${site.pricePerMonth}/month or ${site.pricePerYear}/year. Cancel anytime.` },
    ],
  },

  footer: {
    tagline: "Camera-based putting coach for iPhone.",
    navHow: "How it works",
    navFeatures: "Features",
    navPricing: "Pricing",
    navFaq: "FAQ",
    privacy: "Privacy",
    terms: "Terms",
    support: "Support",
    follow: "Follow",
    rights: "All rights reserved.",
  },
} as const;

export type SiteContent = typeof en;
