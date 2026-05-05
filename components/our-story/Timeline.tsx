import { TreePine } from "lucide-react";

type TimelineEvent = {
  year: string;
  description: string;
};

const events: TimelineEvent[] = [
  { year: "2021", description: "GrowNet founded in Rabat" },
  { year: "2022", description: "First 5,000 trees planted in Middle Atlas" },
  { year: "2023", description: "Argan Forest Revival project launched" },
  { year: "2024", description: "Draa Valley Oasis restoration completed" },
  { year: "2025", description: "30,000+ trees milestone reached" },
];

export default function Timeline() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        {/* Section heading */}
        <h2 className="font-serif text-3xl font-bold text-forest text-center mb-12">
          Our Journey So Far
        </h2>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line running through all items */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-forest/15" />

          <div className="space-y-10">
            {events.map((event, index) => {
              // Alternate items left and right like the design
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center gap-6
                    ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Text side */}
                  <div
                    className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}
                  >
                    <p className="text-sm font-bold text-forest">
                      {event.year}
                    </p>
                    <p className="text-xs text-forest/50 mt-0.5">
                      {event.description}
                    </p>
                  </div>

                  {/* Center dot with icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-forest flex items-center justify-center shadow-sm z-10">
                    <TreePine size={14} className="text-white" />
                  </div>

                  {/* Empty space on the other side to balance layout */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
