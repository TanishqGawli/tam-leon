import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-6xl font-extrabold tracking-widest">TAM LEON</h1>
        <p className="mt-6 text-xl tracking-wide">
          WE DON'T SELL T-SHIRTS. WE SELL ART.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <Link href="/shop">
            <button className="bg-white text-black px-8 py-3 font-bold rounded-lg hover:opacity-90 transition">
              Shop Now
            </button>
          </Link>

          <Link href="/about">
            <button className="border border-white px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-black transition">
              About
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}