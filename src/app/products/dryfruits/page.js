'use client';
import Image from "next/image";
import Reviews from "../../components/Reviews";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";


export default function DryFruitsPage() {
const { addToCart } = useCart();

  return (
    <main className="bg-[#FFF8F5] min-h-screen">

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-[#E7D2C8]">
            <Image
              src="/products/dryfruits.png"
              alt="Dry Fruits Cookies"
              width={700}
              height={700}
              className="rounded-[30px] w-full"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="uppercase tracking-[6px] text-[#C9A15B] font-medium mb-4">
              Premium Collection
            </p>

            <h1 className="text-6xl font-bold text-[#5B3A32] leading-tight">
              Dry Fruits
              <br />
              Cookies
            </h1>

            <div className="w-24 h-1 bg-[#C9A15B] rounded-full my-8"></div>

            <p className="text-lg text-[#7A5A4F] leading-9">
              Packed with almonds, pistachios and raisins,
              these cookies bring together rich nutrition,
              satisfying crunch and indulgent flavour in every bite.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-4 mt-10">

              {[
                "Gluten Free",
                "No Refined Sugar",
                "No Palm Oil",
                "No Preservatives",
                "Premium Dry Fruits",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-[#F4DCDC] text-[#5B3A32] px-5 py-3 rounded-full font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* PRICE */}

            <div className="mt-12">

              <p className="text-[#9A6A4A] uppercase tracking-[3px] mb-2">
                Starting From
              </p>

              <h2 className="text-6xl font-bold text-[#5B3A32]">
                ₹199
              </h2>
            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-12">

              <button
  onClick={() => {
    addToCart({
      name: "Dry Fruits Cookies",
      price: 199,
      image: "/products/dry fruits.png",
    });

    console.log("Dry Fruits added to cart");
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

             
  "


              <button className="border-2 border-[#9A6A4A] text-[#9A6A4A] hover:bg-[#9A6A4A] hover:text-white px-10 py-4 rounded-full font-semibold transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YOU'LL LOVE IT */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#C9A15B] mb-4">
            Benefits
          </p>

          <h2 className="text-5xl font-bold text-[#5B3A32]">
            Why You'll Love It
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E8D5CB]">
            <div className="text-5xl mb-4">🥜</div>
            <h3 className="font-bold text-[#5B3A32] text-xl mb-3">
              Rich In Nuts
            </h3>
            <p className="text-[#7A5A4F]">
              Almonds and cashews provide healthy fats and nutrients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E8D5CB]">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-bold text-[#5B3A32] text-xl mb-3">
              Energy Boost
            </h3>
            <p className="text-[#7A5A4F]">
              Naturally energizing ingredients for everyday snacking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E8D5CB]">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="font-bold text-[#5B3A32] text-xl mb-3">
              Heart Friendly
            </h3>
            <p className="text-[#7A5A4F]">
              Contains healthy fats from premium dry fruits.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E8D5CB]">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-bold text-[#5B3A32] text-xl mb-3">
              Clean Label
            </h3>
            <p className="text-[#7A5A4F]">
              No palm oil, preservatives or refined sugar.
            </p>
          </div>

        </div>
      </section>

      {/* INGREDIENTS */}

      <section className="bg-[#F8ECE7] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#C9A15B] mb-4">
              Ingredients
            </p>

            <h2 className="text-5xl font-bold text-[#5B3A32]">
              Made With Goodness
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#9A6A4A] mb-4">
                Almonds
              </h3>
              <p className="text-[#7A5A4F]">
                Rich in protein and healthy fats.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#9A6A4A] mb-4">
                Cashews
              </h3>
              <p className="text-[#7A5A4F]">
                Loaded with antioxidants and nutrients.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#9A6A4A] mb-4">
                Raisins
              </h3>
              <p className="text-[#7A5A4F]">
                Natural sweetness and minerals.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-[#9A6A4A] mb-4">
                Jaggery
              </h3>
              <p className="text-[#7A5A4F]">
                Traditional sweetener without refined sugar.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Reviews productSlug="dryfruits" />
      

    </main>
  );
}