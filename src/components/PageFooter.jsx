import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

export default function PageFooter() {
  return (
    <footer className="relative bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#2a1d14]/95" />
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-amber-100">
          <div>
            <h3 className="text-xl text-yellow-300 mb-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>Arsip Budaya Indonesia</h3>
            <p className="text-amber-200/90" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>
              Platform arsip digital dan komunitas untuk menjaga, merayakan, dan menjelajah kekayaan budaya nusantara.
            </p>
          </div>
          <div>
            <h4 className="text-yellow-300 mb-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>Kontak</h4>
            <p>Email: hello@arsipbudaya.id</p>
            <p>Jl. Nusantara No. 17, Indonesia</p>
          </div>
          <div>
            <h4 className="text-yellow-300 mb-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>Ikuti Kami</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-full bg-amber-800/60 hover:bg-amber-700/70 transition">
                  <Icon className="w-5 h-5 text-yellow-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 h-1 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-40 rounded-full" />
        <p className="mt-4 text-center text-amber-300 text-sm">© {new Date().getFullYear()} Arsip Budaya Indonesia</p>
      </div>
    </footer>
  );
}
