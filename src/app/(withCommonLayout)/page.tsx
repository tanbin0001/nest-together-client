import AllFlats from "@/components/UI/HomePage/AllFlats/AllFlats";
import FeaturedFlatListing from "@/components/UI/HomePage/FeaturedFlatListing/FeaturedFlatListing";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Widget from "@/components/UI/HomePage/HomeModal/HomeModal";
import TestimonialsSlider from "@/components/UI/HomePage/Testimonial/Testimonial";
import TipsSection from "@/components/UI/HomePage/Tips/Tips";
import Tips from "@/components/UI/HomePage/Tips/Tips";

import { Container } from "@mui/material";



const HomePage = () => {
  return (
    <Container>
      <Widget />
      <HeroSection />
      <AllFlats />
      <FeaturedFlatListing />
      <TipsSection />
      <TestimonialsSlider />

    </Container>
  );
};

export default HomePage;
