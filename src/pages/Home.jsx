import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import LatestCollection from "./LatestCollection";
import DiscountBanner from "./DiscountBanner";
import DealsSection from "./DealsSection";
import BrandLogos from "./BrandLogos";
import Testimonials from "./Testimonials";
import NewsletterSignup from "./NewsLetterSignUp";


const Home = () => {
  return (
    <>
     <Hero />
     <Products />
     <ProductDetail />
     <LatestCollection />
     <DealsSection />
     <DiscountBanner />
     <BrandLogos />
     <Testimonials />
     <NewsletterSignup />
    </>
  );
}

export default Home;