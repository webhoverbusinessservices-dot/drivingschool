"use client";
import React, { useRef, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";

export default function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", { email, password });
  };

  return (
    <>
      <Header />

      <section className="min-h-screen w-full bg-white flex items-center justify-center px-6 py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Learner Login
            </h2>

            <form className="space-y-5" autoComplete="off" onSubmit={handleSubmit}>
              {/* Fake fields to block browser autofill */}
              <input
                type="text"
                name="fake-username"
                autoComplete="username"
                hidden
              />
              <input
                type="password"
                name="fake-password"
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

              <div>
                <label className="block text-base font-bold text-gray-700 mb-1">
                  Password
                </label>
                <div className="flex items-center gap-3 px-4 py-3 border border-yellow-300 rounded-lg focus-within:ring-2 focus-within:ring-yellow-300">
                  <Lock className="text-gray-500" size={20} />
                  <input
                    ref={passRef}
                    type="password"
                    autoComplete="off"
                    placeholder="Enter your password"
                    className="w-full outline-none text-gray-700"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-yellow-500"
                />
                <label htmlFor="remember" className="font-bold text-gray-700">
                  Remember me for 60 days
                </label>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-yellow-300 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg"
                >
                  Submit
                </button>

                <a
                  href="/learner/reset"
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Forgot password?
                </a>
              </div>
            </form>

            <p className="text-sm text-gray-500 mt-8 leading-relaxed">
              After logging into the system, make sure to click the{" "}
              <strong>Logout</strong> button when you exit to ensure proper
              security of your account.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
              <span className="text-yellow-500">Trueway Driving School</span> The Smarter Way to
              Learn Driving
            </h1>

            <Image
              src="/resource/login-car.png"
              alt="Car"
              width={600}
              height={350}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
