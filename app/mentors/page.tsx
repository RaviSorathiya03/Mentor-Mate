"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/global/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, Calendar, MessageSquare } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useMobile } from "@/hooks/use-mobile"

export default function MentorsPage() {
  const router = useRouter()
  const isMobile = useMobile()
  const [searchQuery, setSearchQuery] = useState("")

  
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer at Google",
      bio: "Passionate about React, TypeScript, and building accessible web applications. 8+ years of experience in frontend development.",
      skills: ["React", "TypeScript", "Accessibility", "Performance"],
      rating: 4.9,
      sessions: 120,
      availability: "Weekdays evenings, Weekends",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Staff Engineer at Microsoft",
      bio: "Full-stack developer specializing in scalable architectures and system design. Passionate about mentoring junior developers.",
      skills: ["System Design", "Node.js", "React", "AWS"],
      rating: 4.8,
      sessions: 85,
      availability: "Weekends only",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Tech Lead at Netflix",
      bio: "Experienced in building high-performance streaming applications. Expertise in React, Redux, and performance optimization.",
      skills: ["React", "Redux", "Performance", "JavaScript"],
      rating: 4.7,
      sessions: 64,
      availability: "Flexible schedule",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Backend Developer at Amazon",
      bio: "Specialized in building scalable backend systems using Node.js, Python, and AWS. Passionate about system architecture.",
      skills: ["Node.js", "Python", "AWS", "Microservices"],
      rating: 4.9,
      sessions: 92,
      availability: "Weekday evenings",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: false,
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager at Airbnb",
      bio: "Experienced product manager with a background in UX design. Helping mentees navigate product development and career growth.",
      skills: ["Product Strategy", "UX Design", "Agile", "Leadership"],
      rating: 4.8,
      sessions: 78,
      availability: "Weekends, Friday evenings",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Data Scientist at Spotify",
      bio: "Specializing in machine learning and data analysis. Helping mentees break into the field of data science.",
      skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
      rating: 4.6,
      sessions: 45,
      availability: "Tuesday and Thursday evenings",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: false,
    },
  ]

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "AWS",
    "System Design",
    "Product Strategy",
    "UX Design",
    "Machine Learning",
    "Data Analysis",
    "SQL",
    "Leadership",
    "Agile",
    "Microservices",
  ]

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Skills</h3>
        <div className="space-y-2">
          {skills.slice(0, 8).map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox id={`skill-${skill}`} />
              <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                {skill}
              </Label>
            </div>
          ))}
          <Button variant="link" className="p-0 h-auto text-sm">
            Show more
          </Button>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Availability</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="weekdays" />
            <Label htmlFor="weekdays" className="text-sm font-normal">
              Weekdays
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="weekends" />
            <Label htmlFor="weekends" className="text-sm font-normal">
              Weekends
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="evenings" />
            <Label htmlFor="evenings" className="text-sm font-normal">
              Evenings
            </Label>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Experience Level</h3>
        <Select defaultValue="any">
          <SelectTrigger>
            <SelectValue placeholder="Any experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any experience level</SelectItem>
            <SelectItem value="junior">Junior (1-3 years)</SelectItem>
            <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
            <SelectItem value="senior">Senior (5+ years)</SelectItem>
            <SelectItem value="lead">Lead/Principal (8+ years)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Rating</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="rating-4.5" defaultChecked />
            <Label htmlFor="rating-4.5" className="text-sm font-normal">
              4.5+ stars
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="rating-4.0" />
            <Label htmlFor="rating-4.0" className="text-sm font-normal">
              4.0+ stars
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="rating-3.5" />
            <Label htmlFor="rating-3.5" className="text-sm font-normal">
              3.5+ stars
            </Label>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[50]} max={200} step={10} />
          <div className="flex items-center justify-between">
            <span className="text-sm">$0</span>
            <span className="text-sm font-medium">$50/hour</span>
            <span className="text-sm">$200</span>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Verification</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="verified" defaultChecked />
          <Label htmlFor="verified" className="text-sm font-normal">
            Verified mentors only
          </Label>
        </div>
      </div>
      <Button className="w-full mt-4">Apply Filters</Button>
    </div>
  )

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Find Mentors</h1>
          <div className="flex items-center gap-2">
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="sessions">Most Sessions</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader className="mb-4">
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down mentors based on your preferences</SheetDescription>
                  </SheetHeader>
                  <FilterSidebar />
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, skills, or role..."
            className="pl-9 pr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          {!isMobile && (
            <div className="hidden md:block">
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                  <CardDescription>Narrow down mentors based on your preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <FilterSidebar />
                </CardContent>
              </Card>
            </div>
          )}

          <div className="space-y-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium">{mentor.rating}</span>
                          <span className="text-muted-foreground text-sm">({mentor.sessions} sessions)</span>
                        </div>
                        {mentor.verified && (
                          <Badge variant="outline" className="bg-primary/10">
                            Verified Mentor
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-bold">{mentor.name}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      </div>
                      <p className="text-sm">{mentor.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{mentor.availability}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 pt-4">
                        <Button className="sm:flex-1">
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule Session
                        </Button>
                        <Button variant="outline" className="sm:flex-1">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button variant="ghost" className="sm:flex-1">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

