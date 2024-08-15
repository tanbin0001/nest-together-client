

// import { Box, Button, Container, Typography } from "@mui/material";
// import Image className ="rounded-md" from "next/image";
// import home from '../../../../assets/hero section.png';
// import Link from "next/link";

// import ShareYourFlatButton from "./Component/ShareYourFlatButton";


// const HeroSection = () => {



//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         minHeight: '80vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         overflow: 'hidden',
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(135deg, #6db784 50%, white 50%)',
//           clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//           zIndex: -2,
//         }}
//       />


//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(135deg, rgba(109, 183, 132, 0.6) 50%, rgba(255, 255, 255, 0.6) 50%)',
//           clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//           zIndex: -1,
//         }}
//       />
//       <Container maxWidth="md" sx={{ textAlign: 'start' }}>
//         <Typography
//           variant="h2"
//           component="h1"
//           gutterBottom
//           sx={{
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//             color: '#fff',
//           }}
//         >
//           Find Your Perfect Flatmate
//         </Typography>
//         <Typography
//           variant="h5"
//           component="h2"
//           gutterBottom
//           sx={{
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//             color: '#fff',
//           }}
//         >
//           Join our community and discover your ideal flat share
//         </Typography>
//         <ShareYourFlatButton />
//       </Container>
//       <Container sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Image className ="rounded-md" src={home} alt="home image" width={400} height={400} />
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

import Image from 'next/image';
import image1 from '../../../../assets/herosection flats/1.avif';
import image2 from '../../../../assets/herosection flats/2.avif';
import image3 from '../../../../assets/herosection flats/3.avif';
import image4 from '../../../../assets/herosection flats/4.avif';
import image5 from '../../../../assets/herosection flats/5.avif';
import image6 from '../../../../assets/herosection flats/6.avif';
import image7 from '../../../../assets/herosection flats/7.avif';
import image8 from '../../../../assets/herosection flats/8.avif';
import image9 from '../../../../assets/herosection flats/9.avif';
import image10 from '../../../../assets/herosection flats/10.avif';
import image11 from '../../../../assets/herosection flats/11.avif';
import image12 from '../../../../assets/herosection flats/12.avif';
import image13 from '../../../../assets/herosection flats/13.avif';
import image14 from '../../../../assets/herosection flats/14.avif';
import image15 from '../../../../assets/herosection flats/15.avif';
import image16 from '../../../../assets/herosection flats/16.avif';
import image17 from '../../../../assets/herosection flats/17.avif';
import image18 from '../../../../assets/herosection flats/18.avif';

import '../HeroSection/HeroSection.css'
import ShareYourFlatButton from './Component/ShareYourFlatButton';

const ImageGallery = () => {

  return (
    <div className='grid grid-col-1 lg:grid-cols-2 lg:max-h-screen   '>
      {/* Text part */}
      <div className='flex items-center justify-center'>
        <div className='text-start p-4'>
          <h1 className='text-5xl font-bold'>
            The Easiest Way to Find Your Perfect Flat
          </h1>
          <p>
            Whether you have a flat to rent out or are searching for the ideal living space, our platform makes it easy. Post your listing, browse available flats, and connect with potential renters or flatmates quickly and securely. Simplify your flat sharing experience today!
          </p>
          <ShareYourFlatButton />
        </div>
      </div>

      {/* image part  */}
      <div className='flex items-center justify-center gap-4 overflow-hidden max-h-screen'>
        {/* First div with 4 images */}
        <div className='marquee-container'>

          <div className='flex flex-col gap-4 marquee'>
            <Image className="rounded-md" width={100} height={100} alt="image 1" src={image1} />
            <Image className="rounded-md" width={100} height={100} alt="image 2" src={image2} />
            <Image className="rounded-md" width={100} height={100} alt="image 3" src={image3} />
            <Image className="rounded-md" width={100} height={100} alt="image 4" src={image4} />


            <Image className="rounded-md" width={100} height={100} alt="image 14" src={image14} />
            <Image className="rounded-md" width={100} height={100} alt="image 15" src={image15} />
            <Image className="rounded-md" width={100} height={100} alt="image 16" src={image16} />
            <Image className="rounded-md" width={100} height={100} alt="image 17" src={image17} />
            <Image className="rounded-md" width={100} height={100} alt="image 18" src={image18} />
          </div>
        </div>


        <div className='marquee-container '>

          {/* Second div with 5 images */}
          <div className='flex flex-col gap-4 marqueeDown'>
            <Image className="rounded-md" width={100} height={100} alt="image 5" src={image5} />
            <Image className="rounded-md" width={100} height={100} alt="image 6" src={image6} />
            <Image className="rounded-md" width={100} height={100} alt="image 7" src={image7} />
            <Image className="rounded-md" width={100} height={100} alt="image 8" src={image8} />
            <Image className="rounded-md" width={100} height={100} alt="image 9" src={image9} />



          </div>
        </div>
        {/* Third div with 4 images */}
        <div className='marquee-container '>

          <div className='flex flex-col gap-4 marquee '>
            <Image className="rounded-md" width={100} height={100} alt="image 10" src={image10} />
            <Image className="rounded-md" width={100} height={100} alt="image 11" src={image11} />
            <Image className="rounded-md" width={100} height={100} alt="image 12" src={image12} />
            <Image className="rounded-md" width={100} height={100} alt="image 13" src={image13} />
          </div>
        </div>
        {/* Fourth div with 5 images */}
        <div className='marquee-container '>

          <div className='flex flex-col gap-4 marqueeDown '>
            <Image className="rounded-md" width={100} height={100} alt="image 14" src={image14} />
            <Image className="rounded-md" width={100} height={100} alt="image 15" src={image15} />
            <Image className="rounded-md" width={100} height={100} alt="image 16" src={image16} />
            <Image className="rounded-md" width={100} height={100} alt="image 17" src={image17} />
            <Image className="rounded-md" width={100} height={100} alt="image 18" src={image18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
