import { CircleCheck as CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about__card">
          <p className="about__text">{t.about.description1}</p>
          <p className="about__text">{t.about.description2}</p>
          <div className="about__features">
            {t.about.features.map((f, i) => (
              <div key={i} className="about__feature">
                <CheckCircle size={22} className="about__feature-icon" />
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
