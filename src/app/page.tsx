"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Heart,
  MapPinned,
  Menu,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import creatorImage1 from "../../images/Screenshot 2026-09-09 211549.png";
import creatorImage2 from "../../images/Screenshot 2026-09-09 211609.png";
import creatorImage3 from "../../images/Screenshot 2026-09-09 211631.png";
import creatorImage4 from "../../images/Screenshot 2026-09-09 211700.png";
import homeHeroImage from "../../images/Gemini_Generated_Image_fu1dckfu1dckfu1d.png";

const instagramContactLink = "https://www.instagram.com/diveinmedia___/?hl=en";
const emailContactLink = "https://mail.google.com/mail/?view=cm&fs=1&to=diveinmedia23@gmail.com&su=Work%20With%20Us";

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "DiveIn Media",
      url: "https://www.diveinmedia.in",
      sameAs: ["https://www.instagram.com/diveinmedia___/"],
      email: "diveinmedia23@gmail.com",
      description:
        "DiveIn Media is a Mumbai-based influencer marketing agency helping brands connect with the right creators in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and across India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Kolkata", "India"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "diveinmedia23@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      name: "DiveIn Media",
      url: "https://www.diveinmedia.in",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.google.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why DiveIn", href: "#problem" },
  { label: "How It Works", href: "#process" },
  { label: "Creators", href: "#creators" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Brands", href: "#brands" },
];

const socialMediaLinks = [
  { label: "Instagram", href: instagramContactLink, short: "IG" },
  { label: "LinkedIn", href: "#", short: "IN" },
  { label: "YouTube", href: "#", short: "YT" },
];

const problemCards = [
  {
    id: "01",
    title: "TOO MUCH NOISE",
    text: "Thousands of ads compete for attention.",
  },
  {
    id: "02",
    title: "LOW TRUST",
    text: "People connect more with relatable voices than brand ads.",
  },
  {
    id: "03",
    title: "WRONG CREATOR = WRONG AUDIENCE",
    text: "Reach means little when the audience doesn't fit.",
  },
];

const opportunityStats = [
  { value: 500, suffix: "+", label: "CREATORS" },
  { value: 2000, suffix: "K", label: "FOLLOWERS" },
  { value: 1, suffix: "M+", label: "AUDIENCE REACH" },
];

const processSteps = [
  {
    number: "01",
    title: "TELL US YOUR GOAL",
    items: ["Product / Service", "Budget", "Target Audience", "Preferred Locations", "Campaign Objective"],
  },
  {
    number: "02",
    title: "WE FIND THE RIGHT CREATORS",
    items: ["500+ creators", "Multiple domains", "2K–1M+ followers", "Pan-India network"],
  },
  {
    number: "03",
    title: "CHOOSE YOUR COLLAB MODEL",
    items: ["PAID COLLABORATION", "BARTER COLLABORATION", "CAMPAIGN-BASED COLLAB"],
  },
  {
    number: "04",
    title: "DIRECT CREATOR PAYMENT",
    items: ["Brands pay creators directly.", "NO COMMISSION CHARGED TO THE BRAND."],
  },
];

const creatorRegions = [
  {
    name: "METROS",
    cities: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune"],
  },
  {
    name: "WEST INDIA",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jaipur"],
  },
  {
    name: "NORTH INDIA",
    cities: ["Chandigarh", "Lucknow", "Indore", "Bhopal", "Dehradun"],
  },
  {
    name: "SOUTH INDIA",
    cities: ["Kochi", "Coimbatore", "Mysuru", "Visakhapatnam"],
  },
  {
    name: "EAST & CENTRAL",
    cities: ["Bhubaneswar", "Patna", "Ranchi", "Nagpur"],
  },
];

const cityNodes = [
  { name: "Ahmedabad", state: "Gujarat", lon: 72.57, lat: 23.03, creators: "2,481", campaigns: "84", avgReach: "52.4K", categories: ["Fashion", "Food", "Beauty", "Lifestyle"] },
  { name: "Surat", state: "Gujarat", lon: 72.96, lat: 21.17, creators: "1,892", campaigns: "62", avgReach: "47.8K", categories: ["Retail", "Fashion", "Lifestyle"] },
  { name: "Vadodara", state: "Gujarat", lon: 73.17, lat: 22.3, creators: "1,341", campaigns: "39", avgReach: "41.2K", categories: ["Food", "Travel", "Lifestyle"] },
  { name: "Rajkot", state: "Gujarat", lon: 70.8, lat: 22.3, creators: "1,126", campaigns: "28", avgReach: "36.1K", categories: ["Lifestyle", "Retail", "Culture"] },
  { name: "Jaipur", state: "Rajasthan", lon: 75.82, lat: 26.92, creators: "1,742", campaigns: "57", avgReach: "44.6K", categories: ["Lifestyle", "Travel", "Fashion"] },
  { name: "Mumbai", state: "Maharashtra", lon: 72.88, lat: 19.08, creators: "3,462", campaigns: "142", avgReach: "89.4K", categories: ["Fashion", "Lifestyle", "Beauty", "Food"] },
  { name: "Delhi NCR", state: "Delhi", lon: 77.1, lat: 28.7, creators: "3,118", campaigns: "136", avgReach: "82.7K", categories: ["Lifestyle", "Culture", "Fashion", "Tech"] },
  { name: "Bengaluru", state: "Karnataka", lon: 77.59, lat: 12.97, creators: "2,641", campaigns: "97", avgReach: "76.3K", categories: ["Tech", "Lifestyle", "Fashion", "Travel"] },
  { name: "Hyderabad", state: "Telangana", lon: 78.49, lat: 17.38, creators: "2,204", campaigns: "83", avgReach: "63.9K", categories: ["Food", "Beauty", "Lifestyle", "Retail"] },
  { name: "Chennai", state: "Tamil Nadu", lon: 80.27, lat: 13.09, creators: "1,951", campaigns: "71", avgReach: "58.4K", categories: ["Lifestyle", "Travel", "Fashion"] },
  { name: "Kolkata", state: "West Bengal", lon: 88.36, lat: 22.57, creators: "1,876", campaigns: "68", avgReach: "49.7K", categories: ["Culture", "Food", "Lifestyle", "Fashion"] },
  { name: "Pune", state: "Maharashtra", lon: 73.85, lat: 18.52, creators: "1,711", campaigns: "53", avgReach: "56.8K", categories: ["Lifestyle", "Fitness", "Travel", "Tech"] },
  { name: "Chandigarh", state: "Punjab", lon: 76.78, lat: 30.73, creators: "1,026", campaigns: "22", avgReach: "31.2K", categories: ["Lifestyle", "Food", "Culture"] },
  { name: "Lucknow", state: "Uttar Pradesh", lon: 80.95, lat: 26.85, creators: "1,214", campaigns: "24", avgReach: "33.8K", categories: ["Lifestyle", "Food", "Culture"] },
  { name: "Indore", state: "Madhya Pradesh", lon: 75.85, lat: 22.72, creators: "1,119", campaigns: "30", avgReach: "36.5K", categories: ["Food", "Retail", "Lifestyle"] },
  { name: "Bhopal", state: "Madhya Pradesh", lon: 77.41, lat: 23.26, creators: "1,043", campaigns: "21", avgReach: "32.7K", categories: ["Travel", "Lifestyle", "Culture"] },
  { name: "Dehradun", state: "Uttarakhand", lon: 78.04, lat: 30.32, creators: "852", campaigns: "18", avgReach: "24.9K", categories: ["Travel", "Lifestyle", "Culture"] },
  { name: "Kochi", state: "Kerala", lon: 76.27, lat: 9.97, creators: "1,214", campaigns: "39", avgReach: "43.8K", categories: ["Food", "Travel", "Beauty", "Lifestyle"] },
  { name: "Coimbatore", state: "Tamil Nadu", lon: 76.96, lat: 11.02, creators: "1,025", campaigns: "27", avgReach: "31.4K", categories: ["Fashion", "Lifestyle", "Food"] },
  { name: "Mysuru", state: "Karnataka", lon: 76.65, lat: 12.31, creators: "939", campaigns: "19", avgReach: "27.8K", categories: ["Culture", "Travel", "Lifestyle"] },
  { name: "Visakhapatnam", state: "Andhra Pradesh", lon: 83.3, lat: 17.68, creators: "949", campaigns: "20", avgReach: "29.1K", categories: ["Food", "Travel", "Lifestyle"] },
  { name: "Bhubaneswar", state: "Odisha", lon: 85.82, lat: 20.27, creators: "914", campaigns: "24", avgReach: "28.7K", categories: ["Culture", "Lifestyle", "Travel"] },
  { name: "Patna", state: "Bihar", lon: 85.14, lat: 25.61, creators: "825", campaigns: "18", avgReach: "22.6K", categories: ["Culture", "Education", "Lifestyle"] },
  { name: "Ranchi", state: "Jharkhand", lon: 85.31, lat: 23.35, creators: "784", campaigns: "16", avgReach: "25.3K", categories: ["Culture", "Lifestyle", "Travel"] },
  { name: "Nagpur", state: "Maharashtra", lon: 79.09, lat: 21.15, creators: "1,011", campaigns: "21", avgReach: "29.8K", categories: ["Culture", "Retail", "Lifestyle"] },
];

const stateMetrics: Record<string, { creators: string; campaigns: string; avgReach: string }> = {
  Gujarat: { creators: "2,481", campaigns: "184", avgReach: "48.2K" },
  Maharashtra: { creators: "3,462", campaigns: "142", avgReach: "89.4K" },
  Rajasthan: { creators: "1,742", campaigns: "57", avgReach: "44.6K" },
  "Madhya Pradesh": { creators: "1,119", campaigns: "30", avgReach: "36.5K" },
  Delhi: { creators: "3,118", campaigns: "136", avgReach: "82.7K" },
  Karnataka: { creators: "2,641", campaigns: "97", avgReach: "76.3K" },
  Telangana: { creators: "2,204", campaigns: "83", avgReach: "63.9K" },
  "Tamil Nadu": { creators: "1,951", campaigns: "71", avgReach: "58.4K" },
  Kerala: { creators: "1,214", campaigns: "39", avgReach: "43.8K" },
  "West Bengal": { creators: "1,876", campaigns: "68", avgReach: "49.7K" },
  "Uttar Pradesh": { creators: "1,214", campaigns: "24", avgReach: "33.8K" },
  Bihar: { creators: "825", campaigns: "18", avgReach: "22.6K" },
  Punjab: { creators: "1,026", campaigns: "22", avgReach: "31.2K" },
  Haryana: { creators: "1,037", campaigns: "23", avgReach: "32.1K" },
  Odisha: { creators: "914", campaigns: "24", avgReach: "28.7K" },
  Jharkhand: { creators: "784", campaigns: "16", avgReach: "25.3K" },
  Chhattisgarh: { creators: "701", campaigns: "14", avgReach: "22.5K" },
  Assam: { creators: "769", campaigns: "12", avgReach: "24.1K" },
  "Andhra Pradesh": { creators: "949", campaigns: "20", avgReach: "29.1K" },
  Uttarakhand: { creators: "852", campaigns: "18", avgReach: "24.9K" },
  "Andaman and Nicobar": { creators: "167", campaigns: "4", avgReach: "8.3K" },
  Goa: { creators: "316", campaigns: "8", avgReach: "15.2K" },
  Himachal: { creators: "412", campaigns: "10", avgReach: "18.7K" },
  Jammu: { creators: "438", campaigns: "11", avgReach: "19.4K" },
  Meghalaya: { creators: "221", campaigns: "7", avgReach: "11.9K" },
  Manipur: { creators: "189", campaigns: "5", avgReach: "10.6K" },
  Mizoram: { creators: "144", campaigns: "3", avgReach: "8.9K" },
  Nagaland: { creators: "154", campaigns: "4", avgReach: "9.2K" },
  Sikkim: { creators: "122", campaigns: "4", avgReach: "7.4K" },
  Tripura: { creators: "168", campaigns: "6", avgReach: "9.8K" },
  Arunachal: { creators: "177", campaigns: "6", avgReach: "10.1K" },
  Puducherry: { creators: "198", campaigns: "7", avgReach: "11.5K" },
  Lakshadweep: { creators: "53", campaigns: "2", avgReach: "3.6K" },
  Dadra: { creators: "88", campaigns: "3", avgReach: "4.7K" },
};

type RingCoordinates = Array<[number, number]>;
type PolygonCoordinates = Array<RingCoordinates>;
type MultiPolygonCoordinates = Array<PolygonCoordinates>;
type IndiaGeoJson = {
  features: Array<{
    properties: { NAME_1: string };
    geometry: {
      type: "Polygon" | "MultiPolygon";
      coordinates: PolygonCoordinates | MultiPolygonCoordinates;
    };
  }>;
};

type IndiaMapData = ReturnType<typeof buildIndiaMapData>;

function getStateMetrics(stateName: string) {
  return stateMetrics[stateName] ?? { creators: "421", campaigns: "9", avgReach: "14.2K" };
}

function projectPoint(lon: number, lat: number, bounds: { minLon: number; maxLon: number; minLat: number; maxLat: number }) {
  const x = 56 + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * 648;
  const y = 650 - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 540;

  return { x, y };
}

function buildIndiaMapData(geoJson: IndiaGeoJson) {
  const features = geoJson.features;

  let minLon = Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  const allCoordinates = features.flatMap((feature) => {
    const polygons = feature.geometry.type === "Polygon"
      ? [feature.geometry.coordinates as PolygonCoordinates]
      : (feature.geometry.coordinates as MultiPolygonCoordinates);

    return polygons.flatMap((polygon: PolygonCoordinates) => polygon.flatMap((ring: RingCoordinates) => ring.map(([lon, lat]: [number, number]) => {
      minLon = Math.min(minLon, lon);
      maxLon = Math.max(maxLon, lon);
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      return [lon, lat] as [number, number];
    })));
  });

  const bounds = { minLon, maxLon, minLat, maxLat };

  const projectedFeatures = features.map((feature) => {
    const polygons = feature.geometry.type === "Polygon"
      ? [feature.geometry.coordinates as PolygonCoordinates]
      : (feature.geometry.coordinates as MultiPolygonCoordinates);

    const paths = polygons.map((polygon: PolygonCoordinates) => {
      const ring = polygon[0] ?? [];
      const pathData = ring
        .map(([lon, lat]: [number, number], index: number) => {
          const point = projectPoint(lon, lat, bounds);
          return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
        })
        .join(" ");

      return `${pathData} Z`;
    });

    return {
      name: feature.properties.NAME_1,
      paths,
    };
  });

  const projectedCities = cityNodes.map((city) => ({
    ...city,
    ...projectPoint(city.lon, city.lat, bounds),
  }));

  return { projectedFeatures, projectedCities, bounds, allCoordinates };
}

function IndiaCoverageMap({ selectedRegion, onRegionChange }: { selectedRegion: number; onRegionChange: (index: number) => void }) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<(typeof cityNodes)[number] | null>(null);
  const [mapData, setMapData] = useState<IndiaMapData | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/india_state.geojson")
      .then((response) => response.json() as Promise<IndiaGeoJson>)
      .then((geoJson) => {
        if (isMounted) {
          setMapData(buildIndiaMapData(geoJson));
        }
      })
      .catch((error) => {
        console.error("Failed to load India geojson data", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const regionCityNames = new Set(creatorRegions[selectedRegion].cities);
  const regionStateNames = new Set(
    cityNodes.filter((city) => regionCityNames.has(city.name)).map((city) => city.state),
  );

  const activeStateName = hoveredState ?? selectedState ?? null;
  const contentState = selectedState ?? (selectedRegion >= 0 ? creatorRegions[selectedRegion].name : "India");

  const stateCard = activeStateName ? getStateMetrics(activeStateName) : null;

  if (!mapData) {
    return (
      <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6 text-white/70">
        Loading coverage map…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-5 md:p-6">
          <div className="space-y-4">
            {creatorRegions.map((region, index) => (
              <motion.button
                key={region.name}
                whileHover={{ x: 4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  onRegionChange(index);
                  setSelectedState(null);
                  setSelectedCity(null);
                }}
                className={`w-full rounded-[22px] border px-4 py-4 text-left transition ${
                  selectedRegion === index
                    ? "border-lime-300/80 bg-[linear-gradient(135deg,rgba(197,255,42,0.18),rgba(17,17,17,0.8))] text-lime-300 shadow-[0_0_30px_rgba(197,255,42,0.12)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-lime-300/60 hover:text-lime-200"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.28em]">{region.name}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em]">
                  {region.cities.map((city) => (
                    <span key={city} className="rounded-full border border-current/20 bg-black/10 px-2 py-1">
                      {city}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="soft-card overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(197,255,42,0.12),transparent_28%),linear-gradient(135deg,#0c0c0c,#151515)] p-4"
          >
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/50">
                <span>Coverage</span>
                <span>{contentState}</span>
              </div>

              <div className="mt-4 flex-1 rounded-[20px] border border-white/10 bg-black/20">
                <svg viewBox="0 0 760 700" className="h-full w-full">
                  <defs>
                    <radialGradient id="stateGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(197,255,42,0.28)" />
                      <stop offset="100%" stopColor="rgba(197,255,42,0.02)" />
                    </radialGradient>
                  </defs>

                  <g>
                    {mapData.projectedFeatures.map((feature) => {
                      const isSelectedState = feature.name === selectedState;
                      const inRegion = regionStateNames.has(feature.name);
                      const stateOpacity = selectedState
                        ? feature.name === selectedState
                          ? 1
                          : 0.4
                        : selectedRegion >= 0 && regionStateNames.size > 0
                          ? inRegion
                            ? 1
                            : 0.4
                          : 1;

                      const fillColor = isSelectedState
                        ? "rgba(197,255,42,0.42)"
                        : inRegion
                          ? "rgba(197,255,42,0.24)"
                          : "rgba(255,255,255,0.08)";

                      return (
                        <g key={feature.name}>
                          {feature.paths.map((pathData, index) => (
                            <path
                              key={`${feature.name}-${index}`}
                              d={pathData}
                              fill={fillColor}
                              stroke={isSelectedState ? "rgba(197,255,42,0.95)" : "rgba(255,255,255,0.32)"}
                              strokeWidth={isSelectedState ? 1.5 : 0.9}
                              opacity={stateOpacity}
                              className="cursor-pointer transition-all duration-200"
                              onMouseEnter={() => setHoveredState(feature.name)}
                              onMouseLeave={() => setHoveredState(null)}
                              onClick={() => {
                                setSelectedState(feature.name);
                                setSelectedCity(null);
                              }}
                            />
                          ))}
                        </g>
                      );
                    })}
                  </g>

                  {mapData.projectedCities.map((city) => {
                    const isInRegion = regionCityNames.has(city.name);
                    const isSelectedCity = selectedCity?.name === city.name;
                    const cityOpacity = selectedState
                      ? city.state === selectedState
                        ? 1
                        : 0.28
                      : selectedRegion >= 0 && regionCityNames.size > 0
                        ? isInRegion
                          ? 1
                          : 0.4
                        : 1;

                    return (
                      <g key={city.name}>
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={isSelectedCity ? 11 : 7}
                          fill={isSelectedCity ? "#e7ff8b" : "#c5ff2a"}
                          opacity={cityOpacity}
                          onMouseEnter={() => setHoveredState(city.state)}
                          onClick={() => setSelectedCity(city)}
                          className="cursor-pointer"
                          style={{ transition: "all 0.2s ease" }}
                        />
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={isSelectedCity ? 18 : 13}
                          fill="transparent"
                          stroke={isSelectedCity ? "rgba(197,255,42,0.75)" : "rgba(197,255,42,0.28)"}
                          strokeWidth={isSelectedCity ? 1.2 : 0.8}
                          strokeDasharray={isSelectedCity ? "3 5" : "2 8"}
                          opacity={cityOpacity}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {creatorRegions[selectedRegion].cities.map((city) => (
                  <motion.span
                    key={city}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70"
                  >
                    {city}
                  </motion.span>
                ))}
              </div>
            </div>

            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 left-4 z-20 max-w-[280px] rounded-[22px] border border-lime-300/50 bg-[#0a0a0a]/90 p-4 shadow-[0_0_24px_rgba(197,255,42,0.12)] backdrop-blur-lg"
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-lime-300">City coverage</p>
                <h4 className="mt-2 text-xl font-black uppercase tracking-[-0.05em] text-white">{selectedCity.name}</h4>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/50">{selectedCity.state}</p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-[0.18em] text-white/70">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <p className="text-white/45">Creators</p>
                    <p className="mt-1 font-black text-white">{selectedCity.creators}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <p className="text-white/45">Campaigns</p>
                    <p className="mt-1 font-black text-white">{selectedCity.campaigns}</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedCity.categories.map((category) => (
                    <span key={category} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70">
                      {category}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-lime-300">Avg. Reach {selectedCity.avgReach}</p>
              </motion.div>
            )}

            {stateCard && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-4 top-4 z-20 w-[230px] rounded-[20px] border border-lime-300/50 bg-[#0d0d0d]/85 p-3 shadow-[0_0_24px_rgba(197,255,42,0.12)] backdrop-blur-lg"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-lime-300">State insight</p>
                <h4 className="mt-2 text-lg font-black uppercase tracking-[-0.05em] text-white">{activeStateName}</h4>

                <div className="mt-3 space-y-2 text-[10px] uppercase tracking-[0.18em] text-white/70">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-2 py-1.5">
                    <span>Creators</span>
                    <span className="font-black text-white">{stateCard.creators}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-2 py-1.5">
                    <span>Campaigns</span>
                    <span className="font-black text-white">{stateCard.campaigns}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-2 py-1.5">
                    <span>Avg. Reach</span>
                    <span className="font-black text-lime-300">{stateCard.avgReach}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </Reveal>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[22px] border border-white/10 bg-[#0a0a0a]/70 p-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/50">Total creators</p>
          <div className="mt-3 text-4xl font-black tracking-[-0.08em] text-lime-300"><AnimatedCounter value={12840} suffix="+" /></div>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#0a0a0a]/70 p-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/50">Active cities</p>
          <div className="mt-3 text-4xl font-black tracking-[-0.08em] text-lime-300"><AnimatedCounter value={24} /></div>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#0a0a0a]/70 p-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/50">Active campaigns</p>
          <div className="mt-3 text-4xl font-black tracking-[-0.08em] text-lime-300"><AnimatedCounter value={186} /></div>
        </div>
      </div>
    </div>
  );
}

const creators = [
  {
    id: "anjuri-sinha",
    name: "ANJURISINHA",
    handle: "@ANJURISINHA",
    followers: "1.2M",
    categories: ["Fashion", "Beauty", "Lifestyle"],
    posts: "1,128 posts",
    image: creatorImage1,
  },
  {
    id: "rekha-sidhodia",
    name: "REKHASIDHODIA FAMILY",
    handle: "@REKHASIDHODIA",
    followers: "109K",
    categories: ["Parenting", "Health & Wellness"],
    posts: "1,349 posts",
    image: creatorImage2,
  },
  {
    id: "d-starrr",
    name: "D_STARRR",
    handle: "@D_STARRR",
    followers: "177K",
    categories: ["Digital creator", "Actor"],
    posts: "420 posts",
    image: creatorImage3,
  },
  {
    id: "ipearshah",
    name: "IPEARSHAH",
    handle: "@IPEARSHAH",
    followers: "24.1K",
    categories: ["Artist", "Lifestyle"],
    posts: "218 posts",
    image: creatorImage4,
  },
];

const creatorSteps = [
  "OUTREACH & CONNECT",
  "DISCUSS & BRIEF",
  "ALIGN & COLLABORATE",
  "CONTENT CREATION",
  "REVIEW & PUBLISH",
  "TRACK & MEASURE",
];

const platformCards = [
  { name: "Instagram", icon: "IG" },
  { name: "YouTube", icon: "YT" },
  { name: "TikTok", icon: "TT" },
  { name: "Facebook", icon: "FB" },
  { name: "X", icon: "X" },
  { name: "Snapchat", icon: "SC" },
];

const domainTags = [
  "Fashion & Lifestyle",
  "Beauty & Skincare",
  "Food & Beverage",
  "Fitness & Health",
  "Travel & Explore",
  "Education & Tech",
  "Entertainment & Comedy",
  "More",
];

const brandLogos = ["Lotus Herbals", "MazaPlay", "YOLO24/7", "JBL", "Britannia", "FairPlay", "AJIO"];

const campaignCards = [
  {
    title: "Creator Reel Launch",
    type: "Instagram Reel",
    accent: "style-1",
    stats: "1.2M reach",
  },
  {
    title: "Launch Story Sequence",
    type: "Campaign Content",
    accent: "style-2",
    stats: "92K engagement",
  },
  {
    title: "Brand Awareness Push",
    type: "Multi-city rollout",
    accent: "style-3",
    stats: "4.5M views",
  },
];

const footerNav = ["Home", "Why DiveIn", "How It Works", "Creators", "Campaigns", "Contact"];

function AnimatedCounter({ value, suffix = "", className = "", startValue = 0 }: { value: number; suffix?: string; className?: string; startValue?: number }) {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    let frame = 0;
    let startTime: number | null = null;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(startValue + (value - startValue) * eased);
      setDisplayValue(nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setDisplayValue(startValue);
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [startValue, value]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.96, rotateX: 18, rotateY: -12 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 } : { opacity: 0, y: 32, scale: 0.96, rotateX: 18, rotateY: -12 }}
      whileHover={inView ? { y: -6, rotateX: 4, rotateY: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={{ willChange: "transform, opacity", transformStyle: "preserve-3d", perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

type Platform = "instagram" | "youtube" | "facebook" | "tiktok" | "linkedin" | "x";

type ShowerIconItem = {
  id: number;
  platform: Platform;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  ttl: number;
};

const showerPlatforms: Platform[] = ["instagram", "youtube", "facebook", "tiktok", "linkedin", "x"];

function PlatformGlyph({ platform, size = 18 }: { platform: Platform; size?: number }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (platform) {
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="6" width="17" height="12" rx="3" />
          <path d="M10 9.5L15.5 12L10 14.5V9.5Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M13.5 20V13.2H16L16.4 10.1H13.5V8.2C13.5 7.3 13.8 6.7 15 6.7H16.5V4.1C15.9 4 15.1 4 14.2 4C11.8 4 10.3 5.3 10.3 7.9V10.1H7.8V13.2H10.3V20H13.5Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...commonProps}>
          <path d="M14.5 4.5C15.6 5.7 16.4 7.3 16.4 9.1V11.8C15.3 11.5 14.1 11.7 13.1 12.4C11.6 13.4 10.9 15.1 11.1 16.9C11.3 18.8 13 20.2 15 20.2C16.9 20.2 18.4 18.8 18.5 16.9V8.8C18.5 8.5 18.8 8.2 19.1 8.2H19.8V5.7H19.1C17.8 5.7 16.6 5.1 15.8 4.1L14.5 4.5Z" fill="currentColor" stroke="none" />
          <path d="M14.2 13.7C13.6 12.8 12.6 12.3 11.6 12.3C10.5 12.3 9.4 12.8 8.6 13.8" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <path d="M8.2 10.1V16" />
          <path d="M8.2 7.8H8.2" />
          <path d="M11.2 16V12.2C11.2 10.9 12.1 10.2 13.2 10.2C14.3 10.2 15.2 10.9 15.2 12.2V16" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path d="M6 6L18 18M18 6L6 18" />
        </svg>
      );
    default:
      return null;
  }
}

function SocialIconShower() {
  const [icons, setIcons] = useState<ShowerIconItem[]>([]);
  const reducedMotionRef = useRef<boolean>(false);
  const lastScrollYRef = useRef<number>(0);
  const spawnRafRef = useRef<number | null>(null);
  const tickRafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };

    syncReducedMotion();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", syncReducedMotion);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", syncReducedMotion);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || reducedMotionRef.current) {
      return;
    }

    const tick = () => {
      setIcons((currentIcons) =>
        currentIcons
          .map((icon) => {
            const nextLife = icon.life - 0.016;
            const nextX = icon.x + icon.vx;
            const nextY = icon.y + icon.vy + Math.sin(icon.life * 6) * 0.12;
            const nextOpacity = Math.min(icon.opacity, Math.max(0, nextLife / icon.ttl));

            return {
              ...icon,
              x: nextX,
              y: nextY,
              rotation: icon.rotation + icon.rotationSpeed,
              life: nextLife,
              opacity: nextOpacity,
            };
          })
          .filter((icon) => {
            const withinBounds = icon.x > -80 && icon.x < window.innerWidth + 80 && icon.y > -80 && icon.y < window.innerHeight + 80;
            return icon.life > 0.05 && withinBounds;
          }),
      );

      tickRafRef.current = window.requestAnimationFrame(tick);
    };

    tickRafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (tickRafRef.current) {
        window.cancelAnimationFrame(tickRafRef.current);
      }
    };
  }, [reducedMotionRef.current]);

  useEffect(() => {
    if (typeof window === "undefined" || reducedMotionRef.current) {
      return;
    }

    const spawnBurst = (deltaY: number) => {
      const isMobile = window.innerWidth < 768;
      const maxIcons = isMobile ? 6 : 18;
      const burstSize = Math.min(Math.max(3, Math.round(Math.abs(deltaY) / 15)), maxIcons);

      setIcons((currentIcons) => {
        if (currentIcons.length >= maxIcons) {
          return currentIcons;
        }

        const newIcons: ShowerIconItem[] = [];
        const currentCount = Math.min(maxIcons - currentIcons.length, burstSize);

        for (let i = 0; i < currentCount; i += 1) {
          const platform = showerPlatforms[Math.floor(Math.random() * showerPlatforms.length)];
          const edge = Math.random() > 0.5 ? "left" : "right";
          const isLeft = edge === "left";
          const size = isMobile ? 16 + Math.random() * 10 : 18 + Math.random() * 14;
          const startX = isLeft ? -30 - Math.random() * 90 : window.innerWidth + 30 + Math.random() * 90;
          const startY = 30 + Math.random() * Math.max(90, window.innerHeight * 0.6);
          const directionFactor = deltaY >= 0 ? 1 : -1;
          const travelX = isLeft
            ? 100 + Math.random() * (isMobile ? 90 : 180)
            : -(100 + Math.random() * (isMobile ? 90 : 180));

          const icon: ShowerIconItem = {
            id: Date.now() + Math.random() + i,
            platform,
            x: startX,
            y: startY,
            vx: (isLeft ? 1 : -1) * (0.9 + Math.random() * 1.3) * directionFactor,
            vy: (Math.random() - 0.5) * 0.75,
            size,
            opacity: 0.38 + Math.random() * 0.32,
            rotation: isLeft ? -18 + Math.random() * 18 : 18 - Math.random() * 18,
            rotationSpeed: (Math.random() - 0.5) * 0.45,
            life: 1,
            ttl: 1.25 + Math.random() * 0.65,
          };

          if (isLeft) {
            icon.vx = Math.max(icon.vx, 0.6);
          } else {
            icon.vx = Math.min(icon.vx, -0.6);
          }

          if (Math.random() > 0.7) {
            icon.vy -= 0.3;
          }

          if (Math.random() > 0.8) {
            icon.rotationSpeed *= 1.7;
          }

          icon.vx += (travelX / 180) * (isLeft ? 0.2 : -0.2);
          newIcons.push(icon);
        }

        return [...currentIcons, ...newIcons].slice(-maxIcons);
      });
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (Math.abs(scrollDelta) < 4) {
        return;
      }

      if (spawnRafRef.current) {
        window.cancelAnimationFrame(spawnRafRef.current);
      }

      spawnRafRef.current = window.requestAnimationFrame(() => {
        spawnBurst(scrollDelta);
        spawnRafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (spawnRafRef.current) {
        window.cancelAnimationFrame(spawnRafRef.current);
      }
    };
  }, [reducedMotionRef.current]);

  if (reducedMotionRef.current) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-30 block overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute"
          style={{
            left: icon.x,
            top: icon.y,
            width: icon.size,
            height: icon.size,
            opacity: icon.opacity,
            transform: `translate(-50%, -50%) rotate(${icon.rotation}deg)`,
            filter: `drop-shadow(0 0 ${Math.max(4, icon.size * 0.45)}px rgba(197, 255, 42, 0.25))`,
            willChange: "transform, opacity",
          }}
        >
          <div
            className="flex items-center justify-center rounded-full border border-lime-300/30 bg-black/25"
            style={{
              width: icon.size,
              height: icon.size,
              color: "rgba(197, 255, 42, 0.85)",
              boxShadow: "inset 0 0 0 1px rgba(197,255,42,0.18), 0 0 16px rgba(197,255,42,0.16)",
            }}
          >
            <PlatformGlyph platform={icon.platform} size={Math.max(10, icon.size * 0.45)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const problemSectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: problemScrollYProgress } = useScroll({
    target: problemSectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: overallScrollYProgress } = useScroll();
  const problemGlowOpacity = useTransform(problemScrollYProgress, [0, 0.5, 1], [0.12, 0.7, 0.38]);
  const socialIconsOpacity = useTransform(overallScrollYProgress, [0, 0.05, 0.18, 1], [0, 0.3, 1, 1]);
  const socialIconsTranslateY = useTransform(overallScrollYProgress, [0, 0.05, 0.18, 1], [30, 18, 0, 0]);
  const socialIconsRotate = useTransform(overallScrollYProgress, [0, 0.15, 1], [-6, 0, 2]);
  const socialIconsScale = useTransform(overallScrollYProgress, [0, 0.1, 0.25, 1], [0.8, 0.9, 1, 1]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />
      <SocialIconShower />
      <main className="relative overflow-x-hidden bg-[#050505] text-white">
        <motion.div
          aria-label="Social media links"
          className="pointer-events-none fixed bottom-6 right-4 z-50 hidden md:block"
          style={{ opacity: socialIconsOpacity, y: socialIconsTranslateY, rotate: socialIconsRotate, scale: socialIconsScale }}
        >
          <div className="flex flex-col items-center gap-3 rounded-full border border-white/10 bg-black/45 p-3 shadow-[0_0_40px_rgba(197,255,42,0.12)] backdrop-blur-xl">
            {socialMediaLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 24, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.45, ease: "easeOut" }}
                whileHover={{ scale: 1.18, y: -4, rotate: 2 }}
                whileTap={{ scale: 0.96 }}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-lime-300/50 bg-[radial-gradient(circle_at_center,_rgba(197,255,42,0.32),rgba(197,255,42,0.10)_40%,rgba(17,17,17,0.85)_100%)] text-[10px] font-black uppercase tracking-[0.1em] text-lime-300 shadow-[0_0_24px_rgba(197,255,42,0.18)] transition hover:bg-lime-300 hover:text-black"
                aria-label={item.label}
              >
                {item.short}
              </motion.a>
            ))}
          </div>
        </motion.div>
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,255,42,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(197,255,42,0.1),transparent_30%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-lime-400/80 bg-lime-300/10 text-sm font-black text-lime-300">
              D
            </div>
            <div>
              <p className="text-lg font-black uppercase tracking-[0.2em]">DiveIn Media</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.18em] text-white/70 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-lime-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={instagramContactLink}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-lime-300/80 hover:bg-lime-300/10 hover:text-lime-300"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/90 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-white/70">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-lime-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={instagramContactLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-lime-300/70 bg-lime-300/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300"
              >
                Work With Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 px-4 pb-16 pt-10 md:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/60 bg-lime-300/10 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-lime-200">
                <Sparkles className="h-3.5 w-3.5" />
                People | Stories | Impact
              </div>

              <div className="space-y-5">
                <motion.h1
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[760px] text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-[7rem]"
                >
                  <span className="inline-block">
                    <AnimatedCounter value={500} startValue={1} suffix="+" className="inline-block" />
                  </span>{" "}
                  CREATORS.
                  <br />
                  PAN INDIA.
                  <br />
                  <span className="text-lime-300">REAL INFLUENCE.</span>
                </motion.h1>
                <p className="max-w-xl text-base text-white/70 md:text-lg">
                  DiveIn Media is a Mumbai-based influencer marketing agency helping brands reach the right audiences in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and across India through authentic creator partnerships.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={instagramContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-black transition hover:translate-y-[-1px] hover:bg-lime-200"
                >
                  WORK WITH US <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={emailContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white transition hover:border-lime-300/80 hover:text-lime-300"
                >
                  <Play className="h-4 w-4" /> MAIL US
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 text-[10px] uppercase tracking-[0.26em] text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Different People.</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Different Cities.</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Same Impact.</span>
              </div>
            </Reveal>

            <Reveal className="relative flex justify-center lg:justify-end" delay={0.1}>
              <div className="relative w-full max-w-[520px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 top-12 rounded-2xl border border-white/15 bg-black/50 p-3 shadow-[0_0_45px_rgba(197,255,42,0.15)] backdrop-blur-xl"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">Creators × Brands × Communities</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 bottom-16 rounded-2xl border border-white/15 bg-black/50 p-3 shadow-[0_0_45px_rgba(197,255,42,0.15)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-xs font-black text-black">1M+</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">engagement</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [-8, -4, -8], scale: [1, 1.12, 1] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-note absolute bottom-20 left-4 rotate-[-8deg] rounded-2xl border border-lime-300/70 bg-lime-300/10 p-3 text-[10px] uppercase tracking-[0.22em] text-lime-200 shadow-[0_0_35px_rgba(197,255,42,0.2)]"
                >
                  More Than Marketing.
                  <br />
                  It&apos;s People.
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 1.2, -1.2, 0], scale: [1, 1.03, 1.06, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="phone-frame relative mx-auto w-[320px] rounded-[38px] border border-white/15 bg-[#111111] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.7)] sm:w-[360px]"
                >
                  <div className="absolute inset-x-10 top-2 h-1 rounded-full bg-white/10" />
                  <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0b0b]">
                    <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={homeHeroImage}
                          alt="Creator profile"
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold">@avneetkaur_13</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Creator</p>
                        </div>
                      </div>
                      <div className="rounded-full border border-lime-300/50 bg-lime-300/10 p-2 text-lime-300">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="bg-[radial-gradient(circle_at_top,_rgba(197,255,42,0.18),transparent_35%)] p-4">
                      <motion.div
                        animate={{ scale: [1, 1.12, 1.06, 1], y: [0, -7, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="overflow-hidden rounded-[24px] border border-white/10 bg-[#1b1b1b]"
                      >
                        <Image
                          src={homeHeroImage}
                          alt="Creator content"
                          width={900}
                          height={720}
                          priority
                          quality={85}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="h-72 w-full object-cover object-center"
                        />
                      </motion.div>

                      <div className="mt-4 flex items-center justify-between text-white/70">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1"><Heart className="h-4 w-4 text-lime-300" /> <span className="text-xs">68K</span></div>
                          <div className="flex items-center gap-1"><MessageCircle className="h-4 w-4" /> <span className="text-xs">3.4K</span></div>
                          <div className="flex items-center gap-1"><Send className="h-4 w-4" /> <span className="text-xs">1.1K</span></div>
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-lime-300">Live</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -16, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 bottom-8 rounded-2xl border border-white/15 bg-[#111111]/90 p-3 shadow-[0_0_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-lime-300/10 p-2 text-lime-300"><MapPinned className="h-4 w-4" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">City</p>
                      <p className="text-sm font-semibold">Mumbai</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section ref={problemSectionRef} id="problem" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <motion.div
          style={{ opacity: problemGlowOpacity }}
          className="pointer-events-none absolute inset-x-[-5%] top-[-6%] h-[115%] bg-[radial-gradient(circle_at_center,_rgba(197,255,42,0.5),transparent_42%),radial-gradient(circle_at_50%_70%,_rgba(197,255,42,0.22),transparent_58%)] blur-4xl"
        />

        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Problem</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              PEOPLE DON&apos;T
              <br />
              TRUST ADS.
              <br />
              THEY TRUST
              <br />
              <span className="text-lime-300">PEOPLE.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              Consumers are scrolling past traditional advertising. Creators turn brand messages into stories their communities actually listen to.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {problemCards.map((card, index) => (
              <Reveal key={card.id} delay={index * 0.12} className="h-full">
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(197,255,42,0.8)" }}
                  transition={{ duration: 0.2 }}
                  className="soft-card flex h-full flex-col rounded-[28px] border border-white/10 bg-[#0a0a0a]/80 p-6"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xl font-black text-lime-300">{card.id}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-lime-300/80 to-transparent" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-auto text-base leading-7 text-white/65">{card.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-[32px] border border-lime-300/80 bg-gradient-to-r from-lime-300/35 via-lime-300/15 to-transparent p-8 text-black shadow-[0_0_70px_rgba(197,255,42,0.42)] md:p-10">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-black/60">The answer?</p>
                <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.06em]">THE ANSWER?</h3>
              </div>
              <p className="text-2xl font-black uppercase leading-[1.1] tracking-[-0.05em] text-black/90 md:text-4xl">
                Right creator + Right audience + Right story.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="opportunity" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Opportunity</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              YOUR CUSTOMERS
              <br />
              ARE ALREADY
              <br />
              <span className="text-lime-300">WATCHING.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              They&apos;re not waiting for another advertisement. They&apos;re watching creators, following communities, and discovering brands through content.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {opportunityStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-7">
                  <div className="mb-5 text-5xl font-black uppercase leading-none tracking-[-0.08em] text-lime-300 md:text-6xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.36em] text-white/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex flex-wrap gap-3">
              {[
                "Fashion",
                "Beauty",
                "Fitness",
                "Food",
                "Lifestyle",
                "Travel",
                "Health & Wellness",
                "Parenting",
                "Tech",
                "Education",
                "Entertainment",
                "Finance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:border-lime-300/80 hover:text-lime-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 rounded-[30px] border border-white/10 bg-[#0b0b0b] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-lime-300">The opportunity</p>
                <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">Put your brand where attention already exists.</h3>
              </div>
              <button className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-lime-300/70 bg-lime-300/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-lime-300">
                THE OPPORTUNITY <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">How It Works</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              NO MIDDLEMAN.
              <br />
              JUST THE RIGHT
              <br />
              <span className="text-lime-300">CREATOR × BRAND.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              We connect brands with relevant creators, manage the collaboration, and make campaign execution simple.
            </p>
          </Reveal>

          <Reveal className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-lime-300/80 bg-lime-300 p-5 shadow-[0_0_35px_rgba(197,255,42,0.28)] md:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-black/70">Core advantage</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.06em] text-black md:text-4xl">
                NO MIDDLEMAN
              </h3>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 p-5 md:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-lime-300">Brand promise</p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-none tracking-[-0.06em] text-white md:text-4xl">
                NO COMMISSION
                <span className="block text-lime-300">FROM THE BRAND</span>
              </h3>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-1/2 top-10 hidden h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-lime-300/0 via-lime-300/80 to-lime-300/0 lg:block" />

            <div className="grid gap-6 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="soft-card relative flex h-full flex-col rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-2xl font-black text-lime-300">{step.number}</span>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block">
                          <ArrowDownward className="h-6 w-6 text-lime-300/70" />
                        </div>
                      )}
                    </div>

                    <h3 className="mb-6 text-xl font-black uppercase tracking-[-0.04em] text-white">{step.title}</h3>

                    <ul className="space-y-3 text-sm text-white/72">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Location targeting</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              YOUR PRODUCT.
              <br />
              YOUR AUDIENCE.
              <br />
              YOUR LOCATION.
            </h2>
            <p className="mt-5 text-base text-white/70 md:text-lg">WE FIND THE CREATOR FIT.</p>
          </Reveal>

          <IndiaCoverageMap selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
        </div>
      </section>

      <section id="creators" className="relative z-10 px-4 pb-16 pt-20 md:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Creators</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              REAL
              <br />
              CREATORS.
              <br />
              REAL
              <br />
              COLLABORATIONS.
            </h2>
          </Reveal>

          <div className="-mx-4 overflow-hidden pb-2 md:-mx-6 lg:-mx-8">
            <div className="flex gap-5 overflow-x-auto px-4 pb-4 md:px-6 lg:px-8">
              {creators.map((creator, index) => (
                <Reveal key={creator.id} delay={index * 0.08} className="min-w-[280px] flex-1 md:min-w-[320px]">
                  <motion.article
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    style={{ rotate: index % 2 === 0 ? "-0.6deg" : "0.6deg" }}
                    className="creator-card group overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#090909] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        width={900}
                        height={720}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="h-80 w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                    <div className="space-y-4 bg-gradient-to-b from-[#101010] via-[#0b0b0b] to-[#080808] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xl font-black uppercase tracking-[-0.05em] text-white">{creator.name}</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">{creator.handle}</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-300/80 bg-lime-300/10 text-lime-300 shadow-[0_0_18px_rgba(197,255,42,0.18)] transition duration-300 group-hover:bg-lime-300 group-hover:text-black">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70">
                        <span>{creator.followers}</span>
                        <span>{creator.posts}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {creator.categories.map((category) => (
                          <span key={category} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70">
                            {category}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-lime-300 transition duration-300 hover:text-lime-200">
                        View Profile <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 rounded-[32px] border border-white/10 bg-[#0a0a0a]/80 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-lime-300">Creator workflow</p>
                <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">HOW WE WORK WITH INFLUENCERS & CREATORS</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {creatorSteps.map((step, index) => (
                <Reveal key={step} delay={index * 0.06}>
                  <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">0{index + 1}</span>
                      {index < creatorSteps.length - 1 && <ArrowRight className="h-4 w-4 text-white/40" />}
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-white">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-2xl font-black uppercase leading-tight tracking-[-0.05em] md:text-4xl">
                BUILT ON RELATIONSHIPS.
                <br />
                DRIVEN BY RESULTS.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="campaigns" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Platforms</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              THE CREATORS.
              <br />
              THE PLATFORMS.
              <br />
              <span className="text-lime-300">THE IMPACT.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              We collaborate with top creators across Instagram, YouTube, and more — and work with leading platforms to bring your brand to life.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {platformCards.map((platform, index) => (
              <Reveal key={platform.name} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(197,255,42,0.7)" }}
                  className="soft-card flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-[#0a0a0a]/80 p-5"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-lime-300">
                    {platform.icon}
                  </div>
                  <p className="text-xl font-black uppercase tracking-[-0.04em]">{platform.name}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap gap-3">
            {domainTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/75">
                {tag}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-12 grid gap-6 lg:grid-cols-4">
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={500} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">CREATORS</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300">INSTAGRAM</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">FIRST</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300">2K–1M+</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">FOLLOWERS</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300">PAN INDIA</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">COVERAGE</div>
            </div>
          </Reveal>

          <Reveal className="mt-12 rounded-[30px] border border-lime-300/50 bg-lime-300/10 p-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.38em] text-lime-200">Brands</p>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-lime-300 md:text-5xl">YOUR BRAND. OUR CREATORS. REAL IMPACT.</h3>
          </Reveal>
        </div>
      </section>

      <section id="brands" className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-lime-300">Past collaborations</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              BRANDS
              <br />
              THAT TRUSTED US.
              <br />
              RESULTS THAT
              <br />
              SPOKE FOR THEM.
            </h2>
          </Reveal>

          <Reveal className="mb-12 grid gap-4 rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-5 md:grid-cols-2 xl:grid-cols-7">
            {brandLogos.map((brand) => (
              <div
                key={brand}
                className="flex min-h-[70px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-center text-sm font-black uppercase tracking-[0.18em] text-white/70"
              >
                {brand}
              </div>
            ))}
          </Reveal>

          <div className="-mx-4 overflow-hidden pb-3 md:-mx-6 lg:-mx-8">
            <div className="flex gap-5 overflow-x-auto px-4 pb-4 md:px-6 lg:px-8">
              {campaignCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.08} className="min-w-[300px] flex-1 md:min-w-[360px]">
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="campaign-card overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0a0a]/80"
                  >
                    <div className={`relative h-72 border-b border-white/10 bg-gradient-to-br ${card.accent} p-5`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_35%)]" />
                      <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/25 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/80">
                        {card.type}
                      </div>
                      <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-black/30 p-3 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Preview</p>
                        <p className="mt-2 text-xl font-black uppercase tracking-[-0.04em] text-white">{card.title}</p>
                      </div>
                    </div>
                    <div className="space-y-4 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-lime-300">Performance</span>
                        <span className="text-sm font-black uppercase tracking-[-0.03em] text-white">{card.stats}</span>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={500} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">CREATORS WORKED WITH</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={1} suffix="M+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">TOTAL REACH</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={100} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">CAMPAIGNS DELIVERED</div>
            </div>
            <div className="soft-card rounded-[30px] border border-white/10 bg-[#0a0a0a]/80 p-6">
              <div className="mb-4 text-4xl font-black uppercase tracking-[-0.08em] text-lime-300"><AnimatedCounter value={20} suffix="+" /></div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">BRANDS TRUSTED US</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="relative overflow-hidden rounded-[38px] border border-lime-300/40 bg-[#080808] p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,255,42,0.30),transparent_35%)]" />
            <div className="relative z-10 max-w-4xl">
              <p className="text-[10px] uppercase tracking-[0.38em] text-lime-300">Let&apos;s create something together</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl lg:text-[6rem]">
                LET&apos;S CREATE
                <br />
                SOMETHING GREAT
                <br />
                TOGETHER.
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
                Your brand. Our creators. Real impact.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={instagramContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-black"
                >
                  WORK WITH US <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={emailContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white"
                >
                  MAIL US <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/50 px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-2xl font-black uppercase tracking-[-0.05em] text-white">DiveIn Media</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.34em] text-lime-300">People | Stories | Impact</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Follow</p>
                <a
                  href={instagramContactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-lime-300"
                >
                  Instagram
                </a>
                <a href="#" className="transition hover:text-lime-300">LinkedIn</a>
                <a href="#" className="transition hover:text-lime-300">YouTube</a>
                <a href="#" className="transition hover:text-lime-300">TikTok</a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Navigate</p>
                {footerNav.map((item) => (
                  <a key={item} href={item === "Contact" ? "#" : `#${item.toLowerCase().replace(/\s+/g, "")}`} className="transition hover:text-lime-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a
              href={instagramContactLink}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}

function ArrowDownward(props: { className?: string }) {
  return <ArrowRight {...props} className={props.className ?? "h-4 w-4"} />;
}
