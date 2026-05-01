import { createContext, useContext, useState } from 'react';

const translations = {
  'pt': {
    nav: { home: 'Início', about: 'Sobre', services: 'Serviços', contact: 'Contato' },
    hero: {
      badge: 'Impulsionado por IA',
      title: 'Tecnologia que',
      titleHighlight: 'Transforma',
      subtitle: 'Soluções inteligentes em TI com Inteligência Artificial, hospedagem web, tratamento de dados e desenvolvimento de aplicações.',
      cta: 'Fale Conosco',
      secondary: 'Nossos Serviços',
    },
    about: {
      title: 'Sobre a Xavier Dev',
      description1: 'A Xavier Dev Serviços em Informática é uma empresa especializada em soluções tecnológicas de ponta, integrando Inteligência Artificial aos nossos serviços de tratamento de dados, hospedagem web e desenvolvimento de aplicações.',
      description2: 'Sediada no Rio de Janeiro, temos o compromisso de entregar excelência em cada projeto, combinando expertise técnica com atendimento personalizado.',
      features: [
        { title: 'Experiência', desc: 'Sólida presença no mercado de TI' },
        { title: 'Qualidade', desc: 'Soluções confiáveis e eficientes' },
        { title: 'Inovação', desc: 'IA e tecnologias de ponta' },
        { title: 'Suporte', desc: 'Atendimento dedicado e ágil' },
      ],
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas em tecnologia com Inteligência Artificial para impulsionar seu negócio',
      items: [
        { title: 'Hospedagem Web', desc: 'Infraestrutura de hospedagem com alta disponibilidade, performance otimizada e monitoramento inteligente por IA.', icon: 'hosting' },
        { title: 'Tratamento de Dados', desc: 'Processamento e análise de dados com algoritmos de IA para insights estratégicos e tomada de decisão.', icon: 'data' },
        { title: 'Desenvolvimento', desc: 'Soluções personalizadas com integração de IA, automação inteligente e aplicações de última geração.', icon: 'dev' },
        { title: 'Provedores de Aplicação', desc: 'Aplicações web e sistemas integrados com recursos de IA para otimizar seus processos.', icon: 'app' },
      ],
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos prontos para transformar suas necessidades em soluções inteligentes',
      phone: 'Telefone (WhatsApp)',
      email: 'Email',
      address: 'Endereço',
      companyInfo: 'Informações da Empresa',
      companyName: 'Razão Social:',
      activity: 'Atividade Principal:',
      activityDesc: 'Tratamento de dados, provedores de serviços de aplicação e hospedagem na Internet',
      form: { name: 'Nome', phone: 'Telefone', message: 'Mensagem', submit: 'Enviar Mensagem', sending: 'Enviando...', success: 'Mensagem enviada com sucesso!', error: 'Erro ao enviar. Tente novamente.' },
    },
    footer: { rights: 'Todos os direitos reservados' },
  },
  'en': {
    nav: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact' },
    hero: {
      badge: 'AI-Powered',
      title: 'Technology that',
      titleHighlight: 'Transforms',
      subtitle: 'Intelligent IT solutions with Artificial Intelligence, web hosting, data processing, and application development.',
      cta: 'Get in Touch',
      secondary: 'Our Services',
    },
    about: {
      title: 'About Xavier Dev',
      description1: 'Xavier Dev IT Services is a company specialized in cutting-edge technological solutions, integrating Artificial Intelligence into our data processing, web hosting, and application development services.',
      description2: 'Located in Rio de Janeiro, we are committed to delivering excellence in every project, combining technical expertise with personalized service.',
      features: [
        { title: 'Experience', desc: 'Solid presence in the IT market' },
        { title: 'Quality', desc: 'Reliable and efficient solutions' },
        { title: 'Innovation', desc: 'AI and cutting-edge technologies' },
        { title: 'Support', desc: 'Dedicated and agile service' },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete technology solutions with Artificial Intelligence to boost your business',
      items: [
        { title: 'Web Hosting', desc: 'Hosting infrastructure with high availability, optimized performance, and AI-powered intelligent monitoring.', icon: 'hosting' },
        { title: 'Data Processing', desc: 'Data processing and analysis with AI algorithms for strategic insights and decision-making.', icon: 'data' },
        { title: 'Development', desc: 'Custom solutions with AI integration, intelligent automation, and next-generation applications.', icon: 'dev' },
        { title: 'Application Providers', desc: 'Web applications and integrated systems with AI features to optimize your processes.', icon: 'app' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are ready to transform your needs into intelligent solutions',
      phone: 'Phone (WhatsApp)',
      email: 'Email',
      address: 'Address',
      companyInfo: 'Company Information',
      companyName: 'Company Name:',
      activity: 'Main Activity:',
      activityDesc: 'Data processing, application service providers and Internet hosting',
      form: { name: 'Name', phone: 'Phone', message: 'Message', submit: 'Send Message', sending: 'Sending...', success: 'Message sent successfully!', error: 'Error sending message. Please try again.' },
    },
    footer: { rights: 'All rights reserved' },
  },
  'es': {
    nav: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', contact: 'Contacto' },
    hero: {
      badge: 'Impulsado por IA',
      title: 'Tecnología que',
      titleHighlight: 'Transforma',
      subtitle: 'Soluciones inteligentes de TI con Inteligencia Artificial, alojamiento web, tratamiento de datos y desarrollo de aplicaciones.',
      cta: 'Contáctenos',
      secondary: 'Nuestros Servicios',
    },
    about: {
      title: 'Sobre Xavier Dev',
      description1: 'Xavier Dev Servicios en Informática es una empresa especializada en soluciones tecnológicas de vanguardia, integrando Inteligencia Artificial en nuestros servicios de tratamiento de datos, alojamiento web y desarrollo de aplicaciones.',
      description2: 'Sediada en Río de Janeiro, tenemos el compromiso de entregar excelencia en cada proyecto, combinando experiencia técnica con atención personalizada.',
      features: [
        { title: 'Experiencia', desc: 'Sólida presencia en el mercado de TI' },
        { title: 'Calidad', desc: 'Soluciones confiables y eficientes' },
        { title: 'Innovación', desc: 'IA y tecnologías de punta' },
        { title: 'Soporte', desc: 'Atención dedicada y ágil' },
      ],
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones completas de tecnología con Inteligencia Artificial para impulsar su negocio',
      items: [
        { title: 'Alojamiento Web', desc: 'Infraestructura de alojamiento con alta disponibilidad, rendimiento optimizado y monitoreo inteligente por IA.', icon: 'hosting' },
        { title: 'Tratamiento de Datos', desc: 'Procesamiento y análisis de datos con algoritmos de IA para insights estratégicos y toma de decisiones.', icon: 'data' },
        { title: 'Desarrollo', desc: 'Soluciones personalizadas con integración de IA, automatización inteligente y aplicaciones de última generación.', icon: 'dev' },
        { title: 'Proveedores de Aplicación', desc: 'Aplicaciones web y sistemas integrados con recursos de IA para optimizar sus procesos.', icon: 'app' },
      ],
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Estamos listos para transformar sus necesidades en soluciones inteligentes',
      phone: 'Teléfono (WhatsApp)',
      email: 'Correo',
      address: 'Dirección',
      companyInfo: 'Información de la Empresa',
      companyName: 'Razón Social:',
      activity: 'Actividad Principal:',
      activityDesc: 'Tratamiento de datos, proveedores de servicios de aplicación y alojamiento en Internet',
      form: { name: 'Nombre', phone: 'Teléfono', message: 'Mensaje', submit: 'Enviar Mensaje', sending: 'Enviando...', success: 'Mensaje enviado con éxito!', error: 'Error al enviar. Intente nuevamente.' },
    },
    footer: { rights: 'Todos los derechos reservados' },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'pt');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
