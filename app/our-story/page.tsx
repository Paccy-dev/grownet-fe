import { Heart, Sprout, Globe, Users } from "lucide-react";

const chapters = [
  {
    icon: Heart,
    tag: "The Problem",
    title: "Morocco is Losing Its Forests",
    description:
      "Every year, thousands of hectares of Moroccan forest disappear due to drought, overgrazing, illegal logging, and wildfires. The Atlas Mountains, the Rif, and the Saharan edge are all under threat. Without intervention, entire ecosystems — and the communities that depend on them — face collapse.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    reverse: true,
  },
  {
    icon: Sprout,
    tag: "The Idea",
    title: "A Platform Built on Transparency",
    description:
      "In 2023, a small team of environmentalists, developers, and community leaders came together with one idea: what if every donor could see exactly where their trees were planted? GrowNet was born as a bridge between people who want to help and the communities doing the work on the ground.",
    image:
      "https://images.unsplash.com/photo-1528742909443-3158b0cddca7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: false,
  },
  {
    icon: Globe,
    tag: "The Mission",
    title: "Restore 1 Million Trees by 2030",
    description:
      "Our mission is simple: plant one million verified, GPS-tracked trees across Morocco's most vulnerable regions by 2030. Every tree is tied to a real donor, a real location, and a real community. We work with local cooperatives, forestry experts, and regional authorities to ensure every planting survives and thrives.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    reverse: true,
  },
  {
    icon: Users,
    tag: "The Community",
    title: "Powered by People Like You",
    description:
      "GrowNet is not a charity — it's a movement. Over 1,200 donors from 40 countries have already joined us. From individuals planting their first tree to corporations offsetting thousands of tonnes of CO₂, every contribution is tracked, verified, and celebrated. Together we are growing something that will outlast all of us.",
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
    <div className="bg-sage min-h-screen">
      {/* Page header */}
      <div className="bg-forest py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber text-sm font-medium uppercase tracking-widest mb-4">
            Who we are
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rooted in Purpose,
            <br />
            Growing for the Future
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            GrowNet started with a simple question: what if restoring nature
            could be as transparent and personal as sending a message to a
            friend?
          </p>
        </div>
      </div>

      {/* Chapters */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col gap-24">
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
            Plant Your First Tree
          </a>
        </div>
      </div>
    </div>
  );
}
