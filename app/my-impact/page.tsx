"use client";

import { useRequireAuth } from "@/hooks/useRequireAuth";
import {
  Heart,
  TreePine,
  Leaf,
  Globe,
  Loader2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

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
  const { user, isLoading } = useRequireAuth();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-sage flex items-center justify-center">
        <Loader2 size={32} className="text-forest animate-spin" />
      </main>
    );
  }

  const stats = [
    {
      icon: Heart,
      value: "$185",
      label: "Total Donated",
      description: "Your lifetime contributions",
    },
    {
      icon: TreePine,
      value: "22",
      label: "Trees Sponsored",
      description: "Directly funded by you",
    },
    {
      icon: Leaf,
      value: "484 kg",
      label: "CO₂ Offset",
      description: "Estimated environmental impact",
    },
    {
      icon: Globe,
      value: "2",
      label: "Projects Supported",
      description: "Across restoration regions",
    },
  ];

  // derived numbers (fake for now)
  const treesGoal = 50;
  const treesPlanted = 22;
  const percent = Math.round((treesPlanted / treesGoal) * 100);
  const formatName = (name?: string) =>
    name?.replace(/\b\w/g, (char) => char.toUpperCase());
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
  return (
    <>
      <main className="max-w-4xl mx-auto bg-sage min-h-screen">
        {/* Header */}
        <section className="pt-16 pb-10 px-4">
          <h1 className="font-serif text-3xl font-bold text-forest mb-2">
            My Impact
          </h1>

          <p className="text-forest/50 text-sm">
            {getGreeting() || "Welcome back"}
            <span className="capitalize text-xl">
              {" "}
              {formatName(user?.username) || "there"},{" "}
            </span>
            Track your contributions and environmental impact.
          </p>
        </section>

        <div className="px-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 border border-forest/10 flex flex-col gap-3"
                >
                  <div className="flex justify-center">
                    <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                  </div>

                  <div>
                    <p className="font-serif text-xl font-bold text-forest">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-forest mt-0.5">
                      {stat.label}
                    </p>
                    <p className="text-xs text-forest/50 mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Impact Progress */}
          {/* <div className="bg-forest rounded-3xl p-8">
            <h2 className="font-serif text-2xl font-bold text-white mb-1">
              Your Reforestation Journey
            </h2>
            <p className="text-white/50 text-sm mb-6">
              Progress toward your personal impact milestone
            </p>

            <div className="flex justify-between mb-6">
              <div>
                <p className="text-white text-2xl font-bold">{treesPlanted}</p>
                <p className="text-xs text-white/50">Trees planted</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">{treesGoal}</p>
                <p className="text-xs text-white/50">Target</p>
              </div>
              <div>
                <p className="text-amber text-2xl font-bold">{percent}%</p>
                <p className="text-xs text-white/50">Completed</p>
              </div>
            </div>

            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber rounded-full transition-all duration-700"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div> */}

          {/* Recent Activity */}
          <div className="bg-forest rounded-3xl border border-forest/10 p-6">
            <h2 className="font-serif text-xl font-bold text-white mb-6">
              Recent Activity
            </h2>

            <div className="flex flex-col divide-y divide-forest/10">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-amber"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.description}
                    </p>
                    <p className="text-xs text-white/45 mt-1">
                      {item.project} · {item.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-white">
                      ${item.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-white rounded-3xl border border-forest/10 p-6 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg font-bold text-forest mb-1">
                Digital Certificate
              </h2>
              <p className="text-forest/50 text-sm">
                Download your personalized impact certificate
              </p>
            </div>

            <button className="text-sm font-semibold text-forest border border-amber px-5 py-2 rounded-full hover:bg-forest hover:text-white transition-all">
              View Certificate
            </button>
          </div>
          {/* CTA Banner */}
          <div className="bg-forest/70 rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Ready to contribure more?
              </h3>
              <p className="text-white/60 text-sm">
                Every tree counts. Continue planting today.
              </p>
            </div>
            <Link
              href="/plant-trees"
              className="flex-shrink-0 bg-amber text-forest font-semibold px-5 py-2 rounded-full hover:brightness-110 transition-all duration-200 text-base"
            >
              Plant Your Next Tree
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
