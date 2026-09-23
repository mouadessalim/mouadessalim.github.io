import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mouad Essalim | Medical Student & Software Developer",
    short_name: "Mouad Essalim",
    description:
      "Mouad Essalim - Medical Student and Software Developer portfolio and case notes.",
    start_url: "/",
    display: "browser",
    background_color: "#18212e",
    theme_color: "#18212e",
  };
}
