"use client";

import { useRequireAuth } from "@/hooks/useRequireAuth";
import { Heart, TreePine, Leaf, Globe, Loader2 } from "lucide-react";

// Hardcoded activity — will come from Strapi later
const recentActivity = [
  {
    id: 1,
    description: "Sponsored 8 Atlas Cedar trees",
    project: "Atlas Cedar Reforestation",
    date: "Mar 3, 2025",
    amount: 80,
  },
  {
    id: 2,
    description: "Sponsored 6 Argan trees",
    project: "Argan Forest Revival",
    date: "Feb 14, 2025",
    amount: 48,
  },
  {
    id: 3,
    description: "Sponsored 8 Olive trees",
    project: "Argan Forest Revival",
    date: "Jan 22, 2025",
    amount: 48,
  },
];

export default function MyImpactPage() {
  // This protects the page — redirects to /login if not authenticated
  const { user, isLoading } = useRequireAuth();

  // Show spinner while checking auth
  if (isLoading) {
    return (
      <main className="min-h-screen bg-sage flex items-center justify-center">
        <Loader2 size={32} className="text-forest animate-spin" />
      </main>
    );
  }

  // At this point user is guaranteed to be logged in
  const stats = [
    { icon: Heart, label: "Total Donated", value: "$185" },
    { icon: TreePine, label: "Trees Sponsored", value: "22" },
    { icon: Leaf, label: "CO₂ Offset Trees", value: "484 kg" },
    { icon: Globe, label: "Projects Supported", value: "2" },
  ];

  return (
    <main className="max-w-4xl mx-auto min-h-screen bg-sage">
      {/* ── Page Header ── */}
      <section className="pt-16 pb-10 px-4">
        <h1 className="font-serif text-3xl font-bold text-forest mb-2">
          My Impact Dashboard
        </h1>
        <p className="text-forest/50 text-sm">
          Welcome back, {user?.username} 🌱 Track your contributions and
          environmental impact.
        </p>
      </section>

      <div className="px-6 space-y-6">
        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 shadow-sm text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center">
                  <stat.icon size={16} className="text-forest" />
                </div>
              </div>
              <p className="font-serif font-bold text-1xl text-forest">
                {stat.value}
              </p>
              <p className="text-forest/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Recent Activity ── */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-forest font-semibold text-base mb-5">
            Recent Activity
          </h2>

          <div className="divide-y divide-sage">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <p className="text-sm font-medium text-forest">
                    {item.description}
                  </p>
                  <p className="text-xs text-forest/40 mt-0.5">
                    {item.project} · {item.date}
                  </p>
                </div>
                <span className="text-sm font-semibold text-forest">
                  ${item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Digital Certificate ── */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
          <div>
            <h2 className="text-forest font-semibold text-base mb-1">
              Digital Certificate
            </h2>
            <p className="text-forest/40 text-xs">
              Download your reforestation impact certificate
            </p>
          </div>
          <button className="text-sm font-medium text-forest border border-forest px-4 py-2 rounded-xl hover:bg-forest hover:text-white transition-colors">
            View Certificate
          </button>
        </div>
      </div>
    </main>
  );
}
