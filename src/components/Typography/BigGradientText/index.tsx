import './style.css';

interface BigGradientTextProps {
  text: string;
}

export function BigGradientText({ text }: BigGradientTextProps) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <span className="text-5xl font-europa tracking-spaced font-bold text-gradient">
        {text}
      </span>
    </div>
  );
}
