'use client';
import Image from "next/image";
import Reviews from "../../components/Reviews";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";

export default function BajraProductPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#F5F1E8]">

       <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}

          <div className="bg-white rounded-[32px] p-8 border border-[#DDD4C4] shadow-xl">

            <Image
              src="/products/bajra.png"
              alt="Bajra Cookies"
              width={700}
              height={700}
              priority
              className="w-full rounded-2xl"
            />

          </div>

          {/* DETAILS */}

          <div>

            <p className="uppercase tracking-[6px] text-[#7A6A4F] font-semibold">
              Millet Collection
            </p>

            <h1 className="text-6xl font-bold text-[#3E3222] mt-4">
              Bajra Cookies
            </h1>

            <p className="text-[#6B5A45] text-xl leading-10 mt-8">
              Crafted with wholesome bajra and naturally sweetened
              with jaggery. A delicious, nutritious snack packed
              with traditional goodness and clean ingredients.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full bg-[#ECE4D5] text-[#3E3222] font-medium">
                No Maida
              </span>

              <span className="px-4 py-2 rounded-full bg-[#ECE4D5] text-[#3E3222] font-medium">
                No Refined Sugar
              </span>

              <span className="px-4 py-2 rounded-full bg-[#ECE4D5] text-[#3E3222] font-medium">
                No Palm Oil
              </span>

              <span className="px-4 py-2 rounded-full bg-[#ECE4D5] text-[#3E3222] font-medium">
                No Preservatives
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-12">

              <p className="uppercase tracking-wider text-sm text-[#7A6A4F]">
                Starting From
              </p>

              <h2 className="text-5xl font-bold text-[#3E3222] mt-2">
                ₹199
              </h2>

              <p className="text-[#6B5A45] mt-1">
                Inclusive of all taxes
              </p>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-10">

             <button
  onClick={() => {
    addToCart({
      id: "bajra",
      name: "Bajra Cookies",
      price: 199,
      image: "/products/bajra.png",
    });

    console.log("Bajra added to cart");
    alert("Added to cart");
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
                border-[#7A5C2E]
                text-[#7A5C2E]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-[#7A5C2E]
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

      {/* MADE WITH GOODNESS */}

      <section className="py-20 bg-[#EFE7D9]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-[#7A6A4F] font-semibold">
              Crafted With Care
            </p>

            <h2 className="text-5xl font-bold text-[#3E3222] mt-3">
              Made With Goodness
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Bajra
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                Nutritious millet packed with natural goodness.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🍯</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Jaggery
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                Natural sweetness without refined sugar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🌻</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Healthy Oils
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                Carefully selected oils for better nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Clean Label
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                No preservatives or artificial additives.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY YOU'LL LOVE IT */}

      <section className="py-24 bg-[#F5F1E8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#7A6A4F] font-semibold">
              Traditional Goodness
            </p>

            <h2 className="text-5xl font-bold text-[#3E3222] mt-3">
              Why You'll Love It
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 border border-[#DDD4C4] shadow-lg">
              <div className="text-5xl mb-5">🌾</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Millet Power
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                Made with wholesome bajra for everyday nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DDD4C4] shadow-lg">
              <div className="text-5xl mb-5">🍯</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Naturally Sweetened
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                Sweetened with jaggery, not refined sugar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DDD4C4] shadow-lg">
              <div className="text-5xl mb-5">❤️</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Better Choice
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                A healthier alternative to conventional cookies.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DDD4C4] shadow-lg">
              <div className="text-5xl mb-5">🌿</div>
              <h3 className="text-2xl font-bold text-[#3E3222]">
                Clean Label
              </h3>
              <p className="mt-3 text-[#6B5A45]">
                No maida, no palm oil, no preservatives.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Reviews productSlug="bajra" />

    </main>

    
  );
}