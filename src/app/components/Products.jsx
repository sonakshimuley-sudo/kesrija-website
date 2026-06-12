import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Bajra Cookies",
    image: "/products/bajara.png",
    desc: "Rich in fiber and traditional millet goodness.",
    link: "/products/bajra",
  },
  {
    name: "Jowar Cookies",
    image: "/products/jowar.png",
    desc: "Light, wholesome and naturally nutritious.",
    link: "/products/jowar",
  },
  {
    name: "Oats Cookies",
    image: "/products/oats.png",
    desc: "Healthy oats blended with premium taste.",
    link: "/products/oats",
  },
  {
    name: "Multigrain Cookies",
    image: "/products/multigrains.png",
    desc: "A perfect balance of multiple healthy grains.",
    link: "/products/multigrains",
  },
  {
    name: "Chocolate Cookies",
    image: "/products/chocolate.png",
    desc: "Healthy indulgence with rich cocoa flavor.",
    link: "/products/chocolate",
  },
  {
    name: "Dry Fruit Cookies",
    image: "/products/dry fruits.png",
    desc: "Loaded with premium nuts and wholesome crunch.",
    link: "/products/dryfruits",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-10 py-24">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#7a5a2b]">
          The Indian Heritage
        </h2>

        <p className="mt-4 text-[#8b7b65] text-lg">
          Taste the Premiun
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#fffaf4] rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden group"
          >

            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#7a5a2b]">
                {product.name}
              </h3>

              <p className="mt-3 text-[#8b7b65]">
                {product.desc}
              </p>

              <Link
  href={product.link}
  className="
    inline-block
    mt-6
    px-5
    py-3
    bg-[#7a5a2b]
    text-white
    rounded-full
    hover:bg-[#5f4420]
    transition
  "
>
  View Product
</Link>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}