import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="section-title">
          <span className="title-en">{t.about.title}</span>
          <span className="title-divider"> / </span>
          <span className="title-es">{t.about.titleEs}</span>
        </h2>

        <div className="about__card">
          <div className="about__img">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=400&q=80"
              alt="Victor Remodeling professional"
            />
          </div>
          <div className="about__text">
            <h3>{t.about.expTitle}</h3>
            <p>{t.about.expText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
