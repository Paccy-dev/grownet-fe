"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trees } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/plant-trees", label: "Plant Trees" },
  { href: "/our-story", label: "Our Story" },
  { href: "/transparency", label: "Transparency" },
  { href: "/my-impact", label: "My Impact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <Trees className="w-6 h-6 text-amber" />
          <span className="font-serif text-xl font-semibold tracking-wide">
            GrowNet
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA button */}
        <Link
          href="/plant-trees"
          className="bg-amber text-forest font-semibold text-sm px-5 py-2 rounded-full hover:brightness-110 transition-all duration-200"
        >
          Donate Now
        </Link>
      </div>
    </nav>
  );
}
