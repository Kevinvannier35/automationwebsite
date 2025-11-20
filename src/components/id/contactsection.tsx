// src/components/id/contactsection.tsx
import React, { useState } from "react";

// --- Daftar negara dengan kode + emoji ---
const countries = [
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Indonesia", code: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Switzerland", code: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Belgium", code: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
];

// --- Select untuk kode telp ---
type PhoneCountrySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

function PhoneCountrySelect({ value, onChange }: PhoneCountrySelectProps) {
  return (
    <select
      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-gray-300 text-gray-600 appearance-none cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1rem center",
        paddingRight: "2.5rem",
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {countries.map((c) => (
        <option key={c.code} value={c.dial}>
          {c.flag} {c.name} ({c.dial})
        </option>
      ))}
      <option value="other">🌍 Lainnya (isi manual)</option>
    </select>
  );
}

// --- CONTACT SECTION ---
export function ContactSection() {
  const [dialSelectValue, setDialSelectValue] = useState<string>("+33");
  const [customDial, setCustomDial] = useState<string>("");

  const isCustomDial = dialSelectValue === "other";
  const effectiveDial = isCustomDial ? customDial : dialSelectValue;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Effective dial code:", effectiveDial);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* === KIRI — TEKS === */}
            <div className="lg:pr-12">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Siap mengotomatisasi bisnis Anda dengan AI?
              </h2>

              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Kami paham bahwa menerapkan otomasi berbasis AI bisa terlihat
                  rumit pada awalnya. Karena itu, kami ada untuk membimbing Anda
                  di setiap langkah.
                </p>

                <p>
                  – Tim ahli kami siap menganalisis proses Anda dan menunjukkan
                  bagaimana AI dapat mentransformasi operasi bisnis Anda,
                  menghemat waktu, dan meningkatkan efisiensi.
                </p>
              </div>
            </div>

            {/* === KANAN — FORM === */}
            <div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Minta panggilan balik
                </h3>

                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Nama lengkap"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mb-5"
                    />

                    <input
                      type="email"
                      placeholder="Alamat email"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mb-5"
                    />

                    <PhoneCountrySelect
                      value={dialSelectValue}
                      onChange={setDialSelectValue}
                    />

                    {isCustomDial && (
                      <input
                        type="text"
                        placeholder="Kode telepon (mis. +62)"
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mt-5"
                        value={customDial}
                        onChange={(e) => setCustomDial(e.target.value)}
                      />
                    )}

                    <input
                      type="tel"
                      placeholder="Nomor telepon"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mt-5 mb-5"
                    />

                    <textarea
                      placeholder="Ceritakan kebutuhan otomasi bisnis Anda..."
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 resize-none mb-5"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full bg-gray-800 text-white py-4 rounded-xl hover:bg-gray-900 transition font-medium text-lg"
                    >
                      Konfirmasi
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-gray-500 text-sm mb-6">
                    atau hubungi kami melalui:
                  </p>

                  <div className="flex justify-center items-center gap-4">
                    <a
                      href="https://wa.me/33123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium text-sm min-w-[140px]"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>

                    <a
                      href="mailto:contact@example.com"
                      className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium text-sm min-w-[140px]"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}