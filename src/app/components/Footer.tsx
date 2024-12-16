import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="w-auto flex flex-col justify-center bg-gray-50 pt-10 pb-6 px-20 text-darkgray font-inter">
     <div className="flex flex-col sm:flex-row items-start justify-between mb-8 gap-8 sm:gap-16">
  {/* Logo and Description */}
  <div className="flex flex-col items-start gap-4 w-full sm:w-auto">
    <Link href={"/"} className="flex no-underline items-center gap-2">
      <Image
        src="/Footer/logo.svg"
        alt="Comforty Logo"
        width={40}
        height={40}
        className="w-10 h-10"
      />
      <div className="text-[20px] sm:text-[26px] font-semibold text-gray-scales-black">Comforty</div>
    </Link>
    <p className="text-sm text-gray-600 max-w-[200px] sm:max-w-[250px]">
      Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
    </p>
    <div className="flex gap-6">
      <Link className="text-[#636270] no-underline hover:underline" target="_blank" href={"/twitter.com"}>
        <Image src="/Footer/twitter.svg" alt="Twitter" width={26} height={26} />
      </Link>
      <Link className="text-[#636270] no-underline hover:underline" target="_blank" href={"/facebook.com"}>
        <Image src="/Footer/facebook.svg" alt="Facebook" width={26} height={26} />
      </Link>
      <Link className="text-[#636270] no-underline hover:underline" target="_blank" href={"/instagram.com"}>
        <Image src="/Footer/instagram.svg" alt="Instagram" width={26} height={26} />
      </Link>
      <Link className="text-[#636270] no-underline hover:underline" target="_blank" href={"/youtube.com"}>
        <Image src="/Footer/youtube.svg" alt="YouTube" width={26} height={26} />
      </Link>
    </div>
  </div>

  {/* Category Links */}
  <div className="flex flex-col items-start gap-3 w-full sm:w-auto">
    <h3 className="text-[14px] font-medium text-[#9A9CAA] uppercase">Category</h3>
    <div className="space-y-2 flex flex-col text-sm text-gray-600">
      <Link href={"/products"} className="text-[#636270] no-underline hover:underline">Sofa</Link>
      <Link href={"/products"} className="text-[#636270] no-underline hover:underline">Armchair</Link>
      <Link href={"/products"} className="text-[#636270] no-underline hover:underline">Wing Chair</Link>
      <Link href={"/products"} className="text-[#636270] no-underline hover:underline">Desk Chair</Link>
      <Link href={"/products"} className="text-[#636270] no-underline hover:underline">Wooden Chair</Link>
      <Link href={"/products"} className="text-[#636270] no-underline hover:underline">Park Bench</Link>
    </div>
  </div>

  {/* Support Links */}
  <div className="flex flex-col items-start gap-3 w-full sm:w-auto">
    <h3 className="text-[14px] font-medium text-[#9A9CAA] uppercase">Support</h3>
    <div className="space-y-2 flex flex-col text-sm text-gray-600">
      <Link className="text-[#636270] no-underline hover:underline" href={"/contact"}>Help & Support</Link>
      <Link className="text-[#636270] no-underline hover:underline" href={"#"}>Terms & Conditions</Link>
      <Link className="text-[#636270] no-underline hover:underline" href={"#"}>Privacy Policy</Link>
      <Link className="text-[#636270] no-underline hover:underline" href={"/faq"}>Help</Link>
    </div>
  </div>

  {/* Newsletter */}
  <div className="flex flex-col items-start gap-4 w-full sm:w-auto">
    <h3 className="text-[14px] font-medium text-[#9A9CAA] uppercase">Newsletter</h3>
    <form className="flex flex-col sm:flex-row gap-2 items-center sm:w-auto">
      <input
        type="email"
        placeholder="Your email"
        className="rounded-lg bg-gray-scales-white h-[46px] py-2 px-3 text-sm focus:outline-none font-inter text-gray-scales-dark-gray w-full sm:w-[200px]"
      />
      <button
        type="submit"
        className="bg-gray-scales-dark-gray text-white text-md font-medium py-3.5 px-6 cursor-pointer rounded-lg transition mt-4 sm:mt-0"
      >
        Subscribe
      </button>
    </form>
    <p className="text-xs text-gray-600 sm:w-1/2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
    </p>
  </div>
</div>


      {/* Footer Bottom */}
      <div className="pt-4 flex flex-row w-full justify-between items-center text-sm opacity-[0.5] text-gray-600">
        <p>© 2021 - Blogy - Designed & Developed by Zakisoft</p>
        <div className="flex gap-4">
          <Image src="/Footer/mastercard.svg" alt="mastercard" width={40} height={16} />
          <Image src="/Footer/paypal.svg" alt="PayPal" width={40} height={16} />
          <Image src="/Footer/american-express.svg" alt="american-express" width={40} height={16} />
          <Image src="/Footer/visa-union.svg" alt="Visa" width={40} height={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
