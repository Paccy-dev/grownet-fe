import StoryChapter from "@/components/our-story/StoryChapter";
import Timeline from "@/components/our-story/Timeline";
import Link from "next/link";
import { TreePine } from "lucide-react";
import { Heart, Sprout, Globe, Users, Leaf } from "lucide-react";

// All 4 chapters from the design
const chapters = [
  {
    icon: Heart,
    number: "01",
    tag: "THE CRISIS",
    title: "A Land Crying for Help",
    description:
      "Morocco loses over 30,000 hectares of forest every year to desertification, wildfires, and overgrazing. Ancient Atlas Cedar forests that once blanketed the mountains are vanishing. Oasis communities in the south watch the Sahara advance toward their homes.",
    stats: [
      { value: "30K+", label: "Hectares lost per year" },
      { value: "75%", label: "Cedar forests declined" },
    ],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    reverse: true,
  },
  {
    icon: Sprout,
    number: "02",
    tag: "THE MISSION",
    title: "From One Seed, a Movement",
    description:
      "GrowNet was born from a simple idea: what if every person, every company could plant a tree in Morocco and watch it grow? We partnered with local nurseries, ecologists, and rural cooperatives to build a transparent, tech-driven reforestation network.",
    stats: [
      { value: "3", label: "Active regions" },
      { value: "30K+", label: "Trees in ground" },
    ],
    image:
      "https://images.unsplash.com/photo-1528742909443-3158b0cddca7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: false,
  },
  {
    icon: Globe,
    number: "03",
    tag: "THE PEOPLE",
    title: "Communities at the Heart",
    description:
      "Every tree planted creates work for local families. Women's cooperatives in Souss-Massa harvest Argan sustainably. Mountain communities in the Atlas maintain cedar nurseries. Oasis guardians in Draa-Tafilalet tend date palms that hold back the desert.",
    stats: [
      { value: "120+", label: "Families supported" },
      { value: "15", label: "Women cooperatives" },
    ],

    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    reverse: true,
  },
  {
    icon: Users,
    number: "04",
    tag: "THE FUTURE",
    title: "A Greener Morocco by 2030",
    description:
      "Our goal: 1 million trees across Morocco by 2030. With your support, we're building carbon sinks, restoring biodiversity corridors, and creating green jobs. Every donation is tracked, every tree is GPS-registered, every gram of CO₂ is measured.",
    stats: [
      { value: "1M", label: "Trees by 2030" },
      { value: "711T", label: "CO₂ captured so far" },
    ],
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    reverse: false,
  },
];

const teamValues = [
  {
    value: "Transparency",
    description: "Every dirham is accounted for and publicly reported.",
  },
  {
    value: "Community first",
    description: "Local people lead every planting project.",
  },
  {
    value: "Science-backed",
    description: "Species selection guided by forestry experts.",
  },
  {
    value: "Long-term thinking",
    description: "We plant for the next century, not the next headline.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <div className="bg-sage min-h-screen">
        {/* ── Hero Banner ── */}
        <section className="relative bg-forest text-white text-center py-20 px-4 overflow-hidden">
          {/* Subtle tree pattern in background */}
          {/* <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[120px] flex flex-wrap gap-8 justify-center items-center overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}>🌳</span>
            ))}
          </div> */}

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs px-4 py-1.5 rounded-full mb-6">
            <Leaf size={12} />
            The Grownet Story
          </div>

          {/* Headline — italic "Greener" matches the design */}
          <h1 className="relative font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
            Every Forest Begins,
            <br />
            With a Single Seed
          </h1>

          <p className="relative text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            Scroll through the chapters of Morocco's reforestation journey —
            from barren earth to thriving forests.
          </p>
        </section>
        {/* Chapters */}
        <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-24">
          {chapters.map((chapter) => {
            const Icon = chapter.icon;
            return (
              <div
                key={chapter.tag}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  chapter.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="flex flex-col gap-5">
                  <div className="inline-flex items-center gap-2 w-fit">
                    <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber" />
                    </div>
                    <span className="text-sm font-semibold text-forest/50 uppercase tracking-widest">
                      {chapter.tag}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl font-bold text-forest leading-tight">
                    {chapter.title}
                  </h2>
                  <p className="text-forest/65 text-base leading-relaxed">
                    {chapter.description}
                  </p>

                  {/* Stats row — 2 small figures */}
                  <div className="flex items-center gap-8">
                    {chapter.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-serif font-bold text-2xl text-forest">
                          {stat.value}
                        </p>
                        <p className="text-forest/50 text-xs mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="rounded-3xl overflow-hidden h-72 lg:h-96">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Values section */}
        <div className="bg-forest py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-amber text-sm font-medium uppercase tracking-widest mb-3">
                What guides us
              </p>
              <h2 className="font-serif text-4xl font-bold text-white">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamValues.map((item) => (
                <div
                  key={item.value}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
                >
                  <h3 className="font-serif text-xl font-bold text-amber mb-3">
                    {item.value}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-forest mb-4">
              Ready to be part of the story?
            </h2>
            <p className="text-forest/60 mb-8 text-base">
              Every tree you plant becomes part of Morocco&apos;s recovery — and
              part of your story too.
            </p>
            <a
              href="/plant-trees"
              className="inline-flex items-center gap-2 bg-forest text-white font-semibold px-8 py-4 rounded-full hover:bg-forest-mid transition-all duration-200 text-base"
            >
              Plant Your First Tree →
            </a>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="bg-white">
          <Timeline />
        </div>
      </div>
    </>
  );
}
