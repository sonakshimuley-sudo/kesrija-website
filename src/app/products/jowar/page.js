'use client';
import Image from "next/image";
import Reviews from "../../components/Reviews";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";


export default function JowarProductPage() {
const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#FFF8F1]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="bg-gradient-to-br from-[#FFF3E8] to-[#F7E3CE] border border-[#E7C6A3] rounded-[40px] p-8 shadow-2xl">

              <Image
                src="/products/jowar.png"
                alt="Jowar Cookies"
                width={800}
                height={800}
                priority
                className="w-full h-auto rounded-3xl"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="uppercase tracking-[6px] text-[#C89B53] font-semibold mb-4">
              Ancient Millet Collection
            </p>

            <h1 className="text-6xl lg:text-7xl font-bold text-[#4A3124] leading-tight">
              Jowar Cookies
            </h1>

            <div className="w-32 h-1 bg-[#C89B53] rounded-full my-8"></div>

            <p className="text-xl text-[#7A5A4A] leading-10">
              Crafted from wholesome jowar and naturally sweetened with jaggery,
              these cookies offer a light crunch, rich nutrition, and timeless
              goodness inspired by traditional Indian grains.
            </p>

            {/* BENEFITS */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              {[
                "Gluten Free",
                "No Palm Oil",
                "No Preservatives",
                "No Refined Sugar",
                "High Fiber",
                "Millet Based",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#FFF3E8] border border-[#E7C6A3] rounded-xl px-4 py-3 text-[#5A3927] font-medium"
                >
                  {item}
                </div>
              ))}

            </div>

            {/* PRICE */}

            <div className="mt-12">

              <p className="text-sm uppercase text-[#B89A7A] tracking-widest">
                Starting From
              </p>

              <h2 className="text-6xl font-bold text-[#5A3927] mt-2">
                ₹199
              </h2>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-10">

              <button
  onClick={() => {
    addToCart({
      name: "Jowar Cookies",
      price: 199,
      image: "/products/jowar.png",
    });

    console.log("Jowar added to cart");
  }}
  className="
    bg-[#3E2723]
    text-white
    px-8
    py-4
    rounded-full
    font-semibold
    shadow-lg
    hover:bg-[#2A1815]
    transition
  "
>
  Add To Cart
</button>

              <button className="border-2 border-[#C89B53] text-[#5A3927] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#C89B53] hover:text-white transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </section>

      

      {/* WHY YOU'LL LOVE IT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">


        <p className="uppercase tracking-[5px] text-[#C67A3D] font-semibold mb-4">
          Benefits
        </p>

        <h2 className="text-center text-5xl font-bold text-[#4A3124] mb-16">
          Why You'll Love It
        </h2>
        
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8D8C6]">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold text-[#4A3124] mb-3">
              Rich In Fiber
            </h3>
            <p className="text-[#7A5A4A]">
              Supports digestion and keeps you fuller for longer.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8D8C6]">
            <div className="text-5xl mb-4">🍯</div>
            <h3 className="text-2xl font-bold text-[#4A3124] mb-3">
              Jaggery Sweetened
            </h3>
            <p className="text-[#7A5A4A]">
              Natural sweetness without refined sugar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8D8C6]">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-[#4A3124] mb-3">
              Heart Friendly
            </h3>
            <p className="text-[#7A5A4A]">
              Made with wholesome ingredients for everyday wellness.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8D8C6]">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-[#4A3124] mb-3">
              Clean Label
            </h3>
            <p className="text-[#7A5A4A]">
              No preservatives, no artificial additives.
            </p>
          </div>

        </div>

      </section>

      {/* INGREDIENTS */}

      <section className="bg-[#FFF4EA] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-bold text-[#4A3124] mb-16">
            Made With Carefully Selected Ingredients
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#5A3927] mb-3">
                Jowar
              </h3>
              <p className="text-[#7A5A4A]">
                Ancient grain rich in fibre and essential nutrients.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#5A3927] mb-3">
                Jaggery
              </h3>
              <p className="text-[#7A5A4A]">
                Natural sweetness without refined sugar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#5A3927] mb-3">
                Healthy Oils
              </h3>
              <p className="text-[#7A5A4A]">
                Carefully selected oils for better nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#5A3927] mb-3">
                Natural Ingredients
              </h3>
              <p className="text-[#7A5A4A]">
                Simple ingredients with clean-label goodness.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Reviews productSlug="jowar" />
      

    </main>
  );
}