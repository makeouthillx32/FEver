import { useScopedI18n } from "@/locales/client";
import { Services } from "@/types";

const useServicesData = (): Services[] => {
  const t = useScopedI18n("services");

  return [
    {
      title: t("formen.title"),
      paragraph: t("formen.paragraph"),
      image: "/images/blog/blog-01.jpg",
      tags: [""],
      subServices: [
        {
          title: "Beratung",
          paragraph: "lorem ipsum dolor sit amet",
          path: "/beratung",
          image: [""],
        },
        {
          title: "Werkzeug",
          paragraph: "lorem ipsum dolor sit amet",
          path: "/werk",
          image: [""],
        },
        {
          title: "Abmusterung",
          paragraph: "lorem ipsum dolor sit amet",
          path: "/abmus",
          image: [""],
        },
      ],
    },
    {
      title: "Aufwertung",
      paragraph: "lorem ipsum dolor sit amet",
      image: "/images/blog/blog-02.jpg",
      tags: [""],
      subServices: [
        {
          title: "Hochglanz",
          paragraph: "lorem ipsum dolor sit amet",
          path: "/hoch",
          image: [""],
        },
        {
          title: "Lasergravieren",
          paragraph: "lorem ipsum dolor sit amet",
          path: "/laser",
          image: [""],
        },
        {
          title: "Auftrag",
          paragraph: "lorem ipsum dolor sit amet",
          path: "/auf",
          image: [""],
        },
      ],
    },
    {
      title: "Fertig",
      paragraph: "lorem ipsum dolor sit amet",
      image: "/images/blog/blog-03.jpg",
      tags: [""],
      subServices: [
        {
          title: "Frasen",
          paragraph: "",
          path: "/fra",
          image: [""],
        },
        {
          title: "Drehen",
          paragraph: "",
          path: "/dreh",
          image: [""],
        },
        {
          title: "Erodieren",
          paragraph: "",
          path: "/erod",
          image: [""],
        },
      ],
    },
  ];
};

export default useServicesData;
