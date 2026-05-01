import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Stats from './Stats';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about section section--alt">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about__card">
          <p className="about__text">{t.about.description1}</p>
          <p className="about__text">{t.about.description2}</p>
          <div className="about__features">
            {t.about.features.map((feature, index) => (
              <div key={index} className="about__feature">
                <CheckCircle2 className="about__feature-icon" size={20} />
                <div>
                  <h4 className="about__feature-title">{feature.title}</h4>
                  <p className="about__feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
