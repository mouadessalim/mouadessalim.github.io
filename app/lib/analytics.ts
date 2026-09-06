"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { Project } from "./portfolio";

export interface GitHubProjectClickEventParams {
  project_name: string;
  project_code: string;
  project_url: string;
  project_category: string;
  link_url: string;
  link_text: string;
}

export function trackGitHubProjectClick(project: Project) {
  const eventParams: GitHubProjectClickEventParams = {
    project_name: project.title,
    project_code: project.code,
    project_url: project.href,
    project_category: project.category,
    link_url: project.href,
    link_text: "View source",
  };

  try {
    sendGAEvent("event", "click_github_project", eventParams);
  } catch (err) {
    console.warn("Failed to dispatch GA event via @next/third-parties:", err);
  }
}
