import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
    },
    hero: {
      title: 'Remodeling & Handyman Services',
      subtitle: 'Remodelaciones y Servicios de Reparación',
      cta: 'Get a Free Quote',
      ctaSub: 'Solicita un Presupuesto',
    },
    about: {
      title: 'About Us',
      titleEs: 'Sobre Nosotros',
      expTitle: 'Experienced & Reliable',
      expText:
        'More than 15 years helping transform homes, delivering quality and trust in every project.',
    },
    services: {
      title: 'Our Services',
      titleEs: 'Nuestros Servicios',
      kitchens: 'Kitchens',
      kitchensEs: 'Cocinas',
      bathrooms: 'Bathrooms',
      bathroomsEs: 'Baños',
      flooring: 'Flooring',
      flooringEs: 'Pisos',
      painting: 'Painting',
      paintingEs: 'Pintura',
    },
    contact: {
      title: 'Contact Us',
      titleEs: 'Contáctanos',
      name: 'Name / Nombre',
      phone: 'Phone / Teléfono',
      email: 'Email / Correo Electrónico',
      service: 'Service Needed / Servicio Requerido',
      details: 'Project Details / Detalles del Proyecto',
      send: 'Send / Enviar',
      serviceOptions: ['Kitchen Remodel', 'Bathroom Remodel', 'Flooring', 'Painting', 'Other'],
    },
    footer: {
      rights: '© 2024 Victor Remodeling',
      tagline: 'Licensed & Insured',
      follow: 'Follow us:',
      followEs: 'Síguenos:',
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
      subtitle: 'Remodeling & Handyman Services',
      cta: 'Solicita un Presupuesto',
      ctaSub: 'Get a Free Quote',
    },
    about: {
      title: 'Sobre Nosotros',
      titleEs: 'About Us',
      expTitle: 'Experimentado y Confiable',
      expText:
        'Más de 15 años ayudando a transformar hogares, ofreciendo calidad y confianza en cada proyecto.',
    },
    services: {
      title: 'Nuestros Servicios',
      titleEs: 'Our Services',
      kitchens: 'Cocinas',
      kitchensEs: 'Kitchens',
      bathrooms: 'Baños',
      bathroomsEs: 'Bathrooms',
      flooring: 'Pisos',
      flooringEs: 'Flooring',
      painting: 'Pintura',
      paintingEs: 'Painting',
    },
    contact: {
      title: 'Contáctanos',
      titleEs: 'Contact Us',
      name: 'Nombre / Name',
      phone: 'Teléfono / Phone',
      email: 'Correo Electrónico / Email',
      service: 'Servicio Requerido / Service Needed',
      details: 'Detalles del Proyecto / Project Details',
      send: 'Enviar / Send',
      serviceOptions: ['Remodelación de Cocina', 'Remodelación de Baño', 'Pisos', 'Pintura', 'Otro'],
    },
    footer: {
      rights: '© 2024 Victor Remodeling',
      tagline: 'Licenciado y Asegurado',
      follow: 'Síguenos:',
      followEs: 'Follow us:',
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
