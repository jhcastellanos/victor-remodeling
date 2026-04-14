import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const serviceImages = [
  {
    key: 'kitchens',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
  },
  {
    key: 'bathrooms',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80',
  },
  {
    key: 'flooring',
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=400&q=80',
  },
  {
    key: 'painting',
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h2 className="section-title">
          <span className="title-en">{t.services.title}</span>
          <span className="title-divider"> / </span>
          <span className="title-es">{t.services.titleEs}</span>
        </h2>

        <div className="services__grid">
          {serviceImages.map((s) => (
            <div className="services__card" key={s.key}>
              <img src={s.img} alt={s.key} />
              <p>
                <strong>{t.services[s.key]}</strong>{' '}
                <span className="services__label-es">/ {t.services[s.key + 'Es']}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
