import Link from "next/link";
import { Lock, TreePine, BarChart3, Award } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Your Tree Registry",
    description: "See every tree you've planted with GPS location and species.",
  },
  {
    icon: BarChart3,
    title: "Live Impact Stats",
    description: "Track your total CO₂ offset and contribution over time.",
  },
  {
    icon: Award,
    title: "Digital Certificates",
    description: "Download certificates for every donation you've made.",
  },
];

export default function LoginPrompt() {
  return (
    <div className="bg-sage min-h-screen">
      <div className="bg-forest py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber text-sm font-medium uppercase tracking-widest mb-3">
            Your personal dashboard
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            My Impact
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Track your trees, your CO₂ offset, and your certificates — all in
            one place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — feature preview */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-bold text-forest">
              Sign in to see your impact
            </h2>
            <p className="text-forest/60 text-base leading-relaxed">
              Your personal dashboard shows everything about your contribution
              to Morocco&apos;s reforestation — live and fully transparent.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-forest/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-forest/55 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — login form */}
          <div className="bg-white rounded-3xl border border-forest/10 shadow-sm overflow-hidden">
            <div className="bg-forest px-8 py-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5 text-amber" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Welcome back
              </h2>
              <p className="text-white/60 text-sm mt-1">
                Sign in to access your dashboard
              </p>
            </div>

            <div className="p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-forest">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-forest/15 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-forest">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-forest/50 hover:text-forest transition-colors duration-200"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-forest/15 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest transition-colors duration-200"
                />
              </div>

              <button className="w-full bg-forest text-white font-semibold py-3.5 rounded-full hover:bg-forest-mid transition-all duration-200 text-sm mt-2">
                Sign In
              </button>

              <div className="relative flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-forest/10" />
                <span className="text-xs text-forest/40">or</span>
                <div className="flex-1 h-px bg-forest/10" />
              </div>

              <p className="text-center text-sm text-forest/60">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-forest hover:text-forest-mid transition-colors duration-200"
                >
                  Create one free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
