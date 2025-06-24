"use client";
import { useArtistContext } from "@/context/ArtistContext";
import Table from "@/components/Table"; 

export default function DashboardPage() {
  const { submittedArtists, removeArtist } = useArtistContext();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Manager Dashboard</h2>

      {submittedArtists.length === 0 ? (
        <p className="text-center text-muted-foreground">No submissions yet.</p>
      ) : (
        <Table data={submittedArtists} onRemove={removeArtist} />
      )}
    </div>
  );
}
