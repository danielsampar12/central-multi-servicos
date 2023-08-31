import { ProductCard } from '@/components/Cards/ProductCard';

import image1 from '@/assets/icons/prod-icon1.svg';
import image2 from '@/assets/icons/prod-icon2.svg';
import image3 from '@/assets/icons/prod-icon3.svg';
import image4 from '@/assets/icons/prod-icon4.svg';

export function ProductsSection() {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="ProductsContainer flex flex-col py-20 px-[6.5rem] gap-28">
      <div className="TextContainer flex flex-col w-full items-start justify-center">
        <h1 className="TextTitle text-white font-inter text-[3.5rem] leading-none font-medium">
          Conheça nossos produtos
        </h1>

        <p className="ParagraphAboutProducts mt-[2rem] w-[58rem] flex-shrink-0 text-xl font-light font-inter text-prod-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="ProductsCadsContainer grid grid-cols-2 gap-12">
        <ProductCard
          imagePath={image1}
          title="Produto 1"
          description={description}
        />
        <ProductCard
          imagePath={image2}
          title="Produto 2"
          description={description}
        />
        <ProductCard
          imagePath={image3}
          title="Produto 3"
          description={description}
        />
        <ProductCard
          imagePath={image4}
          title="Produto 4"
          description={description}
        />
      </div>
    </div>
  );
}
