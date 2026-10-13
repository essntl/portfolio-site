// Content for the site.

import councilCandidate from "../assets/projects/council-candidate.png";
import { github, githubUser } from "./github";

export const stats = [
  { label: "Years of experience", value: 3 },
  { label: "Projects shipped", value: 5 },
  { label: "Public repos", value: github.publicRepos },
];

// Slugs from https://simpleicons.org
export const stack = ["html5", "css", "javascript", "typescript", "astro", "tailwindcss", "react", "git", "next.js", "docker", "proxmox", "linux"];

type Project = {
  title: string;
  description: string;
  image: ImageMetadata | string;
  url?: string;
  repo: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Pomodori",
    description: "A focus toolkit built around a Pomodoro timer, with a calendar and notes/to-do list in one place instead of spread across separate apps. Made for my own daily use and a Codedex course.",
    image: "https://picsum.photos/seed/focus-timer/800/500",
    repo: "https://github.com/essntl/pomidori",
    tags: ["astro", "typescript"],
  },
  {
    title: "ClarityDocs",
    description: "Wikipedia is hard to learn from as a beginner. ClarityDocs is an open-source technical encyclopedia where every topic has a beginner and an advanced section. Markdown-based, self-hostable, open to contributions.",
    image: "https://picsum.photos/seed/palette-lab/800/500",
    repo: "https://github.com/essntl/claritydocs",
    tags: ["react", "tailwindcss"],
  },
  {
    title: "Lumen",
    description: "There was no easy way to share full-quality trip photos with friends. Lumen lets you upload, organize and share original-quality photos and videos through clean, fast galleries.",
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
  { label: "GitHub", href: `https://github.com/${githubUser}` },
];
