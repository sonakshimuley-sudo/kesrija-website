'use client';

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-20 text-center">

        <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#4A2C2A]">

          <div className="text-7xl mb-6">
            ✅
          </div>

          <h1 className="text-5xl font-bold text-[#4A2C2A] mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-[#6B4423] mb-8">
            Your order request has been sent successfully.
          </p>

          <p className="text-[#6B4423] mb-10">
            Our team will contact you shortly to confirm
            your order and delivery details.
          </p>

          <Link
            href="/"
            className="
              inline-block
              bg-[#4A2C2A]
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-[#37201F]
              transition
            "
          >
            Continue Shopping
          </Link>

        </div>

      </div>
    </main>
  );
}