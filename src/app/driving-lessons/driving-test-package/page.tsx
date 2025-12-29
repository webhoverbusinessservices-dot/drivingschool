"use client"

import React from "react";
import { useState } from "react";
import PackageSelector from "@/components/Frontend/PackageSelector";
import LessonTestPackageForm from "@/components/Frontend/LessonTestPackageForm";
import StandaloneDrivingTestForm from "@/components/Frontend/StandaloneDrivingTestForm";
import Breadcrumb, { BreadcrumbItem } from "@/components/Frontend/Breadcrumb";
import Hero from "@/components/Frontend/Hero";
import { Clock, Car, MapPin, Calendar, Home } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";


type Feature = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
};
type PackageType = "lesson-test" | "standalone";

export default function Page() {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: "Home", href: "/", icon: Home },
        { label: "Driving Lessons", href: "/driving-lessons" },
        { label: "Driving Test Packages" },
    ];


    const features: Feature[] = [
        {
            icon: Clock,
            title: "45-minute warm-up before your test",
            description: "Get calm, focused, and ready to drive",
        },
        {
            icon: Car,
            title: "Instructor’s car provided for your test",
            description: "Drive a fully insured, test-ready vehicle",
        },
        {
            icon: MapPin,
            title: "Pick-up and drop-off for your test",
            description: "Travel stress-free to and from your test centre",
        },
        {
            icon: Calendar,
            title: "Complete 2.5-hour test package",
            description: "Support from start to finish — no guesswork",
        },
    ];



    const [selectedPackage, setSelectedPackage] =
        useState<PackageType>("lesson-test");

    return (
        <>
            {/* ====== HEADER SECTION ====== */}
            <Header />

            {/* ====== BREADCRUMB SECTION ====== */}
            <section className="bg-yellow-50 pb-5 pt-3">
                <div className="max-w-7xl mx-auto text-center ">
                    <div className="w-full flex justify-start mt-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            </section>

            {/* ====== Hero  SECTION ====== */}
            <Hero
                title="Driving Test & Driving Lesson Packages"
                subtitle="Ready for your driving test?"
                bgImage="/hero/bg-2.jpg"
                heightClass="h-[260px] md:h-[180px]"
            />

            {/* ====== SECTION ====== */}
            <section className="dark:bg-white">
                <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 py-15 px-4 dark:bg-white" >
                    <div className="max-w-7xl mx-auto xxl:px-0 px-6 dark:bg-white">
                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Content */}
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <span className="text-yellow-600 font-bold text-sm uppercase tracking-wide">OUR APPROACH</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
                                    Don’t Leave Your Test to Chance!
                                </h2>

                                <h2 className="text-2xl md:text-2xl font-black text-gray-900 mb-6 leading-tight">The Total Driving Test Preparation Package</h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Our Driving Test Package equips you with everything needed for a calm and confident test experience, giving you the best chance of success.
                                    Please note that this package includes your instructor and vehicle only—you must book the driving test separately with your local roads authority.
                                    Availability excludes ACT, SA, and TAS.
                                </p>
                            </div>

                            {/* Right Side - Feature Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                                <div className="">
                                    <div className="space-y-6">
                                        {features.map((feature, index) => {
                                            const Icon = feature.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
                                                >
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                                            <Icon className="w-7 h-7 text-white" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ====== SECTION ====== */}
            <section className="dark:bg-white">
                <div className="w-full lg:w-7/12 mx-auto text-center pt-15 dark:bg-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
                        <h2 className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                            Trusted by over 100,000 learners
                        </h2>
                    </div>

                    <p className="text-2xl md:text-4xl font-bold  md:mt-0 dark:text-gray-600">
                        Choose the package that’s right for you:
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 dark:bg-white">
                {/* PACKAGE CARDS */}
                <PackageSelector
                    selected={selectedPackage}
                    onSelect={setSelectedPackage}
                />

                {/* FORMS */}
                {selectedPackage === "lesson-test" ? (
                    <div className="max-w-7xl mx-auto mt-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl py-10 xxl:px-0 px-6 dark:bg-white">
                        {/* Instruction */}
                        <p className="text-center text-sm text-gray-700 mb-6">
                            Please select your pickup suburb & transmission type. You can then review
                            our instructors in your area & book online.
                        </p>
                        <LessonTestPackageForm />
                    </div>
                ) : (
                    <StandaloneDrivingTestForm />
                )}
            </section>


            {/* ====== SECTION ====== */}
            <section className="bg-white py-16 md:py-10">
                {/* CONTENT GRID */}
                <div className="max-w-7xl mx-auto xxl:px-0 px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                        {/* LEFT – CARDS */}
                        <div className="space-y-8 md:space-y-10">
                            {/* CARD 1 */}
                            <div className="
                                 group relative bg-white rounded-2xl p-8
                                 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                                 transition-all duration-500 ease-out
                                 hover:-translate-y-2
                                 border border-yellow-300
                               ">

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition ">
                                    Pass with Confidence
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    Go into your driving test fully prepared with a focused pre-test warm-up,
                                    expert guidance, and a fully insured, test-ready instructor’s car—
                                    everything you need in one complete package.
                                </p>

                                <div className="absolute inset-0 rounded-2xl bg-yellow-300/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                            </div>

                            {/* CARD 2 */}
                            <div className="
                                group relative bg-white rounded-2xl p-8
                                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                                transition-all duration-500 ease-out
                                hover:-translate-y-2
                                border border-gray-800
                              ">

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-900 transition">
                                    Not Test-Ready Yet? We’ve Got You Covered
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    Build your confidence and skills with structured driving lesson packages.
                                    Learn in the same instructor’s car you’ll use on test day—so there are no
                                    surprises when it matters most.
                                </p>

                                <div className="absolute inset-0 rounded-2xl bg-slate-900/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT – IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src="/hero/girl-with-car.png"
                                alt="Driving Offer"
                                width={520}
                                height={420}
                                className="w-full max-w-md lg:max-w-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* ====== FOOTER SECTION ====== */}
            <Footer />
        </>
    );
}
