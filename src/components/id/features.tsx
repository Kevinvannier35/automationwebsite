import { Bot, Zap, BarChart3, Lock, RefreshCw, Workflow } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Bot,
    title: "Chatbot AI",
    description: "Otomatisasikan layanan pelanggan Anda dengan chatbot cerdas yang tersedia 24/7.",
  },
  {
    icon: Workflow,
    title: "Otomatisasi Proses",
    description: "Hilangkan tugas berulang dan biarkan AI menangani alur kerja Anda.",
  },
  {
    icon: BarChart3,
    title: "Analitik Prediktif",
    description: "Buat keputusan yang lebih baik dengan analisis data berbasis AI.",
  },
  {
    icon: Zap,
    title: "Integrasi Cepat",
    description: "Hubungkan alat yang sudah Anda gunakan hanya dalam beberapa klik, tanpa perlu coding.",
  },
  {
    icon: Lock,
    title: "Aman & Patuh",
    description: "Data Anda dilindungi dengan standar keamanan tertinggi.",
  },
  {
    icon: RefreshCw,
    title: "Peningkatan Berkelanjutan",
    description: "AI terus belajar dan meningkat secara otomatis dari waktu ke waktu.",
  },
];

export function Features() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Solusi Otomatisasi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teknologi AI terbaru untuk mentransformasikan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}