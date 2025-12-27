import React from 'react';
import { CheckCircle, FileText, Eye, Car } from 'lucide-react';

export default function VictorianLicenseConversion() {
  return (
    <>
    <div className=" bg-gray-50 mt-18">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <span className="text-yellow-300 font-semibold text-sm">VICTORIA</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 text-sm">Commonwealth Migration Act 1958</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Converting to a Victorian licence
        </h1>

        {/* Introduction Text */}
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          If you&apos;ve just become an Australian resident or permanent visa holder, you are no longer considered a visitor under the Migration Act.
        </p>

        {/* Warning Box */}
        <div className="bg-amber-50 border-l-4 border-yellow-500 p-5 mb-8 rounded-r">
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Important Deadline:</span> You may continue to use your current <span className="font-semibold">overseas driver&apos;s licence</span> for <span className="font-semibold">6 months</span> from the date your permanent visa was issued (or date of arrival).
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          During this 6-month window, you must convert your overseas licence to a Victorian licence to continue driving legally.
        </p>

        {/* How do I get started section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          How do I get started?
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-md shadow-md">
                1
              </div>
            </div>
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Have your documents and ID ready
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Your overseas licence (and a translation if not in English)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Proof of Australian permanent residency in Victoria</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Two pieces of documentation to prove your identity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-md shadow-md">
                2
              </div>
            </div>
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Pass an eyesight test
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    All drivers must meet eyesight standards for driving. Even with previous driving experience overseas, you will be required to undergo a standard eyesight test at the service center.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-md shadow-md">
                3
              </div>
            </div>
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Knowledge & Driving Tests
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Car className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Depending on your country of origin and age, you may be required to sit a knowledge-based knowledge test and a practical driving test.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}