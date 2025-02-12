"use client";
import { memo, useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { clipPath } from "framer-motion/client";

const Hero = memo(() => {
  const prefersReducedMotion = useReducedMotion();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = useMemo(
    () => ({
      text: {
        initial: prefersReducedMotion ? {} : { opacity: 0, y: 50 },
        animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      },
      image: {
        initial: prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 },
        animate: prefersReducedMotion ? {} : { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
      },
    }),
    [prefersReducedMotion]
  );

  const styles = useMemo(
    () => ({
      clipPath: "ellipse(100% 85% at 35% 75%)",
      maskImage:
        "radial-gradient(circle, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0) 100%)",
      WebkitMaskImage:
        "radial-gradient(circle, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0) 100%)",
    }),
    []
  );

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] min-h-screen lg:h-[80vh] flex items-center justify-center text-center lg:text-left relative overflow-hidden pt-16"
      style={{
        clipPath: styles.clipPath,
      }}
    >
      {inView && (
        <main className="container mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center">
          <motion.div className="w-full lg:w-1/2 z-10" {...animations.text}>
            <h1 className="text-5xl md:text-6xl font-bold text-[#3C2A1F] mb-6">
              El aroma que enamora ☕
            </h1>

            <p className="text-[#3C2A1F] mb-6 text-2xl satisfy-regular">
              Descubre una experiencia única de café, donde cada taza cuenta una
              historia de pasión y tradición.
            </p>

            <Link
              href="/menu"
              aria-label="Ir a la página de menú"
              className="inline-block bg-[#3C2A1F] text-white px-6 py-3 
              text-2xl rounded-lg hover:bg-[#ffe3ea] hover:text-black transition"
            >
              Ver Menú
            </Link>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
            {...animations.image}
          >
            <Image
              src="/hero/caferound.avif"
              alt="Coffee Experience"
              width={450}
              height={450}
              quality={75}
              priority={true}
              className="max-w-[80%] lg:max-w-[500px] object-cover opacity-90"
              style={{
                maskImage: styles.maskImage,
                WebkitMaskImage: styles.WebkitMaskImage,
              }}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 450px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwMS4wLy4vMzY7QD49O0A+OzNLRj9HTVFQU1hUWF9kaGRoYU1RUf/2wBDAR"
            />
          </motion.div>
        </main>
      )}
    </div>
  );
});

Hero.displayName = "Hero";
export default Hero;
