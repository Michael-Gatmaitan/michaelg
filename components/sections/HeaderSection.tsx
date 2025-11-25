"use client";

import { ThemeToggle } from "../theme-toggle";
import { ArrowUpRight, Hammer, UserRoundSearch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import MutedText from "../muted-text";
import Image from "next/image";

const metrics = [
  { label: "Competition champion", value: "3" },
  { label: "LeetCode problems solved", value: "25" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease,
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const metricsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const metricItem = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

const HeaderSection = () => {
  return (
    <motion.header
      className="flex flex-col gap-8"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div className="flex flex-wrap items-center gap-6" variants={itemVariants}>
        <div className="h-28 w-28 shrink-0 self-start overflow-hidden rounded-2xl border border-border/70 bg-linear-to-br from-primary/20 via-primary/5 to-transparent shadow-inner sm:h-32 sm:w-32 relative">
          <Image src="/images/me.jpeg" alt="Me" fill />
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-between gap-4">
          <div>
            <MutedText text="Portfolio — 2025" />
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">Michael Gatmaitan</h1>
            <p className="text-lg text-muted-foreground">Front End Developer</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <a
                href="/resume/MichaelGatmaitan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div className="grid gap-8 lg:grid-cols-[3fr,2fr]" variants={itemVariants}>
        <div className="space-y-6">
          {/* <Badge variant="secondary" className="rounded-full bg-secondary/60 px-3 py-1 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="size-4" />
            Currently shipping velocity workflows
          </Badge> */}
          <p className="text-lg text-muted-foreground">
            Born in 2002, in Marilao, Bulacan. Passionate about solving problems with code and design, I love building seamless digital experiences that delight users. Curious explorer, lifelong learner, and always eager to tackle new challenges—let&apos;s create something remarkable together!
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="#projects">
                <Hammer />
                Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <UserRoundSearch />
                Let’s collaborate
              </Link>
            </Button>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-6 text-center text-muted-foreground sm:grid-cols-3 sm:text-left"
          variants={metricsContainer}
        >
          {metrics.map((metric) => (
            <motion.div key={metric.label} className="space-y-1" variants={metricItem}>
              <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
              <p className="text-sm">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default HeaderSection;
