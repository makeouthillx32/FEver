"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Common/Gallery";
import RelatedPost from "@/components/Services/RelatedPost";
import SharePost from "@/components/Services/SharePost";
import TagButton from "@/components/Services/TagButton";
import useServicesData from "@/data/useServiceData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const { id } = useParams();
  const router = useRouter();
  const serviceData = useServicesData();

  const [relatedPosts, setRelatedPosts] = useState([
    {
      title: "",
      paragraph: "",
      path: "",
      image: [""],
    },
  ]);

  const subserviceList = serviceData.flatMap((service) => service.subServices);
  const subservice = subserviceList.find(
    (subservice) => subservice.path === `/${id}`,
  );

  useEffect(() => {
    const shuffledPosts = subserviceList
      .filter((service) => service.path !== `/${id}`)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setRelatedPosts(shuffledPosts);
  }, []);

  if (!subservice) {
    router.push("/error");
    return null;
  }

  const { title, image, paragraph } = subservice;

  return (
    <>
      <Breadcrumb pageName={title} description={paragraph} />

      <Gallery />

      <section className="overflow-hidden pb-[120px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
                amet. Ligula ullamcorper
                <strong className="text-primary dark:text-white">
                  {" "}
                  malesuada{" "}
                </strong>
                proin libero nunc consequat interdum varius. Quam pellentesque
                nec nam aliquam sem et tortor consequat. Pellentesque adipiscing
                commodo elit at imperdiet.
              </p>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Semper auctor neque vitae tempus quam pellentesque nec.
                <span className="text-primary underline dark:text-white">
                  {" "}
                  Amet dictum sit amet justo{" "}
                </span>
                donec enim diam. Varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Odio pellentesque diam volutpat commodo sed.
              </p>
              <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Digital marketplace for Ui/Ux designers.
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                consectetur adipiscing elit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis
                vulputate cupidatat.
              </p>
              <ul className="mb-10 list-inside list-disc text-body-color">
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Consectetur adipiscing elit in voluptate velit.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Mattis vulputate cupidatat.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Vulputate enim nulla aliquet porttitor odio pellentesque
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Ligula ullamcorper malesuada proin
                </li>
              </ul>

              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                consectetur adipiscing elit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis
                vulputate cupidatat.
              </p>
              <div className="items-center justify-between sm:flex">
                <div className="mb-5"></div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Related Posts
                </h3>
                <ul className="p-8">
                  {relatedPosts.map((service) => (
                    <li
                      key={service.title}
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                    >
                      <RelatedPost
                        title={service.title}
                        image="/images/blog/post-01.jpg"
                        slug={`/services/${service.path}`}
                        date={service.paragraph}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center sm:justify-end">
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
