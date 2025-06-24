"use client";
import { createContext, useContext, useState } from "react";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [submittedArtists, setSubmittedArtists] = useState([]);

  const addArtist = (artist) => {
    setSubmittedArtists((prev) => [...prev, artist]);
  };

  const removeArtist = (id) => {
    setSubmittedArtists((prev) => prev.filter((artist) => artist.id !== id));
  };

  return (
    <ArtistContext.Provider value={{ submittedArtists, addArtist, removeArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const context = useContext(ArtistContext);
  if (!context) throw new Error("useArtistContext must be used inside ArtistProvider");
  return context;
};
