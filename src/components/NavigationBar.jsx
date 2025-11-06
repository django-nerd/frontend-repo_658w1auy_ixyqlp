import { Home, Map, Book, ShoppingBag, Play, Info } from "lucide-react";

export default function NavigationBar() {
  const menu = [
    { label: "Home", icon: Home },
    { label: "Explore Map", icon: Map },
    { label: "Archive", icon: Book },
    { label: "Shop", icon: ShoppingBag },
    { label: "Virtual Tour", icon: Play },
    { label: "About Us", icon: Info },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="backdrop-blur-md bg-amber-900/70 border border-amber-700/60 shadow-[0_0_0_4px_rgba(120,53,15,0.25)] rounded-full px-4 py-2">
        <ul className="flex items-center gap-2 md:gap-4 text-amber-100">
          {menu.map((item) => (
            <li key={item.label} className="group">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-amber-800/60 transition-colors"
                aria-label={item.label}
                title={item.label}
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-amber-300 group-hover:text-yellow-300" />
                <span className="hidden sm:block font-medium tracking-wide" style={{ fontFamily: 'Merriweather, ui-serif, Georgia, serif' }}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
