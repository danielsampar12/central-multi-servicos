import Image from 'next/image';

interface SmallProductCardProps {
  title: string;
  description: string;
  imagePath: string;
}

export function SmallProductCard({
  title,
  description,
  imagePath,
}: SmallProductCardProps) {
  return (
    <div className="ProductCard reg:p-6 p-4 bg-white rounded-2xl shadow flex-col justify-center drop-shadow-2xl items-start inline-flex">
      <div className="IconContainer flex flex-row w-full justify-start items-start reg:mb-6 mb-3">
        <Image src={imagePath} alt="Product image" />
        <span className="ProductTitle pl-2 text-black font-inter text-sm font-medium">
          {title}
        </span>
      </div>
      <p className="ProductDescription text-black/60 font-inter text-xs leading-none font-normal">
        {description}
      </p>
    </div>
  );
}
