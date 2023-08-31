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
    <div className="ProductCard p-12 bg-white rounded-2xl shadow flex-col justify-center items-start inline-flex">
      <div className="IconContainer flex flex-row w-full justify-start mb-6">
        <Image src={imagePath} alt="Product image" />
      </div>
      <span className="ProductTitle text-black font-inter text-[2rem] leading-none font-medium mb-8">
        {title}
      </span>
      <p className="ProductDescription text-black/60 font-inter text-lg leading-none font-normal">
        {description}
      </p>
    </div>
  );
}
