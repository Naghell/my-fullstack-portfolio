import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center overflow-x-hidden">
      <NavBar />
      <Header/>
    </main>
  );
}
