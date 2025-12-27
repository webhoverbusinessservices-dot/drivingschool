"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ChevronDown,
  Mail,
  Car,
  BookOpenCheck,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drivingLessonsOpen, setDrivingLessonsOpen] = useState(false);
  const [learnerResourcesOpen, setLearnerResourcesOpen] = useState(false);

  return (
    <header className="w-full text-white border-gray-500">

      {/* --- TOP BAR --- */}
      <div className="w-full bg-black text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 font-sans md:px-0">

          {/* Left */}
          <div className="hidden flex-wrap items-center gap-4 sm:flex">
            <div className="flex items-center gap-2">
              <span className="text-sm text-yellow-300">
                <Phone size={16} />
              </span>
              <span className="text-sm">+1 222-555-33-99</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-300">
                <Mail size={16} />
              </span>
              <span className="text-sm">truewaydrivingschool.com</span>
            </div>
          </div>

          {/* Center */}
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-yellow-300">
              <Car size={24} />
            </span>
            <span className="text-sm">
              More than{" "}
              <span className="font-semibold text-yellow-300">800+</span> special
              collection cars in this summer
            </span>
          </div>

          {/* Right */}
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
            <button className="flex items-center gap-2 hover:text-yellow-300">
              <span className="text-yellow-300">
                <BookOpenCheck size={18} />
              </span>
              <span className="text-sm">
                Instruct with Trueway Driving School
              </span>
            </button>

            <button className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition">
              Support
            </button>
          </div>

        </div>
      </div>

      {/* --- MAIN NAV --- */}
      <div className="w-full bg-white shadow-sm border border-b-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 md:px-0">

          {/* Logo */}
          <div className="relative w-[150px] h-25">
            <Link href="/">
              <Image
                src="/new-logo.jpg"
                alt="logo"
                fill
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Nav (now lg and up) */}
          <nav className="hidden lg:flex items-center gap-10 justify-start">
            <ul className="flex items-center gap-7 text-sm font-sans">
              <li className="group relative">
                <button className="flex items-center gap-1 hover:text-yellow-850 text-gray-900 text-sm font-semibold">
                  <span className="font-alt text-base">Driving Lessons</span>
                  <ChevronDown size={16} />
                </button>

                <div className="invisible absolute left-0 top-full z-50 mt-2 w-65 rounded-md bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">

                  <Link
                    href="/driving-lessons/driving-test-package"
                    className="block rounded px-3 text-black py-2 text-base hover:text-yellow-300 font-semibold"
                  >
                    Driving Test Packages
                  </Link>

                  <Link
                    href="/driving-lessons/international-licence-coversions"
                    className="block rounded px-3 text-black py-2 text-base hover:text-yellow-300 font-semibold"
                  >
                    International Licence Conversions
                  </Link>

                  <Link
                    href="/driving-lessons/refresher-lessons"
                    className="block rounded px-3 text-black py-2 text-base hover:text-yellow-300 font-semibold"
                  >
                    Refresher Lessons
                  </Link>

                </div>

              </li>

              <li>
                <Link href="/location" className="hover:text-yellow-300 font-alt text-gray-900 text-base font-semibold">
                  Location
                </Link>
              </li>

              <li>
                <Link href="/pricing-packaging" className="hover:text-yellow-300 font-alt text-gray-900 text-base font-semibold">
                  Prices & Packages
                </Link>
              </li>

              <li className="group relative">
                <button className="flex items-center gap-1 hover:text-yellow-300 text-gray-900 text-base font-semibold">
                  <span className="font-alt">Free Learner Resources</span>
                  <ChevronDown size={16} />
                </button>

                <div className="invisible absolute left-0 top-full z-50 mt-2 w-65 rounded-md bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/faqs"
                    className="block rounded px-3 text-black py-2 text-base hover:text-yellow-300 font-semibold"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/blogs"
                    className="block rounded px-3 text-black py-2 text-base hover:text-yellow-300 font-semibold"
                  >
                    Blogs
                  </Link>
                </div>
              </li>
            </ul>

            <div className="ml-6 flex items-center gap-3 text-base font-sans">
              <a href="/learner/login" className="rounded-md bg-yellow-300 px-4 py-2 cursor-pointer text-gray-900 font-semibold">
                Learner Login
              </a>
              <a href="/instructor/login" className="rounded-md border bg-gray-900 px-4 py-2 cursor-pointer text-white font-semibold">
                Instructor Login
              </a>
            </div>
          </nav>

          {/* Mobile menu toggle (0–1023px) */}
          <div className="lg:hidden">
            <div className="flex items-center gap-2">
              <button className="rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-slate-900">
                Add Listing
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-slate-700"
              >
                <span className="sr-only">Toggle navigation</span>
                <div className="space-y-1.5">
                  <span className="block h-0.5 w-5 bg-black" />
                  <span className="block h-0.5 w-5 bg-black" />
                  <span className="block h-0.5 w-5 bg-black" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (0–1023px) */}
        <div className="lg:hidden relative">
          {mobileMenuOpen && (
            <div className="absolute right-0 top-0  z-50 w-full rounded-lg bg-slate-950 p-4 text-sm shadow-lg">

              <ul className="flex flex-col gap-2">
                {/* Driving Lessons */}
                <li>
                  <button
                    onClick={() => setDrivingLessonsOpen(!drivingLessonsOpen)}
                    className="w-full text-left block rounded-md px-2 py-2 hover:bg-slate-900 text-white flex items-center justify-between"
                  >
                    Driving Lessons
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${drivingLessonsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {drivingLessonsOpen && (
                    <div className="mt-1 ml-3 flex flex-col gap-1 text-xs text-slate-300">
                      <Link href="/driving-lessons/driving-test-package" className="hover:text-yellow-300 py-1">
                        Driving Test Packages
                      </Link>
                      <Link href="/driving-lessons/international-licence-coversions" className="hover:text-yellow-300 py-1">
                        International Licence Conversions
                      </Link>
                      <Link href="/driving-lessons/refresher-lessons" className="hover:text-yellow-300 py-1">
                        Refresher Lessons
                      </Link>
                    </div>
                  )}
                </li>

                {/* Links */}
                <li>
                  <Link href="/location" className="block rounded-md px-2 py-2 hover:bg-slate-900 text-white">
                    Location
                  </Link>
                </li>

                <li>
                  <Link href="/pricing-packaging" className="block rounded-md px-2 py-2 hover:bg-slate-900 text-white">
                    Prices & Packages
                  </Link>
                </li>

                {/* Resources */}
                <li>
                  <button
                    onClick={() => setLearnerResourcesOpen(!learnerResourcesOpen)}
                    className="w-full text-left block rounded-md px-2 py-2 hover:bg-slate-900 text-white flex items-center justify-between"
                  >
                    Free Learner Resources
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${learnerResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {learnerResourcesOpen && (
                    <div className="mt-1 ml-3 flex flex-col gap-1 text-xs text-slate-300">
                      <Link href="/faqs" className="hover:text-yellow-300 py-1">
                        FAQs
                      </Link>
                      <Link href="/blogs" className="hover:text-yellow-300 py-1">
                        Blogs
                      </Link>
                    </div>
                  )}
                </li>

                {/* Logins */}
                <li className="mt-2 border-t border-slate-800 pt-2 ">
                  <div className="flex justify-start gap-2 text-xs">
                    <a className="rounded-full border border-yellow-300 px-3 py-1 text-yellow-300 text-center">
                      Learner Login
                    </a>
                    <a className="rounded-full border border-white-400 px-3 py-1 text-white-400 text-center">
                      Instructor Login
                    </a>
                  </div>
                </li>
              </ul>

              {/* <div className="mt-3 flex items-center gap-2 border-t border-slate-800 pt-3 text-xs">
                <button className="rounded-full border border-slate-700 px-3 py-1">
                  EN
                </button>
                <button className="rounded-full border border-slate-700 px-3 py-1">
                  USD
                </button>
                <button className="ml-auto rounded-full border border-slate-700 p-2">
                  
                </button>
              </div> */}

            </div>
          )}
        </div>
      </div>
    </header>
  );
}
