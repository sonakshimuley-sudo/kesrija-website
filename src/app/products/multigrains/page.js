'use client';
import Image from "next/image";
import Reviews from "../../components/Reviews";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";

export default function MultigrainProductPage() {
const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#F8F4E8]">

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* PRODUCT IMAGE */}

          <div className="bg-[#FFFDF8] border border-[#E5D9B5] rounded-[32px] p-8 shadow-xl">

            <Image
              src="/products/multigrains.png"
              alt="Multigrain Cookies"
              width={700}
              height={700}
              className="w-full rounded-2xl"
              priority
            />

          </div>

          {/* DETAILS */}

          <div>

            <p className="uppercase tracking-[6px] text-[#6B7A3D] font-semibold">
              Signature Collection
            </p>

            <h1 className="text-6xl font-bold text-[#3B3125] mt-4">
              Multigrain Cookies
            </h1>

            <p className="text-[#4A4135] text-xl leading-10 mt-8">
              Crafted from a wholesome blend of ancient grains,
              these cookies combine nutrition, flavour and crunch
              into a delicious everyday snack.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full bg-[#EAE2BE] text-[#3B3125] font-medium">
                Gluten Free
              </span>

              <span className="px-4 py-2 rounded-full bg-[#EAE2BE] text-[#3B3125] font-medium">
                No Refined Sugar
              </span>

              <span className="px-4 py-2 rounded-full bg-[#EAE2BE] text-[#3B3125] font-medium">
                No Palm Oil
              </span>

              <span className="px-4 py-2 rounded-full bg-[#EAE2BE] text-[#3B3125] font-medium">
                No Preservatives
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-12">

              <p className="uppercase tracking-wider text-sm text-[#6B7A3D]">
                Starting From
              </p>

              <h2 className="text-5xl font-bold text-[#3B3125] mt-2">
                ₹199
              </h2>

              <p className="text-[#7A7268] mt-1">
                Inclusive of all taxes
              </p>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-10">

            <button
  onClick={() => {
    addToCart({
      name: "Multigrain Cookies",
      price: 199,
      image: "/products/multigrain.png",
    });

    console.log("Multigrain added to cart");
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
                border-[#4F5E2D]
                text-[#4F5E2D]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-[#4F5E2D]
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

      {/* INGREDIENTS */}

      <section className="py-20 bg-[#F2ECD8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-[#6B7A3D] font-semibold">
              Crafted With Care
            </p>

            <h2 className="text-5xl font-bold text-[#3B3125] mt-3">
              Made With Goodness
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Bajra
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Ancient millet rich in minerals and fibre.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Jowar
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Naturally wholesome and nutrient dense.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🥣</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Oats
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Rich in fibre and supports active living.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🍯</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Jaggery
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Natural sweetness without refined sugar.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY YOU'LL LOVE IT */}

      <section className="py-24 bg-[#FFFDF8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#6B7A3D] font-semibold">
              Benefits
            </p>

            <h2 className="text-5xl font-bold text-[#3B3125] mt-3">
              Why You'll Love It
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border border-[#E5D9B5] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">🌾</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Multiple Grains
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Nutrition from several wholesome grains.
              </p>
            </div>

            <div className="bg-white border border-[#E5D9B5] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">💪</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Nutrient Rich
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Packed with fibre, minerals and goodness.
              </p>
            </div>

            <div className="bg-white border border-[#E5D9B5] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">🍯</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Jaggery Sweetened
              </h3>
              <p className="mt-3 text-[#5F5548]">
                Naturally sweetened without refined sugar.
              </p>
            </div>

            <div className="bg-white border border-[#E5D9B5] rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-5">🌿</div>
              <h3 className="text-2xl font-bold text-[#3B3125]">
                Clean Label
              </h3>
              <p className="mt-3 text-[#5F5548]">
                No preservatives or artificial ingredients.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Reviews productSlug="multigrains" />

    </main>
  );
}