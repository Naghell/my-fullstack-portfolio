"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { links } from "@/config/variables";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollY = 0;
  let hideTimer: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
      if (hideTimer) clearTimeout(hideTimer);
    } else {
      if (hideTimer) clearTimeout(hideTimer);
      setIsVisible(false);
      hideTimer = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    }

    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getTarget = (target: boolean): "_blank" | "_self" => {
    return target ? "_blank" : "_self";
  };

  const menuVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <nav className={`z-50 w-full flex justify-center items-center py-6 fixed`}>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        className="z-50 w-full h-full text-white gap-8 hidden sm:flex justify-center items-center"
      >
        {links.map((link, index) => (
          <Link href={link.ref} target={getTarget(link.target)} key={index}>
            <motion.h1
              className="transition-all pb-2 cursor-pointer relative"
              whileHover={{
                borderBottom: "1px solid white",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              initial={{ borderBottom: "1px solid transparent" }}
            >
              {link.name}
            </motion.h1>
          </Link>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        className="z-40 -top-8 w-full h-full absolute blur-2xl bg-violet-500 opacity-50"
      ></motion.div>

      <motion.button
        className="lg:hidden z-50 right-0 absolute mr-4 "
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          height={30}
          width={30}
          src="/elements/menu.svg"
          alt="Abrir menú"
        />
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="absolute pt-8 top-0 right-0 bottom-0 w-[75%] h-screen bg-black"
          >
            <ul className="flex flex-col p-4">
              {links.map((link, index) => (
                <li key={index} className="my-2">
                  <Link href={link.ref} target={getTarget(link.target)}>
                    <h1
                      className="text-white text-right text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
