import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-charcoal relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565008576549-57cf11933da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')] bg-fixed bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold section-heading mb-8">
              О компании
            </h2>
            <p className="text-off-white/90 mb-6">
              <span className="font-semibold text-gold">Общество с ограниченной ответственностью "СТРОИТЕЛЬНАЯ ИНДУСТРИЯ"</span> — ведущий поставщик премиальных строительных материалов на российском рынке.
            </p>
            <p className="text-off-white/90 mb-6">
              Наша миссия — обеспечивать строительную отрасль материалами высочайшего качества, соответствующими самым строгим стандартам и требованиям современного строительства.
            </p>
            <p className="text-off-white/90 mb-8">
              Компания основана <span className="text-gold">22 марта 2023 года</span> и за короткий срок зарекомендовала себя как надежный партнер для застройщиков премиального сегмента.
            </p>
            
            <div className="gold-divider w-full mb-8"></div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-playfair text-xl text-gold mb-3">Руководство</h3>
                <p className="text-off-white/90">
                  <span className="font-medium">Генеральный директор:</span><br />
                  Панков Кирилл Евгеньевич
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-gold mb-3">Ценности</h3>
                <ul className="list-disc list-inside text-off-white/90">
                  <li>Качество и надежность</li>
                  <li>Индивидуальный подход</li>
                  <li>Инновационные решения</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="bg-navy/60 border border-gold/30 p-8 rounded-sm max-w-md">
              <h3 className="font-playfair text-2xl text-gold mb-6 text-center">Почему нас выбирают</h3>
              
              <div className="space-y-6">
                <motion.div className="flex items-start" variants={fadeIn}>
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <i className="fas fa-medal text-gold text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-light-gold mb-2">Премиальное качество</h4>
                    <p className="text-off-white/80 text-sm">Мы поставляем только сертифицированную продукцию от ведущих производителей.</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={fadeIn}>
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <i className="fas fa-handshake text-gold text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-light-gold mb-2">Индивидуальный подход</h4>
                    <p className="text-off-white/80 text-sm">Разрабатываем персональные решения под конкретные задачи заказчика.</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={fadeIn}>
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <i className="fas fa-truck-fast text-gold text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-light-gold mb-2">Оперативная логистика</h4>
                    <p className="text-off-white/80 text-sm">Точное соблюдение сроков поставки и гибкая система доставки.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
