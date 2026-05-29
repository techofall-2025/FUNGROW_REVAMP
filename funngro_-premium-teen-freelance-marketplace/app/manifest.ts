import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Funngro | Teen Freelance Marketplace",
    short_name: "Funngro",
    description: "India's #1 safe earning destination built for teenagers aged 13-19. Gain experience, work with real brands, and earn pocket money.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#00C853",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
