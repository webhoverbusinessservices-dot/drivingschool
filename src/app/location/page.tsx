import React from 'react'
import Header from '@/components/Header/Header';
import Breadcrumb, { BreadcrumbItem } from "@/components/Frontend/Breadcrumb";
import Footer from '@/components/Footer/Footer';
import { Home} from "lucide-react";
import LessonTestPackageForm from '@/components/Frontend/LessonTestPackageForm';
import Testimonials from '@/components/Home/Testimonials';
import LocationBasedInstructors from '@/components/Frontend/LocationBasedInstructors';


export default function Location() {

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Driving Lessons", href: "#" },
    { label: "Location" },
  ];

  const features = [
    {
      title: "24,000",
      desc: "Perth learners have trusted us to get them road ready",
    },
    {
      title: "123,000",
      desc: "Lessons delivered in Perth",
    },
    {
      title: "$84.00",
      desc: "The average price per lesson hour in Perth",
    },
    {
      title: "24/7",
      desc: "Book lessons online, in real-time",
    },
    {
      title: "Flexible",
      desc: "Change your instructor anytime",
    },
    {
      title: "Easy",
      desc: "Manage your lesson bookings online",
    },
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
          className="relative w-full
                     h-[220px]
                     sm:h-[240px]
                     lg:h-[250px]
                     rounded-3xl overflow-hidden bg-cover bg-center
                     flex items-center justify-center"
          style={{ backgroundImage: "url('/hero/bg-3.jpg')" }}
          role="img"
          aria-label="Hero background"
        >

          {/* Centered Content */}
          <section className="relative z-10 w-full">
            <div className="max-w-3xl mx-auto bg-black/80 rounded-2xl p-4 sm:p-5">

              <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2">
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

      <section className="w-full py-12 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  {feature.title}
                </p>
                <p className="text-sm text-gray-500 leading-snug max-w-[200px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ====== SECTION ====== */}
      <LocationBasedInstructors />


      {/* ====== SECTION ====== */}
      <Testimonials />


      {/* ====== FOOTER SECTION ====== */}
      <Footer />
    </>
  )
}
