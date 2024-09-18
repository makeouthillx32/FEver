import { useScopedI18n } from "@/locales/client";
import { Services } from "@/types";

const useServicesData = (): Services[] => {
  const t = useScopedI18n("services");

  return [
    {
      title: t("formtechnik.title"),
      paragraph: t("formtechnik.paragraph"),
      image: "/images/mold-close.webp",
      tags: ["Formentechnik"],
      subServices: [
        {
          title: t("formtechnik.subServices.0.title"),
          paragraph: t("formtechnik.subServices.0.paragraph"),
          path: "/beratung",
          image: [""],
        },
        {
          title: t("formtechnik.subServices.1.title"),
          paragraph: t("formtechnik.subServices.1.paragraph"),
          path: "/werk",
          image: [""],
        },
        {
          title: t("formtechnik.subServices.2.title"),
          paragraph: t("formtechnik.subServices.2.paragraph"),
          path: "/abmus",
          image: [""],
        },
      ],
    },

    {
      title: t("fertigung.title"),
      paragraph: t("fertigung.paragraph"),
      image: "/images/in-house.webp",
      tags: [""],
      subServices: [
        {
          title: t("fertigung.subServices.0.title"),
          paragraph: t("fertigung.subServices.0.paragraph"),
          path: "/frasen",
          image: [""],
        },
        {
          title: t("fertigung.subServices.1.title"),
          paragraph: t("fertigung.subServices.1.paragraph"),
          path: "/drehen",
          image: [""],
        },
        {
          title: t("fertigung.subServices.2.title"),
          paragraph: t("fertigung.subServices.2.paragraph"),
          path: "/senkerodieren",
          image: [""],
        },
        {
          title: t("fertigung.subServices.3.title"),
          paragraph: t("fertigung.subServices.3.paragraph"),
          path: "/drahterodieren",
          image: [""],
        },
        {
          title: t("fertigung.subServices.4.title"),
          paragraph: t("fertigung.subServices.4.paragraph"),
          path: "/laserschwiessen",
          image: [""],
        },
        {
          title: t("fertigung.subServices.5.title"),
          paragraph: t("fertigung.subServices.5.paragraph"),
          path: "/lasergravieren",
          image: [""],
        },
        {
          title: t("fertigung.subServices.6.title"),
          paragraph: t("fertigung.subServices.6.paragraph"),
          path: "/hochglanzpolieren",
          image: [""],
        },
        {
          title: t("fertigung.subServices.7.title"),
          paragraph: t("fertigung.subServices.7.paragraph"),
          path: "/flachschleifen",
          image: [""],
        },
      ],
    },
    {
      title: t("reparatur.title"),
      paragraph: t("reparatur.paragraph"),
      image: "/images/mold-close.webp",
      tags: ["Formentechnik"],
      subServices: [
        {
          title: t("reparatur.subServices.0.title"),
          paragraph: t("reparatur.subServices.0.paragraph"),
          path: "/beratung",
          image: [""],
        },
        {
          title: t("reparatur.subServices.1.title"),
          paragraph: t("reparatur.subServices.1.paragraph"),
          path: "/werk",
          image: [""],
        },
        {
          title: t("reparatur.subServices.2.title"),
          paragraph: t("reparatur.subServices.2.paragraph"),
          path: "/abmus",
          image: [""],
        },
      ],
    },
  ];
};

export default useServicesData;
