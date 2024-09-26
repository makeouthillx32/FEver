import useServicesData from "@/data/useServiceData";
import { Metadata } from "next";
import { useParams } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  return {
    title: id || "Default Title",
    description: id || "Default Description",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
