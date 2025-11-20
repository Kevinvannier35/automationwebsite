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
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-blue-500" />
                <span className="text-xl text-white">Ascend Automation</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformasikan bisnis Anda dengan kecerdasan buatan dan otomatisasi.
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
                  href="https://www.instagram.com/lapetite.jade35/?hl=id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Chatbot AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Otomatisasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Analisis Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Integrasi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Ascend Automation. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => setLegalOpen(true)}
                className="hover:text-blue-500 transition-colors"
              >
                Informasi Hukum
              </button>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-blue-500 transition-colors"
              >
                Kebijakan Privasi
              </button>
              <button
                onClick={() => setCookiesOpen(true)}
                className="hover:text-blue-500 transition-colors"
              >
                Cookie
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* INFORMASI HUKUM */}
      <Dialog open={legalOpen} onOpenChange={setLegalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Informasi Hukum</DialogTitle>
            <DialogDescription>
              Informasi hukum mengenai Ascend Automation
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Penerbit Situs</h3>
              <p>
                Ascend Automation<br />
                Alamat kantor pusat: [Alamat]<br />
                Nomor registrasi perusahaan (SIRET): [Nomor]<br />
                Email: contact@ascendautomation.com<br />
                Telepon: [Nomor telepon]
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Direktur Publikasi</h3>
              <p>[Nama direktur publikasi]</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Hosting</h3>
              <p>
                Situs ini di–hosting oleh:<br />
                Vercel Inc.<br />
                440 N Barranca Ave #4133, Covina, CA 91723, USA
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Hak Kekayaan Intelektual</h3>
              <p>
                Seluruh konten di situs ini (teks, gambar, video, logo) dilindungi oleh hak cipta.
                Setiap bentuk reproduksi, bahkan sebagian, dilarang tanpa izin tertulis sebelumnya.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tanggung Jawab</h3>
              <p>
                Ascend Automation berupaya menjaga keakuratan informasi di situs ini, namun tidak
                dapat menjamin sepenuhnya bebas dari kesalahan. Pengguna tetap bertanggung jawab
                atas penggunaan informasi yang tersedia di situs ini.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* KEBIJAKAN PRIVASI */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Kebijakan Privasi</DialogTitle>
            <DialogDescription>
              Bagaimana kami melindungi data pribadi Anda
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Pengumpulan Data</h3>
              <p>
                Kami hanya mengumpulkan data pribadi yang Anda berikan secara sukarela melalui
                formulir kontak: nama, email, nomor telepon, dan pesan Anda.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Penggunaan Data</h3>
              <p>Data Anda digunakan untuk:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Menjawab permintaan dan pertanyaan Anda</li>
                <li>Menginformasikan Anda mengenai layanan kami</li>
                <li>Meningkatkan kualitas layanan dan dukungan kami</li>
                <li>Memenuhi kewajiban hukum yang berlaku</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Penyimpanan Data</h3>
              <p>
                Data Anda disimpan selama diperlukan untuk tujuan pengolahan tersebut,
                kemudian akan diarsipkan atau dihapus sesuai dengan kewajiban hukum.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Hak Anda</h3>
              <p>
                Sesuai dengan peraturan perlindungan data (seperti GDPR), Anda memiliki hak untuk
                mengakses, mengubah, menghapus, membatasi pemrosesan, menolak pemrosesan, dan
                meminta portabilitas data.  
                Untuk menggunakan hak-hak ini, hubungi kami di: contact@ascendautomation.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Keamanan</h3>
              <p>
                Kami menerapkan langkah-langkah teknis dan organisasi yang sesuai untuk
                melindungi data pribadi Anda dari akses, perubahan, atau pengungkapan yang
                tidak sah.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* KEBIJAKAN COOKIE */}
      <Dialog open={cookiesOpen} onOpenChange={setCookiesOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Kebijakan Cookie</DialogTitle>
            <DialogDescription>
              Informasi tentang penggunaan cookie di situs kami
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Apa itu cookie?</h3>
              <p>
                Cookie adalah file teks kecil yang disimpan di perangkat Anda ketika
                Anda mengunjungi sebuah situs web. Cookie membantu kami memahami cara
                Anda menggunakan situs dan meningkatkan pengalaman Anda.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Jenis Cookie yang Kami Gunakan</h3>

              <h4 className="font-medium mt-3 mb-1">Cookie yang Sangat Diperlukan</h4>
              <p>
                Cookie ini penting untuk menjalankan fungsi dasar situs. Tanpa cookie ini,
                beberapa fitur mungkin tidak berfungsi dengan baik.
              </p>

              <h4 className="font-medium mt-3 mb-1">Cookie Analitik</h4>
              <p>
                Cookie ini digunakan untuk mengukur trafik dan menganalisis bagaimana
                pengunjung menggunakan situs kami.
              </p>

              <h4 className="font-medium mt-3 mb-1">Cookie Fungsional</h4>
              <p>
                Cookie ini memungkinkan kami mengingat preferensi Anda (seperti bahasa)
                untuk memberikan pengalaman yang lebih personal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pengelolaan Cookie</h3>
              <p>
                Anda dapat mengatur browser Anda untuk menolak sebagian atau seluruh cookie.
                Namun, hal ini dapat memengaruhi kenyamanan dan fungsi tertentu dari situs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Masa Penyimpanan</h3>
              <p>
                Cookie disimpan untuk jangka waktu maksimal 13 bulan. Setelah periode ini,
                persetujuan Anda dapat diminta kembali.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Kontak</h3>
              <p>
                Jika Anda memiliki pertanyaan mengenai kebijakan cookie kami,
                silakan hubungi: contact@ascendautomation.com
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}