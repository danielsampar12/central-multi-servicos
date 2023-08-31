import { Header } from '@/components/Header';
import { IntroSection } from '@/components/Sections/IntroSection';
import { PerfectForYouSection } from '@/components/Sections/PerfectForYouSection';
import { ProductsSection } from '@/components/Sections/ProductsSection';

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="w-full text-center">
        <Header />
      </header>
      <main className="flex-1 overflow-y-scroll">
        <div id="section1" className="min-h-screen">
          <IntroSection />
        </div>
        <div id="section2" className="min-h-[150vh] bg-dark-grey">
          <ProductsSection />
        </div>
        <div id="section3" className="min-h-screen">
          <PerfectForYouSection />
        </div>
        <div id="section4" className="min-h-screen">
          <p>Sections 4 </p>
        </div>
        <div id="section5" className="min-h-screen">
          <p>Sections 5</p>
        </div>
      </main>
      {/* <footer className="w-full text-center border-t border-grey p-4">some footer</footer> */}
    </div>
  );
}
