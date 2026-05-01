import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section__title">{t.pricing.title}</h2>
        <p className="section__subtitle">{t.pricing.subtitle}</p>
        
        <div className="pricing__grid">
          {t.pricing.tiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${index === 1 ? 'pricing-card--popular' : ''}`}>
              {index === 1 && <span className="pricing-card__badge">{t.pricing.tiers[1].price}</span>}
              <h3 className="pricing-card__name">{tier.name}</h3>
              <div className="pricing-card__price">
                {tier.name === 'Starter' || tier.name === 'Enterprise' ? tier.price : 'Business'}
              </div>
              <ul className="pricing-card__features">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={16} className="pricing-card__feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${index === 1 ? 'btn--primary' : 'btn--outline'} btn--full`}>
                {t.pricing.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
