import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phoneNumber = '552132722636'; // Standard phone from Contact.jsx
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Xavier Dev.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-float__tooltip">Fale Conosco</span>
    </a>
  );
}
