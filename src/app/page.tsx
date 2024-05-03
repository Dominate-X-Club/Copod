import Navbar from "@/components/ui/Navbar";
import { Button, buttonVariants } from "../components/ui/button";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
