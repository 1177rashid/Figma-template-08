import Image from "next/image"
export default function ExploreStyles() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section: Large Chair and Vertical Text */}
        <div className="relative flex flex-col items-center">
          <Image
            src="/orange.png"
            alt="Orange Chair"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 transform -rotate-90">
            <p className="text-gray-700 font-semibold text-lg tracking-wide">
            </p>
          </div>
        </div>

        {/* Right Section: Grid of Small Chairs */}
        <div className="grid grid-cols-2 gap-6">
          {/* Chair 1 */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-md">
            <Image
              src="/Image (4).png"
              alt="Chair 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Chair 2 */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-md">
            <Image
              src="/Image (1).png"
              alt="Chair 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Chair 3 */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-md">
            <Image
              src="/card (1).png"
              alt="Chair 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Chair 4 */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-md">
            <Image
              src="/Image (1).png"
              alt="Chair 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>

        </>
    )
}