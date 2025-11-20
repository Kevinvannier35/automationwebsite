import { Sparkles, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <span className="text-xl text-white">Ascend Automation</span>
            </div>
            <p className="text-gray-400 mb-4">
              Nous aidons les entreprises à automatiser leurs processus grâce à l’IA
              pour gagner du temps, réduire leurs coûts et augmenter leurs performances.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kevin-vannier-932a931a2/"
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Services */}
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
                  Automatisation de processus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Analyse & traitement de données
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Intégrations & API
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Ascend Automation. Tous droits réservés.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-500 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}