import Link from "next/link";
import { Search, TreePine, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose a Project",
    description:
      "Browse verified restoration sites across Morocco. Each project shows its location, native species, and real-time progress so you know exactly where your trees will grow.",
  },
  {
    number: "02",
    icon: TreePine,
    title: "Fund Your Trees",
    description:
      "Select how many trees you want to plant and complete your donation securely. Every tree is GPS-tagged and assigned directly to your donor profile.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Track Your Impact",
    description:
      "Watch your forest grow through your personal dashboard. Get annual reports, CO₂ capture data, and a downloadable certificate for every tree you plant.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-forest/50 uppercase tracking-widest mb-3">
            Simple and transparent
          </p>
          <h2 className="font-serif text-4xl font-bold text-forest leading-tight">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-forest/10 -z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center gap-5 z-10"
              >
                {/* Number + icon circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-forest flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-amber" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber text-forest text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="font-serif text-xl font-bold text-forest">
                  {step.title}
                </h3>
                <p className="text-sm text-forest/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-forest rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-3xl font-bold text-white mb-2">
              Ready to make a difference?
            </h3>
            <p className="text-white/60 text-sm">
              Every tree counts. Start planting today.
            </p>
          </div>
          <Link
            href="/plant-trees"
            className="flex-shrink-0 bg-amber text-forest font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-200 text-base"
          >
            Plant Your First Tree
          </Link>
        </div>
      </div>
    </section>
  );
}
