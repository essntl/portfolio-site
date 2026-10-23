// Looks up brand icons from the simple-icons package by slug (see https://simpleicons.org).

import * as simpleIcons from "simple-icons";

const icons = Object.values(simpleIcons);

export function getIcon(slug: string) {
  const icon = icons.find(i => i.slug === slug);
  if (!icon) throw new Error(`Unknown simple-icons slug: ${slug}`);
  return icon;
}
