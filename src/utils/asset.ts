/** Prefix a public asset path with the Vite base URL so it works on GitHub Pages */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if base already ends with one
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
