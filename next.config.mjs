/** @type {import('next').NextConfig} */
const nextConfig = {
  // STATIC_EXPORT=1 builds a static copy into ./out (used for previews); Vercel uses the normal build.
  ...(process.env.STATIC_EXPORT ? { output: "export" } : {}),
};
export default nextConfig;
