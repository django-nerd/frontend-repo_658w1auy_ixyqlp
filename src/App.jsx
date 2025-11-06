import NavigationBar from "./components/NavigationBar";
import HeroMap from "./components/HeroMap";
import FeaturedCultures from "./components/FeaturedCultures";
import ShopVirtualTeaser from "./components/ShopVirtualTeaser";
import PageFooter from "./components/PageFooter";

function TorchLoader() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-amber-900/70 border border-amber-700/60 rounded-full px-4 py-2 shadow-lg">
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-amber-400/40 blur-md animate-pulse" />
        <span className="relative inline-block w-3 h-3 bg-amber-300 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.9)] animate-[flicker_1.8s_infinite]" />
      </div>
      <p className="text-yellow-200 text-sm" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>Torchlight mode</p>
      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1 }
          20%, 24%, 55% { opacity: .6 }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-fixed bg-center text-amber-50">
      <div className="min-h-screen bg-[#3b2a1f]/90">
        <NavigationBar />
        <HeroMap />
        <FeaturedCultures />
        <ShopVirtualTeaser />
        <PageFooter />
        <TorchLoader />
      </div>
    </div>
  );
}
