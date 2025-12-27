"use client";

import { ChevronDown, Search, Check, DollarSign } from "lucide-react";
import { useState } from "react";

export default function PricingPackage() {
    const [transmission, setTransmission] = useState<"auto" | "manual">("manual");
    const [suburb, setSuburb] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ transmission, suburb });
    };

    return (
        <>
            <div className="relative w-full py-16 md:py-20 overflow-hidden">
                <div
                    className="
      absolute inset-0
      bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-500
      [clip-path:polygon(0_8%,100%_0,100%_90%,0_100%)]
    "
                />

                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto rounded-2xl xxl:px-0 px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* LEFT PANEL */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className="w-16 h-16  rounded-2xl border border-gray-900 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <DollarSign size={32} className="" strokeWidth={2.5} />
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900  leading-tight">
                                        Driving lesson pricing & packages
                                    </h2>
                                </div>

                                <p className="text-gray-900 text-lg leading-relaxed mb-4">
                                    Unlock exclusive discounts when you bundle lessons. More practice, less cost.
                                </p>

                                {/* Feature List */}
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-900">
                                        <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                                        </span>
                                        <span className="text-base font-medium">
                                            Flexible booking schedule
                                        </span>
                                    </li>

                                    <li className="flex items-center gap-3 text-gray-900">
                                        <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                                        </span>
                                        <span className="text-base font-medium">
                                            Choice of auto or manual
                                        </span>
                                    </li>
                                </ul>
                            </div>


                            {/* RIGHT PANEL - Card */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                                <h4 className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-6">
                                    <Search className="w-4 h-4" />
                                    Check suburb pricing
                                </h4>

                                <div className="space-y-5 max-w-lg">

                                    {/* TOGGLE */}
                                    <div className="relative flex bg-gray-600 rounded-xl p-1 h-11 overflow-hidden">
                                        <span
                                            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)]
                  rounded-lg bg-white shadow transition-transform duration-300
                  ${transmission === "manual" ? "translate-x-full" : ""}`}
                                        />

                                        {["auto", "manual"].map((type) => (
                                            <label key={type} className="relative z-10 flex-1 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="transmission"
                                                    checked={transmission === type}
                                                    onChange={() => setTransmission(type as "auto" | "manual")}
                                                    className="sr-only"
                                                />
                                                <div
                                                    className={`h-full flex items-center justify-center gap-2 text-base font-medium
                      ${transmission === type ? "text-gray-900" : "text-white"}`}
                                                >
                                                    {transmission === type && (
                                                        <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-white" />
                                                        </span>
                                                    )}
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    {/* INPUT + BUTTON */}
                                    <div className="flex gap-3">
                                        <div className="relative flex-1">
                                            <div className="flex items-center bg-white border border-yellow-300 rounded-xl px-4 py-3">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your suburb (e.g. Richmond)"
                                                    value={suburb}
                                                    onChange={(e) => {
                                                        setSuburb(e.target.value);
                                                        setOpen(e.target.value.length > 0);
                                                    }}
                                                    onBlur={() => setTimeout(() => setOpen(false), 150)}
                                                    className="w-full text-base outline-none"
                                                />
                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                            </div>

                                            {open && (
                                                <div className="absolute z-20 mt-2 w-full bg-white border rounded-xl shadow">
                                                    <div className="p-3 text-sm text-gray-500">
                                                        No results found
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            disabled={!suburb}
                                            className={`
              flex items-center justify-center gap-2 border bg-yellow-300 hover:bg-gray-900 hover:text-white hover:border-white text-black  px-8 py-3 md:py-2 my-1 md:mx-1 md:my-0 rounded-md w-full md:w-auto transition
              ${suburb
                                                    ? "bg-yellow-300 hover:bg-yellow-500 text-gray-900"
                                                    : "bg-gray-200 text-gray-900 cursor-not-allowed font-bold"
                                                }
            `}
                                        >
                                            <Search size={16} />
                                            Search
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        </>



    );
}