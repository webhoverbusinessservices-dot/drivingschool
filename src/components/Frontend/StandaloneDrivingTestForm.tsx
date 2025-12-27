"use client";

import { ChevronDown, Search, Check } from "lucide-react";
import { useState } from "react";

export default function StandaloneDrivingTestForm() {
  const [transmission, setTransmission] = useState<"auto" | "manual">("manual");
  const [suburb, setSuburb] = useState("");
  const [testCentre, setTestCentre] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      transmission,
      suburb,
      testCentre,
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl p-6 py-10">
      {/* Step 1 */}
      <p className="text-start text-base text-gray-700 mb-6">
        1. Please enter your pickup suburb & transmission type into the search tool
        below.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          {/* Transmission Switch */}
          <div className="relative flex bg-gray-600 rounded-lg p-1 w-full max-w-[260px] h-11 overflow-hidden">
            {/* Sliding background */}
            <span
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)]
      rounded-md bg-white shadow transition-transform duration-300
      ${transmission === "manual" ? "translate-x-full" : "translate-x-0"}`}
            />

            {/* AUTO */}
            <label className="relative z-10 flex-1 cursor-pointer">
              <input
                type="radio"
                name="transmission"
                value="auto"
                checked={transmission === "auto"}
                onChange={() => setTransmission("auto")}
                className="sr-only"
              />
              <div
                className={`h-full flex items-center justify-center gap-1 text-base font-medium transition
        ${transmission === "auto" ? "text-gray-900" : "text-gray-200"}`}
              >
                {transmission === "auto" && (
                  <span className="flex items-center justify-center w-4 h-4 bg-green-400 rounded-full">
                    <Check className="w-3 h-3 text-green-900" />
                  </span>
                )}
                Auto
              </div>
            </label>

            {/* MANUAL */}
            <label className="relative z-10 flex-1 cursor-pointer">
              <input
                type="radio"
                name="transmission"
                value="manual"
                checked={transmission === "manual"}
                onChange={() => setTransmission("manual")}
                className="sr-only"
              />
              <div
                className={`h-full flex items-center justify-center gap-1 text-base font-medium transition
        ${transmission === "manual" ? "text-gray-900" : "text-gray-200"}`}
              >
                {transmission === "manual" && (
                  <span className="flex items-center justify-center w-4 h-4 bg-green-400 rounded-full">
                    <Check className="w-3 h-3 text-green-900" />
                  </span>
                )}
                Manual
              </div>
            </label>
          </div>


          {/* Suburb Input */}
          <div className="relative w-full flex-1">
            <div className="flex items-center bg-white border border-yellow-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-yellow-300">
              <input
                type="text"
                placeholder="Enter your suburb"
                value={suburb}
                onChange={(e) => {
                  const value = e.target.value;
                  setSuburb(value);
                  setOpen(value.length > 0);
                }}
                onFocus={() => suburb && setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                className="w-full outline-none text-sm"
              />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-lg border">
                <div className="p-3 text-sm text-gray-600">
                  No results found
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <button
            type="submit"
            disabled={!suburb}
            className={`
              flex items-center justify-center font-medium gap-2 bg-yellow-300 hover:bg-gray-900 hover:text-white text-black  px-8 py-3 md:py-2 my-1 md:mx-1 md:my-0 rounded-md w-full md:w-auto transition
              ${suburb
                ? "bg-yellow-300 hover:bg-yellow-500 text-gray-900"
                : "bg-gray-200 text-gray-900 cursor-not-allowed"
              }
            `}
          >
            <Search size={16} />
            Search
          </button>
        </div>

        {/* Step 2 */}
        {/* <p className="text-start text-base text-gray-700 mb-4">
          2. Please select your test centre below. If you haven’t booked your driving
          test, select <strong>Any test location</strong>.
        </p> */}

        {/* Test Centre */}
        {/* <div className="max-w-md mx-auto mb-6 relative">
          <select
            value={testCentre}
            onChange={(e) => setTestCentre(e.target.value)}
            className="
                 w-full px-4 py-3 pr-10
                 rounded-lg border border-yellow-300
                 bg-white text-sm outline-none
                 focus:ring-2 focus:ring-yellow-300
                 appearance-none
               "
          >
            <option value="">Any test location</option>
            <option value="centre-1">Test Centre 1</option>
            <option value="centre-2">Test Centre 2</option>
          </select>

          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div> */}

      </form>

      {/* Info */}
      <p className="text-xs text-gray-600 text-center max-w-4xl mx-auto">
        Please note that only a limited number of instructors offer stand-alone
        driving test packages. Completing at least one regular driving lesson
        first will give you access to greater availability.
      </p>
    </div>
  );
}
