import { PhoneCard } from '@/components/Cards/PhoneCard';

import image2 from '@/assets/icons/prod-icon2.svg';
import { Paragraph } from '@/components/Typography/Paragraph';
import { SmallProductCard } from '@/components/Cards/SmProductCard';
import { CardWithPhoto } from '@/components/Cards/CardWithPhoto';
import { PaymentMethodCard } from '@/components/Cards/PaymentMethodCard';

export function PerfectForYouSection() {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className="PerfectForYouSectionContainer flex items-center justify-center px-[6.5rem] py-36">
      <div className="ContainerDivider w-full grid grid-cols-2 gap-10">
        {/* metade  */}
        <div className="container1 col-span-1 flex flex-col justify-between gap-10 mb-10">
          <div className="item1 flex flex-col items-start justify-between gap-6">
            <h1 className="Title text-6xl text-black font-bold font-inter">
              Perfeito para você
            </h1>
            <p className="Text text-xl text-black/50 font-normal font-inter mb-8">
              Faça como as milhares de empresas que cresceram com a ajuda da
              Central Multi Serviços
            </p>
          </div>

          <Paragraph
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <Paragraph
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>

        <div className="container2 col-span-1 grid grid-cols-2 gap-4">
          <div className="photos1 col-span-1 flex flex-col items-center gap-4">
            <div className="PhoneCardContainer">
              <PhoneCard
                mainText="Campo 1"
                title="Lorem ipsum"
                subtext="A um clique de distancia"
              />
            </div>
            <div className="ProdCardContainer">
              <SmallProductCard
                description={description}
                imagePath={image2}
                title="Campo 3"
              />
            </div>
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
