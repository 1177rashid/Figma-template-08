export default function HeroSection() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:flex lg:items-center lg:space-x-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to Chairy
            </h1>
            <p className="mt-2 text-4xl font-extrabold text-gray-900">
              Best Furniture Collection For Your Interior.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 text-white bg-teal-500 rounded-lg hover:bg-teal-600"
              >
                Shop Now →
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="/chair.png"
              alt="Furniture chair"
              className="max-w-sm mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>
    );
  }
  