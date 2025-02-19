import Gallery from "@/components/pages/Gallery";
import { galleryImages } from "@/data/gallery";
import Head from "next/head";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <link 
          rel="preload" 
          as="image" 
          href={galleryImages[0]} 
        />
        <link 
          rel="preload" 
          as="image" 
          href={galleryImages[1]} 
        />
      </Head>
      <Gallery />
    </>
  );
}