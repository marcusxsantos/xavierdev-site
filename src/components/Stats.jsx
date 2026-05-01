import { useLanguage } from '../contexts/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  return (
    <div className="stats">
      <div className="stats__grid">
        {t.stats.items.map((item, index) => (
          <div key={index} className="stats__item">
            <h3 className="stats__value">{item.value}</h3>
            <p className="stats__label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
