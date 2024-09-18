import { redirect } from "next/navigation";
import { getCurrentLocale } from "@/locales/server";

export default async function NotFound() {
  const locale = await getCurrentLocale();

  redirect(`/${locale}/error`);
}
