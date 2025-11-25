"use client";
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/stores/sidebarStore';
import { Menu } from 'lucide-react';

const ToggleSidebar = () => {
  // const isOpen = useSidebar(state => state.open)
  const toggleSidebar = useSidebar(state => state.toggleSidebar)

  return (
    <Button
      size="icon"
      className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/20 text-foreground hover:bg-white/30 active:bg-white/40 dark:bg-black/30 dark:hover:bg-black/40"
      onClick={toggleSidebar}
    >
      <Menu />
    </Button>
  )
}

export default ToggleSidebar
