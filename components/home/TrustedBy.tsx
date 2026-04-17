const partners = [
  { name: "OCP Group", abbr: "OCP" },
  { name: "Attijariwafa Bank", abbr: "AWB" },
  { name: "Maroc Telecom", abbr: "MT" },
  { name: "ONCF", abbr: "ONCF" },
  { name: "Royal Air Maroc", abbr: "RAM" },
  { name: "Bank of Africa", abbr: "BOA" },
];

export default function TrustedBy() {
  return (
    <section className="bg-sage py-14 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="text-center text-sm font-medium text-forest/40 uppercase tracking-widest mb-10">
          Trusted by leading Moroccan organizations
        </p>

        {/* Logos strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              title={partner.name}
              className="flex items-center justify-center w-24 h-12 rounded-lg bg-white border border-forest/10 hover:border-forest/30 hover:shadow-sm transition-all duration-200 cursor-default"
            >
              <span className="font-serif font-bold text-forest/70 text-sm tracking-wide">
                {partner.abbr}
              </span>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-center text-xs text-forest/40 mt-8">
          Join 1,200+ donors and organizations restoring Morocco&apos;s forests
        </p>
      </div>
    </section>
  );
}
