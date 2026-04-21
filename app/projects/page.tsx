import ProjectCard from "@/components/projects/ProjectCard-old";

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
  {
    id: 4,
    title: "Saharan Edge Greening",
    location: "Draa-Tafilalet, Errachidia",
    description:
      "Planting drought-resistant species along the Saharan edge to halt desertification and create green corridors for wildlife.",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 6200,
    treesGoal: 18000,
  },
  {
    id: 5,
    title: "Coastal Pine Belt",
    location: "Larache, Atlantic Coast",
    description:
      "Establishing a protective pine belt along the Atlantic coast to stabilize dunes, reduce erosion and shelter coastal communities.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 9100,
    treesGoal: 12000,
  },
  {
    id: 6,
    title: "High Atlas Juniper Revival",
    location: "Ouarzazate, High Atlas",
    description:
      "Reviving ancient juniper forests in the High Atlas mountains, protecting watersheds that supply water to southern Morocco.",
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    status: "Completed" as const,
    treesPlanted: 14000,
    treesGoal: 14000,
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-sage min-h-screen">
      {/* Page header */}
      <div className="bg-forest py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber text-sm font-medium uppercase tracking-widest mb-3">
            Where your trees grow
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Restoration Projects
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Every project is GPS-verified, community-led, and fully transparent.
            Choose a site and start planting today.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats bar */}
        <div className="flex flex-wrap gap-8 mb-12 pb-8 border-b border-forest/10">
          <div>
            <span className="font-serif text-3xl font-bold text-forest">6</span>
            <p className="text-sm text-forest/50 mt-0.5">Total projects</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-forest">4</span>
            <p className="text-sm text-forest/50 mt-0.5">Active now</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-forest">2</span>
            <p className="text-sm text-forest/50 mt-0.5">Completed</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-forest">
              75,450
            </span>
            <p className="text-sm text-forest/50 mt-0.5">Trees planted total</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
