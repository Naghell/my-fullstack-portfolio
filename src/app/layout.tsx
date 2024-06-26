import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renzo Luis Battaglino | Desarrollador Full Stack",
  description:
    "Desarrollador web full stack especializado en NextJS y TypeScript. Servicios freelance para frontend y backend.",
  keywords:
    "NextJS, React, JavaScript, TypeScript, programador web, full stack, freelance, frontend, backend, Argentina",
  authors: { name: "Renzo Luis Battaglino" },
};

const clairtyCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "l0s9ag4csm");`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WYKMXRC9LK"
        ></Script>
        <Script id="gtag">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-WYKMXRC9LK');`}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {clairtyCode}
        </Script>
      </head>
      <body className={`${inter.className} scroll-smooth`}>{children}</body>
    </html>
  );
}
