import Image from "next/image";
import { MapPin, TreePine } from "lucide-react";

// This defines the shape of data a ProjectCard expects
// We'll later replace the hardcoded data with Strapi API data
type ProjectCardProps = {
  image: string;
  status: "Active" | "Completed";
  name: string;
  location: string;
  description: string;
  treesPlanted: number;
  treesGoal: number;
};

export default function ProjectCard({
  image,
  status,
  name,
  location,
  description,
  treesPlanted,
  treesGoal,
}: ProjectCardProps) {
  // Calculate percentage for the progress bar
  const percentage = Math.round((treesPlanted / treesGoal) * 100);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image + Status Badge */}
      <div className="relative h-52 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
        {/* Badge positioned top-right over the image */}
        <span
          className={`absolute top-3 right-3 text-white text-xs font-medium px-3 py-1 rounded-full
          ${status === "Active" ? "bg-forest" : "bg-white text-forest border border-forest"}`}
        >
          {status}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Project Name */}
        <h3 className="font-serif font-bold text-forest text-lg mb-1">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-forest/60 text-sm mb-3">
          <MapPin size={13} />
          <span>{location}</span>
        </div>

        {/* Description — truncated to 2 lines */}
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{description}</p>

        {/* Trees planted + percentage */}
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="flex items-center gap-1 text-forest font-medium">
            <TreePine size={13} />
            {treesPlanted?.toLocaleString()} planted
          </span>
          <span className="text-forest/60">{percentage}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-sage rounded-full">
          <div
            className="h-1.5 bg-forest rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
