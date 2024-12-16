
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      image: "/Image (1).png",
      name: "Library Stool Chair",
      price: 20,
      label: "New",
    },
    {
      image: "/Image (2).png",
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      label: "Sale",
    },
    {
      image: "/Image (3).png",
      name: "Library Stool Chair",
      price: 20,
    },
    {
      image: "/Image (4).png",
      name: "Library Stool Chair",
      price: 20,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
