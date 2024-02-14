import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col scroll-smooth gap-48 items-center overflow-hidden">
      <NavBar />
      <Header/>
      <About/>
      <Footer/>
    </main>
  );
}
