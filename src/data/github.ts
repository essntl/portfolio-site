// Pulls profile data from the GitHub API when the site is built.
// Values update on every build; if GitHub can't be reached, the fallbacks are used.

import fallbackAvatar from "../assets/avatar.jpg";

export const githubUser = "essntl";

type GitHubProfile = {
  // Remote URL from GitHub, or the bundled fallback image
  avatar: string | ImageMetadata;
  publicRepos: number;
};

async function getProfile(): Promise<GitHubProfile> {
  const fallback = { avatar: fallbackAvatar, publicRepos: 17 };

  try {
    const res = await fetch(`https://api.github.com/users/${githubUser}`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    const data = await res.json();
    return { avatar: data.avatar_url, publicRepos: data.public_repos };
  } catch (error) {
    console.warn(`[github] Using fallback profile data: ${error}`);
    return fallback;
  }
}

export const github = await getProfile();
