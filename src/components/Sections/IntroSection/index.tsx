import { BigGradientText } from '@/components/Typography/BigGradientText';
import Image from 'next/image';

import ballsHehehe from '../../../assets/bolinha.svg';
import { IntroButton } from '@/components/Buttons/IntroButton';

export function IntroSection() {
  return (
    <div className="Container reg:flex reg:flex-row reg:justify-start reg:py-24 reg:px-28 regmax:grid regmax:grid-cols-5 py-12 px-16">
      <div className="InfoContainer col-span-3 flex flex-col justify-center items-start">
        <div className="TextContainer flex flex-col justify-center items-start reg:w-[42rem] reg:h-60 h-40">
          <BigGradientText text="Crédito" />
          <span className="text-black reg:text-[5rem] text-[3.5rem] leading-none font-normal reg:tracking-spaced">
            Soluções e <br />
            oportunidades
          </span>
        </div>

        <div className="SloganAndButtonContainer flex flex-col justify-between items-start mt-12 w-full reg:h-40 h-24">
          <p className="Slogan text-header-text reg:text-2xl text-xl font-medium tracking-spaced">
            Para você e sua empresa crescer e prosperar.
          </p>
          <IntroButton />
        </div>
      </div>

      <div className="ImageContainer col-span-2 ml-16">
        <Image src={ballsHehehe} alt="Image with blue balls lol" />
      </div>
    </div>
  );
}
