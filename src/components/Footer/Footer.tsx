"use client"
import { Facebook, Twitter, Clock, Instagram, ChevronUp, Phone } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from "react";


export default function DriCubFooter() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;

      if (scrolledToBottom) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <footer className="relative text-gray-300 custom-footer">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-12 sm:pt-22 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description - 3 columns */}
          <div className="lg:col-span-3 space-y-5">
            <div className="mb-4">
              <img
                src="/hero/new-logo.png"
                alt="DriCub Driving School"
                className="h-16 w-auto rounded-lg"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              We provide a reputable and profes-<br />sional service that aims to give you<br />the confidence to pass your test and<br />drive safely on the roads.
            </p>
          </div>

          {/* Information and Customer Service - 6 columns */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {/* Information Column */}
              <div className="border-r-2 border-yellow-300">
                <h4 className="text-yellow-300 text-base font-semibold mb-5 uppercase tracking-wide">Information</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-yellow-300 transition-colors text-sm">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-yellow-300 transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing-packaging" className="text-gray-400 hover:text-yellow-300 transition-colors text-sm">
                      Prices & Packages
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-yellow-300 transition-colors text-sm">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Customer Service Column */}
              <div>
                <h4 className="text-yellow-300 text-base font-semibold mb-5 uppercase tracking-wide">Cutomer Service</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/driving-lessons/driving-test-package"
                      className="text-gray-400 hover:text-yellow-300 transition-colors text-sm">
                      Driving Test Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/driving-lessons/international-licence-coversions"
                      className="text-gray-400 hover:text-yellow-300 transition-colors text-sm"
                    >
                      International Licence Conversions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/driving-lessons/refresher-lessons"
                      className="text-gray-400 hover:text-yellow-300 transition-colors text-sm"
                    >
                      Refresher Lessons
                    </Link>
                  </li>
                  <li>
                    <Link href="/location" className="text-gray-400 hover:text-yellow-300 transition-colors text-sm">
                      Location
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Social Icons */}
            <ul className="flex gap-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-yellow-300 transform rotate-45 flex items-center justify-center hover:bg-yellow-600 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-neutral-900 transform -rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-yellow-300 transform rotate-45 flex items-center justify-center hover:bg-yellow-600 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-neutral-900 transform -rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-yellow-300 transform rotate-45 flex items-center justify-center hover:bg-yellow-600 transition-colors"
                >
                  <Clock className="w-4 h-4 text-neutral-900 transform -rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-yellow-300 transform rotate-45 flex items-center justify-center hover:bg-yellow-600 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-neutral-900 transform -rotate-45" />
                </Link>
              </li>
            </ul>

            {/* Contact Banner */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex flex-col items-center text-center space-y-4">
                <img
                  src="/hero/new-logo.png"
                  alt="DriCub Logo"
                  className="h-12 w-auto"
                />
                <address className="not-italic space-y-1 text-neutral-700">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <Link
                      href="tel:+0485500081"
                      className="text-lg font-semibold hover:text-yellow-400 transition-colors"
                    >
                      +04 8550 0081
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600">
                    Perth, Western Australia
                  </p>

                </address>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-500">
          <p className="text-sm text-gray-500">
            © 2026 True Way Driving School.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gray-500 hover:bg-gray-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-xl opacity-90 hover:opacity-100 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      )}

    </footer >
  );
}