import Link from "next/link";
import { getI18n } from "@/locales/server";

const Hero = async () => {
  const t = await getI18n();

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-24 pt-[140px] dark:bg-gray-dark md:pb-[150px] md:pt-[180px] xl:pb-[200px] xl:pt-[220px] 2xl:pb-[250px] 2xl:pt-[250px]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="container relative ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Formen Werkstatt
                </h1>
                <p className="mb-12  text-body-color dark:text-body-color-dark sm:text-lg md:text-3xl">
                  {t("slogan")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
