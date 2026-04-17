import Link from "next/link";
import { Trees } from "lucide-react";

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/plant-trees", label: "Plant Trees" },
  { href: "/our-story", label: "Our Story" },
  { href: "/transparency", label: "Transparency" },
  { href: "/my-impact", label: "My Impact" },
];

const promises = [
  "100% of donations go to planting",
  "Full financial transparency",
  "GPS-verified tree location",
  "Annual impact reports",
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Trees className="w-5 h-5 text-amber" />
            <span className="font-serif text-lg font-semibold">GrowNet</span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60">
            Restoring Morocco&apos's forests, one tree at a time - connecting
            donors, communities, and nature through transparent technology.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-amber transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Promises */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Our Promises
          </h4>
          <ul className="flex flex-col gap-2">
            {promises.map((promise) => (
              <li
                key={promise}
                className="flex items-start gap-2 text-sm text-white/60"
              >
                <span className="text-amber mt-0.5">✓</span>

                {promise}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} GrowNet. All rights reserved.
          </span>
          <span>Made with ❤️ for the planet</span>
        </div>
      </div>
    </footer>
  );
}
