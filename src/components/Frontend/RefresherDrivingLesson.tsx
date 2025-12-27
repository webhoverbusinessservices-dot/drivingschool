import React from "react";
import { History, Building2, Settings, TriangleAlert, Gavel, PersonStanding } from "lucide-react";


export default function RefresherDrivingLesson() {
  return (
    <>
      {/* <section className="relative overflow-hidden py-10 lg:py-15 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100 C 25 0 75 0 100 100 Z"
              fill="#f7f6ef"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                When Should You Consider  {" "}
                <span className="text-yellow-500">Refresher Driving</span>{" "}
                Lessons?
              </h1>

              <p className="text-gray-600 text-base md:text-md leading-relaxed">
                If you haven’t been driving regularly, it’s easy for skills to fade — including the ability to drive safely.
                Losing confidence or sharpness behind the wheel is nothing to feel embarrassed about. With how accessible transport
                is in many Australian cities, you may only need to drive occasionally.<br/>
                However, gaps in practice can sometimes lead to unsafe habits or forgotten driving techniques.
                Whether you’ve been off the road for a while or simply want to rebuild confidence, refresher driving lessons can help you regain control, improve safety, and feel comfortable driving again.
              </p>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-yellow-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center p-8 shadow-2xl border-8 border-white ring-surface-light dark:ring-surface-dark">

                <div
                  className="relative w-full h-full flex items-center justify-center">
                  <img
                    alt="Hands on steering wheel driving"
                    src="/hero/refresher-driving-lessons-side-img.png"
                    className="
                     w-4/5 h-4/5 object-cover
                     rounded-3xl
                     border-4 border-white
                     shadow-xl
                     rotate-3
                     transition-all duration-700 ease-out
                     hover:rotate-0 hover:scale-[1.02]
                     z-10
                   "
                  />

                  <div
                    className="absolute -top-4 -right-4 bg-primary text-gray-900 px-6 py-4 rounded-xl shadow-lg z-20 transform -rotate-6 bg-amber-300">
                    <span
                      className="block text-2xl font-bold">100%</span>
                    <span
                      className="text-xs font-semibold uppercase">Confidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}
      <section className="py-20 bg-gray-50 dark:bg-[#161f2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-text-light dark:text-text-dark mb-4">
              Ready to drive with confidence?
            </h2>

            <p className="text-subtext-light dark:text-subtext-dark text-md">
              Driving lessons aren’t just for new learners — they’re perfect for anyone who wants to refresh their skills, feel safer on the road, or regain confidence behind the wheel.
            </p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">
                  <History />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-light dark:text-text-dark mb-3">Haven&apos;t driven regularly for a while?</h3>
              <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                You may have your driver&apos;s licence but not have been driving regularly for quite some time. If your skills and confidence are in need of a boost, then refresher driving lessons can help you get back up to speed.
              </p>
            </div>
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">
                  <Building2 />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-light dark:text-text-dark mb-3">Driving in a new city?</h3>
              <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                You may need to improve your confidence and awareness driving on a different side of the road, or maybe the unfamiliar road rules and conditions have dented your confidence after moving to a new location.
              </p>
            </div>
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">
                  <Settings />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-light dark:text-text-dark mb-3">Want to learn manual?</h3>
              <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                You may have bought a manual car or are now required to drive one for employment. Refresher driving lessons can help experienced drivers learn to drive and build confidence in a manual transmission car.
              </p>
            </div>
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">
                  <TriangleAlert />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-light dark:text-text-dark mb-3">Have you lost your licence?</h3>
              <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                If you&apos;ve lost your licence in the past and you&apos;re just getting back on the road, then refresher driving lessons with a professional instructor will help you bridge knowledge or skill gaps that may have developed.
              </p>
            </div>
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">
                  <Gavel />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-light dark:text-text-dark mb-3">Fines or demerit points?</h3>
              <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                If you&apos;re getting stung with driving fines or demerit points regularly (speeding, parking, failure to give way), correcting your driving skills with refresher lessons could help you save your money and licence.
              </p>
            </div>
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">
                  <PersonStanding />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-light dark:text-text-dark mb-3">Reached age 75 or 85?</h3>
              <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                Senior drivers aged 75+ are required by law to prove medical fitness to retain an unrestricted licence. Drivers aged 85+ also need a yearly medical assessment and on-road driving assessment every two years.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
