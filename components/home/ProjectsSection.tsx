import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Atlas Cedar Restoration",
    location: "Ifrane, Middle Atlas",
    description:
      "Restoring the iconic cedar forests of the Middle Atlas, home to Barbary macaques and a vital water catchment for millions.",
    longDescription: `The Atlas Cedar (Cedrus atlantica) is Morocco's national tree and one of the most 
      important forest species in North Africa. Over the past century, more than 75% of Atlas Cedar 
      forests have disappeared due to overgrazing, illegal logging, and climate change.

      Our reforestation project works directly with local mountain communities to plant, nurture, 
      and monitor cedar seedlings across 3 key sites in the Middle Atlas. Every tree is GPS-tagged 
      and tracked in our registry, giving donors full visibility into where their trees grow.

      Local families are employed as forest guardians — protecting the young trees from grazing 
      animals and monitoring growth progress monthly.`,
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 12400,
    treesGoal: 20000,
    co2PerYear: 35,
    region: "Middle Atlas",
    startDate: "March 2022",
    species: ["Atlas Cedar", "Holm Oak"],
    impact: [
      { label: "kg CO₂ Captured", value: "946K" },
      { label: "Hectares Restored", value: "48" },
    ],
  },
  {
    id: 2,
    name: "Argan Forest Revival",
    location: "Souss-Massa, Agadir",
    description:
      "Protecting and expanding Morocco's precious argan forests — a UNESCO biosphere reserve and lifeline for local Berber communities.",
    longDescription: `The Argan tree (Argania spinosa) is found nowhere else on Earth. Endemic to 
      Morocco's Souss-Massa region, it produces the world-famous Argan oil and plays a critical 
      role in preventing desertification along Morocco's southern edge.

      Women's cooperatives in the Souss-Massa region are at the heart of this project. We partner 
      with 8 cooperatives employing over 200 women who harvest Argan sustainably while planting 
      new seedlings at the forest edge.

      Each donated tree is registered with GPS coordinates and monitored quarterly with photo 
      updates shared directly with donors through their impact dashboard.`,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 8750,
    treesGoal: 15000,
    co2PerYear: 20,
    region: "Souss-Massa",
    startDate: "June 2022",
    species: ["Argan", "Carob"],
    impact: [
      { label: "kg CO₂ Captured", value: "850K" },
      { label: "Hectares Restored", value: "72" },
    ],
  },
  {
    id: 3,
    name: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif Region",
    description:
      "Replanting native oak and pine species across fire-damaged slopes of the Rif mountains to prevent erosion and restore biodiversity.",
    longDescription: `The Draa Valley was once a lush corridor of date palms and oasis gardens 
      stretching from the High Atlas to the Sahara. Today, decades of drought and overuse have 
      reduced many of these ancient groves to dry, cracked earth.

      This completed project successfully restored 8,000 date palms and drought-resistant trees 
      across 5 oasis sites, bringing shade, food, and economic activity back to communities 
      that depend on these ecosystems for survival.

      This project reached 100% of its goal and is now in a 3-year monitoring phase to ensure 
      long-term survival of all planted trees.`,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    status: "Completed" as const,
    treesPlanted: 25000,
    treesGoal: 25000,
    co2PerYear: 19,
    region: "Draa-Tafilalet",
    startDate: "January 2023",
    species: ["Date Palm", "Olive", "Carob"],
    impact: [
      { label: "Families Supported", value: "180" },
      { label: "kg CO₂ Captured", value: "802K" },
    ],
  },
  {
    id: 4,
    name: "Saharan Edge Greening",
    location: "Draa-Tafilalet, Errachidia",
    description:
      "Planting drought-resistant species along the Saharan edge to halt desertification and create green corridors for wildlife.",
    longDescription: `The Draa Valley was once a lush corridor of date palms and oasis gardens 
      stretching from the High Atlas to the Sahara. Today, decades of drought and overuse have 
      reduced many of these ancient groves to dry, cracked earth.

      This completed project successfully restored 8,000 date palms and drought-resistant trees 
      across 5 oasis sites, bringing shade, food, and economic activity back to communities 
      that depend on these ecosystems for survival.

      This project reached 100% of its goal and is now in a 3-year monitoring phase to ensure 
      long-term survival of all planted trees.`,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 6200,
    treesGoal: 18000,
    co2PerYear: 35,
    region: "Middle Atlas",
    startDate: "March 2022",
    species: ["Atlas Cedar", "Holm Oak"],
    impact: [
      { label: "kg CO₂ Captured", value: "946K" },
      { label: "Hectares Restored", value: "48" },
    ],
  },
  {
    id: 5,
    name: "Coastal Pine Belt",
    location: "Larache, Atlantic Coast",
    description:
      "Establishing a protective pine belt along the Atlantic coast to stabilize dunes, reduce erosion and shelter coastal communities.",
    longDescription: `The Argan tree (Argania spinosa) is found nowhere else on Earth. Endemic to 
      Morocco's Souss-Massa region, it produces the world-famous Argan oil and plays a critical 
      role in preventing desertification along Morocco's southern edge.

      Women's cooperatives in the Souss-Massa region are at the heart of this project. We partner 
      with 8 cooperatives employing over 200 women who harvest Argan sustainably while planting 
      new seedlings at the forest edge.

      Each donated tree is registered with GPS coordinates and monitored quarterly with photo 
      updates shared directly with donors through their impact dashboard.`,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    status: "Active" as const,
    treesPlanted: 9100,
    treesGoal: 12000,
    co2PerYear: 20,
    region: "Souss-Massa",
    startDate: "June 2022",
    species: ["Argan", "Carob"],
    impact: [
      { label: "kg CO₂ Captured", value: "850K" },
      { label: "Hectares Restored", value: "72" },
    ],
  },
  {
    id: 6,
    name: "High Atlas Juniper Revival",
    location: "Ouarzazate, High Atlas",
    description:
      "Reviving ancient juniper forests in the High Atlas mountains, protecting watersheds that supply water to southern Morocco.",
    longDescription: `The Draa Valley was once a lush corridor of date palms and oasis gardens 
      stretching from the High Atlas to the Sahara. Today, decades of drought and overuse have 
      reduced many of these ancient groves to dry, cracked earth.

      This completed project successfully restored 8,000 date palms and drought-resistant trees 
      across 5 oasis sites, bringing shade, food, and economic activity back to communities 
      that depend on these ecosystems for survival.

      This project reached 100% of its goal and is now in a 3-year monitoring phase to ensure 
      long-term survival of all planted trees.`,
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    status: "Completed" as const,
    treesPlanted: 14000,
    treesGoal: 14000,
    co2PerYear: 19,
    region: "Draa-Tafilalet",
    startDate: "January 2023",
    species: ["Date Palm", "Olive", "Carob"],
    impact: [
      { label: "Families Supported", value: "180" },
      { label: "kg CO₂ Captured", value: "802K" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-sage">
      <div className="max-w-5xl mx-auto px-6">
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
