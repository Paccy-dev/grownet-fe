import { Trees, Wind, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Trees,
    value: "47,000+",
    label: "Trees Planted",
    color: "text-forest",
  },
  {
    icon: Wind,
    value: "120 T",
    label: "kg CO₂ Captured",
    color: "text-forest",
  },
  {
    icon: MapPin,
    value: "8",
    label: "Regions Covered",
    color: "text-forest",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Donors Worldwide",
    color: "text-forest",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-white py-16 border-b border-sage">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-sm font-medium text-forest/50 uppercase tracking-widest mb-10">
          Our impact so far
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>

                {/* Number */}
                <span className="font-serif text-2xl font-bold text-forest">
                  {stat.value}
                </span>

                {/* Label */}
                <span className="text-sm text-forest/60 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
