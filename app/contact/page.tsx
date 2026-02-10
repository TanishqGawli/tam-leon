"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-10 py-20 flex flex-col items-center justify-center space-y-10">
      
      <h1 className="text-5xl sm:text-6xl font-bold text-center">Contact TAM LEON</h1>
      <p className="text-lg sm:text-xl opacity-80 text-center max-w-2xl">
        Have a question or want to collaborate? Reach out to us via Instagram or email.
      </p>

      {/* Contact Details */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <Link
          href="https://www.instagram.com/___tam___leon___?igsh=MTgxeWwzcWtwM2tsOA=="
          target="_blank"
          className="bg-white text-black px-8 py-3 font-bold rounded-lg hover:opacity-90 transition"
        >
          Instagram
        </Link>
        <a
          href="mailto:tam-leon-clothing@gmail.com"
          className="border border-white px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-black transition"
        >
          Email Us
        </a>
      </div>

      {/* Optional Back to Home button */}
      <Link href="/">
        <button className="mt-10 bg-white text-black px-8 py-3 font-bold rounded-lg hover:opacity-90 transition">
          Back to Home
        </button>
      </Link>
    </main>
  );
}