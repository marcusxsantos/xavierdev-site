import { useLanguage } from '../contexts/LanguageContext';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.testimonials.title}</h2>
        <div className="testimonials__grid">
          {t.testimonials.items.map((item, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="testimonial-card__icon" size={32} />
              <p className="testimonial-card__text">"{item.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonial-card__name">{item.name}</h4>
                  <p className="testimonial-card__role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
