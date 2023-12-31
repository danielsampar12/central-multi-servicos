import Image from 'next/image';
import icon from '@/assets/icons/logo-icon-darker.svg';
import { HeaderButton } from '../Buttons/HeaderButton';

export function Header() {
  return (
    <div className="HeaderContainer reg:py-8 reg:px-28 py-4 px-10 bg-header-grey bg-opacity-100 w-full grid grid-cols-4">
      <div className="item1 col-span-1 flex items-center justify-start">
        <div className="IconContainer flex flex-row justify-start items-center gap-4">
          <Image src={icon} alt="Icon" />
          <div className="LogoTextContainer flex flex-col items-start">
            <span className="LogoText text-dark-grey/80 reg:text-[2rem] text-[1.25rem] font-inter font-light tracking-[0.06181rem]">
              CENTRAL
            </span>
            <span className="LogoText2 -mt-2 text-dark-grey/80 reg:text-[0.95rem] text-[0.425rem] font-light font-inter tracking-[0.0275rem]">
              Serviços Financeiros
            </span>
          </div>
        </div>
      </div>

      <div className="item2 col-span-2 flex items-center justify-center gap-16">
        <a
          href="#section2"
          className="Products font-europa text-header-text text-xl reg:text-2xl font-normal tracking-header lgmax:hidden"
        >
          Produtos
        </a>
        <a
          href="#section3"
          className="Benefits font-europa text-header-text text-xl reg:text-2xl font-normal tracking-header lgmax:hidden"
        >
          Benefícios
        </a>
        <a
          href="#section4"
          className="AboutUs font-europa text-header-text text-xl reg:text-2xl font-normal tracking-header lgmax:hidden"
        >
          Sobre nós
        </a>
      </div>

      <div className="item3 col-span-1 flex items-center justify-end">
        <HeaderButton />
      </div>
    </div>
  );
}
