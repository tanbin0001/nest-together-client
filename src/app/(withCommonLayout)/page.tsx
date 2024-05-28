import AllFlats from "@/components/UI/HomePage/AllFlats/AllFlats";
import FeaturedFlatListing from "@/components/UI/HomePage/FeaturedFlatListing/FeaturedFlatListing";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
 
const HomePage = () => {
  return (
    <>
      <HeroSection />
       <AllFlats/>
       <FeaturedFlatListing/>
    </>
  );
};

export default HomePage;
