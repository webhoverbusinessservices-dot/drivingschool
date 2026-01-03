"use client"
import React from 'react'
import { useRouter } from "next/navigation";


export default function BookSessionStrip() {
  const router = useRouter();

  return (
    <>
      <section className="bg-white mx-4">
        <div className="max-w-7xl mx-auto ">
          <div className=" bg-yellow-300 rounded-2xl p-8 md:p-12  px-4 sm:mx-4 mt-20 md:mx-4 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">Ready to take a step toward your licence?</h3>
                <p className="text-gray-800 font-medium">Book a lesson with our experienced instructor and start building real road confidence.</p>
              </div>
              <button
                onClick={() => router.push("/")}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg cursor-pointer"
              >
                Book Your Lession
              </button>
            </div>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
        </div>
      </section>
    </>
  )
}
