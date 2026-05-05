import {
  ShieldCheck,
  TreePine,
  Users,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface FundAllocation {
  label: string;
  percentage: number;
  color: string;
}

interface Project {
  name: string;
  location: string;
  raised: number;
  goal: number;
  treesPlanted: number;
  treesGoal: number;
  co2: number;
  status: "Active" | "Completed";
}

interface Report {
  period: string;
  date: string;
  trees: number;
  amount: string;
}

const stats: Stat[] = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Donation transparency",
    description: "Every dirham publicly tracked",
  },
  {
    icon: TreePine,
    value: "47,450",
    label: "Trees verified",
    description: "GPS-confirmed in the ground",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Active donors",
    description: "From 40 countries worldwide",
  },
  {
    icon: TrendingUp,
    value: "$284K",
    label: "Total raised",
    description: "Since launch in 2023",
  },
];

const fundAllocation: FundAllocation[] = [
  { label: "Tree planting & nurseries", percentage: 72, color: "bg-forest" },
  { label: "Community wages", percentage: 15, color: "bg-forest-mid" },
  { label: "GPS tracking & technology", percentage: 8, color: "bg-amber" },
  { label: "Operations & admin", percentage: 5, color: "bg-forest/30" },
];

const projects: Project[] = [
  {
    name: "Atlas Cedar Restoration",
    location: "Ifrane, Middle Atlas",
    raised: 62000,
    goal: 100000,
    treesPlanted: 12400,
    treesGoal: 20000,
    co2: 310,
    status: "Active",
  },
  {
    name: "Argan Forest Revival",
    location: "Souss-Massa, Agadir",
    raised: 61250,
    goal: 105000,
    treesPlanted: 8750,
    treesGoal: 15000,
    co2: 219,
    status: "Active",
  },
  {
    name: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif Region",
    raised: 125000,
    goal: 125000,
    treesPlanted: 25000,
    treesGoal: 25000,
    co2: 625,
    status: "Completed",
  },
  {
    name: "Saharan Edge Greening",
    location: "Draa-Tafilalet, Errachidia",
    raised: 34100,
    goal: 99000,
    treesPlanted: 6200,
    treesGoal: 18000,
    co2: 155,
    status: "Active",
  },
  {
    name: "Coastal Pine Belt",
    location: "Larache, Atlantic Coast",
    raised: 72800,
    goal: 96000,
    treesPlanted: 9100,
    treesGoal: 12000,
    co2: 228,
    status: "Active",
  },
  {
    name: "High Atlas Juniper Revival",
    location: "Ouarzazate, High Atlas",
    raised: 84000,
    goal: 84000,
    treesPlanted: 14000,
    treesGoal: 14000,
    co2: 350,
    status: "Completed",
  },
];

const reports: Report[] = [
  {
    period: "Q1 2025",
    date: "April 1, 2025",
    trees: 8200,
    amount: "$41,000",
  },
  {
    period: "Q4 2024",
    date: "January 1, 2025",
    trees: 12400,
    amount: "$62,000",
  },
  {
    period: "Q3 2024",
    date: "October 1, 2024",
    trees: 9800,
    amount: "$49,000",
  },
  { period: "Q2 2024", date: "July 1, 2024", trees: 11200, amount: "$56,000" },
];

// Overall totals derived from projects
const totalTreesPlanted = projects.reduce((s, p) => s + p.treesPlanted, 0);
const totalTreesGoal = projects.reduce((s, p) => s + p.treesGoal, 0);
const totalRaised = projects.reduce((s, p) => s + p.raised, 0);
const totalGoal = projects.reduce((s, p) => s + p.goal, 0);
const totalCo2 = projects.reduce((s, p) => s + p.co2, 0);
const treesPercent = Math.round((totalTreesPlanted / totalTreesGoal) * 100);
const fundsPercent = Math.round((totalRaised / totalGoal) * 100);

export default function TransparencyPage() {
  return (
    <div className="max-w-4xl mx-auto bg-sage min-h-screen">
      {/* ── Page Header ── */}
      <section className="pt-16 pb-10 px-4">
        <h1 className="font-serif text-3xl font-bold text-forest mb-3">
          Transparency Report
        </h1>
        <p className="text-forest/50 text-sm">
          Full visibility into how funds are used and trees are planted. Updated
          in real-time.
        </p>
      </section>

      <div className="px-6 space-y-6">
        {/* Top stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-forest/10 flex flex-col gap-3"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center">
                    <Icon className="w-5 h-5 text-forest" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-1xl font-bold text-forest">
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

        {/* Overall progress */}
        <div className="bg-forest rounded-3xl p-8">
          <h2 className="font-serif text-3xl font-bold text-white mb-1">
            Overall Programme Progress
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Combined across all six restoration sites
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-8">
            <div>
              <p className="font-serif text-2xl font-bold text-white">
                {totalTreesPlanted.toLocaleString()}
              </p>
              <p className="text-xs text-white/50 mt-1">Trees planted</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-white">
                {totalTreesGoal.toLocaleString()}
              </p>
              <p className="text-xs text-white/50 mt-1">Target trees</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-white">
                ${(totalRaised / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-white/50 mt-1">Funds raised</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-white">
                ${(totalGoal / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-white/50 mt-1">Total goal</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-amber">
                {totalCo2.toLocaleString()} t
              </p>
              <p className="text-xs text-white/50 mt-1">CO₂ offset est.</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-amber rounded-full transition-all duration-700"
              style={{ width: `${treesPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-white/45">
            <span>{treesPercent}% of trees planted</span>
            <span>{fundsPercent}% of funds raised</span>
          </div>
        </div>

        {/* Regions */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-forest mb-2">
            Regions
          </h2>
          <p className="text-forest/55 text-sm mb-8">
            Per-project breakdown — funds, trees planted, and estimated CO₂
            offset
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => {
              const fPct = Math.round((project.raised / project.goal) * 100);
              const tPct = Math.round(
                (project.treesPlanted / project.treesGoal) * 100,
              );
              return (
                <div
                  key={project.name}
                  className="bg-white rounded-2xl border border-forest/10 p-6 flex flex-col gap-4"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-base font-bold text-forest leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-xs text-forest/45 mt-0.5">
                        {project.location}
                      </p>
                    </div>
                    <span
                      className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === "Active"
                          ? "bg-amber/15 text-amber"
                          : "bg-forest/10 text-forest"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <p className="text-sm font-bold text-forest">
                        {project.treesPlanted.toLocaleString()}
                      </p>
                      <p className="text-xs text-forest/45 mt-0.5">Trees</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-forest">
                        ${(project.raised / 1000).toFixed(0)}K
                      </p>
                      <p className="text-xs text-forest/45 mt-0.5">Raised</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber">
                        {project.co2} t
                      </p>
                      <p className="text-xs text-forest/45 mt-0.5">CO₂ est.</p>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <div className="flex justify-between text-xs text-forest/50 mb-1">
                        <span>Funds</span>
                        <span className="font-semibold text-forest">
                          {fPct}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-sage rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber rounded-full"
                          style={{ width: `${fPct}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-forest/50 mb-1">
                        <span>Trees</span>
                        <span className="font-semibold text-forest">
                          {tPct}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-sage rounded-full overflow-hidden">
                        <div
                          className="h-full bg-forest rounded-full"
                          style={{ width: `${tPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fund allocation */}
        <div className="bg-white rounded-3xl border border-forest/10 p-8">
          <h2 className="font-serif text-3xl font-bold text-forest mb-2">
            How Funds Are Allocated
          </h2>
          <p className="text-forest/55 text-sm mb-8">
            Breakdown of every dollar donated to GrowNet
          </p>

          <div className="flex flex-col gap-5">
            {fundAllocation.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-forest">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-forest">
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-sage rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Visual breakdown */}
          <div className="mt-8 pt-6 border-t border-forest/10">
            <div className="flex rounded-xl overflow-hidden h-6">
              {fundAllocation.map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} transition-all duration-700`}
                  style={{ width: `${item.percentage}%` }}
                  title={`${item.label}: ${item.percentage}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {fundAllocation.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-xs text-forest/60"
                >
                  <span
                    className={`w-3 h-3 rounded-sm ${item.color} inline-block flex-shrink-0`}
                  />
                  {item.label} ({item.percentage}%)
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quarterly reports */}
        <div className="bg-white rounded-3xl border border-forest/10 p-8">
          <h2 className="font-serif text-3xl font-bold text-forest mb-2">
            Quarterly Reports
          </h2>
          <p className="text-forest/55 text-sm mb-8">
            Downloadable impact reports published every quarter
          </p>

          <div className="flex flex-col divide-y divide-forest/8">
            {reports.map((report) => (
              <div
                key={report.period}
                className="flex items-center justify-between py-4 gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">
                      {report.period} Impact Report
                    </p>
                    <p className="text-xs text-forest/45 mt-0.5">
                      Published {report.date}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-sm text-forest/60">
                  <span>
                    <strong className="text-forest">
                      {report.trees.toLocaleString()}
                    </strong>{" "}
                    trees
                  </span>
                  <span>
                    <strong className="text-forest">{report.amount}</strong>{" "}
                    raised
                  </span>
                </div>
                <button className="flex-shrink-0 text-xs font-semibold text-forest border border-forest/20 px-4 py-2 rounded-full hover:bg-forest hover:text-white transition-all duration-200">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
