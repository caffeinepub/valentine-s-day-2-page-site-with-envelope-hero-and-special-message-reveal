import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

/* ─── Starfield ─── */
function Starfield({ count = 100 }: { count?: number }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.8,
      duration: `${Math.random() * 3 + 1.5}s`,
      delay: `${Math.random() * 4}s`,
    }));
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <div
          key={s.id}
          className="starfield-dot"
          style={
            {
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              "--twinkle-duration": s.duration,
              "--twinkle-delay": s.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ─── Floating Particles ─── */
const PARTICLES = [
  { id: 0, emoji: "✨", top: "12%", left: "8%", delay: "0s", duration: "5s" },
  {
    id: 1,
    emoji: "💫",
    top: "22%",
    left: "88%",
    delay: "1.2s",
    duration: "6.5s",
  },
  { id: 2, emoji: "⭐", top: "68%", left: "6%", delay: "2s", duration: "4.8s" },
  {
    id: 3,
    emoji: "🌟",
    top: "75%",
    left: "92%",
    delay: "0.6s",
    duration: "7s",
  },
  { id: 4, emoji: "✨", top: "45%", left: "3%", delay: "3s", duration: "5.5s" },
  {
    id: 5,
    emoji: "💫",
    top: "88%",
    left: "50%",
    delay: "1.8s",
    duration: "6s",
  },
];

function FloatingParticles() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute text-xl animate-float-slow"
          style={
            {
              top: p.top,
              left: p.left,
              "--float-duration": p.duration,
              "--float-delay": p.delay,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}

/* ─── Wave Divider ─── */
function WaveDivider({ fill = "#3e4888" }: { fill?: string }) {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
      >
        <path
          fill={fill}
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

/* ─── Nav Bar ─── */
function NavBar() {
  return (
    <nav
      className="alien-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">
          👽
        </span>
        <span
          className="text-white font-black text-lg md:text-xl"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Galactic Love
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#hero"
          data-ocid="nav.link"
          className="text-white/80 hover:text-white font-semibold text-sm transition-colors"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Home
        </a>
        <a
          href="#reasons"
          data-ocid="nav.link"
          className="text-white/80 hover:text-white font-semibold text-sm transition-colors"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Reasons
        </a>
        <a
          href="#signal"
          data-ocid="nav.link"
          className="text-white/80 hover:text-white font-semibold text-sm transition-colors"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Love Signal
        </a>
        <a
          href="#signal"
          data-ocid="nav.primary_button"
          className="font-bold text-sm px-5 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg"
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: "oklch(0.88 0.12 172)",
            color: "#1a1040",
            boxShadow: "0 0 16px oklch(0.88 0.12 172 / 0.5)",
          }}
        >
          💌 Send Signal
        </a>
      </div>
      {/* Mobile nav */}
      <div className="flex md:hidden items-center gap-3">
        <a
          href="#reasons"
          className="text-white/70 hover:text-white text-sm font-semibold"
          data-ocid="nav.link"
        >
          Reasons
        </a>
        <a
          href="#signal"
          className="text-white/70 hover:text-white text-sm font-semibold"
          data-ocid="nav.link"
        >
          Signal
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      <Starfield count={120} />
      <FloatingParticles />

      {/* UFO drifting across */}
      <div
        className="absolute top-24 left-0 z-10 pointer-events-none animate-ufo-drift"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/ufo-transparent.dim_300x200.png"
          alt=""
          className="w-28 md:w-40 drop-shadow-lg"
          draggable={false}
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 max-w-5xl mx-auto">
        {/* Text side */}
        <div className="text-center lg:text-left flex-1 max-w-xl">
          <motion.p
            className="text-white/60 font-semibold text-sm md:text-base tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ✨ A message from across the galaxy ✨
          </motion.p>

          <motion.h1
            className="glow-text-pink text-white font-black leading-tight mb-5"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            You're My Favorite Alien 👽💫
          </motion.h1>

          <motion.p
            className="text-white/80 font-semibold leading-relaxed mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            In a universe full of stars, you're the one that makes everything
            shine brighter ✨
          </motion.p>

          <motion.p
            className="text-white/65"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
              lineHeight: "1.8",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            Somewhere across the cosmos, the universe decided that two souls
            should find each other — and I'm so endlessly grateful it was us.
            You are my home planet, my brightest star, my favorite constellation
            🌙💜
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="#reasons"
              data-ocid="hero.primary_button"
              className="inline-block font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105"
              style={{
                fontFamily: "'Nunito', sans-serif",
                background:
                  "linear-gradient(135deg, oklch(0.88 0.12 172), oklch(0.82 0.14 175))",
                color: "#1a1040",
                boxShadow:
                  "0 0 24px oklch(0.88 0.12 172 / 0.6), 0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              Explore Our Galaxy 🚀
            </a>
            <a
              href="#signal"
              data-ocid="hero.secondary_button"
              className="inline-block font-bold px-8 py-4 rounded-full text-base border-2 border-white/30 text-white/90 hover:border-white/60 hover:text-white transition-all hover:scale-105"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Send Love Signal 💌
            </a>
          </motion.div>
        </div>

        {/* Alien character */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <img
            src="/assets/generated/alien-character-transparent.dim_400x400.png"
            alt="Cute alien character waving"
            className="w-56 md:w-72 lg:w-80 animate-alien-bob drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Decorative wave layers at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          aria-hidden="true"
          role="presentation"
        >
          <path
            fill="oklch(0.82 0.1 290 / 0.5)"
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block -mt-12"
          aria-hidden="true"
          role="presentation"
        >
          <path
            fill="#3e4888"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Reasons I Love You Section ─── */
const REASONS = [
  "You make my world brighter than the stars",
  "Your smile is my favorite thing",
  "You understand me without words",
  "You make me feel safe and loved",
  "You always make me laugh",
  "You support me and believe in me",
  "You are my comfort place",
  "Every moment with you feels magical",
  "You are my best friend",
  "I would choose you in every universe",
];

const REASON_EMOJIS = [
  "🌟",
  "💫",
  "✨",
  "🌙",
  "⭐",
  "💜",
  "🪐",
  "👽",
  "💕",
  "🚀",
];

const BUBBLE_GRADIENTS = [
  "linear-gradient(135deg, oklch(0.72 0.14 290), oklch(0.65 0.18 305))",
  "linear-gradient(135deg, oklch(0.78 0.12 175), oklch(0.72 0.16 185))",
  "linear-gradient(135deg, oklch(0.82 0.12 330), oklch(0.75 0.15 340))",
  "linear-gradient(135deg, oklch(0.7 0.16 220), oklch(0.65 0.18 230))",
  "linear-gradient(135deg, oklch(0.75 0.14 290), oklch(0.8 0.1 305))",
  "linear-gradient(135deg, oklch(0.8 0.1 175), oklch(0.75 0.14 175))",
  "linear-gradient(135deg, oklch(0.78 0.15 340), oklch(0.72 0.18 330))",
  "linear-gradient(135deg, oklch(0.72 0.16 230), oklch(0.68 0.18 220))",
  "linear-gradient(135deg, oklch(0.7 0.18 290), oklch(0.75 0.14 305))",
  "linear-gradient(135deg, oklch(0.82 0.1 175), oklch(0.76 0.14 185))",
];

const FLOAT_CONFIGS = [
  { duration: "5s", delay: "0s" },
  { duration: "6.5s", delay: "0.8s" },
  { duration: "4.8s", delay: "1.5s" },
  { duration: "7s", delay: "0.3s" },
  { duration: "5.5s", delay: "2.1s" },
  { duration: "6s", delay: "0.6s" },
  { duration: "4.5s", delay: "1.9s" },
  { duration: "7.5s", delay: "1.2s" },
  { duration: "5.2s", delay: "2.8s" },
  { duration: "6.3s", delay: "0.4s" },
];

const SPARKLE_ITEMS = [
  { id: "sparkle-0", emoji: "✨", delay: "0s" },
  { id: "sparkle-1", emoji: "💫", delay: "0.4s" },
  { id: "sparkle-2", emoji: "🌟", delay: "0.8s" },
  { id: "sparkle-3", emoji: "💫", delay: "1.2s" },
  { id: "sparkle-4", emoji: "✨", delay: "1.6s" },
];

const EMOJI_FLOAT_ITEMS = [
  { id: "float-0", emoji: "💜", durationExtra: 0 },
  { id: "float-1", emoji: "👽", durationExtra: 0.5 },
  { id: "float-2", emoji: "💜", durationExtra: 1.0 },
  { id: "float-3", emoji: "🌌", durationExtra: 1.5 },
  { id: "float-4", emoji: "💜", durationExtra: 2.0 },
];

// Heart SVG — decorative, wrapped in aria-hidden parent
function HeartSVG() {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M50 85 C50 85 5 55 5 28 C5 12 17 2 30 2 C39 2 47 7 50 14 C53 7 61 2 70 2 C83 2 95 12 95 28 C95 55 50 85 50 85 Z"
        fill="oklch(0.72 0.24 0)"
      />
      <ellipse cx="34" cy="22" rx="8" ry="5" fill="oklch(0.9 0.1 0 / 0.4)" />
    </svg>
  );
}

function ReasonsSection() {
  return (
    <section
      id="reasons"
      className="orbit-section-bg relative py-24 px-4 overflow-hidden"
      aria-label="Reasons I Love You"
    >
      <Starfield count={60} />

      {/* Section title */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-white font-black glow-text-lavender"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
          }}
        >
          Reasons I Love You 🌙
        </h2>
        <p
          className="text-white/60 mt-3"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.05rem" }}
        >
          Written in the stars, just for you
        </p>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Central glowing heart */}
          <motion.div
            className="love-heart"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            aria-label="Glowing heart"
          >
            <HeartSVG />
            <span className="love-heart-label" aria-hidden="true">
              LOVE
            </span>
          </motion.div>

          {/* Grid of reason bubbles */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              width: "100%",
            }}
            data-ocid="reasons.list"
          >
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason}
                data-ocid={`reasons.item.${i + 1}`}
                className="reason-bubble"
                style={
                  {
                    background: BUBBLE_GRADIENTS[i % BUBBLE_GRADIENTS.length],
                    "--float-duration": FLOAT_CONFIGS[i].duration,
                    "--float-delay": FLOAT_CONFIGS[i].delay,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  type: "spring",
                  stiffness: 180,
                }}
              >
                <span style={{ marginRight: "0.4em" }} aria-hidden="true">
                  {REASON_EMOJIS[i % REASON_EMOJIS.length]}
                </span>
                {reason}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave into next section */}
      <WaveDivider fill="#2a2060" />
    </section>
  );
}

/* ─── Send Love Signal Section ─── */
function LoveSignalSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="signal"
      className="signal-section-bg relative py-24 px-4 overflow-hidden"
      aria-label="Send Love Signal"
    >
      <Starfield count={80} />
      <FloatingParticles />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-white font-black glow-text-lavender mb-3"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            }}
          >
            Sending You a Signal 📡
          </h2>
          <p
            className="text-white/60"
            style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1rem" }}
          >
            Press the button to receive a secret transmission from your favorite
            earthling
          </p>
        </motion.div>

        {/* Love signal button */}
        {!revealed && (
          <motion.button
            type="button"
            onClick={() => setRevealed(true)}
            data-ocid="signal.primary_button"
            className="animate-glow-pulse font-black px-10 py-5 rounded-full text-xl transition-transform hover:scale-110 active:scale-95"
            style={{
              fontFamily: "'Nunito', sans-serif",
              background:
                "linear-gradient(135deg, oklch(0.88 0.12 172), oklch(0.82 0.16 178))",
              color: "#1a1040",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            aria-label="Send Love Signal — reveal secret message"
          >
            Send Love Signal 💌
          </motion.button>
        )}

        {/* Revealed message */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              data-ocid="signal.success_state"
              className="message-card p-8 md:p-12 w-full"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
            >
              {/* Sparkle decorations */}
              <div
                className="flex justify-center gap-3 mb-6"
                aria-hidden="true"
              >
                {SPARKLE_ITEMS.map((item) => (
                  <span
                    key={item.id}
                    className="animate-sparkle text-xl"
                    style={{ animationDelay: item.delay }}
                  >
                    {item.emoji}
                  </span>
                ))}
              </div>

              <p
                className="text-white/90 leading-loose"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                }}
              >
                I'd travel across galaxies, light-years, and universes just to
                be with you. You are my forever and my favorite person in every
                universe 👽💜
              </p>

              <div
                className="flex justify-center gap-3 mt-6"
                aria-hidden="true"
              >
                {EMOJI_FLOAT_ITEMS.map((item) => (
                  <span
                    key={item.id}
                    className="text-2xl animate-float-slow"
                    style={
                      {
                        "--float-duration": `${3.5 + item.durationExtra}s`,
                        "--float-delay": `${item.durationExtra * 0.15}s`,
                      } as React.CSSProperties
                    }
                  >
                    {item.emoji}
                  </span>
                ))}
              </div>

              {/* Reset button */}
              <button
                type="button"
                onClick={() => setRevealed(false)}
                data-ocid="signal.secondary_button"
                className="mt-8 text-white/50 hover:text-white/80 text-sm font-semibold transition-colors"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                ✉️ Send another signal
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative small alien */}
      <motion.div
        className="absolute bottom-16 right-8 md:right-20 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        aria-hidden="true"
      >
        <img
          src="/assets/generated/alien-character-transparent.dim_400x400.png"
          alt=""
          className="w-20 md:w-28 animate-float-slow"
          style={{ filter: "hue-rotate(60deg) brightness(0.8)", opacity: 0.6 }}
          draggable={false}
        />
      </motion.div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="relative py-10 px-4 text-center overflow-hidden"
      style={{ background: "#0e0c28" }}
      aria-label="Site footer"
    >
      <Starfield count={30} />
      <div className="relative z-10">
        <p
          className="text-white/50 text-sm"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Made with 💜 across the galaxy &nbsp;✨&nbsp; 👽 &nbsp;✨
        </p>
        <p
          className="text-white/30 text-xs mt-2"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          &copy; {new Date().getFullYear()}. Built with{" "}
          <span aria-label="love">💜</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ─── App Root ─── */
export default function App() {
  return (
    <div style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}>
      <NavBar />
      <main>
        <HeroSection />
        <ReasonsSection />
        <LoveSignalSection />
      </main>
      <Footer />
    </div>
  );
}
