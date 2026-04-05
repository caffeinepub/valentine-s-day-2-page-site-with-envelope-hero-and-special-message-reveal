import { motion } from "motion/react";

const ROMANTIC_PARAGRAPH =
  "Across galaxies unknown and worlds untouched by time, I found you \u2014 a soul that feels like home in a universe so vast. Even among infinite stars, your light is the one that guides me, the one that makes everything else fade into silence. In your presence, distances disappear, and even the cold emptiness of space feels warm and alive. If eternity exists, I would spend it discovering you, over and over again, in every lifetime, on every planet, in every version of the cosmos. Because loving you is not bound by gravity, time, or reality \u2014 it is something far greater, written in the stars themselves.";

const SPARKLES = ["\u2726", "\u2727", "\u2726", "\u2727", "\u2726"];

export default function GalaxyHero() {
  return (
    <div className="galaxy-hero-root">
      <section className="galaxy-hero" aria-label="Galaxy romance hero banner">
        <img
          src="/assets/generated/alien-romance-hero.dim_1920x900.jpg"
          alt="Romantic alien couple on a glowing distant planet under a star-filled galaxy sky"
          className="galaxy-hero__bg-img"
          draggable={false}
        />

        <div className="galaxy-hero__overlay" aria-hidden="true" />

        <div className="galaxy-hero__content">
          <motion.div
            className="galaxy-sparkles"
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

          <motion.p
            className="galaxy-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            \u2726 A Love Written in Stars \u2726
          </motion.p>

          <motion.p
            className="galaxy-paragraph"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            {ROMANTIC_PARAGRAPH}
          </motion.p>

          <motion.div
            className="galaxy-sparkles galaxy-sparkles--bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            aria-hidden="true"
          >
            <span className="galaxy-sparkle" style={{ animationDelay: "0s" }}>
              \u2726
            </span>
            <span className="galaxy-sparkle" style={{ animationDelay: "0.6s" }}>
              \u2727
            </span>
            <span className="galaxy-sparkle" style={{ animationDelay: "1.2s" }}>
              \u2726
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
