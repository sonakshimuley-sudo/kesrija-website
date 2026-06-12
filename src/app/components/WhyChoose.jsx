export default function WhyChoose() {
  return (
    <section className="py-24 px-6 bg-[#f8f1e7] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#d6c2a3] opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#a67c52] opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#6f4e37]">
            Why Choose KESRIJA?
          </h2>

          <p className="mt-4 text-[#8b6b4a] text-lg">
            Crafted with ancient grains and modern wellness.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300 border border-[#e5d3b3]">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-2xl font-semibold text-[#6f4e37]">
              Gluten Free
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300 border border-[#e5d3b3]">
            <div className="text-5xl mb-4">🍯</div>
            <h3 className="text-2xl font-semibold text-[#6f4e37]">
              No Refined Sugar
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300 border border-[#e5d3b3]">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-semibold text-[#6f4e37]">
              No Preservatives
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300 border border-[#e5d3b3]">
            <div className="text-5xl mb-4">💛</div>
            <h3 className="text-2xl font-semibold text-[#6f4e37]">
              Heart Friendly
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300 border border-[#e5d3b3]">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold text-[#6f4e37]">
              Made with Millets
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}