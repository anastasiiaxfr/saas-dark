import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Product from "@/components/Products";
import FAQ from "@/components/FAQs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Product />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
