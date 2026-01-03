import { CheckCircle } from "lucide-react"
import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section className="relative max-w-7xl mx-auto px-4  md:pb-10 overflow-hidden dark:bg-white ">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
                            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">About Us</p>
                        </div>

                        <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Safe, Confident, Experienced – Learning the True Way
                        </h2>

                        <p className="text-gray-900 text-base leading-relaxed">
                            True Way Driving School is committed to delivering personalised,
                            real-road driving lessons. Our owner-instructor brings a wealth
                            of experience, including:
                        </p>

                        <div className="flex items-center gap-4 text-gray-900 ">
                            <div>
                                <div className="flex items-center gap-2 ">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span className="text-sm md:text-base font-semibold">Public bus driver and trainer</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span className="text-sm md:text-base font-semibold">Commercial truck driving</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span className="text-sm md:text-base font-semibold">Maintaining a perfect driving record with zero demerit points</span>
                                </div>
                            </div>
                            {/* Phone Button */}
                            {/* <a
                                href="tel:+17003330088"
                                className="flex items-center gap-3 bg-white border-2 border-teal-600 rounded-full px-6 py-3 hover:bg-teal-50 transition-colors shadow-md"
                            >
                                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-teal-600 font-bold text-lg">
                                    +1 (700) 333 0088
                                </span>
                            </a> */}
                        </div>
                        <p className="text-gray-900 text-base leading-relaxed">
                            We understand that every learner is different, so we tailor every lesson to your pace and ability, helping you build confidence on the road. Lessons are flexible and can be scheduled weekends, early mornings, or evenings, so you’re learning fits your lifestyle.

                        </p>
                        <div className="flex  mt-6 sm:mt-0">
                            <button className="flex items-center gap-2 bg-yellow-300 text-black px-8 py-3 rounded-full shadow  hover:text-white hover:bg-gray-900 transition whitespace-nowrap">
                                <span>Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14">
                                </path><path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 p-0 md:p-8">
                            <Image
                                src="/resource/about-1-1.jpg"
                                alt="Happy student with driving license"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-2xl shadow-lg"
                                priority
                            />
                        </div>

                        {/* <div className="absolute -bottom-8 -left-8 w-56 h-56 z-20 ">
                            <Image
                                src="/resource/about-2-1.jpg"
                                alt="Lesson start button"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-2xl shadow-xl"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}