export default function About() {
  return (

    <section id="about" className="bg-[#F5F1E8] py-24">

      {/* HEADING */}
      <div className="text-center mb-20">

        <p className="tracking-[5px] uppercase text-[#8b7b65] text-sm">
          About Kesrija
        </p>

        <h2 className="text-5xl font-bold text-[#7a5a2b] mt-4">
          Crafted For Healthy Everyday Snacking
        </h2>

      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-lg text-[#6f6253] leading-9">

            At KESRIJA, we believe healthy food should never feel boring.
            Our cookies are thoughtfully crafted using wholesome millets,
            earthy ingredients, and clean recipes that bring together
            nutrition, authenticity, and indulgence.

          </p>

          <p className="text-lg text-[#6f6253] leading-9 mt-8">

            Every bite is designed to deliver warmth, nourishment,
            and premium taste — without compromising on health.

          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#fffaf4] p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">

            <h3 className="text-4xl mb-4">🌾</h3>

            <h4 className="text-2xl font-semibold text-[#7a5a2b]">
              No Maida
            </h4>

          </div>

          <div className="bg-[#fffaf4] p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">

            <h3 className="text-4xl mb-4">🍯</h3>

            <h4 className="text-2xl font-semibold text-[#7a5a2b]">
              No Refined Sugar
            </h4>

          </div>

          <div className="bg-[#fffaf4] p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">

            <h3 className="text-4xl mb-4">🌿</h3>

            <h4 className="text-2xl font-semibold text-[#7a5a2b]">
              No Palm Oil
            </h4>

          </div>

          <div className="bg-[#fffaf4] p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">

            <h3 className="text-4xl mb-4">✨</h3>

            <h4 className="text-2xl font-semibold text-[#7a5a2b]">
              No Preservatives
            </h4>

          </div>

        </div>

      </div>

    </section>

  );
}