import AboutSectionOne from "@/components/About/AboutSectionOne";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formen Werkstatt",
  description: "Wir bringen Ihre Ideen in Form",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      {/* <Video /> */}
      <Brands />
      {/* <AboutSectionOne /> */}
      <Contact />
    </>
  );
}
