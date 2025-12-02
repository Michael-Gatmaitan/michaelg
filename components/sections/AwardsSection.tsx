import React from 'react'
import MutedText from '../muted-text'
import Image from 'next/image'
import { Badge } from '../ui/badge'

interface Award {
  id: number,
  title: string,
  period: string,
  summary: string,
  place: string,
  imageSource: string,
}

const awards: Award[] = [
  {
    id: 1,
    title: "Java Programming",
    period: "2023",
    summary: "Passed and able to solve 3 levels of problem set using Java.",
    place: "Champion",
    imageSource: "/images/awards/JavaProgramming_2023.jpg",
  },

  {
    id: 2,
    title: "Web Development",
    period: "2024",
    summary: "Cloned a website from scratch with API keys to fetch data for news page and for search feature using React js.",
    place: "Champion",
    imageSource: "/images/awards/WebDev_2024.jpg",
  },
  {
    id: 3,
    title: "WebFix Challenge",
    period: "2025",
    summary: "Finished all 3 levels of debugging a website in a limited time.",
    place: "Champion",
    imageSource: "/images/awards/WebFix_2025.jpg",
  },
]

const AwardsSection = () => {
  return (
    <section id="awards" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <MutedText text="Awards" />
          <h2 className="text-2xl font-semibold">Achievements in Pambayang Dalubhasaan ng Marilao 🏆</h2>
          <p className="mt-2 text-muted-foreground">
            I really enjoy participating on school activities where I can apply my skills and learn something new.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex items-center rounded-3xl p-4 border border-border/60 bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.05)] transition hover:border-border hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            >
              <div className="aspect-square h-full rounded-lg overflow-hidden bg-muted flex max-h-32">
                {award.imageSource ? (
                  <Image
                    src={award.imageSource}
                    alt={award.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-4xl">
                    .
                  </div>
                )}
              </div>
              <div className="flex-1 ml-6">
                <MutedText text={award.period} />
                <h3 className="text-lg font-semibold">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.summary}</p>
                <Badge className="bg-green-300 dark:bg-green-200 text-green-800 text-sm font-semibold mt-2 px-3 py-1">
                  🥇 {award.place}
                </Badge>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AwardsSection
