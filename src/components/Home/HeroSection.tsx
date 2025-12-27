"use client";

import DatePicker from "react-datepicker";
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef
} from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  Settings,
  Check,
  ChevronDown,
  Calendar,
} from "lucide-react";

type CustomInputProps = {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
};

/* ✅ COMPONENT DECLARED OUTSIDE RENDER */
const CustomDateInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <div className="relative group flex-1">
      <Calendar
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />

      <input
        ref={ref}
        value={value}
        onClick={onClick}
        readOnly
        placeholder={placeholder}
        className="
          w-full pl-11 pr-4 py-3
          bg-white rounded-xl
          text-gray-800 text-sm
          outline-none
          cursor-pointer
        "
      />
    </div>
  )
);

CustomDateInput.displayName = "CustomDateInput";

/* ===================================================================================== */

export default function HeroSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] =
    useState<"Transmission" | "Auto" | "Manual">("Transmission");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectValue = (v: "Auto" | "Manual") => {
    setValue(v);
    setOpen(false);
  };

  return (
    <>
      <div className="relative w-full bg-[url('/hero/banner-2.jpg')] bg-cover bg-center bg-no-repeat pb-16 sm:pb-24 lg:pb-32 dark:bg-white">
        <div className="relative max-w-8xl mx-auto px-4 md:px-8 pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[42vh] lg:min-h-[50vh]">

            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 animate-fade-in lg:ms-15">

              <div className="inline-block">
                <span className="bg-yellow-300 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg">
                  Limited Time Driving
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
                  <span className="text-white drop-shadow-2xl block">
                    Not Just Test Ready.
                  </span>

                  <span className="text-yellow-300 drop-shadow-2xl hero-title block text-4xl sm:text-5xl md:text-6xl">
                    Road-Ready — the True Way
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Content – Car */}
            <div className="relative h-[300px] sm:h-[340px] md:h-[520px] lg:h-[420px] animate-drive-in-right">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-300/20 to-transparent rounded-3xl blur-3xl"></div>

              <Image
                src="/hero/car2.png"
                alt="car image"
                fill
                unoptimized
                className="object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Card */}
      <div className="relative -mt-30 md:-mt-30 px-4 md:px-50 z-30 ">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 rounded-3xl p-6 md:p-6 bg-gray-300">

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-1">
                Find Your Perfect Driving Instructor
              </h2>
              <p className="text-gray-900 text-sm">
                Book professional car driving lessons with certified instructors
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 mb-4">

              {/* Location */}
              <div className="relative group flex-1">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-yellow-300 transition-colors z-10"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="border border-yellow-400 w-full pl-11 pr-4 py-3 bg-white rounded-xl text-gray-800 text-sm placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-yellow-300 transition-all shadow-lg"
                />
              </div>

              {/* Transmission */}
              <div className="relative flex-1" ref={dropdownRef}>
                <div
                  onClick={() => setOpen(!open)}
                  className="w-full bg-white rounded-xl text-gray-800 text-sm shadow-lg border border-yellow-300 cursor-pointer flex items-center justify-between px-3 py-3"
                >
                  <div className="flex items-center gap-2">
                    <Settings size={18} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{value}</span>
                  </div>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>

                {open && (
                  <div className="absolute mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-20">
                    <button
                      onClick={() => selectValue("Auto")}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-yellow-50"
                    >
                      <span>Auto</span>
                      {value === "Auto" && <Check className="text-yellow-500" size={18} />}
                    </button>

                    <button
                      onClick={() => selectValue("Manual")}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-yellow-50"
                    >
                      <span>Manual</span>
                      {value === "Manual" && (
                        <Check className="text-yellow-500" size={18} />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="relative group flex-1 rounded-xl shadow-2xl border border-yellow-300 outline-none focus:ring-2 focus:ring-yellow-300 bg-white">
                <Calendar
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
                />

                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  placeholderText="Select Date"
                  dateFormat="dd MMM yyyy"
                  calendarClassName="rounded-xl border placeholder-gray-500"
                  popperClassName="z-50"
                  customInput={<CustomDateInput />}
                />
              </div>

              {/* Search */}
              <button
                type="submit"
                className="px-8 py-2 bg-gradient-to-r from-yellow-300 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:shadow-yellow-300/50 hover:scale-105 group whitespace-nowrap"
              >
                <Search size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8" />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
}
