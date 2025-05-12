import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>СТРОИТЕЛЬНАЯ ИНДУСТРИЯ - Премиальные строительные материалы</title>
      <meta name="description" content="СТРОИТЕЛЬНАЯ ИНДУСТРИЯ - лидер строительного рынка. Премиальные материалы и высочайший уровень сервиса. Кирпичные блоки, цемент, сухие смеси, инструменты и другие строительные материалы." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="СТРОИТЕЛЬНАЯ ИНДУСТРИЯ - Премиальные строительные материалы" />
      <meta property="og:description" content="Лидер строительного рынка. Премиальные материалы и высочайший уровень сервиса." />
      <meta property="og:site_name" content="СТРОИТЕЛЬНАЯ ИНДУСТРИЯ" />

      {/* Favicon */}
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏗️</text></svg>" />
      
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </Helmet>
    <App />
  </HelmetProvider>
);
