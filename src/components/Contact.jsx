import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Project Request - Victor Remodeling');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nDetails: ${form.details}`
    );
    window.open(`mailto:info@victorremodeling.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="section-title">
          <span className="title-en">{t.contact.title}</span>
          <span className="title-divider"> / </span>
          <span className="title-es">{t.contact.titleEs}</span>
        </h2>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <input
              name="name"
              placeholder={t.contact.name}
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder={t.contact.phone}
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="contact__row">
            <input
              name="email"
              type="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">{t.contact.service}</option>
              {t.contact.serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="details"
            placeholder={t.contact.details}
            rows={4}
            value={form.details}
            onChange={handleChange}
          />
          <button type="submit" className="contact__btn">
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
