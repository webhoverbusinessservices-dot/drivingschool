"use client";
import Image from "next/image";

export default function DrivingConfidenceSplit() {
    const features = [
        {
            image: "/resource/c1.png",
            title: "Instructor Ratings",
            description:
                "Read real learner reviews and choose instructors with proven results."
        },
        {
            image: "/resource/c2.png",
            title: "Fully Accredited",
            description:
                "Every instructor is verified, accredited and checked for compliance."
        },
        {
            image: "/resource/c3.png",
            title: "Vehicle Safety First",
            description:
                "See vehicle details, safety standards and maintenance history before booking."
        },
        {
            image: "/resource/c4.png",
            title: "Always Your Choice",
            description:
                "Change or switch instructors anytime from your dashboard — stress-free."
        }
    ];



    return (
        <section className="max-w-7xl mx-auto xxl:px-0 pb-10 ">
            {/* Header */}
            <div
                className="w-full lg:w-8/12 mx-auto text-center mt-16 transition-all duration-1000 px-4"
            >
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
                    <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                        Why choose Trueway Driving School?
                    </p>
                </div> */}
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-text-light dark:text-text-dark mb-4 dark:text-gray-700">
                    Feel Confident Booking Lessons
                </h2>
                <p className="text-gray-800 text-base max-w-2xl mx-auto">
                    Your trusted driving instructor is just a click away — book with confidence and
                    start driving smarter today.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 lg:p-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative bg-white border border-yellow-300 dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                    >
                        {/* hover accent */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-24 bg-yellow-300 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300" />

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center">
                            {feature.title}
                        </h3>

                        {/* Image inside circular frame */}
                        <div className="relative mx-auto w-28 h-28 mb-6">

                            {/* Outer ring */}
                            <div className="absolute inset-1 rounded-full bg-gradient-to-b from-gray-200 to-yellow-300 shadow-inner" />

                            {/* Middle ring */}
                            <div className="absolute inset-3 rounded-full bg-white shadow-lg" />

                            {/* Inner soft shadow circle */}
                            <div className="absolute inset-4 rounded-full bg-gradient-to-b from-white to-gray-200 shadow-inner flex items-center justify-center">

                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={55}
                                    height={55}
                                    className="object-contain"
                                />

                            </div>
                        </div>


                        {/* Description */}
                        <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed text-center">
                            {feature.description}
                        </p>

                        {/* hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
}
