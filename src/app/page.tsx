import About from "@/components/About";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col scroll-smooth gap-8 items-center overflow-hidden">
      <NavBar />
      <Header/>
      <About/>
    </main>
  );
}
