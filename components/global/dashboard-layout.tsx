"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Profile",
      href: "/profile",
      active: pathname === "/profile",
    },
    {
      label: "Messages",
      href: "/messages",
      active: pathname === "/messages",
    },
    {
      label: "Appointments",
      href: "/appointments",
      active: pathname === "/appointments",
    },
    {
      label: "Communities",
      href: "/communities",
      active: pathname === "/communities",
    },
    {
      label: "Events",
      href: "/events",
      active: pathname === "/events",
    },
    {
      label: "Projects",
      href: "/projects",
      active: pathname === "/projects",
    },
    {
      label: "Settings",
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {!isMobile && (
          <aside className="w-64 border-r bg-background hidden md:block">
            <ScrollArea className="h-full py-6">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
                <div className="space-y-1">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                        route.active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </aside>
        )}
        <div className="flex-1">
          <div className="container py-6 px-5">
            {isMobile && (
              <div className="flex items-center justify-between mb-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 sm:max-w-xs">
                    <ScrollArea className="h-full py-6">
                      <div className="px-3 py-2">
                        <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
                        <div className="space-y-1">
                          {routes.map((route) => (
                            <Link
                              key={route.href}
                              href={route.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                                route.active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                              )}
                            >
                              {route.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
                <h1 className="text-xl font-bold">PeerMentor</h1>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

