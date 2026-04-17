import { MapPin, Trees } from "lucide-react";

type Project = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  status: "Active" | "Completed";
  treesPlanted: number;
  treesGoal: number;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const progress = Math.round((project.treesPlanted / project.treesGoal) * 100);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-forest/10 hover:border-forest/25 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />

        {/* Status badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            project.status === "Active"
              ? "bg-amber text-forest"
              : "bg-forest text-white"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-forest/50 text-xs">
          <MapPin className="w-3.5 h-3.5" />
          <span>{project.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-forest leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-forest/60 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Progress */}
        <div className="mt-auto pt-3 border-t border-forest/10">
          {/* Trees count */}
          <div className="flex items-center justify-between text-xs text-forest/60 mb-2">
            <div className="flex items-center gap-1.5">
              <Trees className="w-3.5 h-3.5 text-forest" />
              <span>
                <strong className="text-forest font-semibold">
                  {project.treesPlanted.toLocaleString()}
                </strong>{" "}
                / {project.treesGoal.toLocaleString()} trees
              </span>
            </div>
            <span className="font-semibold text-forest">{progress}%</span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-sage rounded-full overflow-hidden">
            <div
              className="h-full bg-forest rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
