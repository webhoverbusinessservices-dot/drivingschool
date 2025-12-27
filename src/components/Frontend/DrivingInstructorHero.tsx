"use client";

import { CheckCircle, Shield } from "lucide-react";
import Image from "next/image";

export default function DrivingInstructorHero() {
    return (
        <section className="w-full bg-gray-50 py-12 md:py-5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Side – Illustration */}
                    <div className="">
                        <div className="relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-50 rounded-[3rem] p-8 md:p-12 flex items-center justify-center">

                            {/* Car Illustration */}
                            <Image
                                src="/hero/driving-instructor-hero.png"
                                alt="Driving instructor illustration"
                                width={420}
                                height={280}
                                priority
                                className="object-contain"
                            />

                        </div>
                    </div>


                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
                            <Shield className="text-yellow-600" size={18} />
                            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                                TRUSTED ROAD AHEAD
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Find the perfect{" "}
                            <span className="text-yellow-500">driving instructor</span>{" "}
                            near you.
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Join thousands of learners mastering the road. Our certified instructors specialise in helping international license holders and first-time drivers alike.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm md:text-base font-medium">2-hr tested</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm md:text-base font-medium">Verified Instructors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}