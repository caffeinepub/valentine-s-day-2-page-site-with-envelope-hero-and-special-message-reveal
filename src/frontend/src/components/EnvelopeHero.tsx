import { Button } from "@/components/ui/button";

interface EnvelopeHeroProps {
  onOpenMessage: () => void;
}

export default function EnvelopeHero({ onOpenMessage }: EnvelopeHeroProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Envelope container */}
      <div className="relative">
        {/* Envelope body with hearts pattern */}
        <div className="relative bg-white rounded-2xl shadow-valentine p-8 md:p-12 lg:p-16 w-[90vw] max-w-2xl border-4 border-white overflow-hidden">
          {/* Large hollow hearts pattern overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "url(/assets/generated/envelope-hearts-outline-big.dim_1200x800.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Message popping out */}
          <div className="relative z-10 animate-pop-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bubble text-valentine-pink text-center leading-tight drop-shadow-soft">
              Happy Valentine's Day!
            </h1>
          </div>
        </div>

        {/* Button at bottom of envelope */}
        <div className="flex justify-center mt-6">
          <Button
            onClick={onOpenMessage}
            className="bg-button-pink hover:bg-button-pink-hover text-white font-semibold px-8 py-6 text-lg rounded-full shadow-valentine transition-all duration-300 hover:scale-105 hover:shadow-valentine-lg focus-visible:ring-4 focus-visible:ring-valentine-pink/50"
          >
            Open a special message
          </Button>
        </div>
      </div>
    </div>
  );
}
