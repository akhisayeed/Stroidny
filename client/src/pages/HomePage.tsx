import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Materials } from "@/components/Materials";
import { Delivery } from "@/components/Delivery";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>СТРОИТЕЛЬНАЯ ИНДУСТРИЯ - Премиальные строительные материалы</title>
        <meta name="description" content="СТРОИТЕЛЬНАЯ ИНДУСТРИЯ - лидер строительного рынка. Премиальные материалы для строительства: кирпичные блоки, цемент, сухие смеси, инструменты, крепеж и многое другое." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <About />
          <Services />
          <Materials />
          <Delivery />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
