import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = async () => {
  const t = await getScopedI18n("about");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("paragraph")} />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
