// src/components/fr/contactsection.tsx
import React, { useState } from "react";

// --- Liste des pays avec drapeaux + indicatifs ---
const countries = [
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Indonésie", code: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "États-Unis", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Royaume-Uni", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "Espagne", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Allemagne", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Italie", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Suisse", code: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Belgique", code: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
];

// --- Select indicatif ---
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
      <option value="other">🌍 Autre (entrée manuelle)</option>
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
    console.log("Indicatif utilisé :", effectiveDial);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* === GAUCHE — TEXTE === */}
            <div className="lg:pr-12">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Prêt à automatiser votre business avec l’IA ?
              </h2>

              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Nous savons que mettre en place de l’automatisation IA peut sembler
                  complexe au début. C’est pour cela que nous vous accompagnons à
                  chaque étape.
                </p>

                <p>
                  – Notre équipe d’experts analyse vos process et vous montre comment
                  l’IA peut transformer vos opérations, vous faire gagner du temps et
                  booster votre efficacité.
                </p>
              </div>
            </div>

            {/* === DROITE — FORM === */}
            <div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 lg:p-10">

                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Demander un rappel
                </h3>

                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Nom complet"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mb-5"
                    />

                    <input
                      type="email"
                      placeholder="Adresse email"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mb-5"
                    />

                    <PhoneCountrySelect
                      value={dialSelectValue}
                      onChange={setDialSelectValue}
                    />

                    {isCustomDial && (
                      <input
                        type="text"
                        placeholder="Indicatif (ex : +971)"
                        className="w-full mt-5 px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400"
                        value={customDial}
                        onChange={(e) => setCustomDial(e.target.value)}
                      />
                    )}

                    <input
                      type="tel"
                      placeholder="Numéro de téléphone"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 mt-5 mb-5"
                    />

                    <textarea
                      placeholder="Parlez-nous de votre projet d’automatisation..."
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-900 placeholder-gray-400 resize-none mb-5"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full bg-gray-800 text-white py-4 rounded-xl hover:bg-gray-900 transition font-medium text-lg"
                    >
                      Confirmer
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-gray-500 text-sm mb-6">
                    ou contactez-nous via :
                  </p>

                  <div className="flex justify-center items-center gap-4">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/33661369642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium text-sm min-w-[140px]"
                    >
                      WhatsApp
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:ascendagency35@gmail.com?subject=Demande%20de%20contact"
                      className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium text-sm min-w-[140px]"
                    >
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