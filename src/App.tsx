import { Hero } from "./components/en/hero";
import { Features } from "./components/en/features";
import { ContactSection } from "./components/en/contactsection";
import { Benefits } from "./components/en/benefits";
import { HowItWorks } from "./components/en/how-it-works";
import { Stats } from "./components/en/stats";
import { CTA } from "./components/en/cta";
import { Footer } from "./components/en/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <CTA />
      <Benefits />
      <HowItWorks />
      <Stats />
      <Footer />
    </div>
  );
}