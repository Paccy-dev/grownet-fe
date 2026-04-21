import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";

// Hardcoded for now — later this comes from Strapi via GraphQL
const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    status: "Active" as const,
    name: "Atlas Cedar Reforestation",
    location: "Middle Atlas, Morocco",
    description:
      "Restoring the iconic Atlas Cedar forests in the Middle Atlas mountains, combating desertification and wildfires.",
    treesPlanted: 7850,
    treesGoal: 12000,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    status: "Active" as const,
    name: "Argan Forest Revival",
    location: "Souss-Massa, Morocco",
    description:
      "Replanting the endangered Argan tree — endemic to Morocco — to fight soil erosion and support local communities.",
    treesPlanted: 14200,
    treesGoal: 20000,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    status: "Completed" as const,
    name: "Draa Valley Oasis Restoration",
    location: "Draa-Tafilalet, Morocco",
    description:
      "Reviving ancient palm groves and planting drought-resistant species to protect oasis ecosystems.",
    treesPlanted: 8000,
    treesGoal: 8000,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-sage">
      <Navbar />

      {/* Page Header */}
      <section className="text-center pt-16 pb-10 px-4">
        <h1 className="font-serif text-4xl font-bold text-forest mb-3">
          Restoration Projects
        </h1>
        <p className="text-forest/60 text-base">
          Explore our verified tree planting projects around the world.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
