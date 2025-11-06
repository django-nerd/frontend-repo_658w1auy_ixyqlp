import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Compass } from "lucide-react";

const SCENE_URL = "https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode";

export default function HeroMap() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [canLoadSpline, setCanLoadSpline] = useState(false);

  // Proactively check the scene URL to avoid throwing internal Spline errors on 403s
  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function probe() {
      try {
        const res = await fetch(SCENE_URL, { method: "GET", mode: "cors", signal: controller.signal });
        if (!active) return;
        if (res.ok) {
          setCanLoadSpline(true);
        } else {
          setErrored(true);
        }
      } catch {
        if (active) setErrored(true);
      }
    }

    probe();
    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        {canLoadSpline && !errored && (
          <Spline
            scene={SCENE_URL}
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
          />
        )}
      </div>

      {/* Gradient overlay should not block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-900/10 to-amber-900/70" />

      {/* Content */}
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

      {/* Soft vignette at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#3b2a1f] to-transparent" />

      {/* Loading / Fallback overlay to avoid white flash */}
      {!loaded && !errored && canLoadSpline && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#2b2017]/60 backdrop-blur-[1px]">
          <div className="relative flex items-center gap-3 px-5 py-3 rounded-full border border-amber-700/60 bg-amber-900/70 shadow-lg">
            <span className="relative inline-block w-3 h-3 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(251,191,36,0.9)] animate-[flicker_1.8s_infinite]" />
            <span className="text-yellow-200" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>Memuat pemandangan…</span>
          </div>
        </div>
      )}

      {/* Error fallback keeps content visible */}
      {errored && (
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40" />
      )}

      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1 }
          20%, 24%, 55% { opacity: .6 }
        }
      `}</style>
    </section>
  );
}
