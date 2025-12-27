import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-200 border-t border-slate-700 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/12 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl"></div>
          <div className="absolute top-2/5 -left-1/12 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto xxl:px-0 px-6 py-16 lg:py-20 relative z-10">

          {/* Newsletter */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border border-slate-700 shadow-2xl mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 border border-yellow-400/20">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                  Newsletter
                </div>

                <h2 className="text-3xl font-bold text-white mb-3">
                  Drive smarter — stay updated!
                </h2>

                <p className="text-slate-400 text-md leading-relaxed">
                  Get tips, lesson discounts, test preparation guides, and important road rule updates — straight to your inbox.
                </p>
              </div>

              <div className="w-full lg:w-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full lg:w-80 group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-yellow-400 transition-colors">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none placeholder-gray-500 shadow-inner"
                    />
                  </div>

                  <button
                    type="button"
                    className="px-8 py-3 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    SIGN UP
                  </button>
                </form>

                <p className="text-xs text-slate-400 mt-3 text-center lg:text-left">
                  We respect your privacy — no spam. Read our{" "}
                  <a href="#" className="underline hover:text-yellow-400 transition-colors">
                    privacy policy
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">

            {/* Useful Links */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-400"></span>
                Driving Lessons
              </h3>

              <ul className="space-y-3">
                <li><a href="/driving-lessons/driving-test-package" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Driving Test Packages</a></li>
                <li><a href="/driving-lessons/international-licence-coversions" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">International Licence Conversions</a></li>
                <li><a href="/driving-lessons/refresher-lessons" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Refresher Lessons</a></li>
                <li><a href="/pricing-packaging" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Prices & Packages</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-400"></span>
                Company
              </h3>

              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">About Us</a></li>
                <li><a href="/location" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Locations</a></li>
                <li><a href="/blogs" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Blog & Articles</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Contact Us</a></li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-400"></span>
                Helpful Links
              </h3>

              <ul className="space-y-3">
                <li><a href="/faqs" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">FAQs</a></li>
                <li><a href="/learner/login" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Learner Login</a></li>
                <li><a href="/instructor/login" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Instructor Login</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-400"></span>
                Legal
              </h3>

              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Terms & Conditions</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Refund Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Cookies</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-400"></span>
                Extra Resources
              </h3>

              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Free Learner Guides</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Road Safety Tips</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Practice Test Help</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium block">Instructor Resources</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">
                  Trueway Driving School
                </span>
                <p className="text-xs text-slate-400">
                  © 2025 All rights reserved.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex gap-6">
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Cookies</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
