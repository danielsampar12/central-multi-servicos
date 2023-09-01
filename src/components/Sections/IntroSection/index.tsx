import { BigGradientText } from '@/components/Typography/BigGradientText';
import Image from 'next/image';

import ballsHehehe from '../../../assets/bolinha.svg';
import { IntroButton } from '@/components/Buttons/IntroButton';

export function IntroSection() {
  return (
    <div className="Container flex flex-row justify-start py-24 px-28">
      <div className="InfoContainer flex flex-col justify-center items-start">
        <div className="TextContainer flex flex-col justify-center items-start w-[42rem] h-60">
          <BigGradientText text="Crédito" />
          <span className="text-black text-[5rem] leading-none font-normal tracking-spaced">
            Soluções e <br />
            oportunidades
          </span>
        </div>

        <div className="SloganAndButtonContainer flex flex-col justify-between items-start mt-12 w-full h-40">
          <p className="Slogan text-header-text text-2xl font-medium tracking-spaced">
            Para sua empresa crescer e prosperar.
          </p>
          <IntroButton />
        </div>
      </div>

      <div className="ImageContainer ml-16">
        <Image src={ballsHehehe} alt="Image with blue balls lol" />
      </div>
    </div>
  );
}
