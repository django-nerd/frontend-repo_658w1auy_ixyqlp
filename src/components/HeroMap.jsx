import Spline from "@splinetool/react-spline";
import { Compass } from "lucide-react";

export default function HeroMap() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1Xk2mAvBqR4m0Q0h/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-900/10 to-amber-900/70" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-amber-50 px-4">
        <h1 className="text-4xl md:text-6xl drop-shadow-lg" style={{ fontFamily: 'Uncial Antiqua, serif' }}>
          Arsip Budaya Indonesia
        </h1>
        <p className="mt-4 max-w-3xl text-amber-100/90" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>
          Atlas digital yang imersif untuk menjelajah warisan budaya nusantara. Peta bergaya abad pertengahan berpadu motif batik dan tenun.
        </p>
        <a
          href="#featured"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 text-amber-900 font-semibold px-6 py-3 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] transition-shadow"
        >
          <Compass className="w-5 h-5" />
          Explore the Map
        </a>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#3b2a1f] to-transparent" />
    </section>
  );
}
