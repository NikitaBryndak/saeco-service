export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50 py-2 overflow-hidden border-t border-border">
      <div className="whitespace-nowrap flex animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-lg md:text-xl mx-8 text-muted-foreground font-light tracking-wider flex items-center gap-4">
            <span className={`font-bold ${i % 2 === 0 ? "text-accent" : "text-secondary"}`}>
              {i % 2 === 0 ? "+38 068 90 700 70" : "+38 096 996 25 25"}
            </span>
            <span>ПН–ПТ: 09:00–18:00</span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20"></span>
          </span>
        ))}
      </div>
    </footer>
  );
}
