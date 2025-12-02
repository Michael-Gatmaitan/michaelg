import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

const levelColors = [
  'bg-gray-200 dark:bg-gray-800',
  'bg-green-200 dark:bg-green-900',
  'bg-green-400 dark:bg-green-700',
  'bg-green-600 dark:bg-green-500',
  'bg-green-800 dark:bg-green-300',
];

const getLevelColor = (level: number): string => {
  // Tailwind classes for different contribution levels
  // Adjust colors to match your site's theme
  switch (level) {
    case 0: return levelColors[0]; // No contributions
    case 1: return levelColors[1]; // Low
    case 2: return levelColors[2]; // Medium
    case 3: return levelColors[3]; // High
    case 4: return levelColors[4]; // Very high
    default: return levelColors[0];
  }
};

export interface ContributionGraphProps {
  data: ContributionDay[];
  totalContributions: number;
  isLoading?: boolean;
}

export function ContributionGraph({ data, totalContributions, isLoading }: ContributionGraphProps) {
  if (isLoading) {
    // Optional: Add a loading skeleton state
    return <div className="p-2">Loading contributions...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="p-2">Could not load contribution data.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {totalContributions.toLocaleString()} contributions in the last year
      </p>
      <div className="grid grid-flow-col grid-rows-7 gap-1 p-2 border rounded-md dark:border-gray-700 overflow-x-auto bg-white dark:bg-gray-900/50">
        {data.map((day) => (
          <div
            key={day.date}
            className={`w-3 h-3 rounded-xs ${getLevelColor(day.level)}`}
            title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`} // Tooltip
          />
        ))}
      </div>

      {/* Bottom side of the graph */}
      <div className="flex justify-between pt-2 items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-gray-600 dark:text-gray-400">Less</div>
          <div className="flex flex-row gap-1">
            {levelColors.map(levelColor => (
              <div key={levelColor} className={`w-3 h-3 rounded-xs border border-gray-700 ${levelColor}`}></div>
            ))}
          </div>
          <div className="text-gray-600 dark:text-gray-400">More</div>
        </div>

        <Button variant="outline" asChild>
          <Link href="https://github.com/Michael-Gatmaitan" target="_blank" rel="noreferrer">
            <Github className="size-4" />
            My GitHub Profile
          </Link>
        </Button>
      </div>
    </div>
  );
}