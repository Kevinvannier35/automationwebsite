"use client";

import { useState } from "react";
import { Sparkles, Linkedin, Instagram, X as CloseIcon } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <>
      <footer className="bg-white text-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
               <img 
                 src="/logo-footer.png" 
                 alt="Ascend Automation" 
                 className="w-40 h-auto object-contain"
              />
            </div>
              <p className="text-gray-400 mb-4">
                Transformez votre entreprise avec l'intelligence artificielle et
                l'automatisation.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kevin-vannier-932a931a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center 
                             bg-[#1E2430] hover:bg-[#2A3140] transition-colors"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/lapetite.jade35/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center 
                             bg-[#1E2430] hover:bg-[#2A3140] transition-colors"
                >
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Chatbots IA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Automatisation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Analyse de données
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Intégrations
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AI Automation. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                type="button"
                onClick={() => setLegalOpen(true)}
                className="hover:text-blue-500 transition-colors"
              >
                Mentions légales
              </button>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-blue-500 transition-colors"
              >
                Confidentialité
              </button>
              <button
                type="button"
                onClick={() => setCookiesOpen(true)}
                className="hover:text-blue-500 transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== Mentions légales ========== */}
      <DialogPrimitive.Root open={legalOpen} onOpenChange={setLegalOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold">Mentions légales</h2>
                <p className="text-sm text-gray-600">
                  Informations légales concernant Ascend Automation
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLegalOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-black">
              <div>
                <h3 className="font-semibold mb-2">Éditeur du site</h3>
                <p>
                  Ascend Automation
                  <br />
                  Siège social : [Adresse]
                  <br />
                  SIRET : [Numéro SIRET]
                  <br />
                  Email : contact@ascendautomation.com
                  <br />
                  Téléphone : [Numéro de téléphone]
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Directeur de la publication
                </h3>
                <p>[Nom du directeur de la publication]</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Hébergement</h3>
                <p>
                  Ce site est hébergé par :
                  <br />
                  [Nom de l&apos;hébergeur]
                  <br />
                  [Adresse de l&apos;hébergeur]
                  <br />
                  [Contact de l&apos;hébergeur]
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Propriété intellectuelle</h3>
                <p>
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                  logos) est protégé par le droit d&apos;auteur. Toute
                  reproduction, même partielle, est interdite sans autorisation
                  préalable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Responsabilité</h3>
                <p>
                  Ascend Automation s&apos;efforce d&apos;assurer l&apos;exactitude
                  des informations diffusées sur ce site, mais ne peut garantir
                  l&apos;absence d&apos;erreurs ou d&apos;omissions.
                  L&apos;utilisateur est seul responsable de l&apos;utilisation
                  qu&apos;il fait des informations du site.
                </p>
              </div>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      {/* ========== Confidentialité ========== */}
      <DialogPrimitive.Root open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Politique de confidentialité
                </h2>
                <p className="text-sm text-gray-600">
                  Comment nous protégeons vos données personnelles
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-black">
              <div>
                <h3 className="font-semibold mb-2">Collecte des données</h3>
                <p>
                  Nous collectons les données personnelles que vous nous
                  fournissez volontairement via notre formulaire de contact :
                  nom, email, numéro de téléphone et message. Ces informations
                  sont nécessaires pour traiter votre demande et vous
                  recontacter.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Utilisation des données</h3>
                <p>Vos données personnelles sont utilisées uniquement pour :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous fournir des informations sur nos services</li>
                  <li>Améliorer notre service client</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Conservation des données</h3>
                <p>
                  Vos données sont conservées pendant la durée nécessaire à la
                  finalité pour laquelle elles ont été collectées, puis
                  archivées conformément aux obligations légales.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Vos droits</h3>
                <p>
                  Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
                  de rectification, d&apos;effacement, de limitation du
                  traitement, d&apos;opposition et de portabilité de vos données.
                  Pour exercer ces droits, contactez-nous à :
                  contact@ascendautomation.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Sécurité</h3>
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et
                  organisationnelles appropriées pour protéger vos données
                  personnelles contre tout accès, modification, divulgation ou
                  destruction non autorisés.
                </p>
              </div>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      {/* ========== Cookies ========== */}
      <DialogPrimitive.Root open={cookiesOpen} onOpenChange={setCookiesOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold">Politique de cookies</h2>
                <p className="text-sm text-gray-600">
                  Informations sur l&apos;utilisation des cookies sur notre site
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCookiesOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-black">
              <div>
                <h3 className="font-semibold mb-2">
                  Qu&apos;est-ce qu&apos;un cookie ?
                </h3>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre
                  ordinateur lors de la visite d&apos;un site internet. Il
                  permet de collecter des informations relatives à votre
                  navigation et de vous adresser des services adaptés à votre
                  terminal.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Types de cookies utilisés
                </h3>

                <h4 className="font-medium mt-3 mb-1">
                  Cookies strictement nécessaires
                </h4>
                <p>
                  Ces cookies sont indispensables au bon fonctionnement du site.
                  Ils permettent l&apos;utilisation des principales
                  fonctionnalités (navigation, sécurité). Sans ces cookies, le
                  site ne peut pas fonctionner correctement.
                </p>

                <h4 className="font-medium mt-3 mb-1">Cookies analytiques</h4>
                <p>
                  Ces cookies nous permettent de mesurer l&apos;audience de
                  notre site et d&apos;analyser la façon dont les visiteurs
                  utilisent notre site afin d&apos;en améliorer les
                  performances et l&apos;ergonomie.
                </p>

                <h4 className="font-medium mt-3 mb-1">
                  Cookies de fonctionnalité
                </h4>
                <p>
                  Ces cookies permettent de mémoriser vos préférences (langue,
                  région) pour améliorer votre expérience de navigation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Gestion des cookies</h3>
                <p>
                  Vous pouvez à tout moment modifier vos préférences en matière
                  de cookies en configurant votre navigateur pour refuser les
                  cookies. Cependant, cela peut impacter votre expérience de
                  navigation et limiter l&apos;accès à certaines fonctionnalités
                  du site.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Durée de conservation</h3>
                <p>
                  Les cookies sont conservés pour une durée maximale de 13 mois
                  à compter de leur dépôt sur votre terminal. Au-delà de ce
                  délai, votre consentement sera à nouveau requis.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p>
                  Pour toute question relative à notre politique de cookies,
                  vous pouvez nous contacter à :
                  contact@ascendautomation.com
                </p>
              </div>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}