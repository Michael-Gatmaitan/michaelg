import HeaderSection from "@/components/sections/HeaderSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ExperiencesSection from "@/components/sections/ExperiencesSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"
import AwardsSection from "@/components/sections/AwardsSection"
import HobbiesSection from "@/components/sections/HobbiesSection"
import { Separator } from "@/components/ui/separator"
import { fetchContribution } from "@/lib/github-contribution"

export default function page() {
  const contributionPromise = fetchContribution();

  return (
    <div className="flex flex-col w-full gap-16">
      <HeaderSection githubContributionsPromise={contributionPromise} />
      <Separator />
      <SkillsSection />
      <Separator />
      <AwardsSection />
      <Separator />
      <ProjectsSection />
      <Separator />
      <ExperiencesSection />
      <Separator />
      <HobbiesSection />
      <Separator />
      <ContactSection />
    </div>
  )
}
