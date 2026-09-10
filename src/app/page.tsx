"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Heart,
  MapPinned,
  Menu,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import creatorImage1 from "../../images/Screenshot 2026-09-09 211549.png";
import creatorImage2 from "../../images/Screenshot 2026-09-09 211609.png";
import creatorImage3 from "../../images/Screenshot 2026-09-09 211631.png";
import creatorImage4 from "../../images/Screenshot 2026-09-09 211700.png";

const instagramContactLink = "https://www.instagram.com/diveinmedia___/?hl=en";
const emailContactLink = "https://mail.google.com/mail/?view=cm&fs=1&to=diveinmedia23@gmail.com&su=Work%20With%20Us";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why DiveIn", href: "#problem" },
  { label: "How It Works", href: "#process" },
  { label: "Creators", href: "#creators" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Brands", href: "#brands" },
];

const problemCards = [
  {
    id: "01",
    title: "TOO MUCH NOISE",
    text: "Thousands of ads compete for attention.",
  },
  {
    id: "02",
    title: "LOW TRUST",
    text: "People connect more with relatable voices than brand ads.",
  },
  {
    id: "03",
    title: "WRONG CREATOR = WRONG AUDIENCE",
    text: "Reach means little when the audience doesn't fit.",
  },
];

const opportunityStats = [
  { value: 500, suffix: "+", label: "CREATORS" },
  { value: 2000, suffix: "K", label: "FOLLOWERS" },
  { value: 1, suffix: "M+", label: "AUDIENCE REACH" },
];

const processSteps = [
  {
    number: "01",
    title: "TELL US YOUR GOAL",
    items: ["Product / Service", "Budget", "Target Audience", "Preferred Locations", "Campaign Objective"],
  },
  {
    number: "02",
    title: "WE FIND THE RIGHT CREATORS",
    items: ["500+ creators", "Multiple domains", "2K–1M+ followers", "Pan-India network"],
  },
  {
    number: "03",
    title: "CHOOSE YOUR COLLAB MODEL",
    items: ["PAID COLLABORATION", "BARTER COLLABORATION", "CAMPAIGN-BASED COLLAB"],
  },
  {
    number: "04",
    title: "DIRECT CREATOR PAYMENT",
    items: ["Brands pay creators directly.", "NO COMMISSION CHARGED TO THE BRAND."],
  },
];

const creatorRegions = [
  {
    name: "METROS",
    cities: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune"],
  },
  {
    name: "WEST INDIA",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jaipur"],
  },
  {
    name: "NORTH INDIA",
    cities: ["Chandigarh", "Lucknow", "Indore", "Bhopal", "Dehradun"],
  },
  {
    name: "SOUTH INDIA",
    cities: ["Kochi", "Coimbatore", "Mysuru", "Visakhapatnam"],
  },
  {
    name: "EAST & CENTRAL",
    cities: ["Bhubaneswar", "Patna", "Ranchi", "Nagpur"],
  },
];

const creators = [
  {
    id: "anjuri-sinha",
    name: "ANJURISINHA",
    handle: "@ANJURISINHA",
    followers: "1.2M",
    categories: ["Fashion", "Beauty", "Lifestyle"],
    posts: "1,128 posts",
    image: creatorImage1,
  },
  {
    id: "rekha-sidhodia",
    name: "REKHASIDHODIA FAMILY",
    handle: "@REKHASIDHODIA",
    followers: "109K",
    categories: ["Parenting", "Health & Wellness"],
    posts: "1,349 posts",
    image: creatorImage2,
  },
  {
    id: "d-starrr",
    name: "D_STARRR",
    handle: "@D_STARRR",
    followers: "177K",
    categories: ["Digital creator", "Actor"],
    posts: "420 posts",
    image: creatorImage3,
  },
  {
    id: "ipearshah",
    name: "IPEARSHAH",
    handle: "@IPEARSHAH",
    followers: "24.1K",
    categories: ["Artist", "Lifestyle"],
    posts: "218 posts",
    image: creatorImage4,
  },
];

const creatorSteps = [
  "OUTREACH & CONNECT",
  "DISCUSS & BRIEF",
  "ALIGN & COLLABORATE",
  "CONTENT CREATION",
  "REVIEW & PUBLISH",
  "TRACK & MEASURE",
];

const platformCards = [
  { name: "Instagram", icon: "IG" },
  { name: "YouTube", icon: "YT" },
  { name: "TikTok", icon: "TT" },
  { name: "Facebook", icon: "FB" },
  { name: "X", icon: "X" },
  { name: "Snapchat", icon: "SC" },
];

const domainTags = [
  "Fashion & Lifestyle",
  "Beauty & Skincare",
  "Food & Beverage",
  "Fitness & Health",
  "Travel & Explore",
  "Education & Tech",
  "Entertainment & Comedy",
  "More",
];

const brandLogos = ["Lotus Herbals", "MazaPlay", "YOLO24/7", "JBL", "Britannia", "FairPlay", "AJIO"];

const campaignCards = [
  {
    title: "Creator Reel Launch",
    type: "Instagram Reel",
    accent: "style-1",
    stats: "1.2M reach",
  },
  {
    title: "Launch Story Sequence",
    type: "Campaign Content",
    accent: "style-2",
    stats: "92K engagement",
  },
  {
    title: "Brand Awareness Push",
    type: "Multi-city rollout",
    accent: "style-3",
    stats: "4.5M views",
  },
];

const footerNav = ["Home", "Why DiveIn", "How It Works", "Creators", "Campaigns", "Contact"];

function AnimatedCounter({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let startTime: number | null = null;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.97 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

function IndiaMapGraphic({ selectedRegion }: { selectedRegion: number }) {
  const activeCities = new Set(creatorRegions[selectedRegion].cities);

  const cityCoordinates: Record<string, { x: number; y: number }> = {
    Mumbai: { x: 186, y: 321 },
    "Delhi NCR": { x: 221, y: 214 },
    Bengaluru: { x: 253, y: 372 },
    Hyderabad: { x: 272, y: 308 },
    Chennai: { x: 300, y: 395 },
    Kolkata: { x: 362, y: 250 },
    Pune: { x: 210, y: 298 },
    Ahmedabad: { x: 155, y: 270 },
    Surat: { x: 170, y: 290 },
    Vadodara: { x: 173, y: 279 },
    Rajkot: { x: 144, y: 276 },
    Jaipur: { x: 193, y: 234 },
    Chandigarh: { x: 234, y: 182 },
    Lucknow: { x: 261, y: 204 },
    Indore: { x: 212, y: 257 },
    Bhopal: { x: 233, y: 245 },
    Dehradun: { x: 247, y: 171 },
    Kochi: { x: 272, y: 422 },
    Coimbatore: { x: 295, y: 406 },
    Mysuru: { x: 279, y: 389 },
    Visakhapatnam: { x: 331, y: 329 },
    Bhubaneswar: { x: 344, y: 306 },
    Patna: { x: 306, y: 254 },
    Ranchi: { x: 317, y: 278 },
    Nagpur: { x: 260, y: 278 },
  };

  const indiaPath = "M176 74 L224 91 L252 84 L286 102 L328 136 L350 170 L368 198 L390 227 L382 252 L402 272 L383 304 L394 333 L372 362 L355 388 L332 407 L300 416 L274 447 L240 451 L221 427 L191 432 L169 413 L146 398 L122 366 L102 343 L83 318 L75 282 L61 246 L65 218 L85 209 L94 182 L113 170 L125 145 L151 126 L163 100 Z";

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[520px]">
      <svg viewBox="0 0 520 520" className="h-full w-full drop-shadow-[0_0_30px_rgba(197,255,42,0.12)]">
        <defs>
          <radialGradient id="indiaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(197,255,42,0.26)" />
            <stop offset="70%" stopColor="rgba(197,255,42,0.09)" />
            <stop offset="100%" stopColor="rgba(197,255,42,0.02)" />
          </radialGradient>
          <linearGradient id="indiaStroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(197,255,42,0.95)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(197,255,42,0.95)" />
          </linearGradient>
        </defs>

        <g opacity={0.25}>
          <path d="M72 0 L72 520 M144 0 L144 520 M216 0 L216 520 M288 0 L288 520 M360 0 L360 520 M432 0 L432 520" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <path d="M0 72 L520 72 M0 144 L520 144 M0 216 L520 216 M0 288 L520 288 M0 360 L520 360 M0 432 L520 432" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </g>

        <motion.path
          d={indiaPath}
          fill="url(#indiaGlow)"
          stroke="url(#indiaStroke)"
          strokeWidth="2"
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        {Object.entries(cityCoordinates).map(([city, position]) => {
          const isActive = activeCities.has(city);

          return (
            <motion.g
              key={city}
              initial={{ opacity: 0.2, scale: 0.85 }}
              animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.circle
                cx={position.x}
                cy={position.y}
                r={isActive ? 8 : 5}
                fill={isActive ? "#c5ff2a" : "rgba(255,255,255,0.32)"}
                stroke={isActive ? "rgba(197,255,42,0.95)" : "rgba(255,255,255,0.18)"}
                strokeWidth={isActive ? 2 : 1}
                animate={{
                  scale: isActive ? [1, 1.35, 1] : 1,
                  opacity: isActive ? [0.7, 1, 0.7] : 0.4,
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx={position.x} cy={position.y} r={isActive ? 18 : 11} fill="transparent" stroke={isActive ? "rgba(197,255,42,0.35)" : "rgba(255,255,255,0.12)"} strokeWidth="1" strokeDasharray="4 6" />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,255,42,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(197,255,42,0.1),transparent_30%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-lime-400/80 bg-lime-300/10 text-sm font-black text-lime-300">
              D
            </div>
            <div>
              <p className="text-lg font-black uppercase tracking-[0.2em]">DiveIn Media</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.18em] text-white/70 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-lime-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={instagramContactLink}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-lime-300/80 hover:bg-lime-300/10 hover:text-lime-300"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/90 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-white/70">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-lime-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={instagramContactLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-lime-300/70 bg-lime-300/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300"
              >
                Work With Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 px-4 pb-16 pt-10 md:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/60 bg-lime-300/10 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-lime-200">
                <Sparkles className="h-3.5 w-3.5" />
                People | Stories | Impact
              </div>

              <div className="space-y-5">
                <h1 className="max-w-[760px] text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-[7rem]">
                  500+ CREATORS.
                  <br />
                  PAN INDIA.
                  <br />
                  <span className="text-lime-300">REAL INFLUENCE.</span>
                </h1>
                <p className="max-w-xl text-base text-white/70 md:text-lg">
                  From niche communities to 1M+ audiences — we connect brands with creators who fit.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={instagramContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-black transition hover:translate-y-[-1px] hover:bg-lime-200"
                >
                  WORK WITH US <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={emailContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white transition hover:border-lime-300/80 hover:text-lime-300"
                >
                  <Play className="h-4 w-4" /> MAIL US
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 text-[10px] uppercase tracking-[0.26em] text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Different People.</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Different Cities.</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Same Impact.</span>
              </div>
            </Reveal>

            <Reveal className="relative flex justify-center lg:justify-end" delay={0.1}>
              <div className="relative w-full max-w-[520px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 top-12 rounded-2xl border border-white/15 bg-black/50 p-3 shadow-[0_0_45px_rgba(197,255,42,0.15)] backdrop-blur-xl"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">Creators × Brands × Communities</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 bottom-16 rounded-2xl border border-white/15 bg-black/50 p-3 shadow-[0_0_45px_rgba(197,255,42,0.15)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-xs font-black text-black">1M+</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">engagement</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [-1.5, 1.5, -1.5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-note absolute bottom-20 left-4 rotate-[-8deg] rounded-2xl border border-lime-300/70 bg-lime-300/10 p-3 text-[10px] uppercase tracking-[0.22em] text-lime-200 shadow-[0_0_35px_rgba(197,255,42,0.2)]"
                >
                  More Than Marketing.
                  <br />
                  It&apos;s People.
                </motion.div>

                <div className="phone-frame relative mx-auto w-[320px] rounded-[38px] border border-white/15 bg-[#111111] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.7)] sm:w-[360px]">
                  <div className="absolute inset-x-10 top-2 h-1 rounded-full bg-white/10" />
                  <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0b0b]">
                    <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                          alt="Creator profile"
                          width={40}
                          height={40}
                          unoptimized
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold">@ananyafromdelhi</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Creator</p>
                        </div>
                      </div>
                      <div className="rounded-full border border-lime-300/50 bg-lime-300/10 p-2 text-lime-300">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="bg-[radial-gradient(circle_at_top,_rgba(197,255,42,0.18),transparent_35%)] p-4">
                      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#1b1b1b]">
                        <Image
                          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                          alt="Creator content"
                          width={900}
                          height={720}
                          unoptimized
                          className="h-72 w-full object-cover"
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between text-white/70">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1"><Heart className="h-4 w-4 text-lime-300" /> <span className="text-xs">68K</span></div>
                          <div className="flex items-center gap-1"><MessageCircle className="h-4 w-4" /> <span className="text-xs">3.4K</span></div>
                          <div className="flex items-center gap-1"><Send className="h-4 w-4" /> <span className="text-xs">1.1K</span></div>
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-lime-300">Live</div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
                  transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 bottom-8 rounded-2xl border border-white/15 bg-[#111111]/90 p-3 shadow-[0_0_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-lime-300/10 p-2 text-lime-300"><MapPinned className="h-4 w-4" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">City</p>
                      <p className="text-sm font-semibold">Mumbai</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="problem" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Problem</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              PEOPLE DON&apos;T
              <br />
              TRUST ADS.
              <br />
              THEY TRUST
              <br />
              <span className="text-lime-300">PEOPLE.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              Consumers are scrolling past traditional advertising. Creators turn brand messages into stories their communities actually listen to.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {problemCards.map((card, index) => (
              <Reveal key={card.id} delay={index * 0.12} className="h-full">
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(197,255,42,0.8)" }}
                  transition={{ duration: 0.2 }}
                  className="soft-card flex h-full flex-col rounded-[28px] border border-white/10 bg-[#0a0a0a]/80 p-6"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xl font-black text-lime-300">{card.id}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-lime-300/80 to-transparent" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-auto text-base leading-7 text-white/65">{card.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-[32px] border border-lime-300/40 bg-gradient-to-r from-lime-300/20 via-lime-300/5 to-transparent p-8 text-black shadow-[0_0_40px_rgba(197,255,42,0.18)] md:p-10">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-black/60">The answer?</p>
                <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.06em]">THE ANSWER?</h3>
              </div>
              <p className="text-2xl font-black uppercase leading-[1.1] tracking-[-0.05em] text-black/90 md:text-4xl">
                Right creator + Right audience + Right story.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="opportunity" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Opportunity</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              YOUR CUSTOMERS
              <br />
              ARE ALREADY
              <br />
              <span className="text-lime-300">WATCHING.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              They&apos;re not waiting for another advertisement. They&apos;re watching creators, following communities, and discovering brands through content.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {opportunityStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-7">
                  <div className="mb-5 text-5xl font-black uppercase leading-none tracking-[-0.08em] text-lime-300 md:text-6xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.36em] text-white/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex flex-wrap gap-3">
              {[
                "Fashion",
                "Beauty",
                "Fitness",
                "Food",
                "Lifestyle",
                "Travel",
                "Health & Wellness",
                "Parenting",
                "Tech",
                "Education",
                "Entertainment",
                "Finance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:border-lime-300/80 hover:text-lime-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 rounded-[30px] border border-white/10 bg-[#0b0b0b] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-lime-300">The opportunity</p>
                <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">Put your brand where attention already exists.</h3>
              </div>
              <button className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-lime-300/70 bg-lime-300/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-lime-300">
                THE OPPORTUNITY <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">How It Works</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              NO MIDDLEMAN.
              <br />
              JUST THE RIGHT
              <br />
              <span className="text-lime-300">CREATOR × BRAND.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              We connect brands with relevant creators, manage the collaboration, and make campaign execution simple.
            </p>
          </Reveal>

          <Reveal className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-lime-300/80 bg-lime-300 p-5 shadow-[0_0_35px_rgba(197,255,42,0.28)] md:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-black/70">Core advantage</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.06em] text-black md:text-4xl">
                NO MIDDLEMAN
              </h3>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 p-5 md:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-lime-300">Brand promise</p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-none tracking-[-0.06em] text-white md:text-4xl">
                NO COMMISSION
                <span className="block text-lime-300">FROM THE BRAND</span>
              </h3>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-1/2 top-10 hidden h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-lime-300/0 via-lime-300/80 to-lime-300/0 lg:block" />

            <div className="grid gap-6 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="soft-card relative flex h-full flex-col rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-2xl font-black text-lime-300">{step.number}</span>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block">
                          <ArrowDownward className="h-6 w-6 text-lime-300/70" />
                        </div>
                      )}
                    </div>

                    <h3 className="mb-6 text-xl font-black uppercase tracking-[-0.04em] text-white">{step.title}</h3>

                    <ul className="space-y-3 text-sm text-white/72">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Location targeting</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              YOUR PRODUCT.
              <br />
              YOUR AUDIENCE.
              <br />
              YOUR LOCATION.
            </h2>
            <p className="mt-5 text-base text-white/70 md:text-lg">WE FIND THE CREATOR FIT.</p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-5 md:p-6">
              <div className="space-y-4">
                {creatorRegions.map((region, index) => (
                  <motion.button
                    key={region.name}
                    whileHover={{ x: 4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedRegion(index)}
                    className={`w-full rounded-[22px] border px-4 py-4 text-left transition ${
                      selectedRegion === index
                        ? "border-lime-300/80 bg-[linear-gradient(135deg,rgba(197,255,42,0.18),rgba(17,17,17,0.8))] text-lime-300 shadow-[0_0_30px_rgba(197,255,42,0.12)]"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-lime-300/60 hover:text-lime-200"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.28em]">{region.name}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em]">
                      {region.cities.map((city) => (
                        <span key={city} className="rounded-full border border-current/20 bg-black/10 px-2 py-1">
                          {city}
                        </span>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="soft-card overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-4 md:p-6">
              <motion.div
                key={selectedRegion}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(197,255,42,0.18),transparent_25%),linear-gradient(135deg,#0c0c0c,#151515)] p-4"
              >
                <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/50">
                    <span>Coverage</span>
                    <span>{creatorRegions[selectedRegion].name}</span>
                  </div>

                  <div className="mt-4 flex-1">
                    <IndiaMapGraphic selectedRegion={selectedRegion} />
                  </div>

                  <motion.div layout className="mt-4 flex flex-wrap gap-2">
                    {creatorRegions[selectedRegion].cities.map((city) => (
                      <motion.span
                        key={city}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70"
                      >
                        {city}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="creators" className="relative z-10 px-4 pb-16 pt-20 md:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Creators</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              REAL
              <br />
              CREATORS.
              <br />
              REAL
              <br />
              COLLABORATIONS.
            </h2>
          </Reveal>

          <div className="-mx-4 overflow-hidden pb-2 md:-mx-6 lg:-mx-8">
            <div className="flex gap-5 overflow-x-auto px-4 pb-4 md:px-6 lg:px-8">
              {creators.map((creator, index) => (
                <Reveal key={creator.id} delay={index * 0.08} className="min-w-[280px] flex-1 md:min-w-[320px]">
                  <motion.article
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    style={{ rotate: index % 2 === 0 ? "-0.6deg" : "0.6deg" }}
                    className="creator-card group overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#090909] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        width={900}
                        height={720}
                        unoptimized
                        className="h-80 w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                    <div className="space-y-4 bg-gradient-to-b from-[#101010] via-[#0b0b0b] to-[#080808] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xl font-black uppercase tracking-[-0.05em] text-white">{creator.name}</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">{creator.handle}</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-300/80 bg-lime-300/10 text-lime-300 shadow-[0_0_18px_rgba(197,255,42,0.18)] transition duration-300 group-hover:bg-lime-300 group-hover:text-black">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70">
                        <span>{creator.followers}</span>
                        <span>{creator.posts}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {creator.categories.map((category) => (
                          <span key={category} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70">
                            {category}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-lime-300 transition duration-300 hover:text-lime-200">
                        View Profile <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 rounded-[32px] border border-white/10 bg-[#0a0a0a]/80 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-lime-300">Creator workflow</p>
                <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">HOW WE WORK WITH INFLUENCERS & CREATORS</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {creatorSteps.map((step, index) => (
                <Reveal key={step} delay={index * 0.06}>
                  <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">0{index + 1}</span>
                      {index < creatorSteps.length - 1 && <ArrowRight className="h-4 w-4 text-white/40" />}
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-white">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-2xl font-black uppercase leading-tight tracking-[-0.05em] md:text-4xl">
                BUILT ON RELATIONSHIPS.
                <br />
                DRIVEN BY RESULTS.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="campaigns" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Platforms</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              THE CREATORS.
              <br />
              THE PLATFORMS.
              <br />
              <span className="text-lime-300">THE IMPACT.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              We collaborate with top creators across Instagram, YouTube, and more — and work with leading platforms to bring your brand to life.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {platformCards.map((platform, index) => (
              <Reveal key={platform.name} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(197,255,42,0.7)" }}
                  className="soft-card flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-[#0a0a0a]/80 p-5"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-lime-300">
                    {platform.icon}
                  </div>
                  <p className="text-xl font-black uppercase tracking-[-0.04em]">{platform.name}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap gap-3">
            {domainTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/75">
                {tag}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-12 grid gap-6 lg:grid-cols-4">
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={500} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">CREATORS</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300">INSTAGRAM</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">FIRST</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300">2K–1M+</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">FOLLOWERS</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300">PAN INDIA</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">COVERAGE</div>
            </div>
          </Reveal>

          <Reveal className="mt-12 rounded-[30px] border border-lime-300/50 bg-lime-300/10 p-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.38em] text-lime-200">Brands</p>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-lime-300 md:text-5xl">YOUR BRAND. OUR CREATORS. REAL IMPACT.</h3>
          </Reveal>
        </div>
      </section>

      <section id="brands" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Past collaborations</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              BRANDS
              <br />
              THAT TRUSTED US.
              <br />
              RESULTS THAT
              <br />
              SPOKE FOR THEM.
            </h2>
          </Reveal>

          <Reveal className="mb-12 grid gap-4 rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-5 md:grid-cols-2 xl:grid-cols-7">
            {brandLogos.map((brand) => (
              <div
                key={brand}
                className="flex min-h-[70px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-center text-sm font-black uppercase tracking-[0.18em] text-white/70"
              >
                {brand}
              </div>
            ))}
          </Reveal>

          <div className="-mx-4 overflow-hidden pb-3 md:-mx-6 lg:-mx-8">
            <div className="flex gap-5 overflow-x-auto px-4 pb-4 md:px-6 lg:px-8">
              {campaignCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.08} className="min-w-[300px] flex-1 md:min-w-[360px]">
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="campaign-card overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0a0a]/80"
                  >
                    <div className={`relative h-72 border-b border-white/10 bg-gradient-to-br ${card.accent} p-5`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_35%)]" />
                      <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/25 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/80">
                        {card.type}
                      </div>
                      <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-black/30 p-3 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Preview</p>
                        <p className="mt-2 text-xl font-black uppercase tracking-[-0.04em] text-white">{card.title}</p>
                      </div>
                    </div>
                    <div className="space-y-4 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Performance</span>
                        <span className="text-sm font-black uppercase tracking-[-0.03em] text-white">{card.stats}</span>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={500} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">CREATORS WORKED WITH</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={1} suffix="M+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">TOTAL REACH</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={100} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">CAMPAIGNS DELIVERED</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={20} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">BRANDS TRUSTED US</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="relative overflow-hidden rounded-[38px] border border-lime-300/40 bg-[#080808] p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,255,42,0.30),transparent_35%)]" />
            <div className="relative z-10 max-w-4xl">
              <p className="text-[10px] uppercase tracking-[0.38em] text-lime-300">Let&apos;s create something together</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl lg:text-[6rem]">
                LET&apos;S CREATE
                <br />
                SOMETHING GREAT
                <br />
                TOGETHER.
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
                Your brand. Our creators. Real impact.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={instagramContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-black"
                >
                  WORK WITH US <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={emailContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white"
                >
                  MAIL US <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/50 px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-2xl font-black uppercase tracking-[-0.05em] text-white">DiveIn Media</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.34em] text-lime-300">People | Stories | Impact</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Follow</p>
                <a
                  href={instagramContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-lime-300"
                >
                  Instagram
                </a>
                <a href="#" className="transition hover:text-lime-300">LinkedIn</a>
                <a href="#" className="transition hover:text-lime-300">YouTube</a>
                <a href="#" className="transition hover:text-lime-300">TikTok</a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Navigate</p>
                {footerNav.map((item) => (
                  <a key={item} href={item === "Contact" ? "#" : `#${item.toLowerCase().replace(/\s+/g, "")}`} className="transition hover:text-lime-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a
              href={instagramContactLink}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ArrowDownward(props: { className?: string }) {
  return <ArrowRight {...props} className={props.className ?? "h-4 w-4"} />;
}
