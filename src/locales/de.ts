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
    formen: {
      title: "Formenbau",
      paragraph: "Wir bauen deine Formen mit den richtigen Werkzeugen",
      subServices: [
        { title: "Beratung & Konstruktion", paragraph: "" },
        { title: "Werkzeugherstellung", paragraph: "" },
        { title: "Abmusterung & Kleinserienfertigung", paragraph: "" },
      ],
    },

    auf: {
      title: "Aufwertung",
      paragraph: "Aufwertung durch Gravur und Politur",
      subServices: [
        { title: "Hochglanzpolieren", paragraph: "" },
        { title: "Lasergrevieren", paragraph: "" },
        { title: "Auftragschweißen", paragraph: "" },
      ],
    },

    fert: {
      title: "Fertigung",
      paragraph: "Unsere Fertigung im Haus",
      subServices: [
        { title: "Fräsen", paragraph: "" },
        { title: "Drehen", paragraph: "" },
        { title: "Erodieren", paragraph: "" },
      ],
    },
  },
} as const;
