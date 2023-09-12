import { ProductCard } from '@/components/Cards/ProductCard';

import image1 from '@/assets/icons/prod-icon1.svg';
import image2 from '@/assets/icons/prod-icon2.svg';
import image3 from '@/assets/icons/prod-icon3.svg';
import image4 from '@/assets/icons/prod-icon4.svg';

import {
  credFacilPessoalDescription,
  credFacilEmpresaDescription,
  emprestimoDescription,
  credEducacionalDescription,
} from '@/utils/productsDescriptions';

export function ProductsSection() {
  return (
    <div className="ProductsContainer flex flex-col reg:py-20 p-12 px-[6.5rem] reg:gap-16 gap-10">
      <div className="TextContainer flex flex-col w-full items-start justify-center">
        <h1 className="TextTitle text-white font-inter reg:text-[3.5rem] text-4xl leading-none font-medium">
          Conheça nossos produtos
        </h1>

        <p className="ParagraphAboutProducts reg:mt-[2rem] mt-[1rem] flex-shrink-0 reg:text-xl text-base font-light font-inter text-prod-p">
          Somos especializados em produtos financeiros e oferecemos soluções
          personalizadas para atender às suas necessidades: Oferecemos
          Empréstimo Pessoal, Empréstimo Empresarial, Empréstimo com Garantias
          Adicionais, Empréstimo para Reformas ou investimentos, além de opções
          para Educação e Lazer. Seu Futuro financeiro começa aqui!
        </p>
      </div>

      <div className="ProductsCadsContainer grid grid-cols-2 gap-12">
        <ProductCard
          imagePath={image1}
          title="CREDITO FÁCIL PESSOAL"
          description={credFacilPessoalDescription}
        />
        <ProductCard
          imagePath={image2}
          title="CRÉDITO FÁCIL EMPRESÁRIAL"
          description={credFacilEmpresaDescription}
        />
        <ProductCard
          imagePath={image3}
          title="EMPRESTIMOS COM GARANTIAS"
          description={emprestimoDescription}
        />
        <ProductCard
          imagePath={image4}
          title="CREDITO EDUCACIONAL E/OU ESTÉTICO"
          description={credEducacionalDescription}
        />
      </div>
    </div>
  );
}
