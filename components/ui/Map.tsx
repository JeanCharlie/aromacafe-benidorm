"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(
  () => import('./MapComponent'),
  { 
    loading: () => (
      <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 animate-pulse" />
    ),
    ssr: false
  }
);

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 animate-pulse" />
    );
  }

  return <MapComponent />;
}
