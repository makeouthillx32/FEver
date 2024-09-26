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
          description: t("formtechnik.subServices.0.description"),
          image: [""],
          path: "/beratung",
          paragraph: t("formtechnik.subServices.0.paragraph"),
          nestedList: [
            {
              title: t("formtechnik.subServices.0.nestedList.0.title"),
              list: [
                t("formtechnik.subServices.0.nestedList.0.list.0"),
                t("formtechnik.subServices.0.nestedList.0.list.1"),
                t("formtechnik.subServices.0.nestedList.0.list.2"),
                t("formtechnik.subServices.0.nestedList.0.list.3"),
                t("formtechnik.subServices.0.nestedList.0.list.4"),
                t("formtechnik.subServices.0.nestedList.0.list.5"),
              ],
            },
            {
              title: t("formtechnik.subServices.0.nestedList.1.title"),
              list: [t("formtechnik.subServices.0.nestedList.1.list.0")],
            },
            {
              title: t("formtechnik.subServices.0.nestedList.2.title"),
              list: [
                t("formtechnik.subServices.0.nestedList.2.list.0"),
                t("formtechnik.subServices.0.nestedList.2.list.1"),
                t("formtechnik.subServices.0.nestedList.2.list.2"),
              ],
            },
          ],
          cta: t("formtechnik.subServices.0.cta"),
        },
        {
          title: t("formtechnik.subServices.1.title"),
          description: t("formtechnik.subServices.1.description"),
          image: [""],
          path: "/werk",
          paragraph: t("formtechnik.subServices.1.paragraph"),
          nestedList: [
            {
              title: t("formtechnik.subServices.1.nestedList.0.title"),
              list: [
                t("formtechnik.subServices.1.nestedList.0.list.0"),
                t("formtechnik.subServices.1.nestedList.0.list.1"),
                t("formtechnik.subServices.1.nestedList.0.list.2"),
                t("formtechnik.subServices.1.nestedList.0.list.3"),
              ],
            },
            {
              title: t("formtechnik.subServices.1.nestedList.1.title"),
              list: [t("formtechnik.subServices.1.nestedList.1.list.0")],
            },
          ],
          cta: t("formtechnik.subServices.1.cta"),
        },
        {
          title: t("formtechnik.subServices.2.title"),
          description: t("formtechnik.subServices.2.description"),
          image: [""],
          path: "/abmusterung",
          paragraph: t("formtechnik.subServices.2.paragraph"),
          nestedList: [
            {
              title: t("formtechnik.subServices.2.nestedList.0.title"),
              list: [
                t("formtechnik.subServices.2.nestedList.0.list.0"),
                t("formtechnik.subServices.2.nestedList.0.list.1"),
              ],
            },
            {
              title: t("formtechnik.subServices.2.nestedList.1.title"),
              list: [t("formtechnik.subServices.2.nestedList.1.list.0")],
            },
          ],
          cta: t("formtechnik.subServices.2.cta"),
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
          description: t("fertigung.subServices.0.description"),
          image: [""],
          path: "/frasen",
          paragraph: t("fertigung.subServices.0.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.0.nestedList.0.title"),
              list: [
                t("fertigung.subServices.0.nestedList.0.list.0"),
                t("fertigung.subServices.0.nestedList.0.list.1"),
              ],
            },
            {
              title: t("fertigung.subServices.0.nestedList.1.title"),
              list: [
                t("fertigung.subServices.0.nestedList.1.list.0"),
                t("fertigung.subServices.0.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.0.cta"),
        },
        {
          title: t("fertigung.subServices.1.title"),
          description: "",
          image: [""],
          path: "/drehen",
          paragraph: t("fertigung.subServices.1.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.1.nestedList.0.title"),
              list: [
                t("fertigung.subServices.1.nestedList.0.list.0"),
                t("fertigung.subServices.1.nestedList.0.list.1"),
              ],
            },
            {
              title: t("fertigung.subServices.1.nestedList.1.title"),
              list: [
                t("fertigung.subServices.1.nestedList.1.list.0"),
                t("fertigung.subServices.1.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.1.cta"),
        },
        {
          title: t("fertigung.subServices.2.title"),
          description: "",
          image: [""],
          path: "/senkerodieren",
          paragraph: t("fertigung.subServices.2.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.2.nestedList.0.title"),
              list: [
                t("fertigung.subServices.2.nestedList.0.list.0"),
                t("fertigung.subServices.2.nestedList.0.list.1"),
                t("fertigung.subServices.2.nestedList.0.list.2"),
              ],
            },
          ],
          cta: t("fertigung.subServices.2.cta"),
        },
        {
          title: t("fertigung.subServices.3.title"),
          description: "",
          image: [""],
          path: "/drahterodieren",
          paragraph: t("fertigung.subServices.3.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.3.nestedList.0.title"),
              list: [
                t("fertigung.subServices.3.nestedList.0.list.0"),
                t("fertigung.subServices.3.nestedList.0.list.1"),
                t("fertigung.subServices.3.nestedList.0.list.2"),
              ],
            },
          ],
          cta: t("fertigung.subServices.3.cta"),
        },
        {
          title: t("fertigung.subServices.4.title"),
          description: t("fertigung.subServices.4.description"),
          image: [""],
          path: "/laserschwiessen",
          paragraph: t("fertigung.subServices.4.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.4.nestedList.0.title"),
              list: [
                t("fertigung.subServices.4.nestedList.0.list.0"),
                t("fertigung.subServices.4.nestedList.0.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.4.cta"),
        },
        {
          title: t("fertigung.subServices.5.title"),
          description: t("fertigung.subServices.5.description"),
          image: [""],
          path: "/lasergravieren",
          paragraph: t("fertigung.subServices.5.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.5.nestedList.0.title"),
              list: [
                t("fertigung.subServices.5.nestedList.0.list.0"),
                t("fertigung.subServices.5.nestedList.0.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.5.cta"),
        },
        {
          title: t("fertigung.subServices.6.title"),
          description: "",
          image: [""],
          path: "/hochglanzpolieren",
          paragraph: t("fertigung.subServices.6.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.6.nestedList.0.title"),
              list: [
                t("fertigung.subServices.6.nestedList.0.list.0"),
                t("fertigung.subServices.6.nestedList.0.list.1"),
                t("fertigung.subServices.6.nestedList.0.list.2"),
                t("fertigung.subServices.6.nestedList.0.list.3"),
              ],
            },
            {
              title: t("fertigung.subServices.6.nestedList.1.title"),
              list: [
                t("fertigung.subServices.6.nestedList.1.list.0"),
                t("fertigung.subServices.6.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.6.cta"),
        },
        {
          title: t("fertigung.subServices.7.title"),
          description: "",
          image: [""],
          path: "/flachschleifen",
          paragraph: t("fertigung.subServices.7.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.7.nestedList.0.title"),
              list: [
                t("fertigung.subServices.7.nestedList.0.list.0"),
                t("fertigung.subServices.7.nestedList.0.list.1"),
              ],
            },
            {
              title: t("fertigung.subServices.7.nestedList.1.title"),
              list: [
                t("fertigung.subServices.7.nestedList.1.list.0"),
                t("fertigung.subServices.7.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.7.cta"),
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
          description: t("reparatur.subServices.0.description"),
          image: [""],
          path: "/beratung",
          paragraph: t("reparatur.subServices.0.paragraph"),
          nestedList: [
            {
              title: t("reparatur.subServices.0.nestedList.0.title"),
              list: [
                t("reparatur.subServices.0.nestedList.0.list.0"),
                t("reparatur.subServices.0.nestedList.0.list.1"),
              ],
            },
          ],
          cta: t("reparatur.subServices.0.cta"),
        },
        {
          title: t("reparatur.subServices.1.title"),
          description: t("reparatur.subServices.1.description"),
          image: [""],
          path: "/werk",
          paragraph: t("reparatur.subServices.1.paragraph"),
          nestedList: [
            {
              title: t("reparatur.subServices.1.nestedList.0.title"),
              list: [
                t("reparatur.subServices.1.nestedList.0.list.0"),
                t("reparatur.subServices.1.nestedList.0.list.1"),
                t("reparatur.subServices.1.nestedList.0.list.2"),
              ],
            },
          ],
          cta: t("reparatur.subServices.1.cta"),
        },
        {
          title: t("reparatur.subServices.2.title"),
          description: "",
          image: [""],
          path: "/abmus",
          paragraph: t("reparatur.subServices.2.paragraph"),
          nestedList: [
            {
              title: t("reparatur.subServices.2.nestedList.0.title"),
              list: [
                t("reparatur.subServices.2.nestedList.0.list.0"),
                t("reparatur.subServices.2.nestedList.0.list.1"),
                t("reparatur.subServices.2.nestedList.0.list.2"),
              ],
            },
          ],
          cta: t("reparatur.subServices.2.cta"),
        },
      ],
    },
  ];
};

export default useServicesData;
