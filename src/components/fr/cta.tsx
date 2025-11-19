import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texte */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Prêt à automatiser votre entreprise ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Planifiez une consultation gratuite avec nos experts en IA et
                découvrez comment nous pouvons transformer vos processus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Contactez-nous
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden md:block relative h-full min-h-[400px]">
              <ImageWithFallback
                src="https://image.noelshack.com/fichiers/2025/47/1/1763367803-d143579a-f32c-4b68-92f0-d68923239ed9-2.jpg"
                alt="Automation"
                className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}