"use client";
import { ClipboardList, Car } from "lucide-react";

type PackageType = "lesson-test" | "standalone";

export default function PackageSelector({
    selected,
    onSelect,
}: {
    selected: PackageType;
    onSelect: (type: PackageType) => void;
}) {
    return (
        <div className="max-w-7xl mx-auto text-center mb-10 xxl:px-0 px-6">
            <div className="grid md:grid-cols-2 gap-6">

                {/* Driving lessons package */}
                <button
                    onClick={() => onSelect("lesson-test")}
                    className={`flex items-center gap-4 p-6 rounded-2xl transition-all text-left cursor-pointer
            ${selected === "lesson-test"
                            ? "bg-yellow-300 text-black shadow-xl"
                            : "bg-yellow-200 text-gray-900 hover:bg-yellow-200 border border-yellow-300"
                        }`}
                >
                    {/* Icon */}
                    <div
                        className={`flex items-center justify-center w-14 h-14 rounded-xl
              ${selected === "lesson-test"
                                ? "bg-white/10"
                                : "bg-yellow-50"
                            }`}
                    >
                        <ClipboardList
                            className={`w-10 h-10 ${selected === "lesson-test"
                                ? "text-black"
                                : "text-yellow-700"
                                }`}
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h4 className="font-bold text-xl">
                            Driving test package
                        </h4>
                        <p
                            className={`text-md  ${selected === "lesson-test"
                                ? "text-grey-700"
                                : "text-gray-700"
                                }`}
                        >
                            With driving lessons included
                        </p>
                    </div>
                </button>

                {/* Standalone package */}
                <button
                    onClick={() => onSelect("standalone")}
                    className={`flex items-center gap-4 p-6 rounded-2xl transition-all text-left cursor-pointer
            ${selected === "standalone"
                            ? "bg-slate-900 text-white shadow-xl border border-gray-600"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-600"
                        }`}
                >
                    {/* Icon */}
                    <div
                        className={`flex items-center justify-center w-14 h-14 rounded-xl
              ${selected === "standalone"
                                ? "bg-white/10"
                                : "bg-gray-200"
                            }`}
                    >
                        <Car
                            className={`w-10 h-10 ${selected === "standalone"
                                ? "text-white"
                                : "text-gray-800"
                                }`}
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h4 className="font-bold text-xl">
                            Stand alone driving test
                        </h4>
                        <p
                            className={`text-md ${selected === "standalone"
                                ? "text-white/80"
                                : "text-gray-700"
                                }`}
                        >
                            Book only the driving test
                        </p>
                    </div>
                </button>

            </div>
        </div>
    );
}
