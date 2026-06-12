'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert(
        'Please fill Name, Phone Number and Address.'
      );
      return;
    }

    const total = cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

    const products = cart
      .map(
        (item) =>
          `• ${item.name}
Qty: ${item.quantity}
Price: ₹${item.price}
Total: ₹${item.price * item.quantity}`
      )
      .join('\n\n');

    const message = `
KESRIJA NEW ORDER

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Address:
${formData.address}

City: ${formData.city}
State: ${formData.state}
Pincode: ${formData.pincode}

Products:

${products}

Grand Total: ₹${total}
`;

    const whatsappUrl =
      `https://wa.me/917828842661?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    clearCart();

    router.push('/order-success');
  };

  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-[#4A2C2A] mb-3">
          Checkout
        </h1>

        <p className="text-[#6B4423] mb-10">
          Please provide your details to complete your order.
        </p>

        <div className="bg-white rounded-3xl border-2 border-[#4A2C2A] p-8 shadow-xl">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-[#4A2C2A] font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#4A2C2A] font-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#4A2C2A] font-semibold">
                Email (Optional)
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#4A2C2A] font-semibold">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 text-[#4A2C2A] font-semibold">
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block mb-2 text-[#4A2C2A] font-semibold">
                State
              </label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#4A2C2A] font-semibold">
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border-2 border-[#4A2C2A] rounded-xl p-3"
              />
            </div>

          </div>

          <button
            onClick={handlePlaceOrder}
            className="
              w-full
              mt-10
              bg-[#4A2C2A]
              text-white
              py-4
              rounded-full
              font-semibold
              text-lg
              hover:bg-[#37201F]
              transition
            "
          >
            Place Order
          </button>

        </div>

      </div>
    </main>
  );
}