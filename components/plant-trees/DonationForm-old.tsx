"use client";

import { useState } from "react";
import { TreePine, Minus, Plus, ArrowRight } from "lucide-react";

const treeSpecies = [
  {
    id: 1,
    name: "Atlas Cedar",
    scientificName: "Cedrus atlantica",
    co2PerYear: "22 kg",
    pricePerTree: 5,
    description: "Iconic mountain species, home to Barbary macaques.",
  },
  {
    id: 2,
    name: "Argan Tree",
    scientificName: "Argania spinosa",
    co2PerYear: "18 kg",
    pricePerTree: 7,
    description: "UNESCO protected. Supports Berber communities.",
  },
  {
    id: 3,
    name: "Aleppo Pine",
    scientificName: "Pinus halepensis",
    co2PerYear: "15 kg",
    pricePerTree: 4,
    description: "Fast-growing, ideal for reforesting burned slopes.",
  },
  {
    id: 4,
    name: "Holm Oak",
    scientificName: "Quercus ilex",
    co2PerYear: "28 kg",
    pricePerTree: 6,
    description: "Long-lived hardwood, exceptional carbon capture.",
  },
];

const projects = [
  { id: 1, name: "Atlas Cedar Restoration", location: "Ifrane, Middle Atlas" },
  { id: 2, name: "Argan Forest Revival", location: "Souss-Massa, Agadir" },
  { id: 4, name: "Saharan Edge Greening", location: "Draa-Tafilalet" },
  { id: 5, name: "Coastal Pine Belt", location: "Larache, Atlantic Coast" },
];

export default function DonationForm() {
  const [selectedSpecies, setSelectedSpecies] = useState(treeSpecies[0]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [treeCount, setTreeCount] = useState(5);

  const total = selectedSpecies.pricePerTree * treeCount;
  const co2 = parseInt(selectedSpecies.co2PerYear) * treeCount;

  function increment() {
    setTreeCount((c) => Math.min(c + 1, 500));
  }

  function decrement() {
    setTreeCount((c) => Math.max(c - 1, 1));
  }

  return (
    <div className="bg-white rounded-3xl border border-forest/10 shadow-sm overflow-hidden">
      {/* Form header */}
      <div className="bg-forest px-8 py-6">
        <h2 className="font-serif text-2xl font-bold text-white mb-1">
          Plant Your Trees
        </h2>
        <p className="text-white/60 text-sm">
          Every tree is GPS-tagged and assigned to your profile.
        </p>
      </div>

      <div className="p-8 flex flex-col gap-8">
        {/* Step 1 — Choose species */}
        <div>
          <label className="block text-sm font-semibold text-forest uppercase tracking-widest mb-4">
            01 — Choose a Species
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {treeSpecies.map((species) => (
              <button
                key={species.id}
                onClick={() => setSelectedSpecies(species)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  selectedSpecies.id === species.id
                    ? "border-forest bg-forest/5"
                    : "border-forest/10 hover:border-forest/30"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-forest text-sm">
                      {species.name}
                    </p>
                    <p className="text-forest/40 text-xs italic mt-0.5">
                      {species.scientificName}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold text-amber bg-amber/10 px-2 py-1 rounded-full">
                    ${species.pricePerTree}/tree
                  </span>
                </div>
                <p className="text-forest/55 text-xs mt-2 leading-relaxed">
                  {species.description}
                </p>
                <p className="text-forest/40 text-xs mt-1.5">
                  ↑ {species.co2PerYear} CO₂ captured / year
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Choose project */}
        <div>
          <label className="block text-sm font-semibold text-forest uppercase tracking-widest mb-4">
            02 — Choose a Project
          </label>
          <div className="flex flex-col gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                  selectedProject.id === project.id
                    ? "border-forest bg-forest/5"
                    : "border-forest/10 hover:border-forest/30"
                }`}
              >
                <div>
                  <p className="font-semibold text-forest text-sm">
                    {project.name}
                  </p>
                  <p className="text-forest/45 text-xs mt-0.5">
                    {project.location}
                  </p>
                </div>
                {selectedProject.id === project.id && (
                  <span className="w-4 h-4 rounded-full bg-forest flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 — Number of trees */}
        <div>
          <label className="block text-sm font-semibold text-forest uppercase tracking-widest mb-4">
            03 — Number of Trees
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={decrement}
              className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-all duration-200 text-forest"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-serif text-4xl font-bold text-forest w-16 text-center">
              {treeCount}
            </span>
            <button
              onClick={increment}
              className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-all duration-200 text-forest"
            >
              <Plus className="w-4 h-4" />
            </button>
            <span className="text-forest/50 text-sm ml-2">
              Max 500 per donation
            </span>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-sage rounded-2xl p-5 flex flex-col gap-3">
          <p className="text-xs font-semibold text-forest/50 uppercase tracking-widest">
            Donation Summary
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-forest/60">Species</span>
            <span className="font-medium text-forest">
              {selectedSpecies.name}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-forest/60">Project</span>
            <span className="font-medium text-forest">
              {selectedProject.name}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-forest/60">Trees</span>
            <span className="font-medium text-forest">{treeCount}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-forest/60">CO₂ / year</span>
            <span className="font-medium text-forest">{co2} kg</span>
          </div>
          <div className="border-t border-forest/10 pt-3 flex items-center justify-between">
            <span className="font-semibold text-forest">Total</span>
            <span className="font-serif text-2xl font-bold text-forest">
              ${total}
            </span>
          </div>
        </div>

        {/* Submit button */}
        <button className="w-full bg-forest text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-forest-mid transition-all duration-200 text-base">
          <TreePine className="w-5 h-5 text-amber" />
          Plant {treeCount} {treeCount === 1 ? "Tree" : "Trees"} — ${total}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
