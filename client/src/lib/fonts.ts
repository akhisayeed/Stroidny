import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@400;500;600&display=swap');
`;

export const fonts = {
  playfair: '"Playfair Display", serif',
  montserrat: 'Montserrat, sans-serif',
  cormorant: '"Cormorant Garamond", serif',
};
