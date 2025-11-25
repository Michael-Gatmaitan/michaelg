"use client"
import MutedText from "@/components/muted-text";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/stores/sidebarStore"
import { Facebook, X, Instagram, Twitter, Github, Linkedin, Code, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface NavigationButton {
  id: number;
  text: string;
  href: string;
}

interface Socials {
  id: number;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navigationButtons: NavigationButton[] = [
  { id: 1, text: "Top", href: "#" },
  { id: 2, text: "Skills", href: "#skills" },
  { id: 3, text: "Awards", href: "#awards" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Experiences", href: "#experiences" },
  { id: 6, text: "Hobbies", href: "#hobbies" },
  { id: 7, text: "Contact", href: "#contact" },
]

const socials: Socials[] = [
  { id: 1, href: "mailto:mchlgtmtn@gmail.com", Icon: Mail, },
  { id: 2, href: "https://github.com/Michael-Gatmaitan", Icon: Github },
  { id: 3, href: "https://www.linkedin.com/in/michael-gatmaitan-4642b4198/", Icon: Linkedin },
  { id: 4, href: "https://leetcode.com/u/mchlgtmtn/", Icon: Code },
  { id: 5, href: "https://www.facebook.com/mchlgtmtn", Icon: Facebook },
  { id: 6, href: "https://x.com/MichaelGat76834", Icon: Twitter },
  { id: 7, href: "https://www.instagram.com/mchlgtmtn/", Icon: Instagram },
];

const SideBar = () => {
  const isOpen = useSidebar(state => state.open)
  const toggleSidebar = useSidebar(state => state.toggleSidebar)

  return (
    <AnimatePresence initial={false}>
      {
        isOpen &&
        <motion.div
          key="sidebar"
          initial={{ opacity: 0, scale: 0.7, y: -20, borderRadius: '0px' }}
          animate={{ opacity: 1, scale: 1, y: 0, borderRadius: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: -20, borderRadius: '0px' }}
          transition={{ ease: "backInOut", duration: 0.2 }}
          className="max-h-dvh h-dvh fixed flex flex-col items-center justify-center w-full top-0 z-100 lg:hidden px-4 sm:px-8 lg:px-0 bg-white/10 dark:bg-black/20 backdrop-blur-md"
        >
          <Button variant="default" className="absolute top-6 right-7" size="icon" onClick={toggleSidebar}>
            <X />
          </Button>

          <div className="grid gap-6">
            {navigationButtons.map(({ id, href, text }) => (
              <Button variant="link" className="font-bold text-2xl" key={id} asChild onClick={toggleSidebar}>
                <Link href={href}>
                  {text}
                </Link>
              </Button>
            ))}
          </div>

          <div className="space-y-3 absolute left-4 bottom-4">
            <MutedText text="Socials" />
            <div className="flex gap-3">
              {socials.map(({ id, href, Icon }) => (
                <Button key={id} variant="outline" size="icon-lg" asChild>
                  <Link href={href} target="_blank">
                    <Icon className="size-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default SideBar
