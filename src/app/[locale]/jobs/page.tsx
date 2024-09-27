import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import AboutCard from "@/components/Common/JobCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Formenwerkstatt",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

export default function Jobs() {
  return (
    <>
      <Breadcrumb pageName={"Jobs"} description={"bei Formenwerkstatt"} />

      <section
        id="jobs"
        className="relative bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="title"
            paragraph="description"
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
}
