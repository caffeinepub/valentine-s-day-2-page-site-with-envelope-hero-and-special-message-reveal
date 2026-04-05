interface HeartDottedTextProps {
  text: string;
}

export default function HeartDottedText({ text }: HeartDottedTextProps) {
  const renderTextWithHearts = (input: string) => {
    const parts = input.split("");
    return parts.map((char, index) => {
      if (char === "i" && index > 0 && /[a-z]/.test(parts[index - 1])) {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: character index is stable for static text
          <span key={index} className="heart-dotted-i">
            {char}
          </span>
        );
      }
      return char;
    });
  };

  return (
    <div className="text-contrast-pink text-lg md:text-xl lg:text-2xl italic leading-relaxed text-left bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-valentine">
      <p className="whitespace-pre-wrap">{renderTextWithHearts(text)}</p>
    </div>
  );
}
