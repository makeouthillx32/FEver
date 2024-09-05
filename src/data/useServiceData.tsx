import { useScopedI18n } from "@/locales/client";
import { Services } from "@/types";

const useServicesData = (): Services[] => {
  const t = useScopedI18n("services");

  return [
    {
      title: t("formen.title"),
      paragraph: t("formen.paragraph"),
      image: "/images/mold-close.webp",
      tags: ["Formentechnik"],
      subServices: [
        {
          title: t("formen.subServices.0.title"),
          paragraph: t("formen.subServices.0.paragraph"),
          path: "/beratung",
          image: [""],
        },
        {
          title: t("formen.subServices.1.title"),
          paragraph: t("formen.subServices.1.paragraph"),
          path: "/werk",
          image: [""],
        },
        {
          title: t("formen.subServices.2.title"),
          paragraph: t("formen.subServices.2.paragraph"),
          path: "/abmus",
          image: [""],
        },
      ],
    },
    {
      title: t("auf.title"),
      paragraph: t("auf.paragraph"),
      image: "/images/sparks.webp",
      tags: ["Aufwertung"],
      subServices: [
        {
          title: t("auf.subServices.0.title"),
          paragraph: t("auf.subServices.0.paragraph"),
          path: "/hoch",
          image: [""],
        },
        {
          title: t("auf.subServices.1.title"),
          paragraph: t("auf.subServices.1.paragraph"),
          path: "/laser",
          image: [""],
        },
        {
          title: t("auf.subServices.2.title"),
          paragraph: t("auf.subServices.2.paragraph"),
          path: "/auf",
          image: [""],
        },
      ],
    },
    {
      title: t("fert.title"),
      paragraph: t("fert.paragraph"),
      image: "/images/in-house.webp",
      tags: ["Fertig"],
      subServices: [
        {
          title: t("fert.subServices.0.title"),
          paragraph: t("fert.subServices.0.paragraph"),
          path: "/fra",
          image: [""],
        },
        {
          title: t("fert.subServices.1.title"),
          paragraph: t("fert.subServices.1.paragraph"),
          path: "/dreh",
          image: [""],
        },
        {
          title: t("fert.subServices.2.title"),
          paragraph: t("fert.subServices.2.paragraph"),
          path: "/erod",
          image: [""],
        },
      ],
    },
  ];
};

export default useServicesData;
