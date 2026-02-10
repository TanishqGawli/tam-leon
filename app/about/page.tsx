"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-10 py-20 space-y-20">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold">About TAM LEON</h1>
        <p className="text-lg sm:text-xl opacity-80 max-w-2xl mx-auto">
          TAM LEON is a streetwear brand that transforms art into wearable designs. 
          We don't just sell T-shirts — we sell self-expression, creativity, and bold designs that make you stand out.
        </p>
        <button className="mt-6 bg-white text-black px-8 py-3 font-bold rounded-lg hover:opacity-90 transition">
          Shop Now
        </button>
      </section>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="opacity-80">
            Every tee is crafted from premium cotton and printed with exclusive artwork from emerging artists. 
            Wearing a TAM LEON design is like carrying a piece of art with you.
          </p>
          <p className="opacity-80">
            We aim to merge streetwear with creative expression, allowing every individual to wear art that represents them.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/tam-leon-tee.png"
            alt="TAM LEON Tee"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Featured Artists / Products Section */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Featured Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image
            src="/porsche-tee.png"
            alt="Porsche Tee"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
          <Image
            src="/skull-tee.png"
            alt="Skull Tee"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
          <Image
            src="/tam-leon-tee.png"
            alt="Tam Leon Tee"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="text-center mt-10">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Join the TAM LEON Community</h2>
        <p className="opacity-80 mb-6 max-w-xl mx-auto">
          Express yourself with exclusive art-inspired streetwear. Follow us, shop our latest designs, and wear your creativity.
        </p>
        <button className="bg-white text-black px-8 py-3 font-bold rounded-lg hover:opacity-90 transition">
          Explore Shop
        </button>
      </section>

    </main>
  );
}