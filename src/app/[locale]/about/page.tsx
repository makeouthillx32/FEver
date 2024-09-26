import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import AboutCard from "@/components/About/AboutCard";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "About Page | Formen Werkstatt",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = async () => {
  const t = await getScopedI18n("about");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("paragraph")} />
      
      <Video />

      <section
        id="blog"
        className="relative bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >

        <div className="container">
          <SectionTitle
            title=""
            paragraph={t("description")}
            width="full"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </div>


        {/* <AboutSectionOne />
        <AboutSectionTwo /> */}
      </section>
    </>
  );
};

export default AboutPage;
