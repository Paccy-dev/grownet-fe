import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80')`,
        }}
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-forest/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-8">
          <Leaf className="w-4 h-4 text-amber" />
          <span>Over 47,000 trees planted across Morocco</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight max-w-3xl mb-6">
          Restore Nature, <span className="text-amber">One Tree</span> at a Time
        </h1>

        {/* Subtext */}
        <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Join a growing community of donors planting verified, GPS-tracked
          trees across Morocco&apos;s most vulnerable ecosystems.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/plant-trees"
            className="inline-flex items-center gap-2 bg-amber text-forest font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all duration-200 text-base"
          >
            Start Planting
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/20 transition-all duration-200 text-base"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
