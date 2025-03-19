"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import Image from "next/image"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/10"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Connect. Learn. Grow.
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Bridge the Gap Between <span className="text-primary">Juniors & Seniors</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              A platform where juniors can seek guidance, get referrals, and collaborate on projects, while seniors can
              mentor, share experiences, and help others grow.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <SignInButton mode="modal">
                <Button size="lg" className="font-medium">
                  Join Now
                </Button>
              </SignInButton>
              <Button size="lg" variant="outline" className="font-medium">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/hero.jpg"
                alt="Mentorship Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

