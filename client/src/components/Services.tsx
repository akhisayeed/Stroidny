import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: "fas fa-warehouse",
    title: "Продажа строительных материалов",
    description: "Широкий ассортимент высококачественных строительных материалов для профессионального и частного строительства.",
    features: [
      "Кирпичные блоки", "Цемент", "Сухие смеси", "Инструменты", "Крепеж", "Арматура"
    ]
  },
  {
    id: 2,
    icon: "fas fa-building",
    title: "Комплектация строительных объектов",
    description: "Комплексное снабжение строительных объектов материалами в соответствии с проектной документацией.",
    features: [
      "Анализ проектной документации", "Расчет необходимых материалов", 
      "Составление графика поставок", "Координация логистики"
    ]
  },
  {
    id: 3,
    icon: "fas fa-comments",
    title: "Профессиональные консультации",
    description: "Квалифицированные консультации по подбору оптимальных материалов с учетом специфики проекта и бюджета.",
    features: [
      "Технические консультации", "Рекомендации по применению", 
      "Помощь в выборе альтернатив", "Оптимизация затрат"
    ]
  },
  {
    id: 4,
    icon: "fas fa-star",
    title: "Индивидуальные условия",
    description: "Специальные условия сотрудничества для крупных заказчиков и постоянных клиентов.",
    features: [
      "Гибкая система скидок", "Персональный менеджер", 
      "Отсрочка платежа", "Приоритетная обработка заказов"
    ]
  }
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

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-charcoal to-navy relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold section-heading inline-block mx-auto">
            Наши услуги
          </h2>
          <p className="font-cormorant text-xl text-off-white/80 mt-6 max-w-3xl mx-auto">
            Комплексные решения для строительства и ремонта любой сложности
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="flex flex-col md:flex-row"
              variants={itemVariants}
            >
              <div className="mb-4 md:mb-0 md:mr-6 shrink-0">
                <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center">
                  <i className={`${service.icon} text-gold text-2xl`}></i>
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-gold mb-3">{service.title}</h3>
                <p className="text-off-white/80 mb-4">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <span key={index} className="text-light-gold/80 text-sm">
                      <i className="fas fa-check text-gold mr-2"></i>{feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button 
            asChild
            variant="default" 
            className="gold-button bg-gold text-navy hover:bg-light-gold font-medium px-8 py-6 rounded-sm text-base"
          >
            <a href="#contacts">ЗАПРОСИТЬ КОНСУЛЬТАЦИЮ</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
