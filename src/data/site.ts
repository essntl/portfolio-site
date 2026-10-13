// Content for the site. Add projects, stack items or links here.

import councilCandidate from "../assets/projects/council-candidate.png";

export const stats = [
  { label: "Years of experience", value: 3 },
  // Real time data pulling from github will be added later
  { label: "Projects shipped", value: 5 },
  { label: "Public repos", value: 16 },
];

// Slugs from https://simpleicons.org
export const stack = ["html5", "css", "javascript", "typescript", "astro", "tailwindcss", "react", "git", "next.js", "docker", "proxmox", "linux"];

type Project = {
  title: string;
  description: string;
  image: ImageMetadata | string; // local import from src/assets, or a remote URL
  url?: string; // live site, leave out if there is none
  repo: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Pomodori",
    description: "Productivity tool set website centered around a Pomodoro timer, with calendar and notes/to-do functionality. Created for personal use and a Codedex course.",
    image: "https://picsum.photos/seed/focus-timer/800/500",
    repo: "https://github.com/essntl/pomidori",
    tags: ["astro", "typescript"],
  },
  {
    title: "ClarityDocs",
    description: "Open-source technical encyclopedia with beginner and advanced sections for each topic. Markdown-based, self-hostable, contribution via pull requests.",
    image: "https://picsum.photos/seed/palette-lab/800/500",
    repo: "https://github.com/essntl/claritydocs",
    tags: ["react", "tailwindcss"],
  },
  {
    title: "Lumen",
    description: "A high-resolution photo and video sharing platform built for trip photography. Upload, organize, and share original-quality media with anyone through clean, fast galleries.",
    image: "https://picsum.photos/seed/readwise-digest/800/500",
    repo: "https://github.com/essntl/lumen",
    tags: ["javascript", "css"],
  },
  {
    title: "Student council representative promotion site",
    description: "Promotion site for a student council representative candidate. Made as an assignment at Elvebakken VGS.",
    image: councilCandidate,
    url: "https://kandidat.artemk.dev",
    repo: "https://github.com/essntl/councilcandidatewebsite",
    tags: ["typescript", "next.js", "tailwindcss"],
  },
];

export const contacts = [
  { label: "contact@artemk.dev", href: "mailto:contact@artemk.dev" },
  { label: "Telegram", href: "https://t.me/artemk_dev" },
  { label: "GitHub", href: "https://github.com/essntl" },
];
