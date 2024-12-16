import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  badgeColor?: string;
  link?: string
}

const CardFeatured: React.FC<CardProps> = ({
  imageSrc,
  title,
  price,
  oldPrice,
  badgeText,
  badgeColor = "bg-status-success", // Default color if no badge color is provided
  link,
}) => {
  return (
    <div className="w-full sm:w-[312px] lg:w-[300px] h-[377px] flex flex-col relative">
      {/* Image */}
      <Link href={`${link}`} className="w-full h-[82.76%] overflow-hidden rounded-md">
        <Image
          className="object-cover w-full h-full"
          width={312}
          height={312}
          alt={title}
          src={imageSrc}
        />
      </Link>

      {/* Product Details Section */}
      <div className="flex flex-col justify-start gap-2.5 px-4 py-2">
        <div className="text-sm sm:text-base leading-[130%] capitalize">{title}</div>
        <div className="flex flex-row items-center gap-1 text-lg">
          <div className="font-semibold">{price}</div>
          {oldPrice && (
            <div className="text-sm line-through text-gray-scales-gray">{oldPrice}</div>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="w-[44px] h-[44px] bg-gray-scales-off-white rounded-lg flex items-center justify-center absolute top-[87%] right-[5%]">
        <Image
          width={44}
          height={44}
          alt="Add to Cart"
          src="/homepage/Featured/Buy 3 (1).svg"
        />
      </div>

      {/* Badge */}
      {badgeText && (
        <div
          className={`absolute top-2 left-2 rounded ${badgeColor} py-1.5 px-2.5 text-sm text-gray-scales-white`}
        >
          {badgeText}
        </div>
      )}
    </div>
  );
};

export default CardFeatured;
