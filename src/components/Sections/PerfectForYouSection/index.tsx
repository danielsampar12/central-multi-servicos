import { PhoneCard } from '@/components/Cards/PhoneCard';

import { Paragraph } from '@/components/Typography/Paragraph';

import { CardWithPhoto } from '@/components/Cards/CardWithPhoto';
import { PaymentMethodCard } from '@/components/Cards/PaymentMethodCard';

export function PerfectForYouSection() {
  return (
    <div className="PerfectForYouSectionContainer flex items-center justify-center reg:px-[6.5rem] px-16 reg:py-36 py-24">
      <div className="ContainerDivider w-full grid grid-cols-2 gap-10">
        <div className="container1 col-span-1 flex flex-col reg:gap-10 gap-8 mb-10">
          <div className="item1 flex flex-col items-start justify-between reg:gap-6 gap-3">
            <h1 className="Title reg:text-6xl text-4xl text-black font-bold font-inter">
              Perfeito para você
            </h1>
            <p className="Text reg:text-xl text-base text-black/50 font-normal font-inter reg:mb-8">
              Faça como as milhares de empresas e pessoas físicas que cresceram
              com a ajuda da Central Serviços Financeiros.
            </p>
          </div>

          <Paragraph
            subtitle="Empréstimos para Empresários e Pessoas Físicas"
            text="Uma empresa que oferece empréstimos para pessoas jurídicas e físicas é ideal por várias razões. Se você é empresário ou precisa de dinheiro para projetos pessoais ou quitar dívidas, nossa empresa tem as melhores taxas do mercado. Com empréstimos personalizados, realizamos seus sonhos."
          />

          <Paragraph
            subtitle="Solução de Empréstimos Versátil e Ágil"
            text="Se você procura uma empresa para empréstimos a pessoas jurídicas e físicas, encontrou a opção ideal. Com diversas opções de empréstimo, a Central Serviços Financeiros atende às suas necessidades específicas, com taxas competitivas e aprovação rápida. Seja para investir no seu negócio ou realizar projetos pessoais, escolher nossa empresa é a decisão certa."
          />
        </div>

        <div className="container2 col-span-1 grid grid-cols-2 gap-4">
          <div className="photos1 col-span-1 flex flex-col items-center justify-center gap-4">
            <div className="PhoneCardContainer w-full">
              <PhoneCard
                mainText="Não perca tempo, fale com a gente agora!"
                subtext="A um clique de distancia"
              />
            </div>
            {/* <div className="ProdCardContainer">
              <SmallProductCard
                description={description}
                imagePath={image2}
                title="Campo 3"
              />
            </div> */}
          </div>
          <div className="photos1 col-span-1 h-full flex flex-col justify-center items-center gap-5 ">
            <CardWithPhoto />
            <PaymentMethodCard />
          </div>
        </div>
      </div>
    </div>
  );
}
