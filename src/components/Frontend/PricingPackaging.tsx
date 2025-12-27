import React from 'react'
import Breadcrumb, { BreadcrumbItem } from "@/components/Frontend/Breadcrumb";
import { Home } from "lucide-react";



export default function PricingPackaging() {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: "Home", href: "/", icon: Home },
        { label: "Driving Lessons", href: "#" },
        { label: "Prices & Packages" },
    ];
    return (
        <>
            <section className="bg-yellow-50 pb-5 pt-3">
                <div className="max-w-7xl mx-auto text-center ">
                    <div className="w-full flex justify-start mt-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 mt-5 text-slate-900 dark:text-white leading-tight">
                        True Way Driving School – Pricing
                    </h1>
                    <p className="text-lg md:text-base text-gray-900 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                        • Personalised &nbsp; • Real-Road &nbsp; • Confidence-Focused
                    </p>
                </div>
                <section>
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-soft border-l-4 border-yellow-300 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 group card-hoverable">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-yellow-300 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
                        <div className="flex items-start gap-4 z-10">
                            <div className="p-3 bg-yellow-300/10 rounded-xl text-yellow-300 shrink-0">
                                <span className="material-icons-round text-3xl">local_fire_department</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="text-xl md:text-2xl font-display font-bold">New Learner Offer</h2>
                                    <span className="px-2 py-0.5 text-sm font-bold uppercase bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300 rounded-full">Limited Time</span>
                                </div>
                                <h3 className="text-lg text-gray-600 dark:text-gray-300 font-medium">First Lesson Special</h3>
                                <p className="text-base text-gray-600 mt-1">• One-on-one • Confidence Building</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end z-10">
                            <div className="text-center md:text-right">
                                <span className="block text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">$65</span>
                                <span className="text-base text-gray-500 dark:text-gray-600">for 60 mins</span>
                            </div>
                            <button className="mt-4 px-6 py-2 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-300-dark transition-colors shadow-glow flex items-center gap-2">
                                Book Now <span className="material-icons-round text-base">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-2 justify-center mb-15">
                        <span className="material-icons-round text-yellow-300 text-2xl">emoji_events</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-center ">Lesson Packages</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-soft card-hoverable flex flex-col relative border border-gray-100 dark:border-gray-700">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                Starter
                            </div>
                            <div className="text-center mb-6 mt-2">
                                <h3 className="text-xl font-bold font-display text-gray-700 dark:text-gray-200">3 Lessons</h3>
                                <p className="text-base text-gray-500">3 x 60 mins</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white">$195</span>
                                <div className="mt-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-bold">
                                    Save $15
                                </div>
                            </div>
                            <p className="text-base text-gray-500 dark:text-gray-600 text-center mb-8 leading-relaxed">
                                Helps beginners gain confidence, understand fundamentals, and develop safe driving habits.
                            </p>
                            <button className="mt-auto w-full py-3 border-2 border-yellow-300 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-yellow-300 hover:border-yellow-300 transition-all">
                                Get Started
                            </button>
                        </div>
                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-xl card-hoverable flex flex-col relative border-2 border-yellow-300 transform md:-translate-y-4 z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-300 text-gray-900 px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                Most Popular
                            </div>
                            <div className="text-center mb-6 mt-4">
                                <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">5 Lessons</h3>
                                <p className="text-base text-gray-500">5 x 60 mins</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-5xl font-bold text-yellow-300">$320</span>
                                <div className="mt-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-bold">
                                    Save $30
                                </div>
                            </div>
                            <p className="text-base text-gray-500 dark:text-gray-600 text-center mb-8 leading-relaxed">
                                Perfect for new learners starting their driving journey from scratch. Build confidence and master the road.
                            </p>
                            <button className="mt-auto w-full py-3 bg-yellow-300 text-gray-900 font-bold rounded-xl hover:bg-yellow-300-dark shadow-glow transition-all">
                                Get Started
                            </button>
                        </div>
                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-soft card-hoverable flex flex-col relative border border-gray-100 dark:border-gray-700">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                Best Value
                            </div>
                            <div className="text-center mb-6 mt-2">
                                <h3 className="text-xl font-bold font-display text-gray-700 dark:text-gray-200">10 Lessons</h3>
                                <p className="text-base text-gray-500">10 x 60 mins</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white">$620</span>
                                <div className="mt-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-bold">
                                    Save $80
                                </div>
                            </div>
                            <p className="text-base text-gray-500 dark:text-gray-600 text-center mb-8 leading-relaxed">
                                Perfect balance of practice and progress, helping learners gain confidence, refine skills, and prepare for testing.
                            </p>
                            <button className="mt-auto w-full py-3 border-2 border-yellow-300 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-yellow-300 hover:border-yellow-300 transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
                        <span className="material-icons-round text-yellow-300 text-2xl">grid_view</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold">Additional Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-6 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft card-hoverable flex flex-col justify-between border-t-4 border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                                    <span className="material-icons-round">star</span>
                                </div>
                                <h3 className="text-lg font-bold font-display">Standard Lessons</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Standard</p>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">$70</span>
                                        <span className="text-sm text-gray-500">/ 60min</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Extended</p>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">$100</span>
                                        <span className="text-sm text-gray-500">/ 90min</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-center text-gray-600 mt-4">✓ Pick-up &amp; drop-off included • Tailored to your learning style</p>
                        </div>
                        <div className="lg:col-span-6 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft card-hoverable flex flex-col justify-center border-t-4 border-yellow-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-yellow-600 dark:text-yellow-400">
                                        <span className="material-icons-round">assignment_turned_in</span>
                                    </div>
                                    <h3 className="text-lg font-bold font-display">Test Package</h3>
                                </div>
                                <span className="px-2 py-1 bg-yellow-300 text-gray-900 text-sm font-bold rounded uppercase">Complete</span>
                            </div>
                            <div className="flex flex-col items-center justify-center py-4">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">$180</span>
                                <span className="text-base text-gray-500 mt-2 text-center max-w-xs">60 min warm-up + Test car + Pick-up &amp; drop-off</span>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft card-hoverable">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                                    <span className="material-icons-round">add_road</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-display leading-tight">Freeway / Highway</h3>
                                    <p className="text-sm text-gray-500">Advanced Training</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                <span className="text-base font-medium text-gray-600 dark:text-gray-300">Single Lesson</span>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">$90</span>
                            </div>
                            <div className="mt-4 flex gap-2 flex-wrap">
                                <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-500 px-2 py-1 rounded">Merging</span>
                                <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-500 px-2 py-1 rounded">Lane Discipline</span>
                            </div>
                        </div>
                        <div className="lg:col-span-7 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft card-hoverable">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    <span className="material-icons-round">dark_mode</span>
                                </div>
                                <h3 className="text-lg font-bold font-display">Special Rates</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                                <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-xl">
                                    <p className="text-sm text-gray-500 mb-1">Evening</p>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">$90</p>
                                </div>
                                <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-xl">
                                    <p className="text-sm text-gray-500 mb-1">Weekend</p>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">$90</p>
                                </div>
                                <div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl">
                                    <p className="text-sm text-red-500 mb-1">Holiday</p>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">$100</p>
                                </div>
                            </div>
                            <p className="text-sm text-center text-gray-600 mt-4 italic">*Subject to availability</p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
