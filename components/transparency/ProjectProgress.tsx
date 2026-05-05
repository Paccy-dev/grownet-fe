// Status can only be one of these two values
type ProjectStatus = "Active" | "Completed";

type Project = {
  name: string;
  location: string;
  status: ProjectStatus;
  treesPlanted: number;
  treesGoal: number;
  co2: number;
};

// Hardcoded for now — will come from Strapi later
const projects: Project[] = [
  {
    name: "Atlas Cedar Reforestation",
    location: "Middle Atlas, Morocco",
    status: "Active",
    treesPlanted: 7360,
    treesGoal: 10000,
    co2: 946250,
  },
  {
    name: "Argan Forest Revival",
    location: "Souss-Massa, Morocco",
    status: "Active",
    treesPlanted: 14200,
    treesGoal: 20000,
    co2: 850000,
  },
  {
    name: "Draa Valley Oasis Restoration",
    location: "Draa-Tafilalet, Morocco",
    status: "Completed",
    treesPlanted: 8000,
    treesGoal: 8000,
    co2: 802000,
  },
];

// Total across all projects
const totalPlanted = projects.reduce((sum, p) => sum + p.treesPlanted, 0);
const totalGoal = projects.reduce((sum, p) => sum + p.treesGoal, 0);

export default function ProjectProgress() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-forest font-semibold text-base mb-5">
        Project Progress
      </h2>

      <div className="space-y-6">
        {projects.map((project) => {
          const percentage = Math.round(
            (project.treesPlanted / project.treesGoal) * 100,
          );

          return (
            <div key={project.name}>
              {/* Project name + status badge on same row */}
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-sm font-semibold text-forest">
                    {project.name}
                  </p>
                  <p className="text-xs text-forest/50">{project.location}</p>
                </div>

                {/* Badge color changes based on status */}
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full
                  ${
                    project.status === "Active"
                      ? "bg-forest text-white"
                      : "bg-white text-forest border border-forest"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Trees planted count + percentage */}
              <div className="flex justify-between text-xs text-forest/60 mb-1.5">
                <span>
                  {project.treesPlanted.toLocaleString()} /{" "}
                  {project.treesGoal.toLocaleString()} trees
                </span>
                <span>{percentage}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-sage rounded-full mb-1.5">
                <div
                  className="h-2 bg-forest rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* CO₂ stat */}
              <p className="text-xs text-forest/50">
                🌿 {project.co2.toLocaleString()} kg CO₂
              </p>
            </div>
          );
        })}
      </div>

      {/* Overall progress — sits below all projects */}
      <div className="mt-8 pt-6 border-t border-sage">
        <div className="flex justify-between text-sm text-forest/60 mb-2">
          <span>
            Overall: {totalPlanted.toLocaleString()} /{" "}
            {totalGoal.toLocaleString()} trees
          </span>
          <span>{Math.round((totalPlanted / totalGoal) * 100)}%</span>
        </div>
        <div className="w-full h-2.5 bg-sage rounded-full">
          <div
            className="h-2.5 bg-forest rounded-full transition-all duration-500"
            style={{
              width: `${Math.round((totalPlanted / totalGoal) * 100)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
