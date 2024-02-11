import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full flex justify-center items-center h-14 bg-violet">
            <div className="max-w-[1280px] w-full h-full text-white justify-between flex items-center">
                <Link href="/">Inicio</Link>
                <Link href="#about">Sobre mi</Link>
                <Link href="#projects">Proyectos</Link>
                <Link href="#experience">Experiencia</Link>
                <Link href="#contact">Contacto</Link>
            </div>
        </nav>
    )
}