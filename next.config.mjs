const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/memento-mori-app" : "",
  assetPrefix: isGithubPages ? "/memento-mori-app/" : undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
