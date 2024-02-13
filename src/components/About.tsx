"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
const About = () => {
  const floatVariant: Variants = {
    animate: {
      y: [-20, 20],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      },
    },
  };
  const floatVariantMedium: Variants = {
    animate: {
      y: [-15, 15],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 6,
        ease: "easeInOut",
      },
    },
  };
  const floatVariantSmall: Variants = {
    animate: {
      y: ["-10%", "10%"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section id="about" className="h-full w-full flex justify-center py-16">
      <div className="max-w-[1080px] w-full flex justify-center items-center gap-16">
        <div className="flex relative justify-center items-center w-1/4 h-full">
          <motion.div
            className="z-50 flex overflow-hidden justify-center items-center absolute -right-4 top-0 h-[120px] w-[120px] rounded-full bg-violet-300"
            variants={floatVariantSmall}
            animate="animate"
          >
            <h2 className="text-6xl text-violet-900 animate-pulse rotate-45">?</h2>
          </motion.div>
          <motion.div
            className="z-40 flex overflow-hidden justify-center items-center absolute h-[160px] w-[160px] right-0 rounded-full bg-violet-500"
            variants={floatVariantMedium}
            animate="animate"
          >
          </motion.div>
          <motion.div
            className="z-20 flex overflow-hidden justify-center items-center absolute left-0 h-[200px] w-[200px] rounded-full bg-violet-900"
            variants={floatVariant}
            animate="animate"
          >
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 w-3/4">
          <h1 className="text-white font-bold text-4xl">Sobre mi</h1>
          <p className="text-pink hover:text-2xl transition-all text-lg">
            Desarrollador especializado en NextJS, con un enfoque en la creación
            de experiencias web dinámicas y eficientes. Como freelancer,
            disfruto transformando ideas en soluciones digitales innovadoras,
            equilibrando un diseño atractivo con una funcionalidad sólida.
            Apasionado por los desafíos tecnológicos y siempre en busca de
            aprender y crecer en el campo del desarrollo. Y sí, utilicé
            inteligencia artificial para generar esto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
