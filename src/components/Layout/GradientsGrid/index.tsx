import Image from 'next/image';

import imagePath from '@/assets/gradient-d.svg';

export function GradientsGrid() {
  return (
    <div className="GradientGridContainer grid grid-cols-2">
      <Image src={imagePath} alt="Gradient" />
      <div></div>
      <Image src={imagePath} alt="Gradient" />
      <Image src={imagePath} alt="Gradient" />
    </div>
  );
}
