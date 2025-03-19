"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useClerk, SignInButton, UserButton } from "@clerk/nextjs"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { user } = useClerk()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
      } transition-all duration-200`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="h-8 w-8 rounded-full bg-primary flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold">M</span>
              </motion.div>
              <span className="font-bold text-xl">MentorMatch</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <SignInButton mode="modal">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              {!user ? (
                <SignInButton mode="modal">
                  <Button variant="default" size="sm" className="w-full">
                    Sign In
                  </Button>
                </SignInButton>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Your Account</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

