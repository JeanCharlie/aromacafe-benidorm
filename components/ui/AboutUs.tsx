"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const AboutUs = memo(() => {
  const prefersReducedMotion = useReducedMotion();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = useMemo(() => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
  }), [prefersReducedMotion]);

  return (
    <section 
      ref={ref}
      className="py-20 px-6 text-center text-[#3C2A1F]"
    >
      {inView && (
        <>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            {...animations}
          >
            Pasión por el Café ☕
          </motion.h2>

          <motion.div
            className="mt-4 text-2xl max-w-2xl mx-auto"
            {...animations}
            transition={{ ...animations.transition, delay: 0.2 }}
          >
           En <strong>Aroma Cafe</strong> vivimos el café con pasión. Seleccionamos cuidadosamente los mejores granos para ofrecerte una experiencia única en cada taza. Acompaña tu café con nuestros <strong>desayunos variados, repostería artesanal</strong> y opciones saludables, en un ambiente acogedor que invita a disfrutar cada momento. ☕✨
          </motion.div>

          <Link href="/gallery" aria-label="Ir a la página de galería">
            <motion.button
              aria-label="Ver galería"
              className="text-2xl mt-8 bg-[#3C2A1F] text-white px-6 py-3 rounded-lg hover:bg-[#FFD1DC] hover:text-black transition"
              {...animations}
              transition={{ ...animations.transition, delay: 0.4 }}
            >
              Ver galería
            </motion.button>
          </Link>
        </>
      )}
    </section>
  );
});

AboutUs.displayName = 'AboutUs';
export default AboutUs;