import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2e6]">
      <Header />
      {/* The Hero component handles its own top padding */}
      <Hero />
      
      {/* You can add your next section (Bento Grid) here later */}
    </main>
  );
}