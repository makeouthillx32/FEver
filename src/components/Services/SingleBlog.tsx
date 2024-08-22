import { Services } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ service }: { service: Services }) => {
  const { title, image, paragraph, tags, subServices } = service;
  console.log("🚀  service:", service);

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      {/* Main Content */}
      <div className="relative">
        {/* Image */}
        <div className="relative block aspect-[37/22] w-full">
          <span className="absolute right-2 top-2 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill className="object-cover" />
        </div>

        {/* Text Content */}
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="mb-4 block text-xl font-bold text-black dark:text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="space-y-4 text-center flex flex-col">
          {subServices.map((subService) => (
            <Link
              key={subService.title}
              href={subService.path}
              className="inline-block rounded-full bg-primary px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
            >
              {subService.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
