'use client';
import Image from "next/image";
import Reviews from "../../components/Reviews";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";


export default function OatsProductPage() {
const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* PRODUCT IMAGE */}

          <div className="bg-white border border-[#D6E3EE] rounded-[32px] p-8 shadow-xl">

            <Image
              src="/products/oats.png"
              alt="Oats Cookies"
              width={700}
              height={700}
              className="w-full rounded-2xl"
              priority
            />

          </div>

          {/* PRODUCT DETAILS */}

          <div>

            <p className="uppercase tracking-[6px] text-[#C8A86B] font-semibold">
              Whole Grain Collection
            </p>

            <h1 className="text-6xl font-bold text-[#1B2A41] mt-4">
              Oats Cookies
            </h1>

            <p className="text-[#23395B] text-xl leading-10 mt-8">
              Crafted with wholesome oats and naturally nourishing ingredients,
              these cookies deliver satisfying crunch, lasting energy,
              and guilt-free indulgence in every bite.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full bg-[#DCEAF5] text-[#1B2A41] font-medium">
                Gluten Free
              </span>

              <span className="px-4 py-2 rounded-full bg-[#DCEAF5] text-[#1B2A41] font-medium">
                No Refined Sugar
              </span>

              <span className="px-4 py-2 rounded-full bg-[#DCEAF5] text-[#1B2A41] font-medium">
                No Palm Oil
              </span>

              <span className="px-4 py-2 rounded-full bg-[#DCEAF5] text-[#1B2A41] font-medium">
                No Preservatives
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-12">

              <p className="text-[#7B8794] uppercase tracking-wider text-sm">
                Starting From
              </p>

              <h2 className="text-5xl font-bold text-[#1B2A41] mt-2">
                ₹199
              </h2>

              <p className="text-[#7B8794] mt-1">
                Inclusive of all taxes
              </p>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-10">

             <button
  onClick={() => {
    addToCart({
      name: "Oats Cookies",
      price: 199,
      image: "/products/oats.png",
    });

    console.log("Oats added to cart");
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

              <button
                className="
                border-2
                border-[#1B2A41]
                text-[#1B2A41]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-[#1B2A41]
                hover:text-white
                transition
                "
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* INGREDIENT SECTION */}

      <section className="py-20 bg-[#EDF5FB]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-[#C8A86B] font-semibold">
              Crafted With Care
            </p>

            <h2 className="text-5xl font-bold text-[#1B2A41] mt-3">
              Made With Goodness
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Oats
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Naturally rich in fibre and wholesome nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🍯</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Jaggery
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Natural sweetness without refined sugar.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🌻</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Healthy Oils
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Carefully selected oils for balanced nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Natural Ingredients
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Simple ingredients you can trust.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS SECTION */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#C8A86B] font-semibold">
              Benefits
            </p>

            <h2 className="text-5xl font-bold text-[#1B2A41] mt-3">
              Why You'll Love It
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border border-[#D6E3EE] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">🥣</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Rich In Oats
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Packed with fibre and wholesome goodness.
              </p>
            </div>

            <div className="bg-white border border-[#D6E3EE] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Sustained Energy
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Slow-release carbohydrates keep you active longer.
              </p>
            </div>

            <div className="bg-white border border-[#D6E3EE] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">🍯</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Jaggery Sweetened
              </h3>
              <p className="mt-3 text-[#5B6777]">
                Naturally sweet without refined sugar.
              </p>
            </div>

            <div className="bg-white border border-[#D6E3EE] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">🌿</div>
              <h3 className="text-2xl font-bold text-[#1B2A41]">
                Clean Label
              </h3>
              <p className="mt-3 text-[#5B6777]">
                No preservatives or artificial ingredients.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Reviews productSlug="oats" />
      

    </main>
  );
}