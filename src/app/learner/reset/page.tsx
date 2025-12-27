"use client";
import React, { useRef, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Reset(): React.ReactElement {
  const [email, setEmail] = useState("");

  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <>
      <Header />

      <section className="w-full bg-white flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full grid grid-cols-12 gap-6">
          <div
            className="
              col-span-12
              lg:col-span-6
              lg:col-start-4
              bg-white p-8 md:p-10 rounded-3xl
              shadow-[0_4px_20px_rgba(0,0,0,0.1)]
              mx-auto
            "
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">
              Reset Password
            </h2>

            <p className="text-sm text-gray-600 mb-6 text-center">
              An email with password reset instructions has been sent. If it
              doesn’t arrive soon, remember to check your spam or junk folder.
            </p>

            <form className="space-y-5" autoComplete="off" onSubmit={handleSubmit}>
              {/* Fake fields to block browser autofill */}
              <input
                type="text"
                name="fake-user"
                autoComplete="username"
                hidden
              />
              <input
                type="password"
                name="fake-pass"
                autoComplete="new-password"
                hidden
              />

              <div>
                <label className="block text-base font-bold text-gray-700 mb-1">
                  Email
                </label>
                <div className="flex items-center gap-3 px-4 py-3 border border-yellow-300 rounded-lg focus-within:ring-2 focus-within:ring-yellow-300">
                  <Mail className="text-gray-500" size={20} />
                  <input
                    ref={emailRef}
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    className="w-full outline-none text-gray-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/learner/login"
                className="text-base text-gray-600 hover:text-gray-800 underline"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
