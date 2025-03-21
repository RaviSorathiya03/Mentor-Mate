import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "@/components/global/navbar"
import { ThemeProvider } from "@/components/global/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MentorMatch - Connect Juniors with Seniors",
  description:
    "A platform where juniors can seek guidance, get referrals, and collaborate on projects, while seniors can mentor, share experiences, and help others grow.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}> <Navbar/>{children}</body>
      </html>
      </ThemeProvider>
    </ClerkProvider>
  )
}

