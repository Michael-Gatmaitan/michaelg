import { Briefcase } from 'lucide-react'

const FooterSection = () => {
  return (
    <footer className="border-t border-border/60 pt-6 pb-8 text-center text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between mt-15">
      <p>© 2025 Michael Gatmaitan. Crafted in Next.js + shadcn/ui.</p>
      <div className="mt-2 flex items-center justify-center gap-2 text-xs sm:mt-0">
        <Briefcase className="size-3.5" />
        Actively looking for job.
      </div>
    </footer>
  )
}

export default FooterSection
