import Image from 'next/image';
import icon from '@/assets/icons/logo-icon.svg';
import whatsapp from '@/assets/icons/whatsapp.svg';
import email from '@/assets/icons/email.svg';
import phone from '@/assets/icons/phone-icon.svg';

export function MainFooter() {
  return (
    <div className="MainFooterContainer px-[6.5rem] py-11">
      <div className="FlatContainer w-full flex flex-row justify-start mb-12">
        <div className="IconContainer flex flex-row justify-start gap-4">
          <Image src={icon} alt="Icon" />
          <div className="LogoTextContainer flex flex-col items-start justify-start">
            <span className="LogoText text-white text-4xl font-inter font-extralight tracking-[0.06181rem]">
              CENTRAL
            </span>
            <span className="LogoText2 text-white font-thin font-inter tracking-[0.0275rem]">
              Serviços Financeiros
            </span>
          </div>
        </div>
      </div>

      <div className="InfoContainer w-full flex flex-row justify-between">
        <div className="TextInfoContaniner flex flex-col items-start">
          <h1 className="InfoName text-white text-2xl font-inter font-semibold tracking-[0.03125rem] mb-10">
            Informações da empresa
          </h1>
          <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
            Central Multi Serviços Ltda
          </span>
          <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
            CNPJ: 18.575.771/0001-72
          </span>
          <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
            Blumenau - SC, Itoupava Norte
          </span>
          <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
            Rua Dolores Duran, 410.
          </span>
          <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
            CEP: 89.052-020
          </span>
        </div>

        <div className="TextInfoContaniner1 flex flex-col items-start">
          <h1 className="InfoName text-white text-2xl font-inter font-semibold tracking-[0.03125rem] mb-10">
            Navegação
          </h1>
          <a
            href="#section1"
            className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2"
          >
            Home
          </a>
          <a
            href="#section2"
            className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2"
          >
            Produtos
          </a>
          <a
            href="#section3"
            className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2"
          >
            Perfeito para você
          </a>
          <a className="#section4 text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
            Sobre nós
          </a>
          <a
            href="#footer"
            className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2"
          >
            Entrar em contato
          </a>
        </div>

        <div className="TextInfoContaniner flex flex-col items-start">
          <h1 className="InfoName text-white text-2xl font-inter font-semibold tracking-[0.03125rem] mb-10">
            Atendimento
          </h1>
          <div className="flex flex-row gap-3">
            <Image src={whatsapp} alt="Whatsapp logo" />
            <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
              (47) 99174-4041
            </span>
          </div>

          <div className="flex flex-row gap-3">
            <Image src={phone} alt="Whatsapp logo" />
            <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
              (47) 99174-4041
            </span>
          </div>

          <div className="flex flex-row gap-3">
            <Image src={email} alt="Whatsapp logo" />
            <span className="InfoItem text-white text-lg font-medium font-inter tracking-[0.03125rem] mb-2">
              contato@centralservicosbr.com.br
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}