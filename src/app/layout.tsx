"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Figtree } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { ReactElement } from "react";
import { Providers } from "./providers";
import { I18nProviderClient } from "@/locales/client";
import { useCurrentLocale } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactElement }) {
  const locale = useCurrentLocale();

  return (
    <html lang={locale} suppressHydrationWarning={false}>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${figtree.className}`}>
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
