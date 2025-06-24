"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold text-black">Artistly</span>
      </Link>
      <nav className="space-x-4">
        <Link href="/artists" className="text-gray-700 hover:text-black">Explore</Link>
        <Link href="/onboard" className="text-gray-700 hover:text-black">Onboard</Link>
      </nav>
    </header>
  );
}
