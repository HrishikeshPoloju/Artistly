
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <h1 className="text-2xl font-bold">Artistly</h1>
      <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
        <Link href="/artists">Explore Artists</Link>
        <Link href="/onboard">Onboard</Link>
        <Link href="/dashboard">Dashboard</Link> 
      </nav>
    </header>
  );
}
