import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import SignatureDishes from '../components/sections/SignatureDishes';
import Experience from '../components/sections/Experience';
import GalleryPreview from '../components/sections/GalleryPreview';
import ChefSpecial from '../components/sections/ChefSpecial';
import GoogleReviews from '../components/sections/GoogleReviews';
import ReservationCTA from '../components/sections/ReservationCTA';
import InstagramPreview from '../components/sections/InstagramPreview';
import LocationPreview from '../components/sections/LocationPreview';
import Marquee from '../components/Marquee';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Marquee text="Authentic Indian · Live Music · Garden Dining · Family Celebrations" />
      <WhyChooseUs />
      <SignatureDishes />
      <Experience />
      <GalleryPreview />
      <ChefSpecial />
      <GoogleReviews />
      <ReservationCTA />
      <InstagramPreview />
      <LocationPreview />
    </>
  );
}
