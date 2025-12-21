"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Терміновий ремонт",
    subtitle: "Для безвідкладних ситуацій",
    price: "від 250 грн",
    image: "/image/warning.png",
    buttonText: "Замовити ремонт",
    description: "Ремонт виконується протягом одного робочого дня.",
  },
  {
    id: 2,
    title: "Діагностика Кавомашин",
    subtitle: "Та засоби догляду",
    price: "від 350 грн",
    image: "/image/cog.png",
    buttonText: "Замовити діагностику",
    description: "Повна діагностика та підбір засобів для чищення і догляду.",},
  {
    id: 3,
    title: "Ремонт кавомашин",
    subtitle: "Будь-якої складності",
    price: "від 790 грн",
    image: "/image/coffee-machine.png",
    buttonText: "Дізнатись більше",
    description: "Saeco, Delonghi, Siemens, Krups, Philips, Bosch, Jura та інші бренди.",
  },
  {
    id: 4,
    title: "Оренда кавомашин",
    subtitle: "Для бізнесу та офісу",
    price: "від 1000 грн",
    image: "/image/handshake.png",
    buttonText: "Орендувати",
    description: "Ідеальне рішення для офісів, кафе та заходів будь-якого масштабу.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Наші <span className="text-secondary">Послуги</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ми пропонуємо повний спектр послуг для вашого кавового обладнання.
            Від термінового ремонту до регулярного обслуговування.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-8 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="96px"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-xs text-accent mb-4 font-bold uppercase tracking-widest">{service.subtitle}</p>

                <p className="text-gray-200 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto w-full pt-6 border-t border-white/5">
                  <p className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-secondary transition-colors">{service.price}</p>
                  <a
                    href="tel:+380677566376"
                    className="block w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 font-bold text-sm uppercase tracking-wider text-white"
                  >
                    {service.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
