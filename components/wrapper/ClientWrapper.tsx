"use client";

import { pageBackgrounds } from "@/utils/utils";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const backgroundClass = pageBackgrounds[pathname] || "bg-white";

  return <div className={backgroundClass}>{children}</div>;
}
