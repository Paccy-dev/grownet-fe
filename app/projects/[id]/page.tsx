import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  TreePine,
  ArrowLeft,
  Leaf,
  Calendar,
  Wind,
} from "lucide-react";

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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) notFound();

  const percentage = Math.round(
    (project.treesPlanted / project.treesGoal) * 100,
  );

  const remaining = project.treesGoal - project.treesPlanted;

  const isActive = project.status === "Active";

  return (
    <>
      <main className="min-h-screen bg-sage">
        {/* ── Hero Banner ── */}
        <section className="relative bg-forest text-white text-center py-20 px-4 overflow-hidden">
          {/* Subtle tree pattern in background */}
          {/* <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[120px] flex flex-wrap gap-8 justify-center items-center overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}>🌳</span>
            ))}
          </div> */}
          {/* Back Image */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Layered gradient: dark at top for nav, rich at bottom for title */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/20" />

          {/* Nav row */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Go back to all Projects
            </Link>

            <span
              className={`text-xs font-semibold tracking-wide px-3 py-1 rounded-full border
              ${
                isActive
                  ? "bg-amber/20 border-amber/60 text-amber"
                  : "bg-white/10 border-white/20 text-white/80"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 bg-white/10 hover:bg-amber/10 px-4 py-1.5 rounded-full mb-6 text-xs mb-2 tracking-wide">
            <MapPin size={12} />
            {project.location}
          </div>
          {/* Headline — italic "Greener" matches the design */}
          <h1 className="relative font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
            {project.name}
          </h1>

          <p className="relative text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            {project.description}
          </p>
          {/* Impact strip */}
          <div className="relative inline-flex gap-6 mt-6 text-white">
            <div className="hover:text-amber">
              <p className="text-2xl font-bold">
                {project.treesPlanted.toLocaleString()}
              </p>
              <p className="text-xs text-white/60 hover:text-amber/60">
                trees planted
              </p>
            </div>

            <div className="hover:text-amber">
              <p className="text-2xl font-bold">{percentage}%</p>
              <p className="text-xs text-white/60 hover:text-amber/60">
                complete
              </p>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        {/* <div className="max-w-4xl mx-auto bg-sage min-h-screen"> */}
        <div className="max-w-4xl mx-auto py-10 space-y-6">
          {/* ── Progress Card ── */}
          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-forest/5">
            {/* Header row */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-forest">Project Progress</h3>
              <span className="text-sm text-forest/50">
                <p>{percentage}% complete</p>
                <p className="font-serif text-1xl font-bold text-forest">
                  {project.treesPlanted.toLocaleString()}
                  <span className="text-forest/30 font-normal">
                    {" "}
                    / {project.treesGoal.toLocaleString()}
                  </span>
                </p>
              </span>
            </div>

            {/* Track */}
            <div className="relative h-2.5 bg-sage rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-forest rounded-full transition-all duration-700"
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between mt-4 text-xs text-forest/40">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} />
                Started {project.startDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Wind size={11} />
                {project.co2PerYear} kg CO₂ / tree / year
              </span>
            </div>
          </div>

          {/* ── Impact Stats ── */}
          <div className="grid grid-cols-2 gap-4">
            {project.impact.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-forest/5 flex flex-col justify-between"
              >
                <p className="font-serif font-bold text-2xl text-forest">
                  {item.value}
                </p>
                <p className="text-forest/40 text-xs mt-2 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── About ── */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-forest/5">
            <h2 className="font-serif text-xl font-bold text-forest mb-1">
              About this Project
            </h2>
            <div className="w-8 h-0.5 bg-amber rounded-full mb-5" />
            <div className="space-y-4">
              {project.longDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-forest/60 text-sm leading-7">
                  {para.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* ── Tree Species ── */}
          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-forest/5">
            <h2 className="font-serif text-xl font-bold text-forest mb-1">
              Tree Species
            </h2>
            <div className="w-8 h-0.5 bg-amber rounded-full mb-5" />
            <div className="flex flex-wrap gap-2">
              {project.species.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-2 bg-sage text-forest text-sm font-medium px-4 py-2 rounded-full ring-1 ring-forest/10"
                >
                  <Leaf size={12} className="text-forest/50" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="relative bg-forest rounded-2xl p-6 md:p-8 overflow-hidden">
            {/* Decorative ring in corner */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/5" />
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-white/5" />

            <div className="relative">
              <TreePine size={28} className="text-amber mb-4" />
              <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                Help us plant the next {remaining.toLocaleString()} trees
              </h2>
              <p className="text-white/50 text-sm mb-7 max-w-md leading-relaxed">
                Your donation goes directly to planting and maintaining trees in
                this project — GPS-tracked and verified.
              </p>
              <div>
                <Link
                  href="/plant-trees"
                  className="inline-flex items-center bg-amber text-forest px-5 py-2 rounded-full font-semibold"
                >
                  Plant a Tree
                  <ArrowLeft size={14} className="rotate-180" />
                </Link>

                <button className="border border-white/20 text-white px-5 py-2 rounded-full text-sm ml-3">
                  View Transparency
                </button>
              </div>
              <p className="text-xs text-white/40 mt-4">
                Trusted by donors • Verified impact • Ongoing monitoring
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
