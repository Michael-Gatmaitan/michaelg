import { Mail, Linkedin, Github, Facebook, Twitter, Instagram, Code } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import MutedText from "../muted-text"
import EmailForm from "../layout/Contact/EmailForm"

interface Socials {
  id: number;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const socials: Socials[] = [
  { id: 1, href: "mailto:mchlgtmtn@gmail.com", Icon: Mail, },
  { id: 2, href: "https://github.com/Michael-Gatmaitan", Icon: Github },
  { id: 3, href: "https://www.linkedin.com/in/michael-gatmaitan-4642b4198/", Icon: Linkedin },
  { id: 4, href: "https://leetcode.com/u/mchlgtmtn/", Icon: Code },
  { id: 5, href: "https://www.facebook.com/mchlgtmtn", Icon: Facebook },
  { id: 6, href: "https://x.com/MichaelGat76834", Icon: Twitter },
  { id: 7, href: "https://www.instagram.com/mchlgtmtn/", Icon: Instagram },
];

const ContactSection = () => {
  return (
    <section id="contact" className="grid gap-8 lg:grid-cols-[3fr,2fr]">
      <div className="space-y-4">
        <MutedText text="Collaboration" />
        <h2 className="text-3xl font-semibold">Let’s build together</h2>
        <div className="flex flex-wrap gap-3">
          {socials.map(({ id, href, Icon }) => (
            <Button key={id} variant="outline" size="icon-lg" asChild>
              <Link href={href} target="_blank" rel="noreferrer">
                <Icon className="size-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <EmailForm />
    </section>
  )
}

export default ContactSection
