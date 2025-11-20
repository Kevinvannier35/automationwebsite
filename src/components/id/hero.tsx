// src/components/id/hero.tsx
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Lang = "en" | "fr" | "id";

type HeroProps = {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
};

export function Hero({ lang, onChangeLang }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <span className="text-xl">Ascend Automation</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Layanan
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
            Manfaat
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Kontak
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300">
            <button
              type="button"
              title="Français"
              onClick={() => onChangeLang("fr")}
              className={`text-2xl hover:scale-110 transition-transform ${
                lang === "fr" ? "opacity-100" : "opacity-60"
              }`}
            >
              🇫🇷
            </button>
            <button
              type="button"
              title="English"
              onClick={() => onChangeLang("en")}
              className={`text-2xl hover:scale-110 transition-transform ${
                lang === "en" ? "opacity-100" : "opacity-60"
              }`}
            >
              🇬🇧
            </button>
            <button
              type="button"
              title="Bahasa Indonesia"
              onClick={() => onChangeLang("id")}
              className={`text-2xl hover:scale-110 transition-transform ${
                lang === "id" ? "opacity-100" : "opacity-60"
              }`}
            >
              🇮🇩
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000] px-4 py-24 rounded-1xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">
                Kecerdasan Buatan & Otomatisasi
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl mb-6 font-semibold tracking-tight 
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              bg-clip-text text-transparent"
            >
              Otomatiskan Bisnis Anda dengan AI
            </h1>

            <p className="text-xl text-white mb-8">
              Optimalkan proses Anda dengan AI: hemat waktu, kurangi biaya, dan tingkatkan produktivitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="gap-2">
                  Bicara dengan Ahli
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-3xl text-white">95%</div>
                <div className="text-sm text-gray-300">Waktu dihemat</div>
              </div>
              <div>
                <div className="text-3xl text-white">10x</div>
                <div className="text-sm text-gray-300">ROI rata-rata</div>
              </div>
              <div>
                <div className="text-3xl text-white">50+</div>
                <div className="text-sm text-gray-300">Klien puas</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80"
              alt="Teknologi AI"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}