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
      <Header />
      <main className="dark:bg-white">
        <HeroSection />

        <Features />

        <section className="bg-yellow-100">
          <HowItWorks />
        </section>


        <WhyChooseUs />

        <MovingCarSection />

        <DrivingConfidenceSplit />

        <Faqs />

        <RefresherDrivingLesson />

        <Testimonials />

        <BookSessionStrip />

      </main>
      <Footer />
    </>

  );
}

