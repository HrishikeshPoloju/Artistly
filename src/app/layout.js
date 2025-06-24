import "./globals.css";
import { Inter } from "next/font/google";
import { ArtistProvider } from "@/context/ArtistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artistly",
  description: "Connect Event Planners with Artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArtistProvider>
          {children}
        </ArtistProvider>
      </body>
    </html>
  );
}
