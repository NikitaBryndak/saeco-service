export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 py-2 overflow-hidden border-t border-white/5">
      {/* Mobile View: Static & Centered */}
      <div className="flex flex-col items-center justify-center md:hidden gap-1">
        <div className="flex gap-4 text-sm">
          <a href="tel:+380689070070" className="font-bold text-accent">
            +38 068 90 700 70
          </a>
          <a href="tel:+380969962525" className="font-bold text-secondary">
            +38 096 996 25 25
          </a>
        </div>
        <span className="text-gray-400 text-xs tracking-wider">ПН–ПТ: 09:00–18:00</span>
      </div>

      {/* Desktop View: Marquee */}
      <div className="hidden md:flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-lg md:text-xl mx-8 text-gray-400 font-light tracking-wider flex items-center gap-4">
            <span className={`font-bold ${i % 2 === 0 ? "text-accent" : "text-secondary"}`}>
              {i % 2 === 0 ? "+38 068 90 700 70" : "+38 096 996 25 25"}
            </span>
            <span>ПН–ПТ: 09:00–18:00</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          </span>
        ))}
      </div>
    </footer>
  );
}
