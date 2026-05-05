"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { TreePine, Loader2 } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // This will call our Strapi backend when we connect it
      // For now it simulates a successful login
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Strapi returns error details in data.error.message
        setError(data?.error?.message || "Invalid credentials");
        return;
      }

      // Save user + JWT token
      login(data.jwt, {
        id: data.user.id,
        email: data.user.email,
        username: data.user.username,
      });

      // Send to dashboard
      router.push("/my-impact");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-sage flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 text-forest font-bold text-xl mb-8">
          <TreePine size={24} />
          <span className="font-serif">GrowNet</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="font-serif text-2xl font-bold text-forest mb-1">
            Welcome back
          </h1>
          <p className="text-forest/50 text-sm mb-6">
            Sign in to track your impact
          </p>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-xs font-medium text-forest/60 mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-forest placeholder:text-forest/30 outline-none focus:border-forest transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-medium text-forest/60 mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-forest placeholder:text-forest/30 outline-none focus:border-forest transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-forest text-white py-3 rounded-xl font-semibold text-sm hover:bg-forest-mid transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-xs text-forest/40 mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-forest font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
