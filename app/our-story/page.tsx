import StoryChapter from "@/components/our-story/StoryChapter";
import Timeline from "@/components/our-story/Timeline";
import Link from "next/link";
import { TreePine } from "lucide-react";

// All 4 chapters from the design
const chapters = [
  {
    number: "01",
    tag: "THE CRISIS",
    title: "A Land Crying for Help",
    description:
      "Morocco loses over 30,000 hectares of forest every year to desertification, wildfires, and overgrazing. Ancient Atlas Cedar forests that once blanketed the mountains are vanishing. Oasis communities in the south watch the Sahara advance toward their homes.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
    stats: [
      { value: "30K+", label: "Hectares lost per year" },
      { value: "75%", label: "Cedar forests declined" },
    ],
    reverse: false,
  },
  {
    number: "02",
    tag: "THE MISSION",
    title: "From One Seed, a Movement",
    description:
      "GrowNet was born from a simple idea: what if every person, every company could plant a tree in Morocco and watch it grow? We partnered with local nurseries, ecologists, and rural cooperatives to build a transparent, tech-driven reforestation network.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
    stats: [
      { value: "3", label: "Active regions" },
      { value: "30K+", label: "Trees in ground" },
    ],
    reverse: true,
  },
  {
    number: "03",
    tag: "THE PEOPLE",
    title: "Communities at the Heart",
    description:
      "Every tree planted creates work for local families. Women's cooperatives in Souss-Massa harvest Argan sustainably. Mountain communities in the Atlas maintain cedar nurseries. Oasis guardians in Draa-Tafilalet tend date palms that hold back the desert.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600&auto=format&fit=crop", // people/community
    stats: [
      { value: "120+", label: "Families supported" },
      { value: "15", label: "Women cooperatives" },
    ],
    reverse: false,
  },
  {
    number: "04",
    tag: "THE FUTURE",
    title: "A Greener Morocco by 2030",
    description:
      "Our goal: 1 million trees across Morocco by 2030. With your support, we're building carbon sinks, restoring biodiversity corridors, and creating green jobs. Every donation is tracked, every tree is GPS-registered, every gram of CO₂ is measured.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    stats: [
      { value: "1M", label: "Trees by 2030" },
      { value: "711T", label: "CO₂ captured so far" },
    ],
    reverse: true,
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
    <main className="min-h-screen bg-sage">
      {/* ── Hero Banner ── */}
      <section className="relative bg-forest text-white text-center py-20 px-4 overflow-hidden">
        {/* Subtle floating tree icons in the background */}
        <div className="absolute inset-0 flex flex-wrap gap-16 justify-center items-center opacity-5 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <TreePine key={i} size={48} className="text-white" />
          ))}
        </div>

        {/* Label */}
        <p className="relative text-white/50 text-xs uppercase tracking-widest mb-4">
          The GrowNet Story
        </p>

        {/* Headline */}
        <h1 className="relative font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
          Every Forest Begins
          <br />
          <em>With a Single Seed</em>
        </h1>

        <p className="relative text-white/50 text-sm max-w-sm mx-auto">
          Scroll through the chapters of Morocco's reforestation journey — from
          barren earth to thriving forests.
        </p>

        {/* Scroll indicator line */}
        <div className="relative mt-10 w-px h-10 bg-white/20 mx-auto" />
      </section>

      {/* ── Story Chapters ── */}
      {chapters.map((chapter) => (
        <StoryChapter key={chapter.number} {...chapter} />
      ))}

      {/* ── Timeline ── */}
      <div className="bg-white">
        <Timeline />
      </div>

      {/* Values section */}
      <div className="bg-forest py-20 px-6 mb-10">
        <div className="max-w-7xl mx-auto">
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

      {/* ── CTA Banner ── */}

      <section className="text-center py-20 px-4">
        <h2 className="text-forest font-serif text-3xl md:text-4xl font-bold mb-4">
          Write the Next Chapter
        </h2>
        <p className="text-forest text-sm max-w-sm mx-auto mb-8">
          Your tree is the next line in Morocco's reforestation story. Join
          1,920 donors making it happen.
        </p>
        <Link
          href="/plant-trees"
          className="text-forest inline-flex items-center gap-2 bg-amber px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Plant Your Tree →
        </Link>
      </section>
    </main>
  );
}
