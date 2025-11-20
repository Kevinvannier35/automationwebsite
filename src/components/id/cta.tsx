// src/components/id/cta.tsx
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone } from "lucide-react";

const countryCodes = [
  { code: "+33", label: "🇫🇷 France (+33)" },
  { code: "+62", label: "🇮🇩 Indonesia (+62)" },
  { code: "+1", label: "🇺🇸 United States (+1)" },
  { code: "+44", label: "🇬🇧 United Kingdom (+44)" },
  { code: "+49", label: "🇩🇪 Germany (+49)" },
  { code: "+34", label: "🇪🇸 Spain (+34)" },
  { code: "+39", label: "🇮🇹 Italy (+39)" },
  { code: "+32", label: "🇧🇪 Belgium (+32)" },
  { code: "+41", label: "🇨🇭 Switzerland (+41)" },
];

const WEBHOOK_URL =
  "https://ascendyagency.app.n8n.cloud/webhook/landing-ai-contact";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+62",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();

      if (!response.ok) {
        console.error("n8n error:", response.status, text);
        alert("Terjadi kesalahan pada server (n8n).");
        return;
      }

      alert("Permintaan Anda telah berhasil dikirim ✅");

      setFormData({
        name: "",
        email: "",
        countryCode: "+62",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Network error:", error);
      alert("Tidak dapat menghubungi server n8n (masalah jaringan).");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600">
            Diskusikan dengan ahli dan temukan bagaimana kami dapat
            mentransformasikan bisnis Anda
          </p>
        </div>

        <Card
          className="
            rounded-3xl shadow-2xl border border-white/10
            bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000]
          "
        >
          <CardContent className="p-8 lg:p-10">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <Label htmlFor="name" className="text-white text-lg">
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="mt-2 bg-white border border-gray-300 text-gray-900 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white text-lg">
                  Alamat Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="anda@example.com"
                  className="mt-2 bg-white border border-gray-300 text-gray-900 rounded-xl"
                />
              </div>

              <div>
                <Label className="text-white text-lg">Nomor Telepon</Label>
                <div className="flex gap-3 mt-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="
                      w-40 px-3 py-2 rounded-xl bg-white text-gray-900 
                      border border-gray-300
                    "
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>

                  <Input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Nomor telepon Anda"
                    className="flex-1 bg-white border border-gray-300 text-gray-900 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-white text-lg">
                  Ceritakan kebutuhan proyek Anda
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Jelaskan kebutuhan otomatisasi Anda..."
                  className="mt-2 min-h-32 bg-white border border-gray-300 text-gray-900 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl"
              >
                {isSubmitting ? "Mengirim..." : "Konfirmasi"}
              </Button>
            </form>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-center text-gray-300 mb-6">
                Atau hubungi kami melalui:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/33661369642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 
                            bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>

                <a
                  href="mailto:ascendagency35@gmail.com?subject=Permintaan%20Otomatisasi"
                  className="flex items-center justify-center gap-2 px-6 py-3 
                            bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}