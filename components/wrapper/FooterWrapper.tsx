"use client"; 

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/ui/Footer"), {
  ssr: false
});

export default function FooterWrapper() {
  return <Footer />;
}
