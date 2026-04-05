interface TeddyButtonProps {
  onClick: () => void;
}

export default function TeddyButton({ onClick }: TeddyButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src="/assets/generated/teddy-icon-white-bold-transparent.dim_256x256.png"
        alt="Cute white teddy bear"
        className="w-20 h-20 md:w-24 md:h-24 animate-bounce-gentle"
      />

      <button
        type="button"
        onClick={onClick}
        className="bg-button-pink-dark hover:bg-button-pink-dark-hover text-white font-semibold px-8 py-4 text-lg rounded-full shadow-valentine transition-all duration-300 hover:scale-105 hover:shadow-valentine-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-valentine-pink/50"
      >
        Click here
      </button>
    </div>
  );
}
