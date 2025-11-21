"use client";

import { useState } from "react";
import { Sparkles, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

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
                Transform your business with artificial intelligence and automation.
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
                  href="https://www.instagram.com/lapetite.jade35/?hl=en"
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
                <li><a href="#" className="hover:text-blue-500 transition-colors">AI Chatbots</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Automation</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Integrations</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Ascend Automation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => setLegalOpen(true)} 
                className="hover:text-blue-500 transition-colors"
              >
                Legal Notice
              </button>
              <button 
                onClick={() => setPrivacyOpen(true)} 
                className="hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCookiesOpen(true)} 
                className="hover:text-blue-500 transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* LEGAL NOTICE */}
      <Dialog open={legalOpen} onOpenChange={setLegalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Legal Notice</DialogTitle>
            <DialogDescription>
              Legal information regarding Ascend Automation
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Website Publisher</h3>
              <p>
                Ascend Automation<br />
                Registered office: [Address]<br />
                Company Registration (SIRET): [Your number]<br />
                Email: contact@ascendautomation.com<br />
                Phone: [Your phone]
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Publication Director</h3>
              <p>[Name of publication director]</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Hosting</h3>
              <p>
                This website is hosted by:<br />
                Vercel Inc.<br />
                440 N Barranca Ave #4133, Covina, CA 91723, USA
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Intellectual Property</h3>
              <p>
                All content on this website (text, images, videos, logos) is protected by copyright.
                Any reproduction, even partial, is strictly prohibited without prior authorization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Liability</h3>
              <p>
                Ascend Automation makes every effort to ensure the accuracy of the information on this site,
                but cannot guarantee the absence of errors. Users remain responsible for their own use of the content.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* PRIVACY POLICY */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              How we protect your personal data
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Data Collection</h3>
              <p>
                We only collect the personal data you voluntarily provide via our contact form:
                name, email, phone number, and message.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Data Usage</h3>
              <p>Your data is used for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Responding to your contact request</li>
                <li>Providing information about our services</li>
                <li>Improving our customer support</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Data Retention</h3>
              <p>
                Your information is stored only for the time necessary to process your request,
                then archived or deleted according to legal requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Your Rights</h3>
              <p>
                Under GDPR, you may request access, correction, deletion, restriction,
                objection, or portability of your personal data.  
                Contact us at: contact@ascendautomation.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Security</h3>
              <p>
                We implement appropriate technical and organizational measures to
                protect your data from unauthorized access, modification, or disclosure.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* COOKIES POLICY */}
      <Dialog open={cookiesOpen} onOpenChange={setCookiesOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Cookie Policy</DialogTitle>
            <DialogDescription>
              Information about cookies used on this website
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">What is a cookie?</h3>
              <p>
                A cookie is a small text file stored on your device during your visit.
                It collects browsing data to enhance your experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Types of Cookies Used</h3>

              <h4 className="font-medium mt-3 mb-1">Strictly Necessary Cookies</h4>
              <p>
                Essential for website functionality. Without them, some features may not work properly.
              </p>

              <h4 className="font-medium mt-3 mb-1">Analytics Cookies</h4>
              <p>
                Used to measure site traffic and understand user interactions.
              </p>

              <h4 className="font-medium mt-3 mb-1">Functionality Cookies</h4>
              <p>
                Allow us to store your preferences (like language) to improve your experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Managing Cookies</h3>
              <p>
                You can disable cookies through your browser settings. However, this may affect
                your browsing experience or limit certain features.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Retention Period</h3>
              <p>
                Cookies are kept for a maximum of 13 months. After this period,
                your consent may be requested again.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p>
                If you have any questions about our cookie policy, contact us at:
                contact@ascendautomation.com
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}