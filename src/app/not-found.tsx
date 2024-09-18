import { redirect } from "next/navigation";
import { getCurrentLocale } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

export default async function NotFound() {
  setStaticParamsLocale("de");
  const locale = await getCurrentLocale();

  redirect(`/${locale}/error`);
}
