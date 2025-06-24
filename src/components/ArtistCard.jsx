"use client";

export default function ArtistCard({ artist }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{artist.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{artist.category.join(", ")}</p>
        <p className="text-sm text-gray-600 mb-1">{artist.location}</p>
        <p className="text-sm font-medium text-black mb-2">{artist.fee}</p>
        <button className="mt-2 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
