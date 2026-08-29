import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Mouad Essalim | Medical Doctor & Software Developer",
    short_name: "Mouad Essalim",
    description:
      "Dr. Mouad Essalim - Medical Doctor and Software Developer portfolio and case notes.",
    start_url: "/",
    display: "browser",
    background_color: "#18212e",
    theme_color: "#18212e",
  };
}
