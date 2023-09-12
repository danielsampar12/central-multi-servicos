import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  imagePath: string;
}

export function ProductCard({
  title,
  description,
  imagePath,
}: ProductCardProps) {
  return (
    <div className="ProductCard reg:p-12 p-8 bg-white rounded-2xl shadow flex-col justify-center items-start inline-flex">
      <div className="IconContainer flex flex-row w-full justify-start reg:mb-6 mb-4">
        <Image src={imagePath} alt="Product image" />
      </div>
      <span className="ProductTitle text-black font-inter reg:text-2xl text-lg font-medium reg:mb-8 mb-4">
        {title}
      </span>
      <p className="ProductDescription text-black/60 font-inter reg:text-lg text-base font-normal">
        {description}
      </p>
    </div>
  );
}
