const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair1.png",
      badge: "New",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20 $30",
      image: "/chair2.png",
      badge: "Sale",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair3.png",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair4.png",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair5.png",
      badge: "New",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20 $30",
      image: "/chair6.png",
      badge: "Sale",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair7.png",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair8.png",
    },
  ];
  
  export default function ProductGrid() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${
                      product.badge === "New"
                        ? "bg-green-500"
                        : product.badge === "Sale"
                        ? "bg-orange-500"
                        : ""
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-600">
                  {product.price.includes(" ")
                    ? product.price.split(" ")[0]
                    : product.price}
                  {product.price.includes(" ") && (
                    <span className="line-through ml-2 text-gray-400">
                      {product.price.split(" ")[1]}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  