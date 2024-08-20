"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { ReactElement } from "react";
import { Providers } from "./providers";

import { I18nProviderClient } from "@/locales/client"; // Adjust the path to your client-side I18nProvider
import { useCurrentLocale } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactElement }) {
  const locale = useCurrentLocale();

  return (
    <html lang={locale} suppressHydrationWarning={false}>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <I18nProviderClient locale={locale}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </I18nProviderClient>
      </body>
    </html>
  );
}
