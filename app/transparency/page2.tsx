import { ShieldCheck, TreePine, Users, TrendingUp } from "lucide-react";

const stats = [
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

const fundAllocation = [
  { label: "Tree planting & nurseries", percentage: 72, color: "bg-forest" },
  { label: "Community wages", percentage: 15, color: "bg-forest-mid" },
  { label: "GPS tracking & technology", percentage: 8, color: "bg-amber" },
  { label: "Operations & admin", percentage: 5, color: "bg-forest/30" },
];

const projectProgress = [
  {
    name: "Atlas Cedar Restoration",
    location: "Ifrane, Middle Atlas",
    raised: 62000,
    goal: 100000,
    treesPlanted: 12400,
    treesGoal: 20000,
    status: "Active",
  },
  {
    name: "Argan Forest Revival",
    location: "Souss-Massa, Agadir",
    raised: 61250,
    goal: 105000,
    treesPlanted: 8750,
    treesGoal: 15000,
    status: "Active",
  },
  {
    name: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif Region",
    raised: 125000,
    goal: 125000,
    treesPlanted: 25000,
    treesGoal: 25000,
    status: "Completed",
  },
  {
    name: "Saharan Edge Greening",
    location: "Draa-Tafilalet, Errachidia",
    raised: 34100,
    goal: 99000,
    treesPlanted: 6200,
    treesGoal: 18000,
    status: "Active",
  },
  {
    name: "Coastal Pine Belt",
    location: "Larache, Atlantic Coast",
    raised: 72800,
    goal: 96000,
    treesPlanted: 9100,
    treesGoal: 12000,
    status: "Active",
  },
  {
    name: "High Atlas Juniper Revival",
    location: "Ouarzazate, High Atlas",
    raised: 84000,
    goal: 84000,
    treesPlanted: 14000,
    treesGoal: 14000,
    status: "Completed",
  },
];

const reports = [
  { period: "Q1 2025", date: "April 1, 2025", trees: 8200, amount: "$41,000" },
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

export default function TransparencyPage() {
  return (
    <div className="bg-sage min-h-screen">
      {/* Page header */}
      <div className="bg-forest py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber text-sm font-medium uppercase tracking-widest mb-3">
            Full accountability
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Transparency Report
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Every donation, every tree, every dirham — fully visible. We believe
            radical transparency is the foundation of trust.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Top stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
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

        {/* Project-by-project breakdown */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-forest mb-2">
            Project Financials
          </h2>
          <p className="text-forest/55 text-sm mb-8">
            Funds raised and trees planted per restoration site
          </p>

          <div className="flex flex-col gap-4">
            {projectProgress.map((project) => {
              const fundsPercent = Math.round(
                (project.raised / project.goal) * 100,
              );
              const treesPercent = Math.round(
                (project.treesPlanted / project.treesGoal) * 100,
              );
              return (
                <div
                  key={project.name}
                  className="bg-white rounded-2xl border border-forest/10 p-6"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-forest">
                        {project.name}
                      </h3>
                      <p className="text-xs text-forest/50 mt-0.5">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Funds raised */}
                    <div>
                      <div className="flex justify-between text-xs text-forest/60 mb-1.5">
                        <span>Funds raised</span>
                        <span className="font-semibold text-forest">
                          ${project.raised.toLocaleString()} / $
                          {project.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-sage rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber rounded-full"
                          style={{ width: `${fundsPercent}%` }}
                        />
                      </div>
                      <p className="text-xs text-forest/40 mt-1">
                        {fundsPercent}% funded
                      </p>
                    </div>

                    {/* Trees planted */}
                    <div>
                      <div className="flex justify-between text-xs text-forest/60 mb-1.5">
                        <span>Trees planted</span>
                        <span className="font-semibold text-forest">
                          {project.treesPlanted.toLocaleString()} /{" "}
                          {project.treesGoal.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-sage rounded-full overflow-hidden">
                        <div
                          className="h-full bg-forest rounded-full"
                          style={{ width: `${treesPercent}%` }}
                        />
                      </div>
                      <p className="text-xs text-forest/40 mt-1">
                        {treesPercent}% complete
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
