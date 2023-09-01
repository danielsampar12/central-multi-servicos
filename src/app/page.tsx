import { MainFooter } from '@/components/Footers/MainFooter';
import { Header } from '@/components/Header';
import { IntroSection } from '@/components/Sections/IntroSection';
import { PerfectForYouSection } from '@/components/Sections/PerfectForYouSection';
import { ProductsSection } from '@/components/Sections/ProductsSection';
import { WhoWeAreSection } from '@/components/Sections/WhoWeAreSection';

export default function Home() {
  return (
    <>
      <h1 className="sm:hidden">
        Site indisponível para o tamanho da tela do aparelho
      </h1>
      <div className="flex flex-col h-screen overflow-hidden smmax:hidden">
        <header className="w-full text-center">
          <Header />
        </header>
        <main className="flex-1 overflow-y-scroll no-scrollbar">
          <div id="section1" className="min-h-screen">
            <IntroSection />
          </div>
          <div id="section2" className="min-h-[150vh] bg-dark-grey">
            <ProductsSection />
          </div>
          <div id="section3" className="min-h-screen">
            <PerfectForYouSection />
          </div>
          <div
            id="section4"
            className="min-h-[80vh] flex items-center justify-center bg-light-grey"
          >
            <WhoWeAreSection />
          </div>
          <div id="footer" className="min-h-[50vh] bg-dark-grey">
            <MainFooter />
          </div>
        </main>
        {/* <footer className="w-full text-center border-t border-grey p-4">some footer</footer> */}
      </div>
    </>
  );
}
