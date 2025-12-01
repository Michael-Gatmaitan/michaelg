import HeaderSection from "@/components/sections/HeaderSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ExperiencesSection from "@/components/sections/ExperiencesSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"
import PageWrapper from "@/components/page-wrapper"
import AwardsSection from "@/components/sections/AwardsSection"
import HobbiesSection from "@/components/sections/HobbiesSection"
import { Separator } from "@/components/ui/separator"

export default function page() {
  return (
    <PageWrapper>
      <HeaderSection />
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
    </PageWrapper>
  )
}
