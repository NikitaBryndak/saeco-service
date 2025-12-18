import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Goods from "@/components/Goods";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pb-16 bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Goods />
      <Contact />
      <Footer />
    </main>
  );
}
