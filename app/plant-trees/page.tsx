import Navbar from "@/components/layout/Navbar";
import DonationForm from "@/components/plant-trees/DonationForm";
import LiveTreeMap from "@/components/plant-trees/LiveTreeMap";
import Footer from "@/components/layout/Footer";
import { Leaf } from "lucide-react";

export default function PlantTreesPage() {
  return (
    <main className="min-h-screen bg-sage">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative bg-forest text-white text-center py-20 px-4 overflow-hidden">
        {/* Subtle tree pattern in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[120px] flex flex-wrap gap-8 justify-center items-center overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>🌳</span>
          ))}
        </div>

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs px-4 py-1.5 rounded-full mb-6">
          <Leaf size={12} />
          Every tree makes a difference
        </div>

        {/* Headline — italic "Greener" matches the design */}
        <h1 className="relative font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
          Help Us Build a{" "}
          <em className="not-italic font-serif italic">Greener</em>
          <br />
          Morocco
        </h1>

        <p className="relative text-white/60 text-sm max-w-md mx-auto">
          Plant native trees, restore ecosystems, and empower local communities
          across Morocco.
        </p>
      </section>

      {/* ── Donation Form ── */}
      {/* -mt-8 pulls the white card up slightly over the green hero */}
      <section className="relative max-w-2xl mx-auto px-4 -mt-8 pb-4 z-10">
        <DonationForm />
      </section>

      {/* ── Live Tree Map ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <LiveTreeMap />
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
