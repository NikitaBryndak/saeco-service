"use client";

import Image from "next/image";

const realServices = [
  {
    id: 1,
    title: "Кавомашини Б/У",
    description: "Великий вибір якісних вживаних кавомашин за доступними цінами. Перевірені та готові до роботи.",
    image: "/image/machine.jpg", // Placeholder
    phone: "+380677566376",
    buttonText: "Перевірити в наявності",
    price: "від 4650 грн",
  },
  {
    id: 2,
    title: "Кава та Чай Gemini",
    description: "Пропонуємо вам моносорта, купажі, дріпи та чай для використання вдома, в офісі, кав'ярні та ресторанах. ",
    image: "/image/geminis.jpg", // Placeholder
    phone: "+380969962525",
    buttonText: "Замовити каву",
    price: "від 205 грн",
  },
  {
    id: 3,
    title: "Чай Світ Чаю",
    description: "Пропонуємо 250+ видів чаю з усього світу. Замовлення від 300 грам - доставка безкоштовна.",
    image: "/image/tea.jpg",
    phone: "+380969962525",
    buttonText: "Замовити чай",
    price: "від 150 грн",
  },
  {
    id: 4,
    title: "Засоби Догляду",
    description: "Необхідні засоби для чищення та догляду за кавовим обладнанням. Підтримуйте смак кави в ідеальному стані.",
    image: "/image/repairs.jpg", // Placeholder
    phone: "+380689070070",
    buttonText: "Замовити засоби",
    price: "від 160 грн",
  },
];

export default function Goods() {
  return (
    <section id="real-services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Наш <span className="text-accent">Товар</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ми пропонуємо широкий вибір кавомашин, кави, чаю та засобів догляду за кавовим обладнанням.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realServices.map((service) => (
            <div
              key={service.id}
              className="group relative min-h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 h-full min-h-[400px] p-8 flex flex-col justify-end items-start text-left">
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-100 text-lg mb-6 transform translate-y-4-0 transition-all duration-500 delay-100">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                  <div className="transform transition-transform duration-500 w-full sm:w-auto">
                      <a
                          href={`tel:${service.phone || "+380677566376"}`}
                          className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-secondary text-white rounded-full font-bold uppercase tracking-wider hover:bg-accent transition-colors duration-300 text-sm sm:text-base whitespace-nowrap"
                      >
                          {service.buttonText}
                      </a>
                  </div>
                  <span className="text-white text-2xl font-bold whitespace-nowrap">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
