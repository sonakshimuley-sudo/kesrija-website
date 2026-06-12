export default function Testimonials() {

  const reviews = [
    {
      name: "Priya Sharma",
      text: "Healthy and tasty at the same time. Perfect with evening tea.",
    },

    {
      name: "Rahul Mehta",
      text: "The millet cookies feel premium and guilt-free. Loved the texture.",
    },

    {
      name: "Ananya Verma",
      text: "My family loved the dry fruit cookies. Amazing healthy snack option.",
    },
  ];

  return (

    <section className="py-24 px-6 bg-gradient-to-b from-[#f8f1e7] to-[#efe3d3]">

      {/* HEADING */}
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-[#6f4e37]">
          What Our Customers Say
        </h2>

        <p className="mt-4 text-[#8b6b4a] text-lg">
          Real words from people who love KESRIJA.
        </p>

      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#e5d3b3] hover:scale-105 transition duration-300"
          >

            <div className="text-[#d4a762] text-4xl mb-4">
              “
            </div>

            <p className="text-[#6f6253] leading-8">
              {review.text}
            </p>

            <h3 className="mt-6 text-xl font-semibold text-[#6f4e37]">
              {review.name}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );
}