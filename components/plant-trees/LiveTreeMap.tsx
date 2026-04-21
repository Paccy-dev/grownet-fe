"use client";

import { useEffect, useRef } from "react";

const projectLocations = [
  {
    id: 1,
    name: "Atlas Cedar Restoration",
    location: "Ifrane, Middle Atlas",
    trees: 12400,
    lat: 33.5228,
    lng: -5.1128,
    species: "Atlas Cedar",
  },
  {
    id: 2,
    name: "Argan Forest Revival",
    location: "Souss-Massa, Agadir",
    trees: 8750,
    lat: 30.4202,
    lng: -9.5982,
    species: "Argan Tree",
  },
  {
    id: 4,
    name: "Saharan Edge Greening",
    location: "Draa-Tafilalet",
    trees: 6200,
    lat: 31.9314,
    lng: -4.4267,
    species: "Aleppo Pine",
  },
  {
    id: 5,
    name: "Coastal Pine Belt",
    location: "Larache, Atlantic Coast",
    trees: 9100,
    lat: 35.1932,
    lng: -6.1563,
    species: "Aleppo Pine",
  },
  {
    id: 3,
    name: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif",
    trees: 25000,
    lat: 35.1688,
    lng: -5.2636,
    species: "Holm Oak",
  },
  {
    id: 6,
    name: "High Atlas Juniper Revival",
    location: "Ouarzazate, High Atlas",
    trees: 14000,
    lat: 30.9189,
    lng: -6.8934,
    species: "Atlas Cedar",
  },
];

export default function LiveTreeMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet only on the client
    import("leaflet").then((L) => {
      // Fix default marker icons broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Create map centered on Morocco
      const map = L.map(mapRef.current!).setView([31.7917, -7.0926], 5);

      // Tile layer — OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Custom green marker icon
      const greenIcon = L.divIcon({
        className: "",
        html: `<div style="
          background:#1a3d2b;
          color:white;
          border-radius:50%;
          width:36px;
          height:36px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:16px;
          border:3px solid #d4a017;
          box-shadow:0 2px 8px rgba(0,0,0,0.3);
        ">🌳</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      // Add markers
      projectLocations.forEach((project) => {
        const marker = L.marker([project.lat, project.lng], {
          icon: greenIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div style="font-family:sans-serif;min-width:180px">
            <p style="font-weight:700;color:#1a3d2b;margin:0 0 4px">${project.name}</p>
            <p style="color:#666;font-size:12px;margin:0 0 6px">📍 ${project.location}</p>
            <p style="color:#666;font-size:12px;margin:0 0 2px">🌳 ${project.trees.toLocaleString()} trees planted</p>
            <p style="color:#666;font-size:12px;margin:0">🌿 Species: ${project.species}</p>
          </div>
        `);
      });

      mapInstanceRef.current = map;
    });

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mt-16">
      {/* Section header */}
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-forest/50 uppercase tracking-widest mb-3">
          Live Tree Map
        </p>
        <h2 className="font-serif text-4xl font-bold text-forest mb-3">
          Every Tree on the Map
        </h2>
        <p className="text-forest/60 text-base max-w-lg mx-auto">
          Explore where your donations come to life. Each marker represents real
          trees planted across Morocco&apos;s restoration regions.
        </p>
      </div>

      {/* Map container */}
      <div className="rounded-3xl overflow-hidden border border-forest/10 shadow-sm">
        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <div ref={mapRef} className="w-full h-[480px]" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
        {projectLocations.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-1.5 text-xs text-forest/60"
          >
            <span className="w-2 h-2 rounded-full bg-forest inline-block" />
            {p.name.split(" ").slice(0, 2).join(" ")}
          </div>
        ))}
      </div>
    </div>
  );
}
