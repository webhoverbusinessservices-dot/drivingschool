import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="w-full py-18 bg-gray-50 ">
            <div className="w-full lg:w-6/12 mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
                    <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                        How TrueWay Works
                    </p>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-28">
                    Simple, Trusted & Flexible Booking System
                </h2>
            </div>


            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* ===== STEPS WRAPPER ===== */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20">

                    {/* ===== CONNECTOR LINE (EXACT LIKE IMAGE) ===== */}
                    <div className="hidden md:block absolute top-[150px] left-0 w-full">
                        <svg
                            viewBox="0 0 1200 120"
                            className="w-full h-[120px]"
                            fill="none"
                        >
                            <path
                                d="M50 60 H350 L420 20 H780 L850 60 H1150"
                                stroke="#facc15"
                                strokeWidth="4"
                                strokeDasharray="6 6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* ================= STEP 1 ================= */}
                    <div className="relative flex flex-col items-center">

                        <Image
                            src="/resource/map.png"
                            alt="Browse Instructors"
                            width={260}
                            height={200}
                            className="relative z-10"
                        />

                        {/* NUMBER ON LINE */}
                        <div className="absolute top-[185px] flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 text-[#0f172a] font-bold text-lg shadow">
                            1
                        </div>

                        <h3 className="mt-16 text-xl font-semibold text-[#0f172a] text-center">
                            Browse Our Trusted <br /> Driving Instructors
                        </h3>

                        <p className="mt-4 text-gray-800 max-w-sm text-center text-sm">
                            Choose from a wide variety of instructors in your area. Check ratings & reviews from real learners.
                        </p>
                    </div>

                    {/* ================= STEP 2 ================= */}
                    <div className="relative flex flex-col items-center">

                        <div className="relative">
                            <Image
                                src="/resource/calender.png"
                                alt="Book Lessons"
                                width={260}
                                height={200}
                                className="relative z-10 -top-10"
                            />
                        </div>

                        {/* NUMBER */}
                        <div className="absolute top-[145px] flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 text-[#0f172a] font-bold text-lg shadow">
                            2
                        </div>

                        <h3 className="mt-5 text-xl font-semibold text-[#0f172a] text-center">
                            Book Lessons In <br /> Under 5 Mins
                        </h3>

                        <p className="mt-4 text-gray-800 max-w-sm text-center text-sm">
                            Book online with instant confirmation. Easily manage your lesson schedule via our online dashboard.
                        </p>
                    </div>

                    {/* ================= STEP 3 ================= */}
                    <div className="relative flex flex-col items-center">

                        <Image
                            src="/resource/licence.png"
                            alt="Get Licence"
                            width={260}
                            height={200}
                            className="relative z-10"
                        />

                        {/* NUMBER */}
                        <div className="absolute top-[185px] flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 text-[#0f172a] font-bold text-lg shadow">
                            3
                        </div>

                        <h3 className="mt-16 text-xl font-semibold text-[#0f172a] text-center">
                            Get Your Licence
                        </h3>

                        <p className="mt-4 text-gray-800 max-w-sm text-center text-sm">
                            Your instructor picks you up from your chosen address and you&apos;re on your way.
                        </p>
                    </div>

                </div>

                {/* ===== CTA BUTTON ===== */}
                <div className="flex justify-center mt-6 sm:mt-0">
                    <button className="flex items-center gap-2 bg-yellow-300 text-black px-8 py-3 rounded-full shadow  hover:text-white hover:bg-gray-900 transition whitespace-nowrap">
                        <span>Start learning to drive now</span>
                        <ArrowRight size={18} />
                    </button>
                </div>


            </div>
        </section>
    );
}
