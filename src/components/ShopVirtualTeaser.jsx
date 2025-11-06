import { ShoppingBag, Sparkles, PlayCircle } from "lucide-react";

export default function ShopVirtualTeaser() {
  const products = [
    {
      name: "Kain Batik Tulis",
      price: "Rp450.000",
      image:
        "https://images.unsplash.com/photo-1541516160071-4bb0c5af65b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Anyaman Rotan",
      price: "Rp220.000",
      image:
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Topeng Kayu",
      price: "Rp350.000",
      image:
        "https://images.unsplash.com/photo-1601891942619-50388b1a0c0a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop')] bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 via-amber-900/85 to-amber-950/95" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl text-yellow-300 drop-shadow mb-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
              Pasar Budaya
            </h2>
            <p className="text-amber-100/90 mb-6" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>
              Temukan kerajinan tangan, tekstil, dan cendera mata dari berbagai daerah — ditata di atas panel kertas perkamen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg overflow-hidden border border-amber-700/60 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop')] bg-cover"
                >
                  <img src={p.image} alt={p.name} className="h-32 w-full object-cover" />
                  <div className="p-3 bg-amber-900/70">
                    <p className="text-yellow-200 font-semibold">{p.name}</p>
                    <p className="text-amber-200 text-sm">{p.price}</p>
                    <button className="mt-2 inline-flex items-center gap-2 rounded bg-amber-700/80 hover:bg-amber-600/80 text-yellow-100 px-3 py-2">
                      <ShoppingBag className="w-4 h-4" /> Tambah
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-700/60 overflow-hidden shadow-xl bg-amber-900/60">
            <div className="relative h-64 md:h-full bg-[url('https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop')] bg-cover">
              <div className="absolute inset-0 bg-amber-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="inline-flex items-center gap-3 bg-gradient-to-b from-blue-400 to-amber-400 text-amber-900 font-semibold px-5 py-3 rounded-full shadow-[0_0_25px_rgba(251,191,36,0.55)] hover:shadow-[0_0_35px_rgba(96,165,250,0.7)] transition">
                  <PlayCircle className="w-6 h-6" /> Mulai Tur Virtual
                </button>
              </div>
              <div className="absolute top-3 right-3 inline-flex items-center gap-1 text-yellow-200 bg-amber-900/70 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4" /> Rumah Adat 3D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
