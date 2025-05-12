import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy py-10 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo height={10} />
          </div>
          
          <div className="flex space-x-6">
            <a href="https://t.me/" className="text-gold hover:text-light-gold transition-colors" target="_blank" rel="noreferrer">
              <i className="fab fa-telegram text-2xl"></i>
            </a>
            <a href="https://wa.me/79120253330" className="text-gold hover:text-light-gold transition-colors" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="https://vk.com/" className="text-gold hover:text-light-gold transition-colors" target="_blank" rel="noreferrer">
              <i className="fab fa-vk text-2xl"></i>
            </a>
          </div>
        </div>
        
        <div className="gold-divider w-full mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-gold text-lg mb-4">О компании</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-off-white/80 hover:text-gold transition-colors">О нас</a></li>
              <li><a href="#projects" className="text-off-white/80 hover:text-gold transition-colors">Проекты</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-gold transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-gold transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-gold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-off-white/80 hover:text-gold transition-colors">Продажа материалов</a></li>
              <li><a href="#services" className="text-off-white/80 hover:text-gold transition-colors">Комплектация объектов</a></li>
              <li><a href="#services" className="text-off-white/80 hover:text-gold transition-colors">Консультации</a></li>
              <li><a href="#delivery" className="text-off-white/80 hover:text-gold transition-colors">Доставка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-gold text-lg mb-4">Материалы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-off-white/80 hover:text-gold transition-colors">Кирпичные блоки</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-gold transition-colors">Цемент и смеси</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-gold transition-colors">Утеплители</a></li>
              <li><a href="#" className="text-off-white/80 hover:text-gold transition-colors">Все категории</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-gold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-off-white/80">г. Москва, п. Коммунарка</li>
              <li>
                <a href="tel:+79120253330" className="text-off-white/80 hover:text-gold transition-colors">
                  +7-912-025-33-30
                </a>
              </li>
              <li>
                <a href="mailto:stroidny@yandex.ru" className="text-off-white/80 hover:text-gold transition-colors">
                  stroidny@yandex.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-off-white/60 text-sm">
          <p>© {new Date().getFullYear()} ООО "СТРОИТЕЛЬНАЯ ИНДУСТРИЯ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
