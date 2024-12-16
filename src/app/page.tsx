import CompanyLogo from "./components/Companies";
import ExploreStyles from "./components/ExploreStyles";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import TopCategories from "./components/TopCategories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyLogo />
      <FeaturedProducts />
      <TopCategories />
      <ExploreStyles />
      <ProductGrid />
    </>
  );
}
