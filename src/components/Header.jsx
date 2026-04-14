import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <span className="header__logo-icon">🏠</span>
          <div>
            <span className="header__logo-name">VICTOR</span>
            <span className="header__logo-sub">Remodeling</span>
          </div>
        </div>

        <nav className="header__nav">
          <button onClick={() => scrollTo('hero')}>{t.nav.home}</button>
          <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
          <button onClick={() => scrollTo('services')}>{t.nav.services}</button>
          <button onClick={() => scrollTo('gallery')}>{t.nav.gallery}</button>
        </nav>

        <div className="header__lang">
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            className={lang === 'es' ? 'active' : ''}
            onClick={() => setLang('es')}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}
