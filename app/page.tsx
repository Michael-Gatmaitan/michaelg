import HeaderSection from "@/components/sections/HeaderSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ExperiencesSection from "@/components/sections/ExperiencesSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"
import PageWrapper from "@/components/page-wrapper"
import AwardsSection from "@/components/sections/AwardsSection"
import HobbiesSection from "@/components/sections/HobbiesSection"

export default function page() {
  return (
    <PageWrapper>
      <HeaderSection />
      <SkillsSection />
      <AwardsSection />
      <ProjectsSection />
      <ExperiencesSection />
      <HobbiesSection />
      <ContactSection />
    </PageWrapper>
  )
}
