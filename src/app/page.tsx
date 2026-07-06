import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Specialties } from "@/components/Specialties";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Chefs } from "@/components/Chefs";
import { Testimonials } from "@/components/Testimonials";
import { Reservation } from "@/components/Reservation";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <Specialties />
        <Menu />
        <Gallery />
        <Chefs />
        <Testimonials />
        <Reservation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
