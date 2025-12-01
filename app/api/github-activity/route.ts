import { NextResponse } from "next/server";
// import cache from '@/lib/cache'; // Your cache implementation
import { ContributionDay, fetchGitHubContributions } from "@/lib/github"; // The function from Step 1

interface GitHubActivityApiResponse {
  source: "graphql" | "cache";
  data: ContributionDay[];
  totalContributions: number;
}

export async function GET() {
  try {
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const fromDate = oneYearAgo.toISOString().split("T")[0]; // YYYY-MM-DD
    const toDate = today.toISOString().split("T")[0]; // YYYY-MM-DD

    const { contributions, totalContributions } =
      await fetchGitHubContributions(fromDate, toDate);

    const activityData: GitHubActivityApiResponse = {
      source: "graphql",
      data: contributions,
      totalContributions: totalContributions,
    };

    // cache.set(GITHUB_ACTIVITY_CACHE_KEY, activityData, CACHE_TTL_DAILY);
    return NextResponse.json(activityData);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    // Return an error response or potentially stale cache data if available
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub activity",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
