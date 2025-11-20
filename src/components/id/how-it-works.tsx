import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analisis",
    description: "Kami menganalisis proses Anda untuk menemukan peluang otomatisasi.",
  },
  {
    icon: Lightbulb,
    title: "Desain",
    description: "Kami merancang solusi AI yang disesuaikan dengan kebutuhan Anda.",
  },
  {
    icon: Rocket,
    title: "Implementasi",
    description: "Kami menerapkan dan mengintegrasikan solusi ke infrastruktur Anda.",
  },
  {
    icon: TrendingUp,
    title: "Optimisasi",
    description: "Kami memonitor performa dan terus mengoptimalkan sistem Anda.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Bagaimana cara kerjanya?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proses sederhana dan efektif dalam 4 langkah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}
                <div className="relative bg-white p-6 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}