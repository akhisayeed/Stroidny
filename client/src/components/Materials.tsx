import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const materials = [
  {
    id: 1,
    title: "Кирпичные блоки",
    description: "Высококачественные кирпичные и газобетонные блоки от ведущих производителей.",
    image: "https://pixabay.com/get/g919ef171f0ba0cc00840d9726b69fd068d0f07edc5298100b89692039a364814dc840bbec1d2b027c99f834fc5d22d53274bb81b439f4c49d7499adfee5dc054_1280.jpg"
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
    image: "https://pixabay.com/get/gb49b761922195d5b71f4f1db8dc48337d3b8b8883110d1c4622bc5adb3a58220fe42189508899cbbf3de65da600185179f661a5f48139e33691ae23b9e8c21c4_1280.jpg"
  },
  {
    id: 4,
    title: "Утеплители",
    description: "Современные материалы для тепло- и звукоизоляции зданий и сооружений.",
    image: "https://pixabay.com/get/ged17d9812ff8e03bebe69d12001eece01df13bf9903bf50c329daabd71d9ac9e641f9429a5ec609da08972df489287f1b2765f4b6d3a1f2c06795f60f852de61_1280.jpg"
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
    image: "https://pixabay.com/get/gdb025fbc17443db6421ee9d4d74995fbb556073c3ee337d61143aa1e32488ef3473dbabe588360f22b9cf963bda96a5380a9de9f491e57cc098e5f605ab9d5ad_1280.jpg"
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
    image: "https://pixabay.com/get/g82b1a8259d011d04c8dfc8f960783ec0b9952dab3d5f2fc4fbb75bcaa09e5ff38a435680d24fdb12d9c1ac3676f35d94fc57d8f6bb043072873624650b93eacf_1280.jpg"
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
