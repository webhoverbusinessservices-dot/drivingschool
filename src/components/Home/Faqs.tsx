"use client";
import { useState } from "react";
import { Plus, Car } from "lucide-react";

const faqs = [
  {
    question: "Why should I choose True Way Driving School over other instructors?",
    answer:
      "True Way focuses on more than just passing your test — we train you to become a confident, safe and independent driver for life. Every lesson is taught one-on-one by an experienced instructor with a background in public transport training and commercial driving, zero demerit points, and deep knowledge of Perth road conditions. Lessons are structured, supportive and paced to suit your learning style, whether you’re a complete beginner or returning to driving after a break."
  },

  {
    question: "What kind of car will I learn in, and is it safe?",
    answer:
      "All lessons are conducted in a clean, dual-controlled training vehicle, meaning the instructor has their own brake and extra safety controls fitted. This allows you to practice safely while building confidence at your own speed. The vehicle is fully insured, regularly serviced and maintained to meet Western Australia licensing and safety standards."
  },

  {
    question: "I’m nervous or have never driven before — can you help?",
    answer:
      "Absolutely. Many students start with little or no experience, and feeling nervous is completely normal. Lessons begin in quiet areas and gradually progress to roundabouts, intersections and busy traffic only when you’re ready. We focus on calm guidance, clear explanations and positive feedback, helping you overcome fear, avoid bad habits and develop real-world confidence step by step."
  },

  {
    question: "Do you pick me up and drop me off for lessons?",
    answer:
      "Yes — pick-up and drop-off are included within the local area. We can collect you from home, school, work or another agreed location, as long as it is arranged before your lesson. If your pickup location is outside the normal service area, we’ll let you know in advance if a small travel fee applies."
  },

  {
    question: "How do payments and refunds work?",
    answer:
      "You can pay securely when booking your lesson or package. Packages offer the best value and can be used across multiple sessions. If you need to reschedule, simply do so within the required notice period to avoid fees. Cancellations made late or on the same day may incur a charge, because time has been reserved especially for you. Where eligible, refunds are processed quickly and transparently — no hidden costs."
  },

  {
    question: "Will you help me prepare for the driving test and what happens on test day?",
    answer:
      "Yes — we provide targeted test-preparation lessons that cover common examiner expectations, road rules, decision-making, observation skills and Perth-specific test routes. On test day, our Driving Test Package includes a warm-up lesson, car hire and support getting to the test centre. We also review your performance afterwards to help you continue improving, even after you pass."
  }
];


export default function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };


  return (
    <>
      <section className="faq-section-hero relative py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        {/* Animated road lines */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section heading */}
          <div className="text-center mb-16 fadeInUp-animation">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <Car className="text-yellow-700" size={20} />
              <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
                Frequently Asked Questions
              </p>
            </div> */}
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-2">
              Frequently Asked Questions            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12 md:mb-12">
              Everything you need to know about booking driving lessons with Trueway Driving School
            </p>
          </div>



          {/* Grid */}
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* FAQ Column */}
            <div className="space-y-4 lg:col-span-10 lg:col-start-2 mx-auto w-full">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border-y border-gray-200 overflow-hidden hover:border-yellow-300 transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    className="w-full flex justify-between items-center p-3 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4 group-hover:text-yellow-400 transition-colors">
                      {item.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-6 h-6 text-base rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index
                        ? "bg-yellow-400 rotate-45"
                        : "bg-gray-100 group-hover:bg-yellow-100"
                        }`}
                    >
                      <Plus
                        className={openFaq === index ? "text-white" : "text-gray-700"}
                        size={18}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40" : "max-h-0"
                      }`}
                  >
                    <div className="px-3 pb-4 text-gray-600 ">
                      <p className="leading-relaxed text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
