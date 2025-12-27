"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
const testimonials = [
  {
    title: "Easy to Understand",
text: "The lessons were clear, calm, and helped me build real confidence driving every day safely, while understanding road rules better with patient guidance through practice each week.",
    name: "Sara Mohamed",
    initials: "SM",
    rating: 5,
  },
  {
    title: "Amazing Experience",
    text: "My instructor stayed patient, explained everything slowly, and made practice sessions comfortable and enjoyable throughout, giving helpful feedback after every drive to improve quickly consistently.",
    name: "John Davis",
    initials: "JD",
    rating: 5,
  },
  {
    title: "Very Professional",
    text: "From booking to test day, the entire process felt organised, supportive, and surprisingly simple overall, with reminders, guidance, and clear expectations that reduced stress completely.",
    name: "Priya Patel",
    initials: "PP",
    rating: 5,
  },
  {
    title: "Great Support",
    text: "They pointed out mistakes gently, showed safer habits, and helped my confidence grow steadily, giving practical tips I could apply immediately during every driving situation.",
    name: "Liam Brown",
    initials: "LB",
    rating: 5,
  },
  {
    title: "Highly Recommended",
    text: "Thanks to structured lessons and guidance, I passed confidently and actually enjoyed learning throughout, gaining useful experience and understanding how to stay safe long term.",
    name: "Emily Taylor",
    initials: "ET",
    rating: 5,
  },
];



  return (
    <section className="dark:bg-white">
      <div className="max-w-7xl mx-auto py-15 px-4 ">
        <div className="w-full lg:w-7/12 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <p className="text-yellow-800 uppercase tracking-wider text-xs font-bold">
              What more than 100,000 learners say
            </p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-15 dark:text-gray-700">
            Choose a driving instructor you can trust
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={false}
            pagination={false}
            speed={800}
            grabCursor={true}
            watchSlidesProgress
            resistanceRatio={0.85}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <div className="bg-white border border-gray-200 rounded-[18px] max-w-sm w-full p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden flex items-center justify-center text-base font-semibold text-gray-700">
                          {item.initials}
                        </div>
                      </div>

                      <div>
                        <div className="flex gap-1">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star
                              key={i}
                              size={15}
                              className="text-yellow-500 fill-yellow-300"
                            />
                          ))}
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
