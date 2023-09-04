import Image from 'next/image';

import imagePath from '@/assets/lady-smiling.svg';

export function CardWithPhoto() {
  return (
    <div className="Frame48096157 bg-white rounded-xl drop-shadow-2xl w-full reg:px-5 px-2 reg:py-6 py-3">
      <div className="flex flex-col p-2 items-start justify-center w-full">
        <div className="flex flex-row justify-center w-full">
          <Image src={imagePath} alt="Lady smiling" />
        </div>
        <div className="reg:py-8 py-4">
          <span className="text-black text-lg leading-none font-inter font-bold">
            Campo 2
          </span>
        </div>
      </div>
    </div>
  );
}
