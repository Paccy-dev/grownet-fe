import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Atlas Cedar Restoration",
    location: "Ifrane, Middle Atlas",
    description:
      "Restoring the iconic cedar forests of the Middle Atlas, home to Barbary macaques and a vital water catchment for millions.",
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 12400,
    treesGoal: 20000,
  },
  {
    id: 2,
    title: "Argan Forest Revival",
    location: "Souss-Massa, Agadir",
    description:
      "Protecting and expanding Morocco's precious argan forests — a UNESCO biosphere reserve and lifeline for local Berber communities.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 8750,
    treesGoal: 15000,
  },
  {
    id: 3,
    title: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif Region",
    description:
      "Replanting native oak and pine species across fire-damaged slopes of the Rif mountains to prevent erosion and restore biodiversity.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    status: "Completed" as const,
    treesPlanted: 25000,
    treesGoal: 25000,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-sage">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-forest/50 uppercase tracking-widest mb-3">
              Where your trees grow
            </p>
            <h2 className="font-serif text-4xl font-bold text-forest leading-tight">
              Active Restoration Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-mid border-b border-forest/30 hover:border-forest pb-0.5 transition-all duration-200 self-start md:self-auto"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
