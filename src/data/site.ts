// Content for the site.

import councilCandidate from "../assets/projects/council-candidate.png";
import idea from "../assets/projects/idea.png";
import { github, githubUser } from "./github";

export const stats = [
  { label: "Years of experience", value: 3 },
  { label: "Projects shipped", value: 5 },
  { label: "Public repos", value: github.publicRepos },
];

// Slugs from https://simpleicons.org (icons come from the simple-icons package)
export const stack = ["html5", "css", "javascript", "typescript", "astro", "tailwindcss", "react", "git", "nextdotjs", "docker", "proxmox", "linux"];

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
    title: "idea",
    description: "A minimal, self-hostable personal site for short blog posts and long-form articles, with a Notion-like editor, comments and backups. Ships as a single Docker image.",
    image: idea,
    url: "https://idea.artemk.dev",
    repo: "https://github.com/essntl/idea",
    tags: ["next.js", "typescript", "postgresql", "docker"],
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

// Homelab setup, listed top to bottom in the order a request travels.
// Keep it high level: no IPs, hostnames, ports or exact versions.
export const infrastructure = {
  layers: [
    { icon: "cloudflare", name: "Cloudflare", role: "DNS and proxy in front of every domain" },
    { icon: "nginxproxymanager", name: "Nginx Proxy Manager", role: "Routes each domain to its container and handles HTTPS" },
    { icon: "docker", name: "Docker on ZimaOS", role: "Every project runs in its own container, including this site" },
    { icon: "proxmox", name: "Proxmox VE", role: "Hypervisor for the ZimaOS VM, plus Ubuntu and Windows VMs for friends" },
    { icon: "amd", name: "One machine", role: "Ryzen 9 5950X, 64 GB RAM, RTX 3060 and GTX 1060" },
  ],
  details: [
    {
      title: "Storage",
      text: "1 TB NVMe for the host, plus 2× 22 TB, 6 TB and 4 TB hard drives for data and backups.",
    },
    {
      title: "GPUs",
      text: "An RTX 3060 and a GTX 1060 for GPU-accelerated workloads, or passed through to VMs that need one.",
    },
    {
      title: "Deploys",
      text: "I build images locally or with GitHub Actions, push them to Docker Hub and pull them onto the server.",
    },
    {
      title: "Backups",
      text: "Everything is backed up to mirrored drives, and the important data also goes off-site to the cloud.",
    },
    {
      title: "Access",
      text: "Remote access goes through a WireGuard VPN. Container health is managed from the ZimaOS dashboard.",
    },
  ],
};

export const contacts = [
  { label: "contact@artemk.dev", href: "mailto:contact@artemk.dev" },
  { label: "Telegram", href: "https://t.me/artemk_dev" },
  { label: "GitHub", href: `https://github.com/${githubUser}` },
];
