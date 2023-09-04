interface ParagraphProps {
  subtitle: string;
  text: string;
}

export function Paragraph({ subtitle, text }: ParagraphProps) {
  return (
    <div className="ItemTextContainer flex flex-col items-start">
      {/* <div className="Subtitle flex flex-row justify-start"></div> */}
      <span className="Subtitle text-black/80 font-inter reg:text-xl text-base reg:font-medium font-semibold reg:mb-3 mb-1">
        {subtitle}
      </span>
      <p className="ItemText text-black/50 font-inter reg:text-lg text-sm font-normal">
        {text}
      </p>
    </div>
  );
}
