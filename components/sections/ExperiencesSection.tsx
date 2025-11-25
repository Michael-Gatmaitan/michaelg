import MutedText from "../muted-text"
import { Badge } from "../ui/badge"

const experiences = [
  {
    role: "Designer",
    company: "Panginay Unida Christian School",
    period: "2019",
    summary:
      "Designed different t-shirt logos and tarps for elementary students using Adobe XD and Photoshop.",
    stack: ["Adobe XD", "Photoshop"],
  },
]

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="space-y-8 border-t border-border/60 pt-8">
      <div>
        <MutedText text="Experience" />
        {/* <h2 className="text-2xl font-semibold"></h2> */}
        <p className="mt-2 text-muted-foreground">

        </p>
      </div>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <article key={`${exp.role}-${exp.company}`} className="flex gap-4">
            <div className="hidden w-1 rounded-full bg-primary/40 sm:block" />
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <MutedText text={exp.period} />
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                </div>
                <Badge variant="outline" className="rounded-full px-3 py-0.5 text-xs">
                  {exp.company}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{exp.summary}</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full px-3 py-0.5 text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperiencesSection
