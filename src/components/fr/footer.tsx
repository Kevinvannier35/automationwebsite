"use client";

import { Sparkles, Linkedin, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-blue-500" />
                <span className="text-xl text-white">Ascend Automation</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformez votre entreprise avec l'intelligence artificielle et
                l'automatisation.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/lapetite.jade35/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Chatbots IA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Automatisation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Analyse de données
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
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
              {/* Mentions légales */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-blue-500 transition-colors">
                    Mentions légales
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Mentions légales</DialogTitle>
                    <DialogDescription>
                      Informations légales concernant Ascend Automation
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
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
                        [Nom de l'hébergeur]
                        <br />
                        [Adresse de l'hébergeur]
                        <br />
                        [Contact de l'hébergeur]
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">
                        Propriété intellectuelle
                      </h3>
                      <p>
                        L'ensemble du contenu de ce site (textes, images,
                        vidéos, logos) est protégé par le droit d'auteur. Toute
                        reproduction, même partielle, est interdite sans
                        autorisation préalable.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Responsabilité</h3>
                      <p>
                        Ascend Automation s'efforce d'assurer l'exactitude des
                        informations diffusées sur ce site, mais ne peut
                        garantir l'absence d'erreurs ou d'omissions. L'utilisateur
                        est seul responsable de l'utilisation qu'il fait des
                        informations du site.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Confidentialité */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-blue-500 transition-colors">
                    Confidentialité
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Politique de confidentialité</DialogTitle>
                    <DialogDescription>
                      Comment nous protégeons vos données personnelles
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold mb-2">
                        Collecte des données
                      </h3>
                      <p>
                        Nous collectons les données personnelles que vous nous
                        fournissez volontairement via notre formulaire de
                        contact : nom, email, numéro de téléphone et message.
                        Ces informations sont nécessaires pour traiter votre
                        demande et vous recontacter.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">
                        Utilisation des données
                      </h3>
                      <p>Vos données personnelles sont utilisées uniquement pour :</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Répondre à vos demandes de contact</li>
                        <li>Vous fournir des informations sur nos services</li>
                        <li>Améliorer notre service client</li>
                        <li>Respecter nos obligations légales</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">
                        Conservation des données
                      </h3>
                      <p>
                        Vos données sont conservées pendant la durée nécessaire
                        à la finalité pour laquelle elles ont été collectées,
                        puis archivées conformément aux obligations légales.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Vos droits</h3>
                      <p>
                        Conformément au RGPD, vous disposez d'un droit d'accès,
                        de rectification, d'effacement, de limitation du
                        traitement, d'opposition et de portabilité de vos
                        données. Pour exercer ces droits, contactez-nous à :
                        contact@ascendautomation.com
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Sécurité</h3>
                      <p>
                        Nous mettons en œuvre toutes les mesures techniques et
                        organisationnelles appropriées pour protéger vos données
                        personnelles contre tout accès, modification,
                        divulgation ou destruction non autorisés.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Cookies */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-blue-500 transition-colors">
                    Cookies
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Politique de cookies</DialogTitle>
                    <DialogDescription>
                      Informations sur l'utilisation des cookies sur notre site
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold mb-2">
                        Qu'est-ce qu'un cookie ?
                      </h3>
                      <p>
                        Un cookie est un petit fichier texte déposé sur votre
                        ordinateur lors de la visite d'un site internet. Il
                        permet de collecter des informations relatives à votre
                        navigation et de vous adresser des services adaptés à
                        votre terminal.
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
                        Ces cookies sont indispensables au bon fonctionnement du
                        site. Ils permettent l'utilisation des principales
                        fonctionnalités (navigation, sécurité). Sans ces
                        cookies, le site ne peut pas fonctionner correctement.
                      </p>

                      <h4 className="font-medium mt-3 mb-1">
                        Cookies analytiques
                      </h4>
                      <p>
                        Ces cookies nous permettent de mesurer l'audience de
                        notre site et d'analyser la façon dont les visiteurs
                        utilisent notre site afin d'en améliorer les
                        performances et l'ergonomie.
                      </p>

                      <h4 className="font-medium mt-3 mb-1">
                        Cookies de fonctionnalité
                      </h4>
                      <p>
                        Ces cookies permettent de mémoriser vos préférences
                        (langue, région) pour améliorer votre expérience de
                        navigation.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">
                        Gestion des cookies
                      </h3>
                      <p>
                        Vous pouvez à tout moment modifier vos préférences en
                        matière de cookies en configurant votre navigateur pour
                        refuser les cookies. Cependant, cela peut impacter votre
                        expérience de navigation et limiter l'accès à certaines
                        fonctionnalités du site.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">
                        Durée de conservation
                      </h3>
                      <p>
                        Les cookies sont conservés pour une durée maximale de 13
                        mois à compter de leur dépôt sur votre terminal. Au-delà
                        de ce délai, votre consentement sera à nouveau requis.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Contact</h3>
                      <p>
                        Pour toute question relative à notre politique de
                        cookies, vous pouvez nous contacter à :
                        contact@ascendautomation.com
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}