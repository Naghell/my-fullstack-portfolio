import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
    <section className="min-h-screen w-full flex justify-center items-center">
        <div className="max-w-[1280px] w-full flex justify-between">
            <div className="flex flex-col gap-4">
                <h1 className="text-white font-bold text-6xl">Renzo Luis <br/>Battaglino</h1>
                <h2 className="font-medium text-xl text-pink">Desarrollador web Full Stack</h2>
                <div className="text-white w-full flex justify-between gap-2">
                    <Link className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2" target="_blank" href='https://github.com/naghell'>
                        <Image width={20} height={20} src='/icons/github.svg' alt="Github"/>
                        <h2>GitHub</h2>
                    </Link>
                    <Link className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2" target="_blank" href='https://www.linkedin.com/in/renzobxt/'>
                        <Image width={22} height={22} src='/icons/linkedin.svg' alt="LinkedIn"/>
                        <h2>LinkedIn</h2>
                    </Link>
                    <Link className="flex gap-2 items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-700 transition px-4 py-2" target="_blank" href=''>
                        <Image width={18} height={18} src='/icons/cv.svg' alt="CV"/>
                        <h2>CV</h2>
                    </Link>
                </div>
            </div>
            <div>
                <h2 className="text-white">A</h2>
            </div>
        </div>
    </section>
    );
}

export default Header;