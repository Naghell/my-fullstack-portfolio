'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
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
            }, 1000);
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

    const links = [{
        name: 'Inicio',
        ref: '#home'
    },
    {
        name: 'Sobre mi',
        ref: '#about'
    },
    {
        name: 'Proyectos',
        ref: '#projects'
    },
    {
        name: 'Experiencia',
        ref: '#experience'
    },
    {
        name: 'Contacto',
        ref: '#contact'
    }];

    return (
        <nav className="w-full flex justify-center items-center py-6 fixed">
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                className="w-full h-full text-white gap-8 flex justify-center items-center"
            >
                {links.map((link, index) => (
                    <Link className="flex justify-center relative" href={link.ref} key={index} scroll={true}>
                        <motion.h1 
                        className="transition-all pb-2 cursor-pointer relative"
                        whileHover={{ 
                            borderBottom: "1px solid white",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        initial={{ borderBottom: "1px solid transparent" }}
                    >
                        {link.name}
                    </motion.h1>
                    </Link>
                ))}
            </motion.div>
        </nav>
    )
}