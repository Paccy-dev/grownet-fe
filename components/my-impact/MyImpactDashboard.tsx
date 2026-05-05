import { TreePine, Wind, Award, Calendar } from "lucide-react";

type User = {
  name: string;
  email: string;
};

const impactStats = [
  {
    icon: TreePine,
    value: "24",
    label: "Trees Planted",
    description: "Across 3 projects",
  },
  {
    icon: Wind,
    value: "528 kg",
    label: "CO₂ Offset / yr",
    description: "And growing every year",
  },
  {
    icon: Award,
    value: "4",
    label: "Certificates",
    description: "Available to download",
  },
  {
    icon: Calendar,
    value: "8 mo",
    label: "Member Since",
    description: "August 2024",
  },
];

const recentDonations = [
  {
    id: 1,
    date: "March 12, 2025",
    project: "Atlas Cedar Restoration",
    species: "Atlas Cedar",
    trees: 10,
    amount: "$50",
    certificateReady: true,
  },
  {
    id: 2,
    date: "January 5, 2025",
    project: "Argan Forest Revival",
    species: "Argan Tree",
    trees: 7,
    amount: "$49",
    certificateReady: true,
  },
  {
    id: 3,
    date: "November 20, 2024",
    project: "Coastal Pine Belt",
    species: "Aleppo Pine",
    trees: 5,
    amount: "$20",
    certificateReady: true,
  },
  {
    id: 4,
    date: "August 3, 2024",
    project: "Rif Mountain Reforestation",
    species: "Holm Oak",
    trees: 2,
    amount: "$12",
    certificateReady: false,
  },
];

const myTrees = [
  {
    project: "Atlas Cedar Restoration",
    location: "Ifrane, Middle Atlas",
    species: "Atlas Cedar",
    count: 10,
    planted: "March 2025",
    co2: "220 kg/yr",
    status: "Growing",
  },
  {
    project: "Argan Forest Revival",
    location: "Souss-Massa, Agadir",
    species: "Argan Tree",
    count: 7,
    planted: "January 2025",
    co2: "126 kg/yr",
    status: "Growing",
  },
  {
    project: "Coastal Pine Belt",
    location: "Larache, Atlantic Coast",
    species: "Aleppo Pine",
    count: 5,
    planted: "November 2024",
    co2: "75 kg/yr",
    status: "Growing",
  },
  {
    project: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif",
    species: "Holm Oak",
    count: 2,
    planted: "August 2024",
    co2: "56 kg/yr",
    status: "Established",
  },
];

export default function MyImpactDashboard({ user }: { user: User }) {
  return (
    <div className="bg-sage min-h-screen">
      {/* Header */}
      <div className="bg-forest py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-amber text-sm font-medium uppercase tracking-widest mb-3">
              Your dashboard
            </p>
            <h1 className="font-serif text-5xl font-bold text-white mb-2">
              Welcome back, {user.name} 🌿
            </h1>
            <p className="text-white/60">{user.email}</p>
          </div>
          <a
            href="/plant-trees"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber text-forest font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-200 text-sm"
          >
            <TreePine className="w-4 h-4" />
            Plant More Trees
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
        {/* Impact stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-forest/10 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                  <Icon className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-forest">
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

        {/* My trees */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-forest mb-2">
            My Trees
          </h2>
          <p className="text-forest/55 text-sm mb-6">
            Every tree you&apos;ve planted — GPS-verified and growing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myTrees.map((tree) => (
              <div
                key={tree.project}
                className="bg-white rounded-2xl border border-forest/10 p-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-6 h-6 text-amber" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-forest text-sm leading-snug">
                      {tree.project}
                    </h3>
                    <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-forest/10 text-forest">
                      {tree.status}
                    </span>
                  </div>
                  <p className="text-xs text-forest/50 mt-0.5">
                    {tree.location}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-forest/60">
                    <span>
                      🌳 {tree.count} {tree.count === 1 ? "tree" : "trees"}
                    </span>
                    <span>🌿 {tree.species}</span>
                    <span>📅 {tree.planted}</span>
                    <span>💨 {tree.co2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent donations + certificates */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-forest mb-2">
            Donation History
          </h2>
          <p className="text-forest/55 text-sm mb-6">
            Your contributions and downloadable certificates
          </p>
          <div className="bg-white rounded-3xl border border-forest/10 overflow-hidden">
            <div className="flex flex-col divide-y divide-forest/8">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between px-6 py-5 gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <TreePine className="w-4 h-4 text-forest" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-forest text-sm truncate">
                        {donation.project}
                      </p>
                      <p className="text-xs text-forest/45 mt-0.5">
                        {donation.date} · {donation.trees}{" "}
                        {donation.trees === 1 ? "tree" : "trees"} ·{" "}
                        {donation.species}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-semibold text-forest text-sm hidden sm:block">
                      {donation.amount}
                    </span>
                    {donation.certificateReady ? (
                      <button className="text-xs font-semibold text-forest border border-forest/20 px-4 py-2 rounded-full hover:bg-forest hover:text-white transition-all duration-200 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        Certificate
                      </button>
                    ) : (
                      <span className="text-xs text-forest/40 px-4 py-2">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA to plant more */}
        <div className="bg-forest rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-3xl font-bold text-white mb-2">
              Keep your forest growing
            </h3>
            <p className="text-white/60 text-sm">
              Every new tree adds to your legacy and Morocco&apos;s recovery.
            </p>
          </div>
          <a
            href="/plant-trees"
            className="flex-shrink-0 bg-amber text-forest font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-200 text-base"
          >
            Plant More Trees
          </a>
        </div>
      </div>
    </div>
  );
}
