import { GradientsGrid } from '@/components/Layout/GradientsGrid';

export function WhoWeAreSection() {
  return (
    <div className="WhoWeAreSectionContainer flex flex-row px-24 py-16 gap-40">
      <div className="WhoWeAreSectionTextContainer flex flex-col w-1/2">
        <h1 className="text-black text-6xl font-bold font-inter mb-14">
          Quem somos
        </h1>
        <p className="text-black/50 text-2xl font-normal font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <GradientsGrid />
    </div>
  );
}
