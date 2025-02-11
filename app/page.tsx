"use client";

import Loading from "@/components/ui/Loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/ui/Hero"), {
  loading: () => <Loading />,
  ssr: false,
});

const AboutUs = dynamic(() => import("@/components/ui/AboutUs"), {
  loading: () => <Loading />,
  ssr: false,
});

const Featured = dynamic(() => import("@/components/ui/Featured"), {
  loading: () => <Loading />,
  ssr: false,
});

const Schedule = dynamic(() => import("@/components/ui/Schedule"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Schedule />
      </Suspense> 
    </div>
  );
}
