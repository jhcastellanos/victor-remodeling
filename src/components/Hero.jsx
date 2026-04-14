import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <button className="hero__cta" onClick={() => scrollTo('contact')}>
          <span>{t.hero.cta}</span>
          <span className="hero__cta-sub">{t.hero.ctaSub}</span>
        </button>
      </div>
    </section>
  );
}
