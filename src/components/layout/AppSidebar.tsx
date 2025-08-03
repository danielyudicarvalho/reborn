'use client';

import Link from 'next/link';
import {
  Flame,
  Dice5,
  Gem,
  Clapperboard,
  Shield,
  Heart,
  Swords,
  Crown,
  ChevronDown,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../ui/button';

const menuItems = [
  {
    href: '/casino',
    icon: Dice5,
    label: 'Cassino',
  },
  {
    href: '/slots',
    icon: Gem,
    label: 'Slots',
  },
  {
    href: '/live-casino',
    icon: Clapperboard,
    label: 'Cassino ao Vivo',
  },
  {
    href: '/sports',
    icon: Shield,
    label: 'Esportes',
  },
  {
    href: '/favorites',
    icon: Heart,
    label: 'Favoritos',
  },
  {
    href: '/tournaments',
    icon: Swords,
    label: 'Torneios',
  },
  {
    href: '/vip',
    icon: Crown,
    label: 'VIP',
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <Flame className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tighter text-foreground">
            Blaze Reborn
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="rounded-md px-2 py-2 text-base font-semibold hover:bg-sidebar-accent hover:no-underline">
                    <div className="flex items-center gap-2">
                        <Flame className="h-5 w-5 text-primary" />
                        <span>Originais da Blaze</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pl-4">
                    <SidebarMenu>
                    {['Crash', 'Double', 'Mines', 'Dice'].map((item) => (
                        <SidebarMenuItem key={item}>
                        <Link href="#" className="w-full">
                            <SidebarMenuButton size="sm" className="w-full justify-start font-normal">
                                {item}
                            </SidebarMenuButton>
                        </Link>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} className="w-full">
                <SidebarMenuButton
                  isActive={pathname.startsWith(item.href)}
                  className="w-full justify-start text-base"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" className="w-full">Suporte ao Vivo</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
