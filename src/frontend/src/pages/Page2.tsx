import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SPECIAL_MESSAGE =
  "From the very first moment I saw you, I knew you were something rare — a kind of beautiful that goes far beyond what eyes can see. You carry a warmth in your soul that makes every room brighter, every silence comfortable, and every ordinary moment feel like magic. I love the way you laugh when something genuinely surprises you, the way your eyes hold a thousand unspoken stories, and the way you make me feel seen in a world that so often looks past people. You are not just someone I love — you are someone I choose, every single day, without hesitation. With you, I have found a kind of peace I did not know was possible, a joy that does not depend on perfection, and a love so steady it feels like home. I want to be the reason you smile on hard days, the hand you reach for in the dark, and the person who still makes your heart race even when we are old and grey. I promise to love you in the loudest ways and the quietest ones too — in grand gestures and in soft moments, in adventure and in stillness. You are my favourite thought, my greatest comfort, and my most beautiful blessing. I am so endlessly grateful that out of everyone in this world, I get to love you. And one day, when we have our own little home filled with the pitter-patter of tiny paws — our cats and dogs running around while we sit together watching them — I know that will be one of the happiest, most perfect chapters of our lives. 💕";

export default function Page2() {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative py-10 px-4"
      style={{ backgroundColor: "oklch(var(--baby-pink))" }}
    >
      {/* Pale hearts background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {(
          [
            { top: "5%", left: "4%", size: 90, rotate: -20 },
            { top: "12%", right: "6%", size: 70, rotate: 15 },
            { top: "50%", left: "2%", size: 110, rotate: -10 },
            { top: "65%", right: "4%", size: 130, rotate: 25 },
            { bottom: "8%", left: "12%", size: 80, rotate: 30 },
            { bottom: "5%", right: "12%", size: 100, rotate: -25 },
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
                opacity: 0.15,
              }}
            />
          );
        })}
      </div>

      {/* Back button */}
      <div className="relative z-10 mb-8">
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          data-ocid="page2.link"
          className="flex items-center gap-2 text-contrast-pink hover:text-button-pink-dark font-semibold transition-colors duration-200 hover:scale-105"
        >
          <span className="text-xl" aria-hidden="true">
            &#8592;
          </span>
          Back to main page
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
        {/* Title */}
        <motion.h1
          className="font-bold text-contrast-pink leading-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          YOU ARE MY SPECIAL PERSON
        </motion.h1>

        {/* Teddy + Click here button */}
        {!showMessage && (
          <motion.div
            className="flex flex-col items-center gap-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Teddy overlapping the button */}
            <div className="relative flex flex-col items-center">
              <span
                className="text-6xl md:text-7xl animate-bounce-gentle relative z-10"
                style={{ marginBottom: "-1.2rem" }}
                aria-label="Teddy bear"
              >
                🧸
              </span>
              <Button
                onClick={() => setShowMessage(true)}
                data-ocid="page2.primary_button"
                className="relative z-0 bg-button-pink-dark hover:bg-button-pink-dark-hover text-white font-semibold px-10 py-5 text-lg rounded-full shadow-valentine transition-all duration-300 hover:scale-105 hover:shadow-valentine-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-valentine-pink/50"
              >
                Click here
              </Button>
            </div>
          </motion.div>
        )}

        {/* Revealed message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Message card */}
              <div className="text-left bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-valentine-lg">
                <p
                  className="text-contrast-pink italic leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    lineHeight: "1.9",
                  }}
                >
                  {SPECIAL_MESSAGE}
                </p>
              </div>

              {/* Kiss sticker */}
              <motion.div
                className="flex justify-center pt-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span
                  style={{ fontSize: "5rem" }}
                  aria-label="Kiss couple"
                  role="img"
                >
                  💏
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
    </div>
  );
}
