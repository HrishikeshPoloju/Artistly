"use client";

import Footer from "@/components/Footer";
import ArtistCategoryCard from "@/components/ArtistCategoryCard";
import Link from "next/link";

const categories = [
  { title: "Singers", image: "/images/singer.jpg" },
  { title: "Dancers", image: "/images/dancer.jpg" },
  { title: "Speakers", image: "/images/speaker.jpg" },
  { title: "DJs", image: "/images/dj.jpg" },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Book Talented Artists for Your Event</h1>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Discover, connect, and book performers from various categories — all in one platform.
        </p>
        <Link href="/artists">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Explore Artists
          </button>
        </Link>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <ArtistCategoryCard key={idx} title={cat.title} image={cat.image} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
