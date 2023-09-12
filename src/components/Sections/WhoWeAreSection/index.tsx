import { GradientsGrid } from '@/components/Layout/GradientsGrid';

export function WhoWeAreSection() {
  return (
    <div className="WhoWeAreSectionContainer flex flex-row px-24 py-16 reg:gap-40 gap-20">
      <div className="WhoWeAreSectionTextContainer flex flex-col w-1/2">
        <h1 className="text-black reg:text-6xl text-5xl font-bold font-inter mb-14">
          Quem somos
        </h1>
        <p className="text-black/50 reg:text-2xl text-xl font-normal font-inter">
          Somos uma Equipe inovadora e altamente capacitada, dedicada a
          proporcionar soluções financeiras personalizadas, compreendendo o
          perfil único de cada cliente. Temos um compromisso sólido de ajudar
          nossos clientes a alcançar seus objetivos e assegurar um futuro
          financeiro mais seguro e próspero.
        </p>
      </div>
      <GradientsGrid />
    </div>
  );
}
