import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestitomials from "@/components/Testimonialcards";
import UpcominWebinars from "@/components/UpcominWebinars";
import WhyChooseUs from "@/components/WhysChooseUs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestitomials />
      <UpcominWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
