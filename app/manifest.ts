import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mouad Essalim | Medical Student & Software Developer",
    short_name: "Mouad Essalim",
    description:
      "Portfolio of Mouad Essalim, medical student and full-stack web developer.",
    start_url: "/",
    display: "browser",
    background_color: "#18212e",
    theme_color: "#18212e",
  };
}
