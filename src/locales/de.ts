export default {
  slogan: "Wir bringen Ihre Ideen in Form",

  menu: {
    home: "Startseite",
    about: "Über Uns",
    blog: "Blog",
    contact: "Kontakt",
    services: "Dienstleistungen",
  },

  ourServices: {
    title: "Unsere Kernbereiche",
    paragraph:
      "Ob etablierter Spritzgießbetrieb oder junges Startup Ihre Wünsche in puncto Formenbau werden aus einer Hand bedient. Es muss keine Spritzgießform sein - wir drehen, fräsen, erodieren, schleifen und schweißen Einzelteile bis Kleinserien nach Ihren Anforderungen.",
  },

  services: {
    formtechnik: {
      title: "Formentechnik",
      paragraph: "Wir bauen Ihre Formen mit den richtigen Werkzeugen",
      subServices: [
        { title: "Beratung & Konstruktion", paragraph: "" },
        { title: "Werkzeugherstellung", paragraph: "" },
        { title: "Abmusterung & Kleinserienfertigung", paragraph: "" },
      ],
    },

    fertigung: {
      title: "Fertigung",
      paragraph: "Unsere Fertigung im Haus",
      subServices: [
        { title: "Fräsen", paragraph: "" },
        { title: "Drehen", paragraph: "" },
        { title: "Senkerodieren", paragraph: "" },
        { title: "Drahterodieren", paragraph: "" },
        { title: "Laserschweißen", paragraph: "" },
        { title: "Lasergravieren", paragraph: "" },
        { title: "Hochglanzpolieren", paragraph: "" },
        { title: "Flachschleifen", paragraph: "" },
      ],
    },

    reparatur: {
      title: "Reparatur",
      paragraph: "Unsere Reparatur- und Wartungsdienste",
      subServices: [
        { title: "Renovierung", paragraph: "" },
        { title: "Überholung", paragraph: "" },
        { title: "Formen Reparatur", paragraph: "" },
      ],
    },
  },

  contact: {
    title: "Contact Us",
    paragraph:
      "Wir würden uns freuen, von Ihnen zu hören! Ob Sie eine Frage haben, ein Angebot benötigen oder ein neues Projekt besprechen möchten, zögern Sie nicht, uns zu kontaktieren.",
    phone: "Telefon",
    hours: "Öffnungszeiten",
    opendays: "Montag - Freitag: 7:00 - 16:00 Uhr",
    form: {
      title: "Kontakt Form",
      paragraph: "Wir werden Sie so schnell wie möglich beantworten",
      textarea: "Geben Sie Ihre Nachricht hier ein",
      submit: "Senden",
    },
  },

  about: {
    title: "Über Uns",
    paragraph: "Formen Werkstatt, wo Innovation auf Präzision trifft.",
    description:
      "Im Herzen von Reichelsheim, Odenwald, sind wir darauf spezialisiert, Ihre Ideen in greifbare Ergebnisse zu verwandeln. Unser voll ausgestattetes Werk ermöglicht es uns, ein umfassendes Dienstleistungsangebot von der Formenherstellung bis hin zur hochpräzisen Maschinenbearbeitung anzubieten. ",
  },
} as const;
