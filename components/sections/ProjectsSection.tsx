import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowUpRight, Eye, Github } from "lucide-react"
import { Badge } from "../ui/badge"
import MutedText from "../muted-text";

interface IProject {
  id: number;
  title: string;
  description: string;
  tags: ToolTags[];
  githubLink: string;
  liveDemoLink: string;
}

enum ToolTags {
  // Frontend
  NextJS = "Next.js",
  React = "React",
  Tailwind = "TailwindCSS",
  ShadcnUI = "Shadcn/ui",
  MaterialUI = "Material UI",
  Redux = "Redux",
  ReactContext = "React Context API",
  ReactQuery = "React Query",
  SCSS = "SCSS",

  // Backend
  Express = "Express.js",
  PostgreSQL = "PostgreSQL",
  Supabase = "Supabase",
  Prisma = "Prisma",
  LocalStorage = "Local Storage",

  // Unity Game Engine
  Unity = "Unity Game Engine",
  MediaPipe = "MediaPipe Plugin (Unity)",
  AR = "Augmented Reality / 3D",
}

const projects: IProject[] = [
  {
    id: 1,
    title: "Omo Music",
    description:
      "A web-based music player providing free download and streaming of musics.",
    tags: [ToolTags.React, ToolTags.ReactContext, ToolTags.SCSS, ToolTags.LocalStorage],
    githubLink: "https://github.com/Michael-Gatmaitan/omo-music",
    liveDemoLink: "https://omo-music.netlify.app"
    // impact: "Cut incident response time by 48 mins on average.",
  },
  {
    id: 2,
    title: "Task-it",
    description:
      "A tool for organizing assignments or projects that will make your workflow easy and faster to accomplish using Kanban style.",
    tags: [ToolTags.React, ToolTags.Redux, ToolTags.MaterialUI, ToolTags.SCSS, ToolTags.LocalStorage],
    githubLink: "https://github.com/Michael-Gatmaitan/Task-it",
    liveDemoLink: "https://taskit-mg.netlify.app/",
    // impact: "Helped 2.3k candidates land interviews within 30 days.",
  },
  {
    id: 3,
    title: "Kape Ibarra",
    description:
      "A web-based POS & Inventory system of Kape Ibarra. This project is for our SAD (System Analysis & Design).",
    tags: [ToolTags.NextJS, ToolTags.ShadcnUI, ToolTags.Tailwind, ToolTags.Express, ToolTags.Supabase, ToolTags.Prisma],
    githubLink: "https://github.com/Michael-Gatmaitan?tab=repositories&q=Kape-ibarra&type=&language=&sort=",
    liveDemoLink: "https://kapeibarranext.vercel.app/",
    // impact: "Gave leadership visibility that unlocked a Series B raise.",
  },
  {
    id: 4,
    title: "AnatoLearn",
    description: "A app that uses 3D models and Augmented Reality for learning human body system. It uses MediaPipe to detect body landmarks and make the 3D model move.",
    tags: [ToolTags.Unity, ToolTags.MediaPipe, ToolTags.AR, ToolTags.Express, ToolTags.Supabase, ToolTags.PostgreSQL],
    githubLink: "https://github.com/Michael-Gatmaitan/AnatoLearn",
    liveDemoLink: "https://anatolearn.netlify.app/",
  },
  {
    id: 5,
    title: "Swars API",
    description: "A website that uses star wars' api to view details of the planets.",
    tags: [ToolTags.React, ToolTags.ReactQuery],
    githubLink: "https://github.com/Michael-Gatmaitan/starwars_react-query",
    liveDemoLink: "https://swarsplanets.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio v1",
    description: "My first website portfolio",
    tags: [ToolTags.React],
    githubLink: "https://github.com/Michael-Gatmaitan/michael-gatmaitan-webportfolio",
    liveDemoLink: "https://michaelgatmaitan.netlify.app/",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <MutedText text="Projects" />
          <h2 className="text-2xl font-semibold">Work that translates ideas into results</h2>
        </div>
        {/* <Button variant="outline" asChild>
          <Link href="https://github.com/Michael-Gatmaitan" target="_blank" rel="noreferrer">
            <Github className="size-4" />
            My GitHub Profile
          </Link>
        </Button> */}
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

const Project = ({ project }: { project: IProject }) => {
  return (
    <article key={project.title} className="space-y-4 border-b border-border/40 pb-6 last:border-b-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground font-mono">{project.description}</p>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href={project.liveDemoLink} target="_blank" rel="noreferrer">
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
      {/* <p className="text-sm font-medium text-foreground/80">{project.impact}</p> */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full px-3 py-0.5 text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2 md:gap-3">
        <Button asChild>
          <Link href={project.liveDemoLink} target="_blank">
            <Eye className="size-4" />
            Live Demo
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={project.githubLink} target="_blank">
            <Github className="size-4" />
            View Source
          </Link>
        </Button>
      </div>
    </article >
  )
}

export default ProjectsSection
