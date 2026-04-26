import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>
      <div className="hero__container">
        <div className="hero__badge">
          <Sparkles size={14} />
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="hero__title">
          {t.hero.title} <span className="hero__title-highlight">{t.hero.titleHighlight}</span>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t.hero.cta} <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn btn--outline" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t.hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
