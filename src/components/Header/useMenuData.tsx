import { useScopedI18n } from "@/locales/client";
import { Menu } from "@/types/menu";

const useMenuData = (): Menu[] => {
  const t = useScopedI18n("menu");

  return [
    {
      title: t("services.title"),
      newTab: false,
      submenu: [
        {
          title: t("services.submenu.about"),
          path: "/about",
          newTab: false,
        },
        {
          title: t("services.submenu.contact"),
          path: "/contact",
          newTab: false,
        },
        {
          title: t("services.submenu.blogGrid"),
          path: "/blog",
          newTab: false,
        },
        {
          title: t("services.submenu.blogSidebar"),
          path: "/blog-sidebar",
          newTab: false,
        },
        {
          title: t("services.submenu.blogDetails"),
          path: "/blog-details",
          newTab: false,
        },

        {
          title: t("services.submenu.error"),
          path: "/error",
          newTab: false,
        },
      ],
    },
    {
      title: t("about"),
      path: "/about",
      newTab: false,
    },
    {
      title: t("blog"),
      path: "/blog",
      newTab: false,
    },
    {
      title: t("support"),
      path: "/contact",
      newTab: false,
    },
  ];
};

export default useMenuData;
