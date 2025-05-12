import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

export function Delivery() {
  return (
    <section id="delivery" className="py-20 bg-charcoal relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')] bg-fixed bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold section-heading inline-block mx-auto">
              Доставка
            </h2>
            <p className="font-cormorant text-xl text-off-white/80 mt-6 max-w-3xl mx-auto">
              Мы предлагаем гибкие условия доставки строительных материалов с учетом ваших требований
            </p>
          </div>
          
          <motion.div 
            className="bg-navy/40 border border-gold/20 rounded-sm p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-playfair text-2xl text-gold mb-6">Условия доставки</h3>
                
                <div className="space-y-6">
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="bg-gold/10 p-3 rounded-sm mr-4">
                      <i className="fas fa-map-marker-alt text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-light-gold mb-2">Зона доставки</h4>
                      <p className="text-off-white/80 text-sm">Москва и Московская область. Доставка в другие регионы обсуждается индивидуально.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="bg-gold/10 p-3 rounded-sm mr-4">
                      <i className="fas fa-truck text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-light-gold mb-2">Транспорт</h4>
                      <p className="text-off-white/80 text-sm">Собственный автопарк, включающий грузовые автомобили различной грузоподъемности.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="bg-gold/10 p-3 rounded-sm mr-4">
                      <i className="fas fa-clock text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-light-gold mb-2">Сроки</h4>
                      <p className="text-off-white/80 text-sm">Доставка в течение 1-3 рабочих дней по Москве и 2-5 дней по области с момента подтверждения заказа.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl text-gold mb-6">Дополнительные опции</h3>
                
                <div className="space-y-6">
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="bg-gold/10 p-3 rounded-sm mr-4">
                      <i className="fas fa-hand-holding-dollar text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-light-gold mb-2">Самовывоз</h4>
                      <p className="text-off-white/80 text-sm">Возможность самовывоза со склада в Москве со скидкой на общую стоимость заказа.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="bg-gold/10 p-3 rounded-sm mr-4">
                      <i className="fas fa-calendar-days text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-light-gold mb-2">Гибкий график</h4>
                      <p className="text-off-white/80 text-sm">Составление индивидуального графика поставок для крупных строительных объектов.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="bg-gold/10 p-3 rounded-sm mr-4">
                      <i className="fas fa-people-carry-box text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-light-gold mb-2">Разгрузка</h4>
                      <p className="text-off-white/80 text-sm">Услуги по разгрузке материалов и подъему на этаж (обсуждается дополнительно).</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="gold-divider w-full my-8"></div>
            
            <div className="text-center">
              <p className="text-off-white/80 mb-6">Для уточнения условий доставки и расчета стоимости свяжитесь с нашими менеджерами.</p>
              <Button 
                asChild
                variant="default" 
                className="gold-button bg-gold text-navy hover:bg-light-gold font-medium px-8 py-6 rounded-sm text-base"
              >
                <a href="#contacts">РАССЧИТАТЬ ДОСТАВКУ</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
