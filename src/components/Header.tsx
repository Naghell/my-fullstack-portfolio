"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  yearsOfExperience,
  technologies,
  name,
  title,
  githubUrl,
  linkedinUrl,
  cvUrl,
  floatVariant,
  floatVariantMedium,
  floatVariantSmall,
} from "@/config/variables";

const Header = () => {
  const years: string = yearsOfExperience > 1 ? "años" : "año";

  return (
    <section
      id="home"
      className="p-8 2xl:p-0 min-h-screen w-full flex justify-center items-center"
    >
      <div className="max-w-[1080px] w-full flex lg:flex-row flex-col-reverse justify-between items-center lg:items-start">
        <Image
          className="absolute bottom-0 mb-8 flex animate-bounce lg:hidden"
          src="/elements/slide.svg"
          width={20}
          height={20}
          alt="Deslizar"
        />
        <div className="flex flex-col gap-4 w-full md:max-w-[360px]">
          <h1 className="text-white font-bold text-5xl sm:text-6xl">{name}</h1>
          <h2 className="font-medium text-xl text-pink">{title}</h2>
          <div className="text-white w-full flex justify-between gap-2 flex-wrap flex-grow-0">
            <Link
              className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2"
              target="_blank"
              href={githubUrl}
            >
              <Image
                width={20}
                height={20}
                src="/icons/github.svg"
                alt="Logo de Github"
              />
              <h2>GitHub</h2>
            </Link>
            <Link
              className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2"
              target="_blank"
              href={linkedinUrl}
            >
              <Image
                width={22}
                height={22}
                src="/icons/linkedin.svg"
                alt="Logo de LinkedIn"
              />
              <h2>LinkedIn</h2>
            </Link>
            <Link
              className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2"
              target="_blank"
              href={cvUrl}
            >
              <Image
                width={18}
                height={18}
                src="/icons/cv.svg"
                alt="Ícono de un CV"
              />
              <h2>CV</h2>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex relative justify-center items-center w-full h-full">
          <motion.div
            className="z-40 transition-all flex overflow-hidden justify-center absolute right-40 -top-8 hover:-top-32 h-[200px] w-[200px] rounded-full bg-violet-300"
            variants={floatVariantSmall}
            animate="animate"
          >
            <Image
              className="rounded-full"
              width={1280}
              height={1280}
              src="/profile/profilepicture.png"
              alt="Renzo Luis Battaglino"
            />
          </motion.div>
          <motion.div
            className="z-30 flex flex-col justify-center items-center absolute top-10 hover:right-64 transition-all right-56 h-[280px] w-[280px] rounded-full bg-violet-500"
            variants={floatVariantMedium}
            animate="animate"
          >
            <h2 className="text-white font-bold text-6xl">
              +{yearsOfExperience}
            </h2>
            <h3 className="text-white font-medium text-2xl">
              {years} de experiencia
            </h3>
          </motion.div>
          <motion.div
            className="z-20 flex flex-col justify-center items-center absolute transition-all hover:-right-24 -right-8 -top-14 h-[400px] w-[400px] rounded-full bg-violet-700"
            variants={floatVariant}
            animate="animate"
          >
            <h2 className="text-white font-bold text-6xl">+{technologies}</h2>
            <h3 className="text-white font-medium text-2xl">tecnologías</h3>
          </motion.div>
        </div>
        <div className="lg:hidden flex justify-center w-full h-full">
          <motion.div
            className="z-40 transition-all flex overflow-hidden justify-center h-[200px] w-[200px] mb-10 rounded-full bg-violet-300"
            variants={floatVariantSmall}
            animate="animate"
          >
            <Image
              className="rounded-full"
              width={1280}
              height={1280}
              src="/profile/profilepicture.png"
              alt="Renzo Luis Battaglino"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
