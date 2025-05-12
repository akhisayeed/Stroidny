import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const materials = [
  {
    id: 1,
    title: "Кирпичные блоки",
    description: "Высококачественные кирпичные и газобетонные блоки от ведущих производителей.",
    image: "https://images.unsplash.com/photo-1583775307822-086033364010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Цемент и смеси",
    description: "Цемент различных марок и сухие строительные смеси для любых задач.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Инструменты",
    description: "Профессиональный инструмент для строительных и отделочных работ.",
    image: "https://images.unsplash.com/photo-1581147036324-c47a03a86371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "Утеплители",
    description: "Современные материалы для тепло- и звукоизоляции зданий и сооружений.",
    image: "https://images.unsplash.com/photo-1616591771809-9a8b57451aee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    title: "Кровельные материалы",
    description: "Высококачественные материалы для устройства и ремонта кровли.",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "Лаки и краски",
    description: "Широкий ассортимент лакокрасочных материалов премиального качества.",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd230771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 7,
    title: "Арматура",
    description: "Арматура и металлопрокат для бетонных и строительных работ.",
    image: "https://images.unsplash.com/photo-1626668893558-1493e8f45f9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 8,
    title: "Спецодежда",
    description: "Качественная спецодежда и средства индивидуальной защиты.",
    image: "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Materials() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy to-charcoal relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold section-heading inline-block mx-auto">
            Ассортимент материалов
          </h2>
          <p className="font-cormorant text-xl text-off-white/80 mt-6 max-w-3xl mx-auto">
            Только проверенные временем и реальными проектами материалы от ведущих производителей
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {materials.map((material) => (
            <motion.div 
              key={material.id} 
              className="bg-navy/40 border border-gold/20 rounded-sm overflow-hidden group hover:border-gold/60 transition-all"
              variants={itemVariants}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={material.image} 
                  alt={material.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-playfair text-lg text-gold mb-1">{material.title}</h3>
                <p className="text-off-white/70 text-sm">{material.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-off-white/80 mb-6">Наш ассортимент постоянно пополняется. За полным каталогом обращайтесь к менеджерам.</p>
          <Button 
            asChild
            variant="outline" 
            className="gold-button bg-transparent text-gold border-2 border-gold hover:border-light-gold hover:text-light-gold font-medium px-8 py-6 rounded-sm text-base"
          >
            <a href="#contacts">ПОЛУЧИТЬ ПОЛНЫЙ КАТАЛОГ</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
