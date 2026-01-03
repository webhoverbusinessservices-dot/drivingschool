"use client"
import React, { useState } from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

export default function BookingLessionForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate1: '',
    lessonType: '',
    preferredDate2: '',
    preferredTime: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className=" flex items-center justify-center p-4 pt-15">
      <div className="w-full max-w-7xl bg-white rounded-lg p-8">
        <div className="text-center mb-16 fadeInUp-animation">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-2 dark:text-gray-700">
            Book Your Lession
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12 md:mb-12">
            Complete the booking form and choose a time that works best for you. Our team will confirm your lesson shortly after submission.
          </p>

        </div>
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <input
                type="date"
                name="preferredDate1"
                placeholder="Preferred Date"
                value={formData.preferredDate1}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 placeholder-gray-500 appearance-none"
                style={{ colorScheme: 'light' }}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <select
                name="lessonType"
                value={formData.lessonType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 appearance-none"
              >
                <option value="">Lesson Type</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-600 pointer-events-none" />
            </div>

            <div className="relative">
              <input
                type="date"
                name="preferredDate2"
                placeholder="Preferred Date"
                value={formData.preferredDate2}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 placeholder-gray-500 appearance-none"
                style={{ colorScheme: 'light' }}
              />
              {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600 pointer-events-none" /> */}
            </div>

            <div className="relative">
              <input
                type="time"
                name="preferredTime"
                placeholder="Preferred Time"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 placeholder-gray-500 appearance-none"
                style={{ colorScheme: 'light' }}
              />
              {/* <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600 pointer-events-none" /> */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={handleSubmit}
              className="px-24 py-3 bg-yellow-400 hover:bg-yellow-600 text-gray-800 font-semibold rounded-md transition-colors duration-200 shadow-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}