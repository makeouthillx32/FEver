"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import useMenuData from "@/data/useMenuData";
import useServiceData from "@/data/useServiceData";
import { cn } from "@/utils/cn";

const Header = () => {
  const menuData = useMenuData();
  const serviceData = useServiceData();

  const locale = useCurrentLocale();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);

  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const changeLocale = useChangeLocale();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center  ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              onClick={() => setNavbarOpen(false)}
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              } `}
            >
              <Image src="/logo.svg" alt="logo" width={150} height={100} />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={cn(
                  `navbar absolute right-0  w-full rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300`,
                  `dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100`,
                  `${
                    navbarOpen
                      ? "visibility top-full  opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`,
                )}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          onClick={() => setNavbarOpen(false)}
                          href={menuItem.path}
                          className={`flex py-2 text-xl lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-xl text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={cn(
                              `submenu relative left-4 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark`,
                              `lg:invisible lg:absolute lg:top-[110%] lg:rounded-lg lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`,
                              `  lg:mr-6 lg:p-4`,
                              `${openIndex === index ? "block" : "hidden"}`,
                            )}
                          >
                            {serviceData.map((serviceItem) => (
                              <div
                                key={serviceItem.title}
                                className="lg:text-nowrap lg:px-4 lg:py-2 "
                              >
                                <p
                                  className={cn(
                                    "rounded py-2.5 text-lg text-dark dark:text-white/70 ",
                                  )}
                                >
                                  {serviceItem.title}
                                </p>

                                {serviceItem.subServices.map(
                                  (subServiceItem) => (
                                    <Link
                                      onClick={() => setNavbarOpen(false)}
                                      key={subServiceItem.title}
                                      href={`/services${subServiceItem.path}`}
                                      className="block rounded px-2 py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                    >
                                      {subServiceItem.title}
                                    </Link>
                                  ),
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              {/* Language Selector */}
              <div className="flex items-center space-x-2 rounded border border-gray-300 bg-gray-100 p-1 dark:border-gray-600 dark:bg-gray-800">
                <button
                  className={cn(
                    "rounded-sm px-4 py-2 text-sm font-medium",
                    locale === "en"
                      ? "bg-primary text-white"
                      : "text-dark hover:bg-opacity-90 dark:text-white",
                  )}
                  onClick={() => {
                    changeLocale("en");
                    setNavbarOpen(false);
                  }}
                >
                  EN
                </button>
                <button
                  className={cn(
                    "rounded-sm px-4 py-2 text-sm font-medium",
                    locale === "de"
                      ? "bg-primary text-white"
                      : "text-dark hover:bg-opacity-90 dark:text-white",
                  )}
                  onClick={() => {
                    changeLocale("de");
                    setNavbarOpen(false);
                  }}
                >
                  DE
                </button>
              </div>

              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
