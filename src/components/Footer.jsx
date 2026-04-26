import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <span className="footer__logo-icon">&lt;/&gt;</span>
          <span className="footer__logo-text">Xavier Dev</span>
        </div>
        <p>&copy; {year} Xavier Dev Serviços em Informática EIRELI - ME. {t.footer.rights}.</p>
        <p>CNPJ: 28.651.037/0001-07</p>
      </div>
    </footer>
  );
}
