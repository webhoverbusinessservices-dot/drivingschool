import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AmountStep() {

  const [selected, setSelected] = useState<"10" | "6" | "custom">("6");
  const [open, setOpen] = useState(false);
  const [customHours, setCustomHours] = useState<number | null>(null);

  const hours = [1, 2, 3, 4, 5, 6];

  const baseCard =
    "flex items-center p-4 rounded-xl border cursor-pointer transition-all";
  const activeCard =
    "border-primary bg-orange-50/50 dark:bg-primary/5";
  const idleCard =
    "border-slate-200 dark:border-slate-700 hover:border-primary";

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Choose lesson amount
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Buy a package to fast-track your driving skills and boost your chances to win.
      </p>

      {/* Promo banner */}
      <div className="relative overflow-hidden rounded-2xl p-6 mb-10 shadow-lg">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-slate-900 rounded-2xl" />

        {/* Yellow diagonal section */}
        <div className="diagonal-yellow" />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-between">
          <div className="max-w-xl text-white">
            <h2 className="text-2xl font-bold mb-1">
              The more you learn, the more chances to win!
            </h2>
            <p className="text-slate-300 text-sm">
              Every completed lesson hour = 1 entry.
            </p>
          </div>

          <Image
            src="/hero/amount-step-img1.png"
            alt="Car prize"
            width={220}
            height={100}
            className="hidden sm:block h-24 object-contain drop-shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-400 p-6 space-y-4">

            <div className="space-y-4">

              {/* -------- 10 HOURS -------- */}
              <label className={`${baseCard} ${selected === "10" ? activeCard : idleCard}`}>
                <input
                  type="radio"
                  name="package"
                  className="h-5 w-5 text-primary focus:border-yellow-300"
                  checked={selected === "10"}
                  onChange={() => {
                    setSelected("10");
                    setOpen(false);
                  }}
                />

                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">10 hours</span>
                    <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded">
                      10% OFF
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    Best for brand new learners.
                  </p>
                </div>
              </label>

              {/* -------- 6 HOURS -------- */}
              <label className={`${baseCard} ${selected === "6" ? activeCard : idleCard}`}>
                <input
                  type="radio"
                  name="package"
                  className="h-5 w-5 text-primary focus:ring-yellow"
                  checked={selected === "6"}
                  onChange={() => {
                    setSelected("6");
                    setOpen(false);
                  }}
                />

                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">6 hours</span>
                    <span className="text-xs font-bold bg-primary text-white px-2 py-1 rounded">
                      5% OFF
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    Ideal for refresher drivers.
                  </p>
                </div>
              </label>


              {/* -------- CUSTOM HOURS (RADIO + DROPDOWN) -------- */}
              <div className="relative">
                {/* Header */}
                <div
                  className={`${baseCard} ${selected === "custom" ? activeCard : idleCard
                    }`}
                >
                  {/* Radio */}
                  <input
                    type="radio"
                    name="package"
                    className="h-5 w-5 text-primary focus:border-yellow-300"
                    checked={selected === "custom"}
                    onChange={() => {
                      setSelected("custom");
                      setOpen(true); // ✅ force open
                    }}
                  />

                  {/* Label text */}
                  <span
                    className="ml-4 font-semibold cursor-pointer"
                    onClick={() => setOpen((o) => !o)}
                  >
                    {customHours
                      ? `${customHours} hour${customHours > 1 ? "s" : ""}`
                      : "Select custom hours"}
                  </span>

                  {/* Chevron */}
                  <ChevronDown
                    size={20}
                    className={`ml-auto cursor-pointer transition-transform ${open ? "rotate-180" : ""
                      }`}
                    onClick={() => setOpen((o) => !o)}
                  />
                </div>

                {/* Dropdown */}
                {open && (
                  <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                    {hours.map((h) => (
                      <label
                        key={h}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition
            ${customHours === h
                            ? "bg-orange-100 border-l-4 border-primary"
                            : "hover:bg-slate-50"
                          }`}
                      >
                        <input type="radio"
                          name="customHours"
                          checked={customHours === h}
                          onChange={() => {
                            setCustomHours(h);
                            setSelected("custom");
                            setOpen(false); // ✅ close after select
                          }}
                          className="h-4 w-4 text-primary focus:border-yellow-300"
                        />

                        <span className="text-sm font-medium">
                          {h} hour{h > 1 ? "s" : ""}
                        </span>

                        {h === 6 && (
                          <span className="ml-auto text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                            5% OFF
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                )}
              </div>


            </div>

            <div className="bg-gray-200 dark:bg-amber-900/20 border border-gray-400 dark:border-amber-800/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              {/* <div className="shrink-0 bg-white dark:bg-surface-dark p-3 rounded-full shadow-sm">
              <span className="material-icons-round text-primary text-3xl">
                lightbulb
              </span>
            </div> */}

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">
                  How many lessons do I need?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">10–15hrs</span>
                    <span>New Learners</span>
                  </div>

                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">3–6hrs</span>
                    <span>Overseas Licence</span>
                  </div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">4–7hrs</span>
                    <span>Refresher Drivers</span>
                  </div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">4–7hrs</span>
                    <span>Refresher Drivers</span>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="hidden md:block">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                  Best Value
                </span>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                Instructor Details
              </h3>
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/hero/user-1.png"
                    alt="Instructor"
                    width={80}
                    height={80}
                    className=" border-2 bg-amber-200"
                  />
                  <div>
                    <p className="font-bold">Xubao</p>
                    <p className="text-sm">$150/hr</p>
                    <p className="text-sm">Lorem Odio voluptates vel velit illum, natus nesciunt.</p>
                  </div>
                </div>

                <Image
                  src="/hero/amount-step-img1.png"
                  alt="Vehicle"
                  width={80}
                  height={80}
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <div className=" bg-white rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sticky top-6">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2"><span className="material-icons-round text-base">schedule</span> 6 hrs Booking Credit</span>
                <span className="font-medium text-slate-900 dark:text-white">$900.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-600 dark:text-green-400">Credit Discount <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 text-[10px] px-1 rounded ml-1">5% OFF</span></span>
                <span className="font-medium text-green-600 dark:text-green-400">-$45.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">Platform Processing Fee <span className="material-icons-round text-sm text-slate-300">help</span></span>
                <span className="font-medium text-slate-900 dark:text-white">$34.20</span>
              </div>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mb-6">
              <div className="flex justify-between items-end">
                <span className="font-bold text-lg text-slate-900 dark:text-white">Total Payment Due</span>
                <span className="font-bold text-2xl text-slate-900 dark:text-white">$889.20</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 text-right">Or 4 payments of $222.30</p>
            </div>
            <button className="w-full bg-yellow-300 hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-95 flex items-center justify-center gap-2">
              Continue
            </button>
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Buy Now Pay Later</p>
              <div className="flex gap-2">
                <div className="h-6 w-10 bg-blue-100 dark:bg-blue-900/40 rounded flex items-center justify-center text-[10px] font-bold text-blue-800 dark:text-blue-300">PayPal</div>
                <div className="h-6 w-10 bg-green-100 dark:bg-green-900/40 rounded flex items-center justify-center text-[10px] font-bold text-green-800 dark:text-green-300">Afterpay</div>
                <div className="h-6 w-10 bg-pink-100 dark:bg-pink-900/40 rounded flex items-center justify-center text-[10px] font-bold text-pink-800 dark:text-pink-300">Klarna</div>
              </div>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Purchase with peace of mind</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Our refund policy is hassle-free.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Secure Payments</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We use 100% secure payments to provide you with a simple and safe experience.</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-sm text-slate-900 dark:text-white">Nadia</span>
              <span className="text-xs text-green-500 font-medium">Verified Learner</span>
            </div>
            <div className="flex text-primary text-xs mb-2">
              <span className="material-icons-round text-sm">star</span>
              <span className="material-icons-round text-sm">star</span>
              <span className="material-icons-round text-sm">star</span>
              <span className="material-icons-round text-sm">star</span>
              <span className="material-icons-round text-sm">star</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">I had my first lesson as a total beginner who was nervous to start and Xubao helped to make it a smooth first experience.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
