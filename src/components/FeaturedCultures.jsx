import { ArrowRight } from "lucide-react";

const cultures = [
  {
    name: "Minangkabau",
    region: "Sumatera Barat",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1400&auto=format&fit=crop",
    blurb: "Arsitektur Rumah Gadang dan adat matrilineal yang khas.",
  },
  {
    name: "Dayak",
    region: "Kalimantan",
    image:
      "https://images.unsplash.com/photo-1590646299361-65bc8e9f2c09?q=80&w=1400&auto=format&fit=crop",
    blurb: "Ukiran hudoq, mandau, dan ritual hutan hujan yang sakral.",
  },
  {
    name: "Toraja",
    region: "Sulawesi Selatan",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1400&auto=format&fit=crop",
    blurb: "Tongkonan megah dan tradisi rambu solo'.",
  },
  {
    name: "Bali",
    region: "Bali",
    image:
      "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1400&auto=format&fit=crop",
    blurb: "Tari, pura, dan estetika hindu-bali yang mendunia.",
  },
];

export default function FeaturedCultures() {
  return (
    <section id="featured" className="relative py-14 md:py-20 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-amber-950/80" />
      <div className="relative max-w-7xl mx-auto px-4">
        <header className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl text-yellow-300 drop-shadow" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
              Budaya Unggulan
            </h2>
            <p className="text-amber-100/90" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>
              Jejak ragam etnik dari barat ke timur nusantara.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </a>
        </header>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-amber-700/70 scrollbar-track-transparent">
          <div className="flex gap-5 min-w-max">
            {cultures.map((c) => (
              <article
                key={c.name}
                className="group w-72 md:w-80 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-xl border border-amber-700/60 shadow-lg overflow-hidden"
              >
                <div className="relative h-44">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 to-transparent" />
                  <div className="absolute bottom-2 left-3 text-yellow-200" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                    <h3 className="text-xl drop-shadow">{c.name}</h3>
                    <p className="text-xs opacity-90">{c.region}</p>
                  </div>
                </div>
                <div className="p-4 bg-amber-900/70">
                  <p className="text-amber-100/90 text-sm" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>{c.blurb}</p>
                  <button className="mt-4 w-full inline-flex justify-center items-center gap-2 rounded-md bg-amber-700/80 hover:bg-amber-600/80 text-yellow-100 px-3 py-2 transition">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30" />
    </section>
  );
}
