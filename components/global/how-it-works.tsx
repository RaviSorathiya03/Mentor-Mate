"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Lightbulb, Briefcase } from "lucide-react"

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up and create your profile specifying your skills, experience, and what you're looking for.",
    icon: Users,
  },
  {
    title: "Connect & Collaborate",
    description: "Find the perfect mentor or mentee based on skills, industry, and goals.",
    icon: Lightbulb,
  },
  {
    title: "Grow Together",
    description: "Work on projects, get guidance, and advance your career with personalized support.",
    icon: Briefcase,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to connect, learn, and grow together through a simple process.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl flex items-center">
                    <span className="mr-2 flex h-8 w-8 rounded-full bg-primary text-primary-foreground items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex items-center text-primary font-medium cursor-pointer group" whileHover={{ x: 5 }}>
            Learn more about our process
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

