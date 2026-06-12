'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {

  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

 const totalItems = cart.reduce(
  (sum, item) => sum + (item.quantity || 1),
  0
);

  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 border-b border-[#d8cbb8] bg-[#f8f1e7]">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        <Image
          src="/logo 2.png"
          alt="KESRIJA Logo"
          width={60}
          height={60}
        />

        <div>
          <h1 className="text-2xl font-bold text-[#7a5a2b]">
            KESRIJA
          </h1>

          <p className="text-sm tracking-[3px] text-[#8b7b65]">
            HEALTH WITH TASTE
          </p>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-8 text-[#6d4c2f] font-medium">

        <a href="#" className="hover:text-[#b88643] transition">
          Home
        </a>

        <a href="#" className="hover:text-[#b88643] transition">
          Products
        </a>

        <a href="#" className="hover:text-[#b88643] transition">
          About
        </a>

        <a href="#" className="hover:text-[#b88643] transition">
          Contact
        </a>

      <Link
  href="/cart"
  className="
    bg-[#7a5a2b]
    text-white
    px-5
    py-2
    rounded-full
    hover:bg-[#5f4420]
    transition
    shadow-lg
  "
>
  Cart ({mounted ? totalItems : 0})
</Link>

      </div>

    </nav>
  );
}
