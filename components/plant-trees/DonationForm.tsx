"use client";

import { useState } from "react";
import { Leaf, ShieldCheck } from "lucide-react";

// Preset donation amounts shown as buttons
const AMOUNTS = [10, 25, 50, 100, 250, 500];

// Projects the donor can pick from
// Later this comes from Strapi
const PROJECTS = [
  {
    id: 1,
    name: "Atlas Cedar Reforestation",
    location: "Middle Atlas, Morocco",
  },
  { id: 2, name: "Argan Forest Revival", location: "Souss-Massa, Morocco" },
];

// Tree species with their details
// Later this comes from Strapi
const SPECIES = [
  {
    id: 1,
    name: "Atlas Cedar",
    description: "Morocco's majestic national tree.",
    co2: 35,
    price: 12,
  },
  {
    id: 2,
    name: "Argan",
    description: "Endemic to Morocco, produces precious oil.",
    co2: 20,
    price: 8,
  },
  {
    id: 3,
    name: "Olive",
    description: "Ancient Mediterranean tree.",
    co2: 18,
    price: 6,
  },
  {
    id: 4,
    name: "Carob",
    description: "Drought-resistant, providing food.",
    co2: 22,
    price: 7,
  },
  {
    id: 5,
    name: "Date Palm",
    description: "Oasis guardian for communities.",
    co2: 19,
    price: 10,
  },
  {
    id: 6,
    name: "Holm Oak",
    description: "Evergreen oak ideal for reforesting Atlas.",
    co2: 28,
    price: 11,
  },
];

export default function DonationForm() {
  // Track whether user wants monthly or one-time donation
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  // Selected donation amount
  const [amount, setAmount] = useState(25);

  // Custom amount typed by user
  const [customAmount, setCustomAmount] = useState("");

  // Selected project ID
  const [selectedProject, setSelectedProject] = useState(1);

  // Selected species ID
  const [selectedSpecies, setSelectedSpecies] = useState(1);

  // The actual amount — custom input overrides preset buttons
  const activeAmount = customAmount ? Number(customAmount) : amount;

  // Find the selected species to calculate impact
  const species = SPECIES.find((s) => s.id === selectedSpecies)!;

  // How many trees can they plant with this amount?
  const treesPlanted = species ? Math.floor(activeAmount / species.price) : 0;

  // CO₂ offset based on trees and species
  const co2Offset = treesPlanted * species.co2;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Toggle: Give Monthly / Give Once */}
      <div className="flex justify-center mb-6">
        <div className="bg-sage rounded-full p-1 flex gap-1">
          {(["monthly", "once"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFrequency(f)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  frequency === f
                    ? "bg-forest text-white"
                    : "text-forest/60 hover:text-forest"
                }`}
            >
              <Leaf size={13} />
              {f === "monthly" ? "Give Monthly" : "Give Once"}
            </button>
          ))}
        </div>
      </div>

      {/* Amount Selector */}
      <p className="text-sm font-medium text-forest mb-3">
        Choose the Amount to Give
      </p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {AMOUNTS.map((a) => (
          <button
            key={a}
            onClick={() => {
              setAmount(a);
              setCustomAmount("");
            }}
            className={`py-2.5 rounded-xl text-sm font-medium border transition-colors
              ${
                amount === a && !customAmount
                  ? "bg-forest text-white border-forest"
                  : "bg-white text-forest border-gray-200 hover:border-forest"
              }`}
          >
            ${a}
          </button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className="flex items-center border border-gray-200 rounded-xl px-4 py-2.5 mb-6 focus-within:border-forest transition-colors">
        <span className="text-forest/50 mr-2 text-sm">$</span>
        <input
          type="number"
          placeholder="Custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setAmount(0);
          }}
          className="flex-1 outline-none text-sm text-forest placeholder:text-forest/30"
        />
      </div>

      {/* Project Selector */}
      <p className="text-sm font-medium text-forest mb-3 flex items-center gap-1">
        <Leaf size={13} /> Select a Project
      </p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedProject(p.id)}
            className={`text-left p-3 rounded-xl border text-sm transition-colors
              ${
                selectedProject === p.id
                  ? "border-forest bg-forest/5"
                  : "border-gray-200 hover:border-forest/50"
              }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* Colored dot indicator */}
              <span className="w-5 h-5 rounded-full bg-forest/20 flex items-center justify-center text-xs text-forest font-bold">
                {p.name[0]}
              </span>
              <span className="font-medium text-forest">{p.name}</span>
            </div>
            <p className="text-forest/50 text-xs ml-7">{p.location}</p>
          </button>
        ))}
      </div>

      {/* Species Selector */}
      <p className="text-sm font-medium text-forest mb-3 flex items-center gap-1">
        <Leaf size={13} /> Choose Tree Species
      </p>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {SPECIES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedSpecies(s.id)}
            className={`text-left p-3 rounded-xl border text-xs transition-colors
              ${
                selectedSpecies === s.id
                  ? "border-forest bg-forest/5"
                  : "border-gray-200 hover:border-forest/50"
              }`}
          >
            <p className="font-semibold text-forest mb-1">{s.name}</p>
            <p className="text-forest/50 line-clamp-2 mb-2">{s.description}</p>
            <div className="flex justify-between">
              <span className="text-forest/60">{s.co2}kg CO₂/yr</span>
              <span className="text-forest font-medium">${s.price}/tree</span>
            </div>
          </button>
        ))}
      </div>

      {/* Your Impact Summary */}
      <div className="mb-6">
        <p className="text-sm font-medium text-forest mb-3 flex items-center gap-1">
          🌱 Your Impact
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-sage rounded-xl p-3 text-center">
            <p className="text-forest font-bold text-lg">{treesPlanted}</p>
            <p className="text-forest/50 text-xs">Trees Planted</p>
          </div>
          <div className="bg-sage rounded-xl p-3 text-center">
            <p className="text-forest font-bold text-lg">
              {co2Offset} <span className="text-xs">kg</span>
            </p>
            <p className="text-forest/50 text-xs">CO₂/year offset</p>
          </div>
          <div className="bg-sage rounded-xl p-3 text-center">
            <p className="text-amber font-bold text-lg">${activeAmount}</p>
            <p className="text-forest/50 text-xs">
              {frequency === "once" ? "One Time" : "Per Month"}
            </p>
          </div>
        </div>
      </div>

      {/* Complete Donation Button */}
      <button className="w-full bg-forest text-white py-4 rounded-xl font-semibold text-base hover:bg-forest-mid transition-colors">
        Complete Donation — ${activeAmount}
      </button>

      {/* Security note */}
      <p className="text-center text-xs text-forest/40 mt-3 flex items-center justify-center gap-1">
        <ShieldCheck size={12} />
        Secure payment · This is a demo — no real payment processed.
      </p>
    </div>
  );
}
