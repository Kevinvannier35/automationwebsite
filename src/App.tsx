// src/App.tsx
import { useState } from "react";

// 🇬🇧 EN components
import { Hero as HeroEn } from "./components/en/hero";
import { Features as FeaturesEn } from "./components/en/features";
import { CTA as CTAEn } from "./components/en/cta";
import { Benefits as BenefitsEn } from "./components/en/benefits";
import { HowItWorks as HowItWorksEn } from "./components/en/how-it-works";
import { Stats as StatsEn } from "./components/en/stats";
import { Footer as FooterEn } from "./components/en/footer";

// 🇫🇷 FR components
import { Hero as HeroFr } from "./components/fr/hero";
import { Features as FeaturesFr } from "./components/fr/features";
import { CTA as CTAFr } from "./components/fr/cta";
import { Benefits as BenefitsFr } from "./components/fr/benefits";
import { HowItWorks as HowItWorksFr } from "./components/fr/how-it-works";
import { Stats as StatsFr } from "./components/fr/stats";
import { Footer as FooterFr } from "./components/fr/footer";

// 🇮🇩 ID components
import { Hero as HeroId } from "./components/id/hero";
import { Features as FeaturesId } from "./components/id/features";
import { CTA as CTAId } from "./components/id/cta";
import { Benefits as BenefitsId } from "./components/id/benefits";
import { HowItWorks as HowItWorksId } from "./components/id/how-it-works";
import { Stats as StatsId } from "./components/id/stats";
import { Footer as FooterId } from "./components/id/footer";

type Lang = "en" | "fr" | "id";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");

  // On choisit quel set de composants utiliser en fonction de la langue
  const components = (() => {
    switch (lang) {
      case "fr":
        return {
        Hero: HeroFr,
        Features: FeaturesFr,
        CTA: CTAFr,
        Benefits: BenefitsFr,
        HowItWorks: HowItWorksFr,
        Stats: StatsFr,
        Footer: FooterFr,
      };
      case "id":
        return {
          Hero: HeroId,
          Features: FeaturesId,
          CTA: CTAId,
          Benefits: BenefitsId,
          HowItWorks: HowItWorksId,
          Stats: StatsId,
          Footer: FooterId,
        };
      case "en":
      default:
        return {
          Hero: HeroEn,
          Features: FeaturesEn,
          CTA: CTAEn,
          Benefits: BenefitsEn,
          HowItWorks: HowItWorksEn,
          Stats: StatsEn,
          Footer: FooterEn,
        };
    }
  })();

  const { Hero, Features, Benefits, HowItWorks, Stats, CTA, Footer } = components;

  return (
    <div className="min-h-screen bg-white">
      {/* On passe la langue + le setter au Hero */}
      <Hero lang={lang} onChangeLang={setLang} />
      <Features />
      <CTA />
      <Benefits />
      <HowItWorks />
      <Stats />
      <Footer />
    </div>
  );
}