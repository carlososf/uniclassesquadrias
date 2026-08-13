import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeroSlider } from './components/HeroSlider';
import { Philosophy } from './components/Philosophy';
import { Collections } from './components/Collections';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsappButton } from './components/WhatsappButton';

function App() {
  return (
    <div className="font-sans antialiased bg-white text-primary selection:bg-accent selection:text-white">
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <HeroSlider />
        <Philosophy />
        <Collections />
        <Projects />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export { App };
