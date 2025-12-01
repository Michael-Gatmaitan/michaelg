import { ContributionGraphProps } from "@/components/layout/Header/ContributionGraph";

export const fetchContribution = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/github-activity`);
  const data: ContributionGraphProps = await response.json();

  return data;
};
