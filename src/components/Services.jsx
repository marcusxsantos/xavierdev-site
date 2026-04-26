import { Server, Database, Code as Code2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
  hosting: Server,
  data: Database,
  dev: Code2,
  app: Globe,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="services section section--alt">
      <div className="container">
        <h2 className="section__title">{t.services.title}</h2>
        <p className="section__subtitle">{t.services.subtitle}</p>
        <div className="services__grid">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={i} className="service-card">
                <div className="service-card__icon">
                  <Icon size={28} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <div className="service-card__glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
