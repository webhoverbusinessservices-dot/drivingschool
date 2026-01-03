import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="w-full py-18 bg-gray-50">
            <div className="w-full lg:w-6/12 mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
                    <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                        How TrueWay Works
                    </p>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-3 px-4 dark:text-gray-700">
                    Simple, Trusted & Flexible Booking System
                </h2>
                <p className="mb-4 md:mb-20 px-4"> Choose your instructor, book your lessons online, and get ready for your licence — quick,
                    simple, and completely hassle-free.</p>
            </div>


            <div className="max-w-7xl mx-auto px-4 text-center">

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20">
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

                    <div className="relative flex flex-col items-center">

                        <Image
                            src="/resource/map.png"
                            alt="Browse Instructors"
                            width={240}
                            height={200}
                            className="relative z-10 mt-15 md:mt-0"
                        />
                        <div className="absolute top-[12px] md:top-[185px] flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 text-[#0f172a] font-bold text-lg shadow">
                            1
                        </div>

                        <h3 className="md:mt-20 mt-5 text-xl font-semibold text-[#0f172a] text-center">
                            Browse Our Trusted <br /> Driving Instructors
                        </h3>

                        <p className="mt-2 text-gray-800 max-w-sm text-center text-sm">
                            Choose from a wide variety of instructors in your area. Check ratings & reviews from real learners.
                        </p>
                    </div>

                    <div className="relative flex flex-col items-center">

                        <div className="relative">
                            <Image
                                src="/resource/calender.png"
                                alt="Book Lessons"
                                width={240}
                                height={220}
                                className="relative z-10 -top-10 mt-15 md:mt-0"
                            />
                        </div>

                        <div className="absolute top-[-40px] md:top-[145px] flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 text-[#0f172a] font-bold text-lg shadow">
                            2
                        </div>

                        <h3 className="md:mt-12 mt-0 text-xl font-semibold text-[#0f172a] text-center">
                            Book Lessons In <br /> Under 5 Mins
                        </h3>

                        <p className="mt-2 text-gray-800 max-w-sm text-center text-sm">
                            Book online with instant confirmation. Easily manage your lesson schedule via our online dashboard.
                        </p>
                    </div>

                    <div className="relative flex flex-col items-center">

                        <Image
                            src="/resource/new-licence.png"
                            alt="Get Licence"
                            width={300}
                            height={250}
                            className="relative z-10 mt-0 md:mt-0"
                        />

                        <div className="absolute top-[0px] md:top-[185px] flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300 text-[#0f172a] font-bold text-lg shadow">
                            3
                        </div>

                        <h3 className="md:mt-8 mt-0 text-xl font-semibold text-[#0f172a] text-center">
                            Get Your Licence
                        </h3>

                        <p className="mt-2 text-gray-800 max-w-sm text-center text-sm">
                            Your instructor picks you up from your chosen address and you&apos;re on your way.
                        </p>
                    </div>
                </div>

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
