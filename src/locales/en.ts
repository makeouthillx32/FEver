export default {
  slogan: "We bring your ideas into form",

  menu: {
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    services: "Services",
  },

  ourServices: {
    title: "Our Services",
    paragraph:
      "Whether you are an established injection molding company or a young start-up we are your one-stop shop when it comes to mold making. It's not just about injection molds—we also specialize in turning, milling, eroding, grinding, and welding parts from single pieces to small series, all tailored to your specifications.",
  },

  services: {
    formen: {
      title: "Mold Making",
      paragraph: "We build your molds with the right tools",
      subServices: [
        { title: "Consulting & Design", paragraph: "" },
        { title: "Tool Manufacturing", paragraph: "" },
        { title: "Sampling & Small Series Production", paragraph: "" },
      ],
    },

    auf: {
      title: "Enhancement",
      paragraph: "Enhance Your Molds with Polishing and Engraving",
      subServices: [
        { title: "High-Gloss Polishing", paragraph: "" },
        { title: "Laser Engraving", paragraph: "" },
        { title: "Additive Welding", paragraph: "" },
      ],
    },

    fert: {
      title: "Manufacturing",
      paragraph: "In-House Manufacturing Capabilities",
      subServices: [
        { title: "Milling", paragraph: "" },
        { title: "Turning", paragraph: "" },
        { title: "Eroding", paragraph: "" },
      ],
    },
  },
} as const;
