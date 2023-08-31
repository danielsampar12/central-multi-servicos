import { BigGradientText } from '@/components/Typography/BigGradientText';
import Image from 'next/image';

import ballsHehehe from '../../../assets/bolinha.svg';

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

          <button
            type="button"
            className="ContactUsButton w-full h-12 rounded-3xl px-10 py-4 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
          >
            <p className="ContactUs text-white text-xl font-medium tracking-wide">
              Fale conosco
            </p>
          </button>
        </div>
      </div>

      <div className="ImageContainer ml-16">
        <Image src={ballsHehehe} alt="Image with blue balls lol" />
      </div>
    </div>
  );
}
