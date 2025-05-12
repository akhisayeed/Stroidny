import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import backgroundImg from "@/assets/images/background.jpg";
import background2Img from "@/assets/images/background2.jpg";

export function Hero() {
  return (
    <section id="main" className="relative pt-24 min-h-screen">
      {/* Desktop Background */}
      <div className="hidden md:block hero-bg">
        <img 
          src={backgroundImg} 
          alt="Строительная площадка" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Mobile Background */}
      <div className="md:hidden hero-bg">
        <img 
          src={background2Img} 
          alt="Строительная площадка" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 pt-16 pb-32 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gold mb-6">
            СТРОИТЕЛЬНАЯ ИНДУСТРИЯ
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-off-white mb-12">
            Лидер строительного рынка.<br />Премиальные материалы и высочайший уровень сервиса.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button 
              asChild
              variant="default" 
              className="gold-button bg-gold text-navy hover:bg-light-gold font-medium px-8 py-6 rounded-sm text-base"
            >
              <a href="#services">НАШИ УСЛУГИ</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="gold-button bg-transparent text-gold border-2 border-gold hover:border-light-gold hover:text-light-gold font-medium px-8 py-6 rounded-sm text-base"
            >
              <a href="#contacts">СВЯЗАТЬСЯ С НАМИ</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
