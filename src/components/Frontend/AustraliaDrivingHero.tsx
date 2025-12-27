"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import NSWContent from "./NSWContent";
import VICContent from "./VICContent";

;

export default function AustraliaDrivingHero() {
  const [selectedState, setSelectedState] = useState("nsw");

  const states = [
    { id: "nsw", label: "New South Wales (NSW)" },
    { id: "victoria", label: "Victoria (VIC)" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 dark:bg-white">
      <div className="flex flex-col items-center justify-center px-4">

        {/* HERO (always visible) */}
        <div className="max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mx-auto">
            <ArrowRight className="text-yellow-600" size={18} />
            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
              New Resident Guide
            </p>
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Converting your international driver’s licence
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-500">
              to an Australian licence
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {states.map((state) => (
              <button
                key={state.id}
                onClick={() => setSelectedState(state.id)}
                className={`px-6 py-3 rounded-lg font-medium transition
                  ${
                    selectedState === state.id
                      ? "bg-gray-900 text-white"
                      : "bg-white border border-yellow-300 text-gray-700 hover:bg-yellow-50"
                  }`}
              >
                {state.label}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ STATE-SPECIFIC CONTENT */}
        {selectedState === "nsw" && <NSWContent/>}
        {selectedState === "victoria" && <VICContent />}
      </div>
    </section>
  );
}
