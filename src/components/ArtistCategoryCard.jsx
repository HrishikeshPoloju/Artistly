
"use client";

export default function ArtistCategoryCard({ title, image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
