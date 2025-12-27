import Footer from "@/components/Footer/Footer";
import DrivingConfidenceSplit from "@/components/Home/DrivingConfidenceSplit";
import Header from "@/components/Header/Header";
import Features from "@/components/Home/Features";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import MovingCarSection from "@/components/Home/MovingCar";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUS";
import Faqs from "@/components/Home/Faqs";
import RefresherDrivingLesson from "@/components/Frontend/RefresherDrivingLesson";
import BookSessionStrip from "@/components/Frontend/BookSessionStrip";



export default function HomePage() {
  return (
<>
  {/* ====== HEADER SECTION ====== */}
  <Header />

  {/* ====== HERO / BANNER SECTION ====== */}
  <HeroSection />

  {/* ====== FEATURES SECTION ====== */}
  <Features />

  {/* ====== HOW IT WORKS SECTION ====== */}
  <section className="bg-yellow-100">
  <HowItWorks />
  </section>

  {/* ====== WHY CHOOSE US SECTION ====== */}
  <WhyChooseUs />

  {/* ====== MOVING CAR ANIMATION SECTION ====== */}
  <MovingCarSection />

    {/* ====== TESTIMONIALS / REVIEWS SECTION ====== */}
  <DrivingConfidenceSplit />

    {/* ====== FAQ + BLOG SECTION ====== */}
  <Faqs />

  <RefresherDrivingLesson/>

  {/* ====== TESTIMONIALS / REVIEWS SECTION ====== */}
  <Testimonials />

  <BookSessionStrip/>

  {/* ====== FOOTER SECTION ====== */}
  <Footer />
</>

  );
}

