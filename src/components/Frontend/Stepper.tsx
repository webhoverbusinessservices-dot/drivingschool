import { Check } from "lucide-react";

interface StepperProps {
    steps: string[];
    currentStep: number; // 1-based index
}

export default function Stepper({ steps, currentStep }: StepperProps) {
    const progressPercent =
        ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="w-full flex items-center justify-between relative">
                {/* Base dashed gray line */}
                <div className="absolute top-4 left-0 right-0">
                    <div className="border-t-2 border-dashed border-gray-300" />

                    {/* Completed dashed yellow line */}
                    <div
                        className="absolute top-0 left-0 border-t-2 border-dashed border-yellow-300 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isActive = stepNumber === currentStep;

                    return (
                        <div
                            key={step}
                            className="relative z-10 flex flex-col items-center"
                        >
                            {/* Circle */}
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base transition-all
                                     ${isCompleted
                                        ? "bg-yellow-300 text-white"
                                        : isActive
                                            ? "bg-black text-white"
                                            : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                {isCompleted ? <Check size={16} /> : stepNumber}
                            </div>

                            {/* Label */}
                            <span
                                className={`mt-2 text-sm font-medium text-center
                ${isActive
                                        ? "text-black"
                                        : isCompleted
                                            ? "text-gray-700"
                                            : "text-gray-400"
                                    }`}
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
