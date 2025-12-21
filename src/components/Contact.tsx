"use client";

import Link from "next/link";
import { Send, PhoneCall, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Давайте будемо на <span className="text-secondary">Зв&apos;язку</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ми завжди раді допомогти вам з будь-якими питаннями щодо кавового обладнання та товару для нього.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Section - Takes up 7 columns on large screens */}
          <div className="lg:col-span-7 h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-border relative group shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.298968467384!2d26.998903063880554!3d49.422161580837376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473206518fe5946f%3A0xc2dd091979bfd0b6!2z0YPQuy4g0J_QvtC00L7Qu9GM0YHQutCw0Y8sIDE3MSwg0KXQvNC10LvRjNC90LjRhtC60LjQuSwg0KXQvNC10LvRjNC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDI5MDAw!5e0!3m2!1sru!2suk!4v1714323834025!5m2!1sru!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-card/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-border shadow-xl md:max-w-xs">
              <p className="text-foreground font-medium text-sm md:text-base">м.Хмельницький, вул.Подільська, 171/1</p>
              <a
                href="https://maps.app.goo.gl/qJdkE2hdf2TnL4Nb7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-xs md:text-sm font-bold uppercase tracking-wider mt-2 inline-block hover:underline"
              >
                Прокласти маршрут
              </a>
            </div>
          </div>

          {/* Contact Info - Takes up 5 columns on large screens */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Phone */}
            <div className="bg-card p-8 rounded-3xl border border-border hover:border-accent/50 transition-all duration-300 hover:bg-muted group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg shadow-accent/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Подзвонити</h3>
              </div>
              <div className="space-y-3 pl-2 relative z-10">
                <a href="tel:+380689070070" className="block text-2xl md:text-3xl text-foreground hover:text-accent transition-colors font-bold tracking-tight">+ 38 068 90 700 70</a>
                <a href="tel:+380969962525" className="block text-xl md:text-2xl text-muted-foreground hover:text-accent transition-colors font-medium tracking-wide">+ 38 096 99 625 25</a>
              </div>
            </div>

            {/* Email & Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-3xl border border-border hover:border-border transition-all hover:bg-muted flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Написати
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  <Link href="mailto:khmsaeco@gmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all text-lg font-medium">khmsaeco@gmail.com</Link>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Send className="w-5 h-5 text-foreground" />
                  <Link href="https://t.me/saeco_khmel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-lg font-medium">@saeco_khmel</Link>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <PhoneCall className="w-5 h-5 text-accent" />
                  <Link href="viber://chat?number=+380969962525"  className="text-muted-foreground hover:text-accent transition-colors text-lg font-medium">Viber</Link>
                </div>
              </div>

              <div className="bg-card p-6 rounded-3xl border border-border hover:border-border transition-all hover:bg-muted flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Графік роботи
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground flex justify-between"><span className="text-foreground font-medium">Пн-Пт:</span> 9:00 - 18:00</p>
                  <p className="text-muted-foreground flex justify-between"><span className="text-foreground font-medium">Сб-Нд:</span> За домовленістю</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-gradient-to-r from-accent/10 to-transparent p-8 rounded-3xl border border-accent/20 hover:border-accent/40 transition-all flex flex-col justify-center">
                <Link href="https://www.instagram.com/saeco_khmel/?utm_source=qr&igsh=MXZ4amZ5Z2ZkZmtheg%3D%3D" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-center hover:scale-105 transition-transform opacity-80 hover:opacity-100 bg-card p-4 rounded-2xl border border-border hover:bg-muted">
                  <Instagram className="w-8 h-8 text-accent" />
                  <span className="text-xl font-bold text-foreground">Instagram</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
