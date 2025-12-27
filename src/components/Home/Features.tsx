import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: "/resource/c1.png",
            title: "Learn With Confidence",
            desc: "One-on-one lessons tailored to your pace, skill level and goals.",
        },
        {
            icon: "/resource/c2.png",
            title: "Experienced Instructor",
            desc: "Train with a fully licensed instructor with real road and test experience.",
        },
        {
            icon: "/resource/f3.png",
            title: "Flexible Lesson Times",
            desc: "Early mornings, evenings and weekends — driving lessons that fit your schedule.",
        },
        {
            icon: "/resource/f4.png",
            title: "Dual-Control Training Car",
            desc: "Extra safety and peace of mind with an instructor brake fitted to the vehicle.",
        },
        {
            icon: "/resource/f5.png",
            title: "Test-Ready Support",
            desc: "Structured practice, mock tests and guidance to help you pass with confidence.",
        },
    ];


    return (
        <section className="relative w-full pt-10 md:pt-10 pb-15 md:pb-15  overflow-hidden dark:bg-white">
            {/* Decorative Background Elements */}
            {/* <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div> */}

            <div className="relative max-w-7xl mx-auto px-4 text-center">
                {/* Header Section */}
                <div className="w-full lg:w-8/12 mx-auto text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6 shadow-lg border border-yellow-200">
                        <Sparkles size={16} className="text-yellow-600" />
                        <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                            Our Features
                        </p>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-15 dark:text-gray-700">
                        Confidence Starts with Safe Driving
                    </h2>

                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                            {/* Card */}
                            <div className="relative flex flex-col items-center text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl border-2 border-yellow-200 group-hover:border-yellow-300 transition-all duration-300  h-full">
                                {/* Icon Container */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-2xl border-2 border-yellow-300 group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-300">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain p-3"
                                        />
                                    </div>
                                </div>



                                {/* Title */}
                                <h4 className="font-bold text-lg md:text-xl mb-3 text-gray-900 group-hover:text-yellow-800 transition-colors">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}