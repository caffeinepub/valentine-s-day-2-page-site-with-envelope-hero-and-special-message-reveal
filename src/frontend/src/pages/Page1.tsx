import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";

const ROMANTIC_PARAGRAPH =
  "Across galaxies unknown and worlds untouched by time, I found you \u2014 a soul that feels like home in a universe so vast. Even among infinite stars, your light is the one that guides me, the one that makes everything else fade into silence. In your presence, distances disappear, and even the cold emptiness of space feels warm and alive. If eternity exists, I would spend it discovering you, over and over again, in every lifetime, on every planet, in every version of the cosmos. Because loving you is not bound by gravity, time, or reality \u2014 it is something far greater, written in the stars themselves.";

const SPARKLES = ["\u2726", "\u2727", "\u2726", "\u2727", "\u2726"];

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* ── Hero Banner Section ── */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: "100vh" }}
        aria-label="Galaxy romance hero banner"
      >
        {/* Background image */}
        <img
          src="/assets/generated/alien-romance-hero.dim_1920x900.jpg"
          alt="Romantic alien couple on a glowing distant planet under a star-filled galaxy sky"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
        />

        {/* Dark gradient overlay for left-side text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(20,5,40,0.90) 0%, rgba(20,5,40,0.68) 38%, rgba(20,5,40,0.0) 68%)",
          }}
          aria-hidden="true"
        />

        {/* Glowing left-side text content */}
        <div
          className="relative z-10 flex flex-col gap-5"
          style={{
            maxWidth: "480px",
            padding: "3rem 3rem 3rem 5vw",
          }}
        >
          {/* Sparkles top */}
          <motion.div
            className="flex gap-3 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            aria-hidden="true"
          >
            {SPARKLES.map((s, i) => (
              <span
                key={s + String(i)}
                className="galaxy-sparkle"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* Eyebrow label */}
          <motion.p
            className="galaxy-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            \u2726 A Love Written in Stars \u2726
          </motion.p>

          {/* Main romantic paragraph */}
          <motion.p
            className="galaxy-paragraph"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            {ROMANTIC_PARAGRAPH}
          </motion.p>

          {/* Sparkles bottom */}
          <motion.div
            className="flex gap-3 items-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            aria-hidden="true"
          >
            {["\u2726", "\u2727", "\u2726"].map((s, i) => (
              <span
                key={s + String(i)}
                className="galaxy-sparkle"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Envelope Section ── */}
      <section
        className="relative site-background py-16 px-4 flex flex-col items-center justify-center"
        style={{ minHeight: "90vh" }}
      >
        {/* Background hearts decoration */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Large hollow outlined hearts via CSS */}
          {(
            [
              { top: "8%", left: "5%", size: 120, rotate: -20 },
              { top: "15%", right: "8%", size: 100, rotate: 15 },
              { top: "55%", left: "3%", size: 90, rotate: -10 },
              { top: "70%", right: "5%", size: 140, rotate: 25 },
              { top: "35%", left: "2%", size: 70, rotate: 5 },
              { top: "40%", right: "2%", size: 80, rotate: -15 },
              { bottom: "10%", left: "15%", size: 110, rotate: 30 },
              { bottom: "8%", right: "15%", size: 95, rotate: -25 },
            ] as Array<Record<string, string | number>>
          ).map((pos, i) => {
            const { size, rotate, ...placement } = pos;
            const s = size as number;
            const r = rotate as number;
            return (
              <div
                key={String(i)}
                className="hollow-heart"
                style={{
                  ...placement,
                  position: "absolute",
                  width: s,
                  height: s,
                  transform: `rotate(${r}deg)`,
                  opacity: 0.18,
                }}
              />
            );
          })}
        </div>

        {/* Envelope card */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Envelope body */}
          <div
            className="relative bg-white rounded-3xl shadow-valentine-lg border-4 border-white overflow-hidden"
            style={{ width: "min(90vw, 560px)", padding: "3rem 3rem 2rem" }}
          >
            {/* Envelope flap decorative top */}
            <div
              className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.08 10) 50%, transparent 50%)",
              }}
              aria-hidden="true"
            />

            {/* Message popping out */}
            <div className="relative z-10 animate-pop-out text-center">
              <div className="text-5xl mb-4" aria-hidden="true">
                💌
              </div>
              <h1
                className="font-bubble text-valentine-pink text-center leading-tight drop-shadow-sm"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
              >
                You make my heart flutter 💕
              </h1>
              <p className="mt-4 text-contrast-pink/70 font-sans text-base italic">
                A message from the heart, just for you...
              </p>
            </div>
          </div>

          {/* Open message button */}
          <Button
            onClick={() => navigate({ to: "/special-message" })}
            data-ocid="envelope.primary_button"
            className="mt-8 bg-button-pink hover:bg-button-pink-hover text-white font-semibold px-10 py-6 text-lg rounded-full shadow-valentine transition-all duration-300 hover:scale-105 hover:shadow-valentine-lg focus-visible:ring-4 focus-visible:ring-valentine-pink/50"
          >
            Open a special message
          </Button>
        </motion.div>

        {/* Footer */}
        <footer className="relative z-10 mt-16 text-center text-sm text-contrast-pink/50">
          <p>
            &copy; {new Date().getFullYear()}. Built with{" "}
            <span aria-label="love">&#10084;</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-contrast-pink transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
}
