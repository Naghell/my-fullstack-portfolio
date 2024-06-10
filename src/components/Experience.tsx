"use client";
import { useState } from "react";
import { experiences } from "@/config/variables";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const ExpandedButton = ({ index }: any) => {
    return (
      <Image
        src="/elements/slide.svg"
        height={20}
        width={20}
        alt="Ver más"
        onClick={() => handleToggleExpand(index)}
        className={`cursor-pointer transition-transform duration-300 ${
          expandedIndex === index ? "rotate-180" : "rotate-0"
        }`}
      />
    );
  };

  return (
    <section
      id="experience"
      className="h-full w-full flex justify-center items-center p-8 lg:p-0 bg-gray-900"
    >
      <div className="md:max-w-[360px] lg:max-w-[1080px] w-full flex flex-col justify-center items-center gap-16">
        <h1 className="text-white font-bold text-4xl">Experiencia</h1>
        <div className="w-full h-full flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-violet-700 p-6 rounded-lg shadow-lg w-full"
            >
              <header className="flex gap-4 flex-col-reverse md:flex-row w-full md:justify-between">
                <div>
                  <h2 className="text-white text-2xl font-bold">
                    {experience.company}
                  </h2>
                  <h3 className="text-violet-100 text-xl">{experience.role}</h3>
                  <p className="text-violet-100 italic">
                    {experience.duration}
                  </p>
                </div>
                <Link
                  href={experience.url}
                  className="self-center md:self-start"
                  target="_blank"
                >
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    height={50}
                    width={50}
                    className="rounded-full size-10 bg-violet-100"
                  />
                </Link>
              </header>
              <ul className="list-disc list-inside mt-4 text-violet-100">
                {experience.description.slice(0, 3).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
                <AnimatePresence>
                  {expandedIndex === index &&
                    experience.description.slice(3).map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>
              {experience.description.length > 3 && (
                <button className="mt-4 text-white underline w-full justify-center flex">
                  <ExpandedButton index={index} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
