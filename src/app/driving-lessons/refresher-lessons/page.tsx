import React from 'react'
import Header from '@/components/Header/Header';
import Breadcrumb, { BreadcrumbItem } from "@/components/Frontend/Breadcrumb";
import Footer from '@/components/Footer/Footer';
import { Home, UserCheck } from "lucide-react";
import LessonTestPackageForm from '@/components/Frontend/LessonTestPackageForm';
import PricingPackage from '@/components/Frontend/PricingPackage';
import HowItWorks from '@/components/Home/HowItWorks';
import DrivingInstructorHero from '@/components/Frontend/DrivingInstructorHero';
import Testimonials from '@/components/Home/Testimonials';
import AdvantageSection from '@/components/Frontend/AdvantageSection';


export default function RefresherLesson() {

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Driving Lessons", href: "#" },
    { label: "RefresherLesson" },
  ];
  return (
    <>
      {/* ====== HEADER SECTION ====== */}
      <Header />

      {/* ====== BREADCRUMB SECTION ====== */}
      <section className="bg-yellow-50 pb-5 pt-3">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-full flex justify-start mt-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </section>

      {/* ====== Hero  SECTION ====== */}
      <div className="max-w-7xl mx-auto my-6 sm:my-10 px-4">
        <div
          className="
      relative w-full
      rounded-3xl overflow-hidden
      bg-cover bg-center
      flex items-center justify-center
      min-h-[200px]
      sm:min-h-[230px]
      lg:min-h-[260px]
    "
          style={{ backgroundImage: "url('/hero/bg-3.jpg')" }}
          role="img"
          aria-label="Hero background"
        >
          {/* Overlay (optional subtle contrast help) */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Centered Content */}
          <section className="relative z-10 w-full">
            <div className="max-w-3xl mx-auto bg-black/80 rounded-2xl p-4 sm:p-6 md:p-7">

              <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                International Driver’s Licence Conversions
              </h2>

              <p className="hidden sm:block text-center text-sm md:text-base text-white/90 mb-4">
                Prepare to pass your driving test at the first attempt
              </p>

              <LessonTestPackageForm />
            </div>
          </section>
        </div>
      </div>


      {/* ====== SECTION ====== */}
      <DrivingInstructorHero />

      {/* ====== SECTION ====== */}
      <section >
        <PricingPackage />
      </section>
      {/* ====== SECTION ====== */}
      <section className="w-full bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* LEFT CONTENT */}
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center flex-shrink-0">
                <UserCheck size={45} />
              </div>

              {/* Text */}
              <div>
                <p className="text-white font-semibold text-2xl">
                  Hassle-free refunds
                </p>
                <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
                  Purchase with complete confidence. If your plans change, our refund
                  policy is simple, transparent, and absolutely hassle-free.
                </p>
              </div>
            </div>

            {/* RIGHT LINK */}
            <div className="sm:text-right">
              <a
                href="#"
                className="text-blue-200 text-md font-medium hover:text-white transition underline underline-offset-4"
              >
                Read Policy
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* ====== SECTION ====== */}
      <HowItWorks />

      {/* ====== SECTION ====== */}
      < AdvantageSection />

      {/* ====== SECTION ====== */}
      <Testimonials />


      {/* ====== FOOTER SECTION ====== */}
      <Footer />
    </>
  )
}
