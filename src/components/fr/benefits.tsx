import React from "react"; 
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  "Réduction des coûts opérationnels jusqu’à 60%",
  "Amélioration significative de la productivité des équipes",
  "Expérience client optimisée",
  "Élimination des erreurs humaines",
  "Disponibilité 24/7 sans interruption",
  "Scalabilité instantanée selon vos besoins",
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000]"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-10"></div>

            <ImageWithFallback
              src="https://image.noelshack.com/fichiers/2025/47/1/1763370742-capture-d-e-cran-2025-11-17-a-17-12-10.png"
              alt="Automatisation IA"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* TEXTE */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Pourquoi choisir l’automatisation IA ?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              L’intelligence artificielle n’est plus l’avenir — c’est le présent.
              Les entreprises qui adoptent l’automatisation aujourd’hui obtiennent
              un avantage concurrentiel majeur.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}