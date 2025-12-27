"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Image from "next/image";
import { ArrowRight, UserRound } from "lucide-react"
import Link from 'next/link';



export default function Blog() {
  return (
    <>
      {/* ====== HEADER SECTION ====== */}
      <Header />
      <div className="blog-theme">
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-20 pb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">Driving Insights</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Expert tips, theory test guides, and the latest road safety news to help you get behind the wheel with confidence.
            </p>
          </div>
        </header>
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-12">
              <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl overflow-hidden group flex flex-col md:flex-row h-full border border-gray-100 dark:border-gray-800">
                <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/hero/blog-main-img.png"
                      alt="Driving Lesson car interior"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-heading-light text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
                  </div>
                </div>
                <div className="md:w-2/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className=" text-base mr-1">
                      <UserRound size={15} />
                    </span>
                    <span>Trueway Driving School</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-heading-light dark:text-heading-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                    How to Teach Someone To Drive: A Comprehensive Guide
                  </h2>
                  <p className="text-text-light dark:text-text-dark mb-6 line-clamp-3">
                    Learning to drive can be stressful for learners and teachers alike. Following these simple steps will make the process smoother, allowing more focus on the road and skills at hand, leaving the journey enjoyable for everyone.
                  </p>
                  <Link
                    href="/blog/how-to-teach-someone-to-drive"
                    className="inline-flex items-center text-primary font-bold hover:text-yellow-900 transition-colors"
                  >                    Read Full Article
                    <span className=" ml-1 text-lg">
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-10">
            <button className="bg-primary text-heading-light px-5 py-2 rounded-full font-bold text-sm shadow-md">All Posts</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800 group h-full">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img alt="Map of Australia illustration abstract" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0YUe82ja5CQMqbrq-u13vYi1CKuduLvBjLpSB8MKVu-kxMMU7v0M4Z7WMmmHvwT-Z9B9XHIkgnTkyqUo1JBQ2b_vs-H2u0WCip0r2ZeV7RdJyVhgysK6RJnJ-_QKwFoS-R8Sq15rZf0DNFzSrc0PNLWVBL-0dHSCt1_-lUjOWrhxeL6ZPeR4MB3_-DDNjhTAqwYHAdtCGdCh-8RhzeQdHUupmHMqmdE8ykMHMcAuVSz9lSjEShzN3ubmPETCru19nQLXLh1bDyLD-" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Trends</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-primary">TrueWay Team</span>
                  <span className="mx-2">•</span>
                  <span>Oct 24, 2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-heading-light dark:text-heading-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                  Most Googled Driving Questions in Australia
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mb-6 line-clamp-3 flex-grow">
                  No matter how long you&apos;ve had your licence, every driver has a moment of doubt. We analysed Google search activity to uncover the top driving-related queries confusing Aussies.
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group/link hover:border-primary transition-all"
                >
                  <span className="text-heading-light dark:text-heading-dark hover:text-gray-950 text-gray-900 font-bold text-base group-hover/link:text-primary transition-colors flex items-center">
                    Continue Reading
                  </span>
                  <span className="bg-yellow-300 p-2 rounded-full hover:bg-gray-950 transition-all">
                    <span className="text-sm block text-gray-950 hover:text-white ">
                      <ArrowRight size={20} />
                    </span>
                  </span>
                </Link>

              </div>
            </article>
            <article className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800 group h-full">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img alt="Driving on road illustration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlNkqv2voEudOfZMQmJOSUGDG0AjwH1QYKpSDbozPQqKmg6vuFf7ucWoWNxuJlH6r6OftmnFdQ2yCuwGvQUxqsFACWnjnAwBdnXPRX1OztgZZlA8hnYDaWIQ4SvP6nMMznQLoFZ0_jfmLcV-ghLFwpIlZCy8-GFTbzENu9_A49uM4QMuiu46djt9SbSGloa23bbVFwvJ1k6M00Xcd0-0exws0E_krcT3XK5g6D4c8vI1WwqpGzd4yaSRMeo90wocLbqA8hea0NWB9S" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Analysis</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-primary">TrueWay Team</span>
                  <span className="mx-2">•</span>
                  <span>Oct 18, 2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-heading-light dark:text-heading-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                  Australia&apos;s Most Common Theory Test Mistakes
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mb-6 line-clamp-3 flex-grow">
                  Sitting your Driving Knowledge test can be nerve-wracking. We&apos;ve broken down the data by state to show you exactly where learners are tripping up the most.
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group/link hover:border-primary transition-all"
                >
                  <span className="text-heading-light dark:text-heading-dark hover:text-gray-950 text-gray-900 font-bold text-base group-hover/link:text-primary transition-colors flex items-center">
                    Continue Reading
                  </span>
                  <span className="bg-yellow-300 p-2 rounded-full hover:bg-gray-950 transition-all">
                    <span className="text-sm block text-gray-950 hover:text-white ">
                      <ArrowRight size={20} />
                    </span>
                  </span>
                </Link>
              </div>
            </article>
            <article className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800 group h-full">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img alt="Car keys in hand" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFxAt5Y5-Wx7-Wt8iTqPizRj_g7hCNtxRqVjxh2WEaovEHPa4C751StYKx5oUzzlTrUPm_KxXfO2iwniMLHAQus82r8ZQ0iaKf8F6JlBU_W7oEvqJfW8X_Um6eR5vIr19FgNl6uycGWo4FOA8VcOcHQr54JVPCdAJmXEl_DQem3OgNf2h8itWV2O7OsxGz9nNG_3vkA0WFZODxQ0eIEZ9U0mOnaPPaKMi8_DApH-GYkQWtnDuBr_n3ODGSgQxKUN72dlyjR-vCPleq" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Guide</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-primary">Sarah Jenkins</span>
                  <span className="mx-2">•</span>
                  <span>Sep 29, 2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-heading-light dark:text-heading-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                  Choosing the Right First Car for Learners
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mb-6 line-clamp-3 flex-grow">
                  Safety, insurance, and reliability. Here is the ultimate checklist for parents and learners looking to purchase their first vehicle without breaking the bank.
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group/link hover:border-primary transition-all"
                >
                  <span className="text-heading-light dark:text-heading-dark hover:text-gray-950 text-gray-900 font-bold text-base group-hover/link:text-primary transition-colors flex items-center">
                    Continue Reading
                  </span>
                  <span className="bg-yellow-300 p-2 rounded-full hover:bg-gray-950 transition-all">
                    <span className="text-sm block text-gray-950 hover:text-white ">
                      <ArrowRight size={20} />
                    </span>
                  </span>
                </Link>
              </div>
            </article>
            <article className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800 group h-full">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img alt="Night driving city lights" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5DyEasB3kDdzMikNRsjm-RrzgdyXxDG9jo5X0mtSDloWcSNVK45CUo65PsEueMFPPnaVXvLEeZN8Mj0pD4jpHj0kRQbh0k040EuEG7S1pF8oUEOn2Zf3T-fLgqcF-KIH3lOMroAsJ1JhUQm7wpw8djylG8y10DN7QnrcsL3vCC06J-6e9n8C4engaAUXVEOk-6XvFFLInndV07vfY-ll2vmWF1JtCAy-goh9sjNtoINlGMYKu1CobPH8wZYTtaNSX9LOZ-oNCsrwh" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Safety</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-primary">Mike Ross</span>
                  <span className="mx-2">•</span>
                  <span>Sep 12, 2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-heading-light dark:text-heading-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                  Mastering Night Driving: Top Safety Tips
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mb-6 line-clamp-3 flex-grow">
                  Driving at night presents unique challenges. Learn how to handle glare, reduced visibility, and fatigue to ensure you arrive safely at your destination.
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group/link hover:border-primary transition-all"
                >
                  <span className="text-heading-light dark:text-heading-dark hover:text-gray-950 text-gray-900 font-bold text-base group-hover/link:text-primary transition-colors flex items-center">
                    Continue Reading
                  </span>
                  <span className="bg-yellow-300 p-2 rounded-full hover:bg-gray-950 transition-all">
                    <span className="text-sm block text-gray-950 hover:text-white ">
                      <ArrowRight size={20} />
                    </span>
                  </span>
                </Link>
              </div>
            </article>
            <article className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800 group h-full">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img alt="Cars parked on street" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTDx-7gDhSy5XBRdA-hgB5zb6pTxXCmi5FnK41vhQ4LbJ7DIHmXQQVCZ1jGfuEkS-hjH0kVsFaVEmmxNRHJbb6nubgasPlDg5BgK1pM4HmWnjg9-ZgydBlkxkRBqcgJL2-zqTTlR0dfTfTGbMSTazoRoOaF3B6Je7A7jpYjm3g-X4AbwkbbUXoPus2-bwl1dIIdZZ5EF5suFXhBYyxRaX-hg1BT-6YQk4bCvJaYAQOoOK3Almy1Mub7kc7uIkZ8hfKp-EmA6CNjI73" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Skills</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-primary">TrueWay Team</span>
                  <span className="mx-2">•</span>
                  <span>Aug 30, 2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-heading-light dark:text-heading-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                  The 3-Step Method to Perfect Parallel Parking
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mb-6 line-clamp-3 flex-grow">
                  Stop fearing the parallel park. Our instructors break down the maneuver into three easy-to-remember steps that work every single time.
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group/link hover:border-primary transition-all"
                >
                  <span className="text-heading-light dark:text-heading-dark hover:text-gray-950 text-gray-900 font-bold text-base group-hover/link:text-primary transition-colors flex items-center">
                    Continue Reading
                  </span>
                  <span className="bg-yellow-300 p-2 rounded-full hover:bg-gray-950 transition-all">
                    <span className="text-sm block text-gray-950 hover:text-white ">
                      <ArrowRight size={20} />
                    </span>
                  </span>
                </Link>
              </div>
            </article>
            <article className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800 group h-full">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img alt="Using smartphone app" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7P3zpgPs3v5M9hHMyJxPO0eaLYliuiGSXfeBda1g9FDWSMuKcgJ1ctQJb4AdLPLlc-T2eIWQUYJXPUcEyfTze5XYPwNdKd6XCnnDh0igKEQRj69PhY9GSAXPR7qLZBEbjzoTFnuOAjgIQnxYAfp48p5JEQbZAsrjmjyCyse1_sh8xvmtTXRQA5YHGUYlusGanrqo7643gyuRSsREdfYrQ4glkOLO5kyeV-AAuWZpLZUoe0CMNUvwYbdkTDf-FnQBowc1STxj_9wkc" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Technology</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-primary">Tech Desk</span>
                  <span className="mx-2">•</span>
                  <span>Aug 15, 2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-heading-light dark:text-heading-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                  Best Digital Logbook Apps for 2024
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mb-6 line-clamp-3 flex-grow">
                  Ditch the paper logbook. We review the top approved digital apps that make recording your learner hours simple, automatic, and error-free.
                </p>
                <Link
                  href="#"
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group/link hover:border-primary transition-all"
                >
                  <span className="text-heading-light dark:text-heading-dark hover:text-gray-950 text-gray-900 font-bold text-base group-hover/link:text-primary transition-colors flex items-center">
                    Continue Reading
                  </span>
                  <span className="bg-yellow-300 p-2 rounded-full hover:bg-gray-950 transition-all">
                    <span className="text-sm block text-gray-950 hover:text-white ">
                      <ArrowRight size={20} />
                    </span>
                  </span>
                </Link>
              </div>
            </article>
          </div>
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <a className="px-4 py-2 bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary transition-all" href="#">Previous</a>
              <a className="w-10 h-10 flex items-center justify-center bg-primary text-heading-light rounded-lg font-bold shadow-md" href="#">1</a>
              <a className="w-10 h-10 flex items-center justify-center bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg text-text-light dark:text-text-dark hover:border-primary hover:text-primary transition-all" href="#">2</a>
              <a className="w-10 h-10 flex items-center justify-center bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg text-text-light dark:text-text-dark hover:border-primary hover:text-primary transition-all" href="#">3</a>
              <span className="text-gray-400 px-2">...</span>
              <a className="px-4 py-2 bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary transition-all" href="#">Next</a>
            </nav>
          </div>
        </main>
      </div>
      {/* ====== HEADER SECTION ====== */}
      <Footer />
    </>
  )
}
