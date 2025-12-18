"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/home-background.jpg"
          alt="Coffee Machine Background"
          fill
          className="object-cover opacity-70 scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-20 pb-10">
        <div className="p-6 md:p-12 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter text-white drop-shadow-2xl">
            SAECO <span className="text-accent">SERVICE</span>
          </h1>

          <p className="text-base md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 font-light leading-relaxed drop-shadow-md">
            Професійний ремонт та обслуговування кавового обладнання.
            <br className="hidden md:block" />
            Ми повертаємо смак вашій каві.
          </p>

          <div className="flex flex-col items-center gap-6 w-full mt-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-secondary text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(214,0,28,0.4)] w-full sm:w-auto"
              >
                <span className="text-lg font-bold uppercase tracking-wider">Наші послуги</span>
              </button>

              <button
                onClick={() => document.getElementById('real-services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-accent/50 border-2 text-white rounded-full hover:bg-accent hover:border-accent transition-all text-lg font-medium uppercase tracking-wider backdrop-blur-md w-full sm:w-auto shadow-[0_0_20px_rgba(0,140,69,0.1)] hover:shadow-[0_0_30px_rgba(0,140,69,0.4)]"

              >
                Наш товар
              </button>

            </div>

            <Link
              href="https://maps.app.goo.gl/sG3cfGpuL8hFi9LP6"
              target="_blank"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 mt-2"
            >
              вул. Подільська, 171/1, Хмельницький
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
