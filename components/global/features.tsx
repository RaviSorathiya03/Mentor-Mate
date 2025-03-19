"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Code, Award, MessageSquare } from "lucide-react"

const features = [
  {
    title: "Find a Mentor",
    description: "Connect with experienced professionals who can guide you through your career journey.",
    icon: Users,
    color: "bg-blue-500/10",
    textColor: "text-blue-500",
  },
  {
    title: "Collaborate on Projects",
    description: "Work together on real-world projects to build your portfolio and gain practical experience.",
    icon: Code,
    color: "bg-purple-500/10",
    textColor: "text-purple-500",
  },
  {
    title: "Get Referrals",
    description: "Receive job referrals from seniors who can vouch for your skills and work ethic.",
    icon: Award,
    color: "bg-green-500/10",
    textColor: "text-green-500",
  },
  {
    title: "Community Support",
    description: "Join discussions and learn from a community of experienced professionals and enthusiastic learners.",
    icon: MessageSquare,
    color: "bg-orange-500/10",
    textColor: "text-orange-500",
  },
]

export default function Features() {
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Platform Features
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to connect, learn, and grow in your professional journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

