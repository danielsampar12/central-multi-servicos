import Image from 'next/image';

import phone from '@/assets/iphone.svg';
import { PhoneCardButton } from '@/components/Buttons/PhoneCardButton';

interface PhoneCardProps {
  mainText: string;
  subtext: string;
}

export function PhoneCard({ mainText, subtext }: PhoneCardProps) {
  return (
    <div className="PhoneCardContainer flex flex-col justify-between items-center bg-dark-grey rounded-2xl drop-shadow-2xl reg:px-8 px-4 reg:py-8 py-4">
      <div className="TextsCotnainer flex flex-col items-center reg:mb-6 mb-3">
        <h1 className="MainText text-white font-inter reg:text-xl text-center text-lg font-bold">
          {mainText}
        </h1>
      </div>

      <Image src={phone} alt="iPhone photo" />

      <span className="Title text-white/50 font-inter reg:text-sm text-xs font-normal reg:py-6 py-3">
        {subtext}
      </span>

      <PhoneCardButton />
    </div>
  );
}
