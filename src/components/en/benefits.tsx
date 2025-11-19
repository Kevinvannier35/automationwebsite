import React from "react"; 
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  "Up to 60% reduction in operational costs",
  "Significant boost in team productivity",
  "Enhanced customer experience",
  "Elimination of human errors",
  "24/7 availability without interruptions",
  "Instant scalability based on your needs",
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000]"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-10"></div>

            <ImageWithFallback
              src="https://image.noelshack.com/fichiers/2025/47/1/1763370742-capture-d-e-cran-2025-11-17-a-17-12-10.png"
              alt="Automation"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Why Choose AI Automation?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Artificial intelligence is no longer the future—it's the present.
              Companies that adopt automation today gain a strong competitive advantage.
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