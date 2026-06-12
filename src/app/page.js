import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f1e7] via-[#efe3d2] to-[#e6d5c3] relative overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#c6a777] opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8b6b43] opacity-10 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center pt-28 px-6 relative z-10">

        <Image
          src="/logo 3.png"
          alt="KESRIJA"
          width={220}
          height={220}
          className="drop-shadow-2xl"
        />

        <h1 className="text-7xl font-bold mt-8 text-[#7a5a2b] tracking-wide">
          KESRIJA
        </h1>

        <p className="mt-4 text-2xl text-[#8b7b65] tracking-[6px]">
          HEALTH WITH TASTE
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-[#7a5a2b] text-white text-lg shadow-xl hover:scale-105 transition duration-300">
          Explore Products
        </button>

      </section>

      <Products />

      <About />

      <WhyChoose />

      <Testimonials />

      <Footer />

    </main>
  );
}