import DonationForm from "@/components/plant-trees/DonationForm-old";
import { Leaf, ShieldCheck, TreePine } from "lucide-react";

const trustSignals = [
  {
    icon: ShieldCheck,
    text: "Secure payment via Stripe",
  },
  {
    icon: TreePine,
    text: "Every tree GPS-verified",
  },
  {
    icon: Leaf,
    text: "100% goes to planting",
  },
];

export default function PlantTreesPage() {
  return (
    <div className="bg-sage min-h-screen">
      {/* Page header */}
      <div className="bg-forest py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber text-sm font-medium uppercase tracking-widest mb-3">
            Make a difference today
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Plant a Tree
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Choose your species, pick a restoration site, and watch your forest
            grow — all tracked in your personal dashboard.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — form */}
          <DonationForm />

          {/* Right — trust + info */}
          <div className="flex flex-col gap-8">
            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.text}
                    className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-forest/10"
                  >
                    <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-forest" />
                    </div>
                    <span className="text-sm font-medium text-forest">
                      {signal.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* What happens next */}
            <div className="bg-white rounded-2xl border border-forest/10 p-6">
              <h3 className="font-serif text-xl font-bold text-forest mb-5">
                What happens after you donate?
              </h3>
              <ol className="flex flex-col gap-4">
                {[
                  "Your payment is processed securely via Stripe.",
                  "A planting team is dispatched to your chosen project site.",
                  "Your trees are planted and GPS-tagged within 30 days.",
                  "You receive a digital certificate and dashboard access.",
                  "Annual updates on your trees' growth and CO₂ capture.",
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-forest/70"
                  >
                    <span className="w-5 h-5 rounded-full bg-forest text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
