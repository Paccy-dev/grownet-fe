"use client";

import { useEffect, useRef, useState } from "react";

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
    id: 3,
    name: "Rif Mountain Reforestation",
    location: "Chefchaouen, Rif",
    trees: 25000,
    lat: 35.1688,
    lng: -5.2636,
    species: "Holm Oak",
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
  const mapInstanceRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let map: any;

    import("leaflet").then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      map = L.map(mapRef.current!).setView([31.7917, -7.0926], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const greenIcon = L.divIcon({
        className: "",
        html: `<div style="
          background:#1a3d2b;
          color:white;
          border-radius:999px;
          width:38px;
          height:38px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:14px;
          border:2px solid #d4a017;
          box-shadow:0 4px 12px rgba(0,0,0,0.25);
        ">🌳</div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

      projectLocations.forEach((p) => {
        const marker = L.marker([p.lat, p.lng], { icon: greenIcon }).addTo(map);

        const size = p.trees > 20000 ? "large" : "normal";

        marker.bindPopup(`
          <div class="text-sm font-sans min-w-[200px]">
            <div class="font-bold text-[#1a3d2b] mb-1">${p.name}</div>
            <div class="text-gray-500 text-xs mb-2">📍 ${p.location}</div>

            <div class="flex items-center justify-between text-xs mb-1">
              <span>🌳 Trees</span>
              <span class="font-semibold">${p.trees.toLocaleString()}</span>
            </div>

            <div class="flex items-center justify-between text-xs">
              <span>🌿 Species</span>
              <span class="font-medium">${p.species}</span>
            </div>

            <div class="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-[#1a3d2b]" style="width:${
                size === "large" ? "100%" : "60%"
              }"></div>
            </div>
          </div>
        `);
      });

      mapInstanceRef.current = map;
      setLoading(false);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-xs tracking-widest uppercase text-forest/50">
          Live Tree Map
        </p>
        <h2 className="font-serif text-4xl font-bold text-forest">
          Every Tree on the Map
        </h2>
        <p className="text-forest/60 text-sm max-w-lg mx-auto mt-2">
          Explore where your donations come to life across Morocco’s
          reforestation zones.
        </p>
      </div>

      {/* Map */}
      <div className="relative rounded-3xl overflow-hidden border border-forest/10">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-sage">
            <p className="text-forest/60 text-sm animate-pulse">
              Loading map...
            </p>
          </div>
        )}

        <link
          className="z-0"
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />

        <div ref={mapRef} className="w-full h-[500px]" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {projectLocations.map((p) => (
          <div
            key={p.id}
            className="text-xs text-forest/60 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-forest" />
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
