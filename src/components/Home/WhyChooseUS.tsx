"use client";

import React, { useState } from "react";
import Image from "next/image";

// ICONS
import {
  Car,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
  iconImg: string;
}

const features: Feature[] = [
  {
    title: "Professional Driving Instructors",
    description:
      "Learn from fully qualified, patient instructors who focus on safety, confidence and real-road driving skills.",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-gray-900",
    iconColor: "text-blue-600",
    iconImg: "/resource/c2.png",
  },
  {
    title: "Local Suburbs Covered",
    description:
      "Convenient lessons across your local area, so you can start training close to home, school or work.",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-gray-900",
    iconColor: "text-purple-600",
    iconImg: "/resource/wh-2.png",
  },
  {
    title: "Easy Online Bookings",
    description:
      "Book lessons in seconds with instant confirmation, reschedule when needed and manage everything online.",
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-gray-900",
    iconColor: "text-orange-600",
    iconImg: "/resource/wh-1.png",
  },
  {
    title: "Learn at Your Own Pace",
    description:
      "Lessons are tailored to your confidence level — from nervous beginners to test-ready drivers.",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-gray-900",
    iconColor: "text-green-600",
    iconImg: "/resource/c1.png",
  },
];


export default function WhyChooseUs(): React.ReactElement {
  const isVisible = true;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-10 lg:py-15 mb-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 relative z-10">

        {/* HEADER */}
        <div
          className={`w-full lg:w-8/12 mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <Sparkles className="text-yellow-600" size={18} />
            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
              Why choose Trueway Driving School?
            </p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-2 dark:text-gray-700">
            Your Smart Choice for Success
          </h2>

          <p className="text-gray-800 text-base max-w-2xl mx-auto mb-12 md:mb-20">
            Experience hassle-free learning with trusted instructors and flexible booking options.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-3 items-center">

          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-6">
            {features.slice(0, 2).map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Image
                        src={item.iconImg}
                        alt={item.title}
                        width={40}
                        height={40}
                        className={`
                        transition-all duration-500
                        ${hoveredIndex === idx ? "scale-85" : ""}
                        invert brightness-200
                      `}
                      />

                    </div>


                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex flex-col items-center justify-center transition-all duration-1000">
            <img
              src="https://wordpress.themehour.net/dride/wp-content/uploads/2023/07/why_2_1.jpg"
              alt=""
              className="rounded-3xl"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex flex-col gap-6 z-10">
            {features.slice(2, 4).map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                  style={{ transitionDelay: `${(idx + 2) * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(idx + 2)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Image
                        src={item.iconImg}
                        alt={item.title}
                        width={40}
                        height={40}
                        className={`
                        transition-all duration-500
                        ${hoveredIndex === idx ? "scale-85" : ""}
                        invert brightness-200
                      `}
                      />

                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
