import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format the number
  let formattedValue = '';
  if (digits.length > 0) {
    // Add the country code if it doesn't exist
    const phoneDigits = digits.startsWith('7') ? digits : `7${digits}`;
    
    formattedValue = `+${phoneDigits.substring(0, 1)}`;
    
    if (phoneDigits.length > 1) {
      formattedValue += ` (${phoneDigits.substring(1, 4)}`;
    }
    
    if (phoneDigits.length > 4) {
      formattedValue += `) ${phoneDigits.substring(4, 7)}`;
    }
    
    if (phoneDigits.length > 7) {
      formattedValue += `-${phoneDigits.substring(7, 9)}`;
    }
    
    if (phoneDigits.length > 9) {
      formattedValue += `-${phoneDigits.substring(9, 11)}`;
    }
  }
  
  return formattedValue;
}
