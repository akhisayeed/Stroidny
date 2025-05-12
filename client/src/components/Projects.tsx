import { motion } from "framer-motion";
import project1Img from "@/assets/images/project1.jpg";
import project2Img from "@/assets/images/project2.jpg";
import project3Img from "@/assets/images/project3.jpg";

const projects = [
  {
    id: 1,
    title: "Элитный жилой комплекс",
    description: "Комплексное оснащение материалами для строительства премиального жилого комплекса в центре города.",
    image: project1Img,
    year: "2023",
  },
  {
    id: 2,
    title: "Бизнес-центр «Империал»",
    description: "Поставка и монтаж высококачественных строительных материалов для современного делового центра.",
    image: project2Img,
    year: "2022",
  },
  {
    id: 3,
    title: "Торговая галерея",
    description: "Комплексное оснащение строительными и отделочными материалами элитной торговой галереи.",
    image: project3Img,
    year: "2023",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy to-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold section-heading inline-block mx-auto">
            Реализованные проекты
          </h2>
          <p className="font-cormorant text-xl text-off-white/80 mt-6 max-w-3xl mx-auto">
            Наши премиальные материалы использовались при строительстве знаковых объектов, которые стали украшением городского ландшафта.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card bg-navy/40 border border-gold/20 rounded-sm overflow-hidden"
              variants={itemVariants}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl text-gold mb-3">{project.title}</h3>
                <p className="text-off-white/80 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-light-gold/80 text-sm">Завершен в {project.year}</span>
                  <a href="#" className="text-gold hover:text-light-gold transition-colors">Подробнее <i className="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
