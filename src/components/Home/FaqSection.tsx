"use client";
import { useState } from "react";
import { Plus, Car, Gauge, Award, Clock } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What is TrueWay and how does it work?",
    answer:
      "TrueWay is an online platform that lets you compare, book and manage driving lessons with verified instructors in your area.",
  },
  {
    question: "How do I book a driving lesson?",
    answer:
      "Simply enter your suburb, choose an instructor, select a time that suits you and confirm your booking online in just a few clicks.",
  },
  {
    question: "Can I choose my own driving instructor?",
    answer:
      "Yes, you can browse instructor profiles, read reviews, compare prices and pick the instructor who best fits your needs.",
  },
  {
    question: "What is a test package?",
    answer:
      "A test package usually includes a pre-test warm-up lesson plus car hire for your driving test with your chosen instructor.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes, you can manage, reschedule or cancel your bookings from your TrueWay account, subject to the instructor's cancellation policy.",
  },
];

const features = [
  { icon: Car, label: "Verified Instructors", color: "bg-blue-500" },
  { icon: Gauge, label: "Easy Booking", color: "bg-green-500" },
  { icon: Award, label: "Quality Lessons", color: "bg-purple-500" },
  { icon: Clock, label: "Flexible Times", color: "bg-orange-500" },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section-hero relative py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Animated road lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20"></div>
      </div>

      {/* Animated cars */}
      <div className="absolute top-1/4 left-0 w-full pointer-events-none">
        <div className="slide-animation">
          <Car className="text-yellow-600 opacity-30" size={40} />
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-full pointer-events-none">
        <div className="slide-reverse-animation flex justify-end">
          <Car className="text-blue-600 opacity-30 transform scale-x-[-1]" size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 fadeInUp-animation">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <Car className="text-yellow-700" size={20} />
            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold dark:text-gray-700">
              Frequently Asked Questions
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-2">
            Top FAQs & Featured Blogs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 md:mb-12">
            Everything you need to know about booking driving lessons with Trueway Driving School
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} p-2 rounded-lg`}>
                <feature.icon className="text-white" size={20} />
              </div>
              <span className="text-md font-semibold text-gray-800">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* FAQ Column */}
          <div className="space-y-4 lg:col-span-7">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-300 transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg pr-4 group-hover:text-yellow-700 transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index
                        ? "bg-yellow-500 rotate-45"
                        : "bg-gray-100 group-hover:bg-yellow-100"
                      }`}
                  >
                    <Plus
                      className={`${openFaq === index ? "text-white" : "text-gray-700"}`}
                      size={20}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image side */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-8 float-animation">
              <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 z-10"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Image
                      src="/resource/faq-image.png"
                      alt="girl-image"
                      className="object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-yellow-600">500+</div>
                  <div className="text-xs text-gray-600">Instructors</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-600">Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
