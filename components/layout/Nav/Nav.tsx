import { Button } from "../../ui/button";
import ToggleSidebar from "./ToggleSidebar";
import MyLogo from "./MyLogo";
import Link from "next/link";

interface NavigationButton {
  id: number;
  text: string;
  href: string;
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

const Nav = () => {
  return (
    <nav className="w-full sticky top-0 z-10">
      <div className="mx-auto max-w-7xl py-3">
        {/* Main nav */}
        <div className="flex items-center p-2 justify-between rounded-xl border border-white/15 bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {/* Logo on desktop/tablet (left-aligned) */}
          <MyLogo />

          <div className="hidden md:flex gap-2">
            {navigationButtons.map(({ id, href, text }) => (
              <Button key={id} variant="outline" asChild>
                <Link href={href}>{text}</Link>
              </Button>
            ))}
          </div>

          <ToggleSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Nav;