// src/components/en/hero.tsx
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoHeader from "../../assets/logo-header.png";

type Lang = "en" | "fr" | "id";

type HeroProps = {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
};

export function Hero({ lang, onChangeLang }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoHeader}
            alt="Ascend Automation"
            className="h-10 w-auto"
          />
        </div>

        {/* LINKS + LANG SELECTOR */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>

          {/* Lang selector */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300">
            <button
              className={`text-2xl hover:scale-110 transition-transform ${
                lang === "fr" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => onChangeLang("fr")}
            >
              🇫🇷
            </button>

            <button
              className={`text-2xl hover:scale-110 transition-transform ${
                lang === "en" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => onChangeLang("en")}
            >
              🇬🇧
            </button>

            <button
              className={`text-2xl hover:scale-110 transition-transform ${
                lang === "id" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => onChangeLang("id")}
            >
              🇮🇩
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000] px-4 py-24 rounded-1xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full mb-6">
              <img src="/favicon.svg" alt="Ascend" className="w-4 h-4" />
              <span className="text-sm">
                Artificial intelligence and Automation
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl mb-6 font-semibold tracking-tight 
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent"
            >
              Automate your business with AI
            </h1>

            <p className="text-xl text-white mb-8">
              Optimize your processes with AI: save time, reduce costs, and
              increase your productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="gap-2">
                  Talk to an expert
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-3xl text-white">95%</div>
                <div className="text-sm text-gray-300">Time saved</div>
              </div>

              <div>
                <div className="text-3xl text-white">10x</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>

              <div>
                <div className="text-3xl text-white">50+</div>
                <div className="text-sm text-gray-300">Satisfied clients</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMyNzAzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Technology"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}