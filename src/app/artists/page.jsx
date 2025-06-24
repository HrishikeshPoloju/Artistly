"use client";

import { useState } from "react";
import FilterBlock from "@/components/FilterBlock";
import ArtistCard from "@/components/ArtistCard";
import useFilter from "@/hooks/useFilter";
import artistsData from "@/lib/data/artists.json";
import { useArtistContext } from "@/context/ArtistContext";

export default function ArtistListingPage() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });

  const { submittedArtists } = useArtistContext();

  const allArtists = [...artistsData, ...submittedArtists];
  const filteredArtists = useFilter(allArtists, filters);

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
          <p className="col-span-full text-center text-muted-foreground">
            No artists found.
          </p>
        )}
      </div>
    </section>
  );
}
