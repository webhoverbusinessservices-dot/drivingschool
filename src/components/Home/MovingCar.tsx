"use client";

import Image from "next/image";
import { Award, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function MovingCarSection() {
    // ✅ Lazy initializer (runs once, ESLint-safe)
    const [dustOffsets] = useState<number[]>(() =>
        Array.from({ length: 8 }, () => Math.random() * 18)
    );

    return (
        <section className="relative w-full h-[380px] md:h-[460px] overflow-hidden bg-white flex items-center">
            {/* Background */}
            <div
                className="
                          absolute inset-0
                          bg-[url('/resource/city.jpg')]
                          bg-repeat-x
                          bg-[length:auto_100%]
                          "animate-bg-left
            />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 w-full">

                <div className="text-center md:text-left backdrop-blur-md bg-gradient-to-r from-white/90 via-white/70 to-white/40 p-4 sm:p-6 md:p-12 rounded-3xl shadow-2xl border border-white/50">

                    {/* Badge row */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full shadow">
                            <Users size={16} />
                            <span className="text-[11px] sm:text-xs font-semibold">
                                500+ Learners Supported
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">
                        Complete Test Day Support
                    </h2>

                    {/* List */}
                    <ul className="hidden sm:block space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
                        <li className="flex items-start gap-3 text-slate-900">
                            <CheckCircle className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                            <span className="text-sm sm:text-base leading-relaxed font-semibold">
                                60-minute pre-test warm-up session
                            </span>
                        </li>

                        <li className="flex items-start gap-3 text-slate-900">
                            <CheckCircle className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                            <span className="text-sm sm:text-base leading-relaxed font-semibold">
                                Use of instructor vehicle for the driving test
                            </span>
                        </li>

                        <li className="flex items-start gap-3 text-slate-900">
                            <CheckCircle className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                            <span className="text-sm sm:text-base leading-relaxed font-semibold">
                                Pick-up before the test & drop-off afterwards
                            </span>
                        </li>
                    </ul>

                    {/* Button */}
                    <Link
                        href=""
                        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-300 rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition"
                    >
                        <span className="text-xs sm:text-sm font-bold uppercase">
                            Book Test Package Now
                        </span>
                    </Link>
                </div>
            </div>



            {/* CAR */}
            <div className="absolute bottom-[20px] sm:bottom-[35px] animate-car-right">
                <div className="relative w-[220px] sm:w-[300px] md:w-[380px]">
                    <Image
                        src="/resource/car.png"
                        alt="Car"
                        width={380}
                        height={160}
                        className="w-full h-auto"
                        priority
                    />

                    {/* Wheels */}
                    <div className="absolute bottom-[6px] left-0 w-full flex justify-between px-6 sm:px-8 md:px-[38px]">
                        <Image
                            src="/resource/wheel.png"
                            alt="Wheel 1"
                            width={62}
                            height={62}
                            className="animate-wheel w-10 sm:w-12 md:w-[62px]"
                        />
                        <Image
                            src="/resource/wheel.png"
                            alt="Wheel 2"
                            width={62}
                            height={62}
                            className="animate-wheel w-10 sm:w-12 md:w-[62px]"
                        />
                    </div>

                    {/* Dust */}
                    <div className="absolute -left-6 sm:-left-10 bottom-[5px] pointer-events-none">
                        {dustOffsets.map((offset, i) => (
                            <div
                                key={i}
                                className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full dust-particle opacity-40"
                                style={{
                                    left: `${i * 8}px`,
                                    bottom: `${offset}px`,
                                    animationDelay: `${i * 0.12}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
