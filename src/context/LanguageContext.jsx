import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      gallery: 'Gallery',
    },
    hero: {
      title: 'Remodeling & Handyman Services',
      cta: 'Get a Free Quote',
    },
    about: {
      title: 'About Us',
      expTitle: 'Experienced & Reliable',
      expText:
        'More than 15 years helping transform homes, delivering quality and trust in every project.',
    },
    services: {
      title: 'Our Services',
      kitchens: 'Kitchens',
      bathrooms: 'Bathrooms',
      flooring: 'Flooring',
      painting: 'Painting',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      service: 'Service Needed',
      details: 'Project Details',
      send: 'Send',
      serviceOptions: ['Kitchen Remodel', 'Bathroom Remodel', 'Flooring', 'Painting', 'Other'],
    },
    footer: {
      rights: '© 2024 Victor Remodeling',
      tagline: 'Licensed & Insured',
      follow: 'Follow us:',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      gallery: 'Galería',
    },
    hero: {
      title: 'Remodelaciones y Servicios de Reparación',
      cta: 'Solicita un Presupuesto',
    },
    about: {
      title: 'Sobre Nosotros',
      expTitle: 'Experimentado y Confiable',
      expText:
        'Más de 15 años ayudando a transformar hogares, ofreciendo calidad y confianza en cada proyecto.',
    },
    services: {
      title: 'Nuestros Servicios',
      kitchens: 'Cocinas',
      bathrooms: 'Baños',
      flooring: 'Pisos',
      painting: 'Pintura',
    },
    contact: {
      title: 'Contáctanos',
      name: 'Nombre',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      service: 'Servicio Requerido',
      details: 'Detalles del Proyecto',
      send: 'Enviar',
      serviceOptions: ['Remodelación de Cocina', 'Remodelación de Baño', 'Pisos', 'Pintura', 'Otro'],
    },
    footer: {
      rights: '© 2024 Victor Remodeling',
      tagline: 'Licenciado y Asegurado',
      follow: 'Síguenos:',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
