import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Theatrium from './components/Theatrium';
import LandmarksCarousel from './components/LandmarksCarousel';
import StoreDirectory from './components/StoreDirectory';
import EventsSection from './components/EventsSection';
import PillarsSection from './components/PillarsSection';
import AmenitiesSection from './components/AmenitiesSection';
import Testimonial from './components/Testimonial';
import LegacyBlock from './components/LegacyBlock';
import VisitSection from './components/VisitSection';
import GallerySection, { VibeSquareSection, InstagramSection } from './components/GallerySection';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Theatrium />
        <LandmarksCarousel />
        <StoreDirectory />
        <EventsSection />
        <VibeSquareSection />
        <GallerySection />
        <InstagramSection />
        <PillarsSection />
        <AmenitiesSection />
        <Testimonial />
        <LegacyBlock />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
