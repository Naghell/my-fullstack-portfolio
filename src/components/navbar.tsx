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
            // Scroll hacia arriba
            setIsVisible(true);
            if (hideTimer) clearTimeout(hideTimer);
        } else {
            // Scroll hacia abajo
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
        ref: '/'
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
                    <Link href={link.ref} key={index}>
                        <h1 className="transition hover:translate-y-1 cursor-pointer">{link.name}</h1>
                    </Link>
                ))}
            </motion.div>
        </nav>
    )
}