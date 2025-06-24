"use client";

import { useState } from "react";
import artistsData from "@/lib/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import useFilter from "@/hooks/useFilter";

export default function ArtistListingPage() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });

  const filteredArtists = useFilter(artistsData, filters);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Artists</h1>

      <FilterBlock filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No artists found.</p>
        )}
      </div>
    </section>
  );
}
