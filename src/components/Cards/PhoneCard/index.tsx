import Image from 'next/image';

import phone from '@/assets/iphone.svg';

interface PhoneCardProps {
  title: string;
  mainText: string;
  subtext: string;
}

export function PhoneCard({ mainText, subtext, title }: PhoneCardProps) {
  return (
    <div className="PhoneCardContainer flex flex-col justify-between items-center bg-dark-grey rounded-2xl drop-shadow-2xl px-8 py-8">
      <div className="TextsCotnainer flex flex-col items-center mb-6">
        <h2 className="Title text-white/50 font-inter text-lg font-medium">
          {title}
        </h2>
        <h1 className="MainText text-white font-inter text-xl font-bold">
          {mainText}
        </h1>
      </div>

      <Image src={phone} alt="iPhone photo" />

      <span className="Title text-white/50 font-inter text-sm font-normal p-6">
        {subtext}
      </span>

      <button
        type="button"
        className="ContactUsButtonOnCard w-full h-12 rounded-3xl px-10 py-4 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
      >
        <p className="ContactUsOnCard text-white text-lg font-medium tracking-wide">
          Entre em contato
        </p>
      </button>
    </div>
  );
}
