import Image from 'next/image';

interface CreditCardCardProps {
  cardImage: string;
  cardName: string;
}

export function CreditCardCard({ cardImage, cardName }: CreditCardCardProps) {
  return (
    <div className="CredCardContainter flex flex-row bg-white rounded-xl w-full border border-[#000] border-opacity-20 py-3 px-2">
      <Image src={cardImage} alt="Mastercard card" />
      <div className="CredCardTextContainer flex flex-col items-start justify-center ml-2">
        <span className="CredCardTitle text-black text-sm font-medium font-inter mb-1">
          {cardName}
        </span>
        <p className="Methods text-black/60 text-xs font-medium font-inter">
          Crédito <br />
          Débito
        </p>
      </div>
    </div>
  );
}
