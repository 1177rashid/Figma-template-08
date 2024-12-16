export default function TopCategories() {
    const categories = [
      {
        name: "Wing Chair",
        products: "3,565 Products",
        imageUrl: "/Image (5).png",
      },
      {
        name: "Wooden Chair",
        products: "1,250 Products",
        imageUrl: "/Image (6).png",
      },
      {
        name: "Desk Chair",
        products: "1,185 Products",
        imageUrl: "/Image (7).png",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative rounded-lg overflow-hidden shadow-md bg-gray-100"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-48 object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="text-sm">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  