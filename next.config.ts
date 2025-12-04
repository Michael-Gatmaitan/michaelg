import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    BASE_URL: process.env.BASE_URL,
    GITHUB_ACCESS_TOKEN_COMMIT_GRAPH:
      process.env.GITHUB_ACCESS_TOKEN_COMMIT_GRAPH,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

export default nextConfig;
