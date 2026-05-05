import Image from "next/image";

type StoryChapterProps = {
  number: string; // "01", "02", etc.
  tag: string; // "THE CRISIS", "THE MISSION", etc.
  title: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
  reverse?: boolean; // flips the image/text layout for alternating rows
};

export default function StoryChapter({
  number,
  tag,
  title,
  description,
  image,
  stats,
  reverse = false,
}: StoryChapterProps) {
  return (
    <section className="py-16 px-6">
      <div
        className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12
        ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-sm">
            {/* Tag label over the image */}
            <div className="absolute top-3 left-3 z-10 bg-white/90 text-forest text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
              {tag}
            </div>
            <div className="relative h-64 md:h-80 w-full">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2">
          {/* Chapter number with small icon */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-amber flex items-center justify-center text-white text-xs font-bold">
              🌱
            </span>
            <span className="text-forest/40 font-mono text-sm">{number}</span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl font-bold text-forest mb-4 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-forest/60 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Stats row — 2 small figures */}
          <div className="flex items-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif font-bold text-2xl text-forest">
                  {stat.value}
                </p>
                <p className="text-forest/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider line between chapters */}
      <div className="max-w-5xl mx-auto mt-16 border-b border-forest/10" />
    </section>
  );
}
