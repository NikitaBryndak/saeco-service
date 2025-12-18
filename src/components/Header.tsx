"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from 'lucide-react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
    >
      {/* Italian Flag Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary via-white to-accent opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-24 w-64">
              <Image
                src="/image/logo.png"
                alt="Saeco Service Logo"
                fill
                className="object-contain"
                priority
                sizes="256px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors relative group"
              >
                {item === "home" ? "Головна" : item === "services" ? "Послуги" : "Контакти"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="tel:+380689070070"
              className="px-6 py-2 border border-white/20 rounded-full hover:bg-accent hover:border-accent transition-all duration-300 text-sm font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Зв&apos;язатися</span>
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <a href="tel:+380689070070" className="text-accent hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-white focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {["home", "services", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-3xl font-light uppercase tracking-widest hover:text-accent transition-colors"
          >
            {item === "home" ? "Головна" : item === "services" ? "Послуги" : "Контакти"}
          </button>
        ))}
        <a
          href="tel:+380689070070"
          className="mt-8 px-10 py-4 bg-accent rounded-full text-xl font-bold uppercase tracking-wider shadow-lg shadow-accent/20"
        >
          Подзвонити
        </a>
      </div>
    </header>
  );
}
