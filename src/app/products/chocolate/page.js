'use client';

import Image from "next/image";
import Reviews from "../../components/Reviews";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";

export default function ChocolatePage() {
  const { addToCart } = useCart();

  return (
    <main className="bg-[#F6F0F5] min-h-screen">

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-[#E2D5E5]">
            <Image
              src="/products/chocolate.png"
              alt="Chocolate Cookies"
              width={700}
              height={700}
              className="rounded-[30px] w-full"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="uppercase tracking-[6px] text-[#8C6A91] font-medium mb-4">
              Indulgence Collection
            </p>

            <h1 className="text-6xl font-bold text-[#2A1815] leading-tight">
              Chocolate
              <br />
              Cookies
            </h1>

            <div className="w-24 h-1 bg-[#8C6A91] rounded-full my-8"></div>

            <p className="text-lg text-[#6B5A63] leading-9">
              Rich cocoa goodness meets wholesome ingredients.
              Crafted for chocolate lovers who want indulgent
              flavour with cleaner ingredients and better nutrition.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-4 mt-10">

              {[
                "No Refined Sugar",
                "No Palm Oil",
                "No Preservatives",
                "Real Cocoa",
                "Clean Label",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-[#E8DCEB] text-[#2A1815] px-5 py-3 rounded-full font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* PRICE */}

            <div className="mt-12">

              <p className="text-[#8C6A91] uppercase tracking-[3px] mb-2">
                Starting From
              </p>

              <h2 className="text-6xl font-bold text-[#2A1815]">
                ₹199
              </h2>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-12">

              <button
                onClick={() => {
                  addToCart({
                    name: "Chocolate Cookies",
                    price: 199,
                    image: "/products/chocolate.png",
                  });

                  console.log("Chocolate added to cart");
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

              <button className="border-2 border-[#8C6A91] text-[#8C6A91] hover:bg-[#8C6A91] hover:text-white px-10 py-4 rounded-full font-semibold transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* WHY YOU'LL LOVE IT */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#8C6A91] mb-4">
            Benefits
          </p>

          <h2 className="text-5xl font-bold text-[#2A1815]">
            Why You'll Love It
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2D5E5]">
            <div className="text-5xl mb-4">🍫</div>
            <h3 className="font-bold text-[#2A1815] text-xl mb-3">
              Rich Cocoa
            </h3>
            <p className="text-[#6B5A63]">
              Deep chocolate flavour in every bite.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2D5E5]">
            <div className="text-5xl mb-4">🍯</div>
            <h3 className="font-bold text-[#2A1815] text-xl mb-3">
              Naturally Sweetened
            </h3>
            <p className="text-[#6B5A63]">
              Sweetened with jaggery instead of refined sugar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2D5E5]">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="font-bold text-[#2A1815] text-xl mb-3">
              Better Choice
            </h3>
            <p className="text-[#6B5A63]">
              Enjoy chocolate cookies with cleaner ingredients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2D5E5]">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-bold text-[#2A1815] text-xl mb-3">
              Clean Label
            </h3>
            <p className="text-[#6B5A63]">
              No preservatives or palm oil.
            </p>
          </div>

        </div>
      </section>

      {/* INGREDIENTS */}

      <section className="bg-[#EFE6F0] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#8C6A91] mb-4">
              Ingredients
            </p>

            <h2 className="text-5xl font-bold text-[#2A1815]">
              Made With Goodness
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#8C6A91] mb-4">
                Cocoa
              </h3>
              <p className="text-[#6B5A63]">
                Rich chocolate flavour from real cocoa.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#8C6A91] mb-4">
                Jaggery
              </h3>
              <p className="text-[#6B5A63]">
                Natural sweetness without refined sugar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#8C6A91] mb-4">
                Healthy Oils
              </h3>
              <p className="text-[#6B5A63]">
                Carefully selected oils for better nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#8C6A91] mb-4">
                Clean Label
              </h3>
              <p className="text-[#6B5A63]">
                No preservatives or artificial additives.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Reviews productSlug="chocolate" />

    </main>
  );
}