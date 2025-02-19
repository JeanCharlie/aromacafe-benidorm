import Menu from "@/components/pages/Menu";
import { metadata } from "@/metadata/menu";


export default function MenuPage() {
  return (
    <>
      <head>
        <link 
          rel="preload" 
          as="image" 
          href="/featured/cafe-mocha-oreo.avif"
          type="image/avif"
        />
        <link 
          rel="preconnect" 
          href="/api" 
        />
      </head>
      <Menu />
    </>
  );
}