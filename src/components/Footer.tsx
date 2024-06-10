import { email, githubUrl, linkedinUrl } from "@/config/variables";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-violet-900 w-full p-8 flex flex-col items-center">
      <h1 className="text-white text-lg font-medium">
        Ningún derecho reservado, todos los permisos para reutilizar.
      </h1>
      <p className="text-white mt-2">
        Código disponible bajo licencia MIT. Siéntete libre de usarlo y
        modificarlo.
      </p>
      <div className="flex space-x-4 mt-4">
        <Link
          href={githubUrl}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={20}
            height={20}
            src="/icons/github.svg"
            alt="Logo de Github"
          />
        </Link>
        <Link
          href={linkedinUrl}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={22}
            height={22}
            src="/icons/linkedin.svg"
            alt="Logo de LinkedIn"
          />
        </Link>
        <Link href={`mailto:${email}`} aria-label="Email">
          <Image
            width={22}
            height={22}
            src="/icons/email.svg"
            alt="Enviar email"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
