export default function Footer() {
  return (
    <footer className="bg-[#1f1a17] text-[#f5ede3] mt-20 border-t border-[#c6a777]/20">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-[#d4a762] tracking-wide">
            KESRIJA
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#d8cbb8]">
            Premium healthy snacks crafted with wholesome grains,
            authentic ingredients, and earthy goodness.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#e6c28b]">
            Quick Links
          </h3>

          <ul className="space-y-3 text-[#d8cbb8]">
            <li className="hover:text-[#d4a762] cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-[#d4a762] cursor-pointer transition">
              Products
            </li>

            <li className="hover:text-[#d4a762] cursor-pointer transition">
              About
            </li>

            <li className="hover:text-[#d4a762] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#e6c28b]">
            Our Products
          </h3>

          <ul className="space-y-3 text-[#d8cbb8]">
            <li>Bajra Cookies</li>
            <li>Jowar Cookies</li>
            <li>Oats Cookies</li>
            <li>Multigrain Cookies</li>
            <li>Chocolate Cookies</li>
            <li>Dry Fruit Cookies</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#e6c28b]">
            Contact
          </h3>

          <p className="text-[#d8cbb8] mb-3">
            📍 India
          </p>

          <p className="text-[#d8cbb8] mb-3">
            📧 hello@kesrija.com
          </p>

          <p className="text-[#d8cbb8]">
            📞 +91 9876543210
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#c6a777]/20 py-5 text-center text-sm text-[#cbbca8]">
        © 2026 KESRIJA. All Rights Reserved.
      </div>

    </footer>
  );
}