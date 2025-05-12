import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { smoothScrollTo } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-navy ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-80'} transition-all duration-300 border-b border-gold/20`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div onClick={scrollToTop} className="cursor-pointer">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#main" className="nav-link">Главная</a>
          <a href="#about" className="nav-link">О компании</a>
          <a href="#services" className="nav-link">Услуги</a>
          <a href="#delivery" className="nav-link">Доставка</a>
          <a href="#contacts" className="nav-link">Контакты</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gold focus:outline-none"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-navy border-t border-gold/20 transition-all duration-300 ${isMenuOpen ? 'max-h-80' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#main" 
            className="text-off-white hover:text-gold transition-colors py-2 border-b border-gold/10"
            onClick={closeMenu}
          >
            Главная
          </a>
          <a 
            href="#about" 
            className="text-off-white hover:text-gold transition-colors py-2 border-b border-gold/10"
            onClick={closeMenu}
          >
            О компании
          </a>
          <a 
            href="#services" 
            className="text-off-white hover:text-gold transition-colors py-2 border-b border-gold/10"
            onClick={closeMenu}
          >
            Услуги
          </a>
          <a 
            href="#delivery" 
            className="text-off-white hover:text-gold transition-colors py-2 border-b border-gold/10"
            onClick={closeMenu}
          >
            Доставка
          </a>
          <a 
            href="#contacts" 
            className="text-off-white hover:text-gold transition-colors py-2 border-b border-gold/10"
            onClick={closeMenu}
          >
            Контакты
          </a>
        </div>
      </div>
    </header>
  );
}
