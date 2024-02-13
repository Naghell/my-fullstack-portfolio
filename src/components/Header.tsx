'use client'
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Header = () => {
    const floatVariant: Variants = {
        animate: {
            y: [-30, 30],
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                ease: "easeInOut"
            }
        }
    };
    const floatVariantMedium: Variants = {
        animate: {
            y: [-20, 20],
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 6,
                ease: "easeInOut",
            }
        }
    };
    const floatVariantSmall: Variants = {
        animate: {
            y: ['-10%', '10%'],
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 8,
                ease: "easeInOut"
            }
        }
    };

    return(
    <section id="home" className="min-h-screen w-full flex justify-center items-center">
        <div className="max-w-[1080px] w-full flex justify-between bg-">
            <div className="flex flex-col gap-4 w-full max-w-[360px]">
                <h1 className="text-white font-bold text-6xl">Renzo Luis <br/>Battaglino</h1>
                <h2 className="font-medium text-xl text-pink">Desarrollador web Full Stack</h2>
                <div className="text-white w-full flex justify-between gap-2 flex-wrap flex-grow-0">
                    <Link className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2" target="_blank" href='https://github.com/naghell'>
                        <Image width={20} height={20} src='/icons/github.svg' alt="Logo de Github"/>
                        <h2>GitHub</h2>
                    </Link>
                    <Link className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2" target="_blank" href='https://www.linkedin.com/in/renzobxt/'>
                        <Image width={22} height={22} src='/icons/linkedin.svg' alt="Logo de LinkedIn"/>
                        <h2>LinkedIn</h2>
                    </Link>
                    <Link className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2" target="_blank" href=''>
                        <Image width={18} height={18} src='/icons/cv.svg' alt="Ícono de un CV"/>
                        <h2>CV</h2>
                    </Link>
                </div>
            </div>
            <div className="flex relative justify-center items-center w-full h-full">
                <motion.div
                    className="z-40 flex overflow-hidden justify-center absolute right-40 -top-8 h-[200px] w-[200px] rounded-full bg-violet-300"
                    variants={floatVariantSmall}
                    animate="animate"
                >
                    <Image className="rounded-full" width={1280} height={1280} src='/profile/yo.png' alt="Renzo Luis Battaglino"/>
                </motion.div>
                <motion.div
                    className="z-30 flex flex-col justify-center items-center absolute top-10 right-56 h-[280px] w-[280px] rounded-full bg-violet-500"
                    variants={floatVariantMedium}
                    animate="animate"
                >
                    <h2 className="text-white font-bold text-6xl">+1</h2>
                    <h3 className="text-white font-medium text-2xl">año de experiencia</h3>
                </motion.div>
                <motion.div
                    className="z-20 flex flex-col justify-center items-center absolute -right-8 -top-14 h-[400px] w-[400px] rounded-full bg-violet-700"
                    variants={floatVariant}
                    animate="animate"
                >
                    <h2 className="text-white font-bold text-6xl">+15</h2>
                    <h3 className="text-white font-medium text-2xl">tecnologías</h3>
                </motion.div>
            </div>
        </div>
    </section>
    );
}

export default Header;
