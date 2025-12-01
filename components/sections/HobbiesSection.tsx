import { Bike, Dumbbell, LucideIcon, Motorbike, Volleyball } from "lucide-react"
import MutedText from "../muted-text"

type Hobby = {
  title: string
  summary: string
  details: string
  icon: LucideIcon
}

const hobbies: Hobby[] = [
  {
    title: "Strength Training",
    summary: "Gym",
    details: "Lifting helps me to reduce stress, build strength, and keeps my body in shape.",
    icon: Dumbbell,
  },
  {
    title: "Outdoor Biking",
    summary: "Biking",
    details: "Weekend rides across the city and trails to reset, explore, and stay in flow.",
    icon: Bike,
  },
  {
    title: "Wanderlust",
    summary: "Travel",
    details: "Always planning the next trip to experience new cultures, food, and people.",
    icon: Motorbike,
  },
  {
    title: "Outdoor Games",
    summary: "Volleyball",
    details: "Casual outdoor games for fun and exercise.",
    icon: Volleyball,
  },
]

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <MutedText text="Hobbies" />
          <h2 className="text-2xl font-semibold">Interests besides coding</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {hobbies.map((hobby) => (
          <article
            key={hobby.title}
            className="group space-y-3 rounded-2xl border border-border/60 bg-background/60 p-5 shadow-[0_0_40px_rgba(0,0,0,0.05)] transition hover:border-border hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-2xl border border-border/60 bg-muted/40 p-3 text-primary">
                <hobby.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{hobby.summary}</p>
                <h3 className="text-lg font-semibold">{hobby.title}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{hobby.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HobbiesSection
