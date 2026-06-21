import { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader/Loader';
import Cursor from './components/Cursor/Cursor';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
import CreativeProcess from './components/CreativeProcess/CreativeProcess';
import SignatureCoffee from './components/SignatureCoffee/SignatureCoffee';
import MaterialGallery from './components/MaterialGallery/MaterialGallery';
import TheWorkshop from './components/TheWorkshop/TheWorkshop';
import DesignerJournal from './components/DesignerJournal/DesignerJournal';
import StudioTeam from './components/StudioTeam/StudioTeam';
import Visit from './components/Visit/Visit';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import { useLenis } from './hooks/useLenis';
import { useScrollTrigger } from './hooks/useScrollTrigger';

export default function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useLenis();
  useScrollTrigger();

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      <Cursor />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div
        ref={mainRef}
        className="main-content"
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease' }}
      >
        <Navigation />
        <Hero />
        <Philosophy />
        <CreativeProcess />
        <SignatureCoffee />
        <MaterialGallery />
        <TheWorkshop />
        <DesignerJournal />
        <StudioTeam />
        <Visit />
        <Reservation />
        <Footer />
      </div>
    </>
  );
}
