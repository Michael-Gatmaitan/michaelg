import { ContributionGraphProps } from "@/components/layout/Header/ContributionGraph";
import { fetchGitHubContributions } from "@/lib/github";

// Server-side helper used by the root page to get contribution data
// Avoids making an HTTP request to our own API during prerender / build.
export type FetchContributionProps = Promise<
  | ContributionGraphProps
  | {
      error: string;
      details: string;
    }
>;
export const fetchContribution = async (): FetchContributionProps => {
  try {
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const fromDate = oneYearAgo.toISOString().split("T")[0]; // YYYY-MM-DD
    const toDate = today.toISOString().split("T")[0]; // YYYY-MM-DD

    const { contributions, totalContributions } =
      await fetchGitHubContributions(fromDate, toDate);

    return {
      data: contributions,
      totalContributions,
    };
  } catch (error) {
    return {
      error: "Failed to fetch GutHub activity.",
      details: (error as Error).message,
    };
  }
};
