import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, TreePine, ArrowLeft, Leaf } from "lucide-react";

// Matches your exact projects data
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
    co2PerYear: 35,
    startDate: "March 2022",
    species: ["Atlas Cedar", "Holm Oak"],
    longDescription: `The Atlas Cedar (Cedrus atlantica) is Morocco's national tree and one of the most 
      important forest species in North Africa. Over the past century, more than 75% of Atlas Cedar 
      forests have disappeared due to overgrazing, illegal logging, and climate change.

      Our reforestation project works directly with local mountain communities to plant, nurture, 
      and monitor cedar seedlings across 3 key sites in the Middle Atlas. Every tree is GPS-tagged 
      and tracked in our registry, giving donors full visibility into where their trees grow.

      Local families are employed as forest guardians — protecting the young trees from grazing 
      animals and monitoring growth progress monthly.`,
    impact: [
      { label: "Families Employed", value: "24" },
      { label: "Hectares Restored", value: "48" },
      { label: "kg CO₂ Captured", value: "946K" },
      { label: "Water Sources Protected", value: "6" },
    ],
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
    co2PerYear: 20,
    startDate: "June 2022",
    species: ["Argan", "Carob"],
    longDescription: `The Argan tree (Argania spinosa) is found nowhere else on Earth. Endemic to 
      Morocco's Souss-Massa region, it produces the world-famous Argan oil and plays a critical 
      role in preventing desertification along Morocco's southern edge.

      Women's cooperatives in the Souss-Massa region are at the heart of this project. We partner 
      with 8 cooperatives employing over 200 women who harvest Argan sustainably while planting 
      new seedlings at the forest edge.

      Each donated tree is registered with GPS coordinates and monitored quarterly with photo 
      updates shared directly with donors through their impact dashboard.`,
    impact: [
      { label: "Women Employed", value: "200+" },
      { label: "Cooperatives Partner", value: "8" },
      { label: "kg CO₂ Captured", value: "850K" },
      { label: "Hectares Restored", value: "72" },
    ],
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
    co2PerYear: 28,
    startDate: "January 2021",
    species: ["Holm Oak", "Aleppo Pine"],
    longDescription: `The Rif mountains suffered devastating wildfires that wiped out thousands of 
      hectares of native forest. This completed project successfully replanted 25,000 trees across 
      fire-damaged slopes, restoring biodiversity corridors and preventing further soil erosion.

      Working alongside local forestry cooperatives, we employed over 150 workers from Chefchaouen 
      and surrounding villages throughout the planting and maintenance phases.

      This project reached 100% of its goal and is now in a 3-year monitoring phase to ensure 
      long-term survival of all planted trees.`,
    impact: [
      { label: "Workers Employed", value: "150+" },
      { label: "Hectares Restored", value: "95" },
      { label: "kg CO₂ Captured", value: "1.2M" },
      { label: "Species Reintroduced", value: "8" },
    ],
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
    co2PerYear: 19,
    startDate: "April 2023",
    species: ["Date Palm", "Carob", "Aleppo Pine"],
    longDescription: `The Saharan edge is one of the most fragile ecosystems on Earth. Every year 
      the desert advances northward, swallowing villages, farmland, and ancient oases that 
      communities have depended on for centuries.

      This active project focuses on creating a living green barrier using drought-resistant species 
      that can survive extreme heat and minimal rainfall. Local oasis guardians are trained and 
      employed to maintain the young trees through their critical first years.

      With your support we can plant 18,000 trees and push back the desert for generations to come.`,
    impact: [
      { label: "Oasis Sites Protected", value: "4" },
      { label: "Families Supported", value: "90" },
      { label: "kg CO₂ Captured", value: "312K" },
      { label: "Hectares Covered", value: "28" },
    ],
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
    co2PerYear: 22,
    startDate: "September 2022",
    species: ["Aleppo Pine", "Stone Pine"],
    longDescription: `Morocco's Atlantic coastline is under constant threat from coastal erosion, 
      shifting sand dunes, and storm damage. The Larache region has seen entire stretches of 
      farmland swallowed by advancing dunes over the past two decades.

      Our Coastal Pine Belt project plants a continuous line of Aleppo and Stone Pines to anchor 
      the dunes, reduce wind erosion, and provide a natural windbreak for coastal villages and 
      agricultural land behind the belt.

      Local fishing communities and coastal farmers are directly involved in planting and 
      maintaining the trees, creating seasonal employment and long-term environmental benefits.`,
    impact: [
      { label: "Km of Coast Protected", value: "12" },
      { label: "Families Benefiting", value: "340" },
      { label: "kg CO₂ Captured", value: "498K" },
      { label: "Dune Area Stabilized", value: "18ha" },
    ],
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
    co2PerYear: 25,
    startDate: "May 2021",
    species: ["Atlas Juniper", "Atlas Cedar"],
    longDescription: `The ancient juniper forests of the High Atlas are among the oldest living 
      ecosystems in Morocco. Some individual trees are over 1,000 years old. Yet overgrazing 
      and climate stress have pushed these forests to the brink of collapse.

      This completed project successfully restored 14,000 juniper and cedar trees across 
      critical watershed zones above Ouarzazate — protecting the water supply for hundreds 
      of thousands of people in the south of Morocco.

      The project is now in its final monitoring phase with survival rates exceeding 89% — 
      one of the highest in our portfolio.`,
    impact: [
      { label: "Watershed Protected", value: "3" },
      { label: "Survival Rate", value: "89%" },
      { label: "kg CO₂ Captured", value: "770K" },
      { label: "Hectares Restored", value: "52" },
    ],
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) notFound();

  const percentage = Math.round(
    (project.treesPlanted / project.treesGoal) * 100,
  );

  return (
    <main className="min-h-screen bg-sage">
      {/* ── Hero Image ── */}
      <div className="relative h-72 md:h-96 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-forest/50" />

        {/* Top bar — back button + status badge */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          <span
            className={`text-xs font-medium px-3 py-1 rounded-full
            ${
              project.status === "Active"
                ? "bg-forest text-white"
                : "bg-white text-forest"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Title + location over image */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex items-center gap-1.5 text-white/70 text-sm mb-2">
            <MapPin size={14} />
            {project.location}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {/* ── Progress Card ── */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-1.5 text-forest font-semibold text-sm">
              <TreePine size={15} />
              {project.treesPlanted.toLocaleString()} of{" "}
              {project.treesGoal.toLocaleString()} trees planted
            </span>
            <span className="text-forest font-bold">{percentage}%</span>
          </div>
          <div className="w-full h-3 bg-sage rounded-full">
            <div
              className="h-3 bg-forest rounded-full transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-xs text-forest/50">
            <span>Started {project.startDate}</span>
            <span>{project.co2PerYear}kg CO₂ captured per tree/year</span>
          </div>
        </div>

        {/* ── Impact Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.impact.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-4 shadow-sm text-center"
            >
              <p className="font-serif font-bold text-2xl text-forest">
                {item.value}
              </p>
              <p className="text-forest/50 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ── About ── */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-forest mb-4">
            About this Project
          </h2>
          {project.longDescription.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-forest/60 text-sm leading-relaxed mb-4 last:mb-0"
            >
              {para.trim()}
            </p>
          ))}
        </div>

        {/* ── Species ── */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-forest mb-4">
            Tree Species
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.species.map((s) => (
              <span
                key={s}
                className="flex items-center gap-1.5 bg-sage text-forest text-sm px-4 py-2 rounded-full"
              >
                <Leaf size={13} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-forest rounded-2xl p-8 text-center text-white">
          <h2 className="font-serif text-2xl font-bold mb-2">
            Plant a Tree in this Project
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Your donation goes directly to planting and maintaining trees here.
          </p>
          <Link
            href="/plant-trees"
            className="inline-flex items-center gap-2 bg-amber text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <TreePine size={16} />
            Donate to this Project
          </Link>
        </div>
      </div>
    </main>
  );
}
