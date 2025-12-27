"use client";
import React, { useState } from "react";
import { Check, Sparkles, } from "lucide-react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    title: "Professional Driving Instructors",
    description:
      "Learn from fully qualified, patient instructors who focus on safety, confidence and real-road driving skills.",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Local Suburbs Covered",
    description:
      "Convenient lessons across your local area, so you can start training close to home, school or work.",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Easy Online Bookings",
    description:
      "Book lessons in seconds with instant confirmation, reschedule when needed and manage everything online.",
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Learn at Your Own Pace",
    description:
      "Every lesson is tailored to your confidence level — from nervous beginners to test-ready drivers.",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];


export default function WhyChooseUs(): React.ReactElement {
  const isVisible = true;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
    <section className="relative py-10 lg:py-15 mb-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`w-full lg:w-8/12 mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <Sparkles className="text-yellow-600" size={18} />
            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
              Why choose Trueway Driving School?
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-2">
            Your Smart Choice for Success
          </h2>
          <p className="text-gray-800 text-base max-w-2xl mx-auto mb-12 md:mb-20">
            Experience hassle-free learning with trusted instructors and flexible booking options
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-3 items-center">
          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-6">
            {features.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Check
                      className={`${item.iconColor} transition-transform duration-500 ${hoveredIndex === idx ? "scale-125" : ""}`}
                      size={28}
                      strokeWidth={3}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CENTER - Steering Wheel */}
          <div
            className={`z-[9999] flex flex-col items-center justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="relative">
              {/* Rotating rings */}
              <div className="absolute inset-0 -m-4 ">
                <div className="w-full h-full border-4 border-dashed border-yellow-300 rounded-full animate-spin-slow" />
              </div>
              <div className="absolute inset-0 -m-12">
                <div
                  className="w-full h-full border-2 border-dotted border-purple-300 rounded-full animate-spin-slow"
                  style={{ animationDirection: "reverse" }}
                />
              </div>

              {/* Main steering wheel */}
              <div className="relative w-60 h-60 md:w-70 md:h-80 lg:w-86 lg:h-86 rounded-full overflow-hidden shadow-xl animate-float animate-pulse-glow">
                {/* Placeholder gradient */}
                <div className="absolute" />

                {/* Center logo area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/resource/steering-wheel.png" alt="Steering wheel" fill className="object-cover" priority />
                </div>
              </div>

              {/* Stats badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-yellow-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-600">Instructors</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-purple-400">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-600">Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex flex-col gap-6 z-10">
            {features.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${(idx + 2) * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(idx + 2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Check
                      className={`${item.iconColor} transition-transform duration-500 ${hoveredIndex === idx + 2 ? "scale-125" : ""}`}
                      size={28}
                      strokeWidth={3}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
