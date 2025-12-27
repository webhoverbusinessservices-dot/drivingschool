import React from 'react'
import { Clock, LayoutDashboard, SlidersHorizontal, MapPin, Users } from "lucide-react"

export default function AdvantageSection() {
    return (
        <>
            <section className="advantage-theme py-15 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                            The <span className="relative inline-block text-slate-900 dark:text-white">
                                Trueway Driving School
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1 rounded-sm"></span>
                            </span> advantage
                        </h1>

                        <p className="text-base md:text-md text-gray-600 dark:text-slate-400 leading-relaxed">
                            Enjoy a seamless, flexible way to book, manage and track your driving lessons — all in one simple platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="feature-card bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 hover:shadow-xl dark:hover:shadow-glow group border border-gray-300">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-blue-600 dark:text-blue-400">
                                    <Clock size={25} />
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Book in under 60 seconds
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Skip the phone calls — find an instructor and secure your spot instantly with our streamlined booking system.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="feature-card bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 hover:shadow-xl dark:hover:shadow-glow group border border-gray-300">
                            <div className="w-14 h-14 bg-amber-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <span className="text-amber-600 dark:text-primary">
                                    <LayoutDashboard size={25} />
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                                Your online dashboard
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                                Track your progress, view upcoming lessons, and manage everything from one simple dashboard.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="feature-card bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 hover:shadow-xl dark:hover:shadow-glow group border border-gray-300">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-purple-600 dark:text-purple-400">
                                    <SlidersHorizontal size={25} />
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Total control over bookings
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Reschedule or cancel lessons easily — you stay in control of your calendar.
                            </p>
                        </div>

                        {/* Highlight card */}
                        <div className="feature-card lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-lg relative overflow-hidden group border border-gray-300">
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"></div>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                                    <span className="material-icons-outlined text-4xl text-primary">
                                        <Users size={25} />
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        A wide range of trusted instructors
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed max-w-lg">
                                        Choose from a large network of verified instructors. Filter by vehicle type, price, language and ratings so you find the perfect match — and book with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Local area */}
                        <div className="feature-card bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 hover:shadow-xl dark:hover:shadow-glow group border border-gray-300">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-emerald-600 dark:text-emerald-400">
                                    <MapPin size={25} />
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Servicing your local area
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We connect you with instructors who know your roads and local test routes — helping you feel confident on test day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
