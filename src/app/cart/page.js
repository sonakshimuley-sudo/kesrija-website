'use client';

import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#4A2C2A] mb-8">
          Your Cart
        </h1>

       {cart.length === 0 ? (
  <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
    <div className="text-7xl mb-4">🛒</div>

    <h2 className="text-3xl font-bold text-[#3E3222] mb-3">
      Your Cart Is Empty
    </h2>

    <p className="text-[#6B5A45] mb-8">
      Discover our healthy and delicious cookies.
    </p>

    <Link
      href="/"
      className="
        bg-[#7A5A2B]
        text-white
        px-8
        py-4
        rounded-full
        font-semibold
      "
    >
      Continue Shopping
    </Link>
  </div>
) : (
  <div className="grid lg:grid-cols-3 gap-8">

    {/* CART ITEMS */}

    <div className="lg:col-span-2 space-y-5">

      {cart.map((item, index) => (
        <div
          key={index}
          className="
bg-white
rounded-3xl
p-5
shadow-lg
border-2
border-[#4A2C2A]
flex
items-center
justify-between
"
        >
          <div className="flex items-center gap-5">

            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-2xl border"
            />

            <div>
              <h2 className="text-2xl font-bold text-[#4A2C2A]">
  {item.name}
</h2>

<p className="text-[#6B4423]">
  ₹{item.price} each
</p>

<p className="mt-2 font-semibold text-[#4A2C2A]">
    Quantity: {item.quantity}
  </p>

  <div className="flex items-center gap-3 mt-3">

  <button
    onClick={() => decreaseQuantity(item.name)}
    className="
      w-8
      h-8
      rounded-full
      bg-[#4A2C2A]
      text-white
      font-bold
    "
  >
    -
  </button>

  <span className="font-bold text-[#4A2C2A]">
    {item.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(item.name)}
    className="
      w-8
      h-8
      rounded-full
      bg-[#4A2C2A]
      text-white
      font-bold
    "
  >
    +
  </button>

</div>
            </div>

          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="
bg-[#4A2C2A]
text-white
px-5
py-2
rounded-full
hover:bg-[#37201F]
transition
"
          >
            Remove
          </button>
        </div>
      ))}

    </div>

    {/* ORDER SUMMARY */}

    <div
      className="
bg-white
rounded-3xl
p-8
shadow-xl
border-2
border-[#4A2C2A]
h-fit
"
      
    >
      <h2 className="text-3xl font-bold text-[#4A2C2A] mb-6">
        Order Summary
      </h2>

      <div className="space-y-3 text-[#6B4423] font-medium">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

      </div>

      <hr className="my-5" />

      <div className="flex justify-between text-2xl font-bold text-[#4A2C2A]">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

     <Link
  href="/checkout"
  className="
    block
    text-center
    mt-4
    bg-[#4A2C2A]
    text-white
    px-6
    py-3
    rounded-full
    font-semibold
  "
>
  Proceed To Checkout
</Link>

    </div>

  </div>
)}
  
      </div>
    </main>
  );
}