
interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    originalPrice?: number; // Mark this as optional
    label?: string; // Mark this as optional since not all products have a label
  }
  
  export default function ProductCard({
    image,
    name,
    price,
    originalPrice,
    label,
  }: ProductCardProps) {
    return (
      <div className="max-w-xs rounded-lg shadow-md bg-white overflow-hidden">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          {label && (
            <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {label}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-gray-800 font-bold text-lg">{name}</h3>
          <div className="flex items-center mt-2">
            <span className="text-teal-500 font-bold">${price}</span>
            {originalPrice && (
              <span className="text-gray-400 text-sm line-through ml-2">
                ${originalPrice}
              </span>
            )}
          </div>
          <button className="mt-4 w-full text-center text-teal-500 hover:text-white border border-teal-500 hover:bg-teal-500 rounded-lg py-2 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  