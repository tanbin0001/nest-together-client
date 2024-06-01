import AllFlats from "@/components/UI/HomePage/AllFlats/AllFlats";
import FeaturedFlatListing from "@/components/UI/HomePage/FeaturedFlatListing/FeaturedFlatListing";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Widget from "@/components/UI/HomePage/HomeModal/HomeModal";

import { Container } from "@mui/material";



const HomePage = () => {
  return (
    <Container>
      <Widget />
      <HeroSection />
      <AllFlats />
      <FeaturedFlatListing />

    </Container>
  );
};

export default HomePage;
