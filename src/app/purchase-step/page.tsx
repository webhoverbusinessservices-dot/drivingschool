"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Stepper from "@/components/Frontend/Stepper";
import AmountStep from "@/components/Frontend/AmountStep";
import BookLessonsStep from "@/components/Frontend/BookLessonsStep";
import LearnerRegistrationStep from "@/components/Frontend/LearnerRegistrationStep";
import PaymentStep from "@/components/Frontend/PaymentStep";

export default function Page() {
  const steps = [
    "Instructor",
    "Amount",
    "Book your lessons",
    "Learner Registration",
    "Payment",
  ];

  // ✅ Start from Instructor
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AmountStep />;
      case 2:
        return <BookLessonsStep />;
      case 3:
        return <LearnerRegistrationStep />;
      case 4:
        return <PaymentStep />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">
          {renderStep()}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentStep((s) => Math.min(steps.length, s + 1))
            }
            className="px-6 py-2 bg-yellow-300 rounded-lg font-bold"
          >
            {currentStep === steps.length ? "Pay Now" : "Continue"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

