import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const langLabels = { pt: 'PT', en: 'EN', es: 'ES' };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__brand" onClick={(e) => handleNav(e, '#home')}>
          <span className="navbar__logo-icon">&lt;/&gt;</span>
          <span className="navbar__logo-text">Xavier Dev</span>
        </a>

        <div className="navbar__actions">
          <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="navbar__lang">
            <Globe size={16} />
            <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="navbar__lang-select">
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>

          <button className="navbar__menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={(e) => handleNav(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__link-actions">
            <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="navbar__lang">
              <Globe size={16} />
              <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="navbar__lang-select">
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
