export default {
  slogan: "We bring your ideas to life",

  menu: {
    home: "Home",
    about: "About Us",
    blog: "Blog",
    contact: "Contact",
    services: "Services",
  },

  ourServices: {
    title: "Our Core Areas",
    paragraph:
      "Whether an established injection molding company or a young startup, your mold-making needs are handled from a single source. It doesn't have to be an injection mold – we turn, mill, erode, grind, and weld individual parts to small series according to your requirements.",
  },

  services: {
    formtechnik: {
      title: "Mold Technology",
      paragraph: "We build your molds with the right tools",
      subServices: [
        { title: "Consulting & Design", paragraph: "" },
        { title: "Tool Manufacturing", paragraph: "" },
        { title: "Sampling & Small Batch Production", paragraph: "" },
      ],
    },

    fertigung: {
      title: "Production",
      paragraph: "Our in-house production",
      subServices: [
        { title: "Milling", paragraph: "" },
        { title: "Turning", paragraph: "" },
        { title: "Sinker and Wire EDM", paragraph: "" },
        { title: "Wire EDM", paragraph: "" },
        { title: "Laser Welding", paragraph: "" },
        { title: "Laser Engraving", paragraph: "" },
        { title: "High Gloss Polishing", paragraph: "" },
        { title: "Surface Grinding", paragraph: "" },
      ],
    },

    reparatur: {
      title: "Repair",
      paragraph: "Our repair and maintenance services",
      subServices: [
        { title: "Renovation", paragraph: "" },
        { title: "Overhaul", paragraph: "" },
        { title: "Mold Repair", paragraph: "" },
      ],
    },
  },

  contact: {
    title: "Contact Us",
    paragraph:
      "We'd love to hear from you! Whether you have a question, need a quote, or want to discuss a new project, don't hesitate to reach out to us.",
    phone: "Phone",
    hours: "Business Hours",
    opendays: "Monday - Friday: 7:00 AM - 4:00 PM",
    form: {
      title: "Contact Form",
      paragraph: "We will respond as soon as possible",
      textarea: "Enter your message here",
      submit: "Send",
    },
  },

  about: {
    title: "About Us",
    paragraph: "Mold Workshop, where innovation meets precision.",
    description:
      "In the heart of Reichelsheim, Odenwald, we specialize in turning your ideas into tangible results. Our fully equipped facility enables us to offer a comprehensive range of services from mold-making to high-precision machining.",
  },
} as const;
