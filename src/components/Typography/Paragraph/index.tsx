interface ParagraphProps {
  subtitle: string;
  text: string;
}

export function Paragraph({ subtitle, text }: ParagraphProps) {
  return (
    <div className="ItemTextContainer flex flex-col items-start">
      {/* <div className="Subtitle flex flex-row justify-start"></div> */}
      <span className="Subtitle text-black/80 font-inter text-xl font-medium mb-3">
        {subtitle}
      </span>
      <p className="ItemText text-black/50 font-inter text-lg font-normal">
        {text}
      </p>
    </div>
  );
}
