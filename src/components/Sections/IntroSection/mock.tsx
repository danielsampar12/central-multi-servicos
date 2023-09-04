import { BigGradientText } from '@/components/Typography/BigGradientText';
import Image from 'next/image';

import ballsHehehe from '../../../assets/bolinha.svg';
import { IntroButton } from '@/components/Buttons/IntroButton';

export function IntroSectionMocks() {
  return (
    <div className="Container grid grid-cols-5 py-16 px-20">
      <div className="InfoContainer col-span-3 flex flex-col justify-center items-start">
        <div className="TextContainer flex flex-col justify-center items-start w-full bg h-48">
          <BigGradientText text="Crédito" />
          <span className="text-black text-5xl leading-none font-normal tracking-spaced">
            Soluções e <br />
            oportunidades
          </span>
        </div>

        <div className="SloganAndButtonContainer flex flex-col justify-between items-start mt-8 w-full h-28">
          <p className="Slogan text-header-text text-xl font-medium tracking-spaced">
            Para sua empresa crescer e prosperar.
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
