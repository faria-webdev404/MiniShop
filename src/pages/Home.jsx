import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import DiscountBanner from "./DiscountBanner";
import LatestCollection from "./LatestCollection";
import DealsSection from "./DealsSection";
import BrandLogos from "./BrandLogos";
import Testimonials from "./Testimonials";
import NewsletterSignup from "./NewsLetterSignUp";


const Home = () => {
  return (
    <>
     <Hero />
     <Products />
    <DiscountBanner />
     <LatestCollection />
     <DealsSection />
     
     <BrandLogos />
     <Testimonials />
     <NewsletterSignup />
    </>
  );
}

export default Home;