import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renzo Luis Battaglino | Desarrollador Full Stack",
  description: "Experto en programación de webs y servidores.",
  keywords: 'NextJS, React, JavaScript, TypeScript, programador web, full stack, freelance, frontend, backend, Argentina',
  authors: {name: 'Renzo Luis Battaglino'}
};

const clairtyCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "l0s9ag4csm");`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
      <Script id="ms-clarity" strategy="afterInteractive">
        {clairtyCode}
      </Script>
    </html>
  );
}
