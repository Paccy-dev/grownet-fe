import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FundAllocation from "@/components/transparency/FundAllocation";
import ProjectProgress from "@/components/transparency/ProjectProgress";
import { DollarSign, TreePine, Globe, Users } from "lucide-react";

// The 4 top stat cards
const stats = [
  { icon: DollarSign, label: "Funds Raised", value: "$320k" },
  { icon: TreePine, label: "Trees Planted", value: "30,050" },
  { icon: Globe, label: "Regions", value: "3" },
  { icon: Users, label: "Donors", value: "1,920" },
];

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-sage">
      {/* ── Page Header ── */}
      <section className="text-center pt-16 pb-10 px-4">
        <h1 className="font-serif text-4xl font-bold text-forest mb-3">
          Transparency Report
        </h1>
        <p className="text-forest/50 text-sm max-w-md mx-auto">
          Full visibility into how funds are used and trees are planted. Updated
          in real-time.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-6">
        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 shadow-sm text-center"
            >
              {/* Icon in a small circle */}
              <div className="flex justify-center mb-3">
                <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center">
                  <stat.icon size={16} className="text-forest" />
                </div>
              </div>
              <p className="font-serif font-bold text-2xl text-forest">
                {stat.value}
              </p>
              <p className="text-forest/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Fund Allocation ── */}
        <FundAllocation />

        {/* ── Project Progress ── */}
        <ProjectProgress />
      </div>
    </main>
  );
}
