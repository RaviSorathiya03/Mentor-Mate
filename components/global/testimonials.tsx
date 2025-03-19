"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Finding a mentor changed my career trajectory. I went from struggling with basic concepts to landing my dream job in just 6 months.",
    name: "Alex Johnson",
    role: "Junior Developer",
    image: "/placeholder.svg?height=100&width=100",
    type: "junior",
  },
  {
    quote:
      "As a senior developer, I've always wanted to give back. This platform made it easy to connect with passionate juniors who are eager to learn.",
    name: "Sarah Williams",
    role: "Senior Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
    type: "senior",
  },
  {
    quote:
      "The project collaboration feature helped me build a real-world portfolio that impressed my interviewers. I got three job offers!",
    name: "Michael Chen",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=100&width=100",
    type: "junior",
  },
  {
    quote:
      "Mentoring has been incredibly rewarding. Seeing my mentees grow and succeed gives me a sense of fulfillment beyond my day job.",
    name: "Emily Rodriguez",
    role: "Tech Lead",
    image: "/placeholder.svg?height=100&width=100",
    type: "senior",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    // Auto-advance the carousel
    timeoutRef.current = setTimeout(nextTestimonial, 5000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members who have transformed their careers through mentorship.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <Card className="border-none shadow-lg bg-gradient-to-br from-card to-background">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                        <Image
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover rounded-full"
                        />
                        <div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                            testimonials[current].type === "junior" ? "bg-blue-500" : "bg-green-500"
                          }`}
                        >
                          <span className="text-white text-xs font-bold">
                            {testimonials[current].type === "junior" ? "J" : "S"}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Quote className="h-10 w-10 text-primary/20 mb-4" />
                        <p className="text-xl md:text-2xl italic mb-6">"{testimonials[current].quote}"</p>
                        <div>
                          <h4 className="text-lg font-semibold">{testimonials[current].name}</h4>
                          <p className="text-muted-foreground">{testimonials[current].role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md pointer-events-auto"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md pointer-events-auto"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

