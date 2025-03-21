"use client"

import { useState } from "react"
import DashboardLayout from "@/components/global/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format, isSameDay, parseISO } from "date-fns"
import {
  Search,
  Calendar,
  Clock,
  Users,
  Video,
  MapPin,
  ExternalLink,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {

  const [searchQuery, setSearchQuery] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [categoryFilter, setCategoryFilter] = useState("all")

 

  const events = [
    {
      id: 1,
      title: "Frontend Development Best Practices",
      description:
        "Learn about the latest best practices in frontend development, including performance optimization, accessibility, and modern frameworks.",
      date: "2025-03-25T15:00:00Z",
      duration: 90,
      host: "Sarah Johnson",
      hostRole: "Senior Frontend Developer at Google",
      attendees: 156,
      category: "Development",
      type: "webinar",
      location: "Online",
      registered: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "System Design Workshop",
      description:
        "A hands-on workshop on designing scalable systems, covering architecture patterns, database design, and performance considerations.",
      date: "2025-03-28T11:00:00Z",
      duration: 120,
      host: "Michael Chen",
      hostRole: "Staff Engineer at Microsoft",
      attendees: 98,
      category: "Development",
      type: "workshop",
      location: "Online",
      registered: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "Product Management Fundamentals",
      description:
        "An introduction to product management, covering user research, roadmap planning, and working with development teams.",
      date: "2025-04-02T13:30:00Z",
      duration: 60,
      host: "Lisa Wang",
      hostRole: "Product Manager at Airbnb",
      attendees: 112,
      category: "Product",
      type: "webinar",
      location: "Online",
      registered: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      title: "Data Science for Beginners",
      description:
        "Learn the basics of data science, including data analysis, visualization, and an introduction to machine learning.",
      date: "2025-04-05T10:00:00Z",
      duration: 90,
      host: "James Wilson",
      hostRole: "Data Scientist at Spotify",
      attendees: 87,
      category: "Data Science",
      type: "workshop",
      location: "Online",
      registered: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      title: "UX Design Principles",
      description:
        "Explore the fundamental principles of user experience design, including user research, wireframing, and prototyping.",
      date: "2025-04-10T14:00:00Z",
      duration: 75,
      host: "Emily Rodriguez",
      hostRole: "UX Designer at Netflix",
      attendees: 124,
      category: "Design",
      type: "webinar",
      location: "Online",
      registered: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      title: "Career Growth in Tech",
      description:
        "A panel discussion on career growth in the tech industry, featuring leaders from various companies sharing their experiences and advice.",
      date: "2025-04-15T16:30:00Z",
      duration: 90,
      host: "David Kim",
      hostRole: "Engineering Manager at Amazon",
      attendees: 203,
      category: "Career",
      type: "panel",
      location: "Online",
      registered: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Introduction to React Hooks",
      description: "Learn how to use React Hooks to build more maintainable and concise React components.",
      date: "2025-03-15T14:00:00Z",
      duration: 60,
      host: "Sarah Johnson",
      hostRole: "Senior Frontend Developer at Google",
      attendees: 178,
      category: "Development",
      type: "webinar",
      location: "Online",
      recording: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      title: "Microservices Architecture",
      description:
        "An overview of microservices architecture, including benefits, challenges, and implementation strategies.",
      date: "2025-03-10T11:30:00Z",
      duration: 90,
      host: "Michael Chen",
      hostRole: "Staff Engineer at Microsoft",
      attendees: 145,
      category: "Development",
      type: "webinar",
      location: "Online",
      recording: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      title: "Agile Project Management",
      description: "Learn about Agile methodologies and how to apply them to your projects for better outcomes.",
      date: "2025-03-05T15:30:00Z",
      duration: 75,
      host: "Lisa Wang",
      hostRole: "Product Manager at Airbnb",
      attendees: 132,
      category: "Product",
      type: "workshop",
      location: "Online",
      recording: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const myEvents = events.filter((event) => event.registered)
  const filteredEvents =
    categoryFilter === "all"
      ? events
      : events.filter((event) => event.category.toLowerCase() === categoryFilter.toLowerCase())

  const categories = ["Development", "Product", "Data Science", "Design", "Career"]
  const eventTypes = ["webinar", "workshop", "panel"]

  const calendarEvents = events.map((event) => ({
    date: parseISO(event.date),
    title: event.title,
    id: event.id,
  }))

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Events & Webinars</h1>
          <div className="flex items-center gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Host an Event
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-9 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="my-events">My Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid gap-6 md:grid-cols-[350px_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Event Calendar</CardTitle>
                  <CardDescription>View upcoming events by date</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (date) {
                          const newDate = new Date(date)
                          newDate.setMonth(newDate.getMonth() - 1)
                          setDate(newDate)
                        }
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous month</span>
                    </Button>
                    <h3 className="font-medium">{date ? format(date, "MMMM yyyy") : ""}</h3>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (date) {
                          const newDate = new Date(date)
                          newDate.setMonth(newDate.getMonth() + 1)
                          setDate(newDate)
                        }
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next month</span>
                    </Button>
                  </div>
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    modifiers={{
                      hasEvent: (date) => calendarEvents.some((event) => isSameDay(event.date, date)),
                    }}
                    modifiersStyles={{
                      hasEvent: {
                        fontWeight: "bold",
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        color: "hsl(var(--primary))",
                      },
                    }}
                  />
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">
                      Events on {date ? format(date, "MMMM d, yyyy") : "selected date"}
                    </h4>
                    {calendarEvents
                      .filter((event) => date && isSameDay(event.date, date))
                      .map((event) => {
                        const fullEvent = events.find((e) => e.id === event.id)
                        return (
                          <Card key={event.id} className="p-2">
                            <div className="text-sm font-medium">{event.title}</div>
                            <div className="text-xs text-muted-foreground">
                              {format(event.date, "h:mm a")} • {fullEvent?.duration} min
                            </div>
                          </Card>
                        )
                      })}
                    {date && calendarEvents.filter((event) => isSameDay(event.date, date)).length === 0 && (
                      <p className="text-sm text-muted-foreground">No events scheduled for this date.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex flex-col md:flex-row items-start gap-4 flex-1">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-center">
                                <span className="text-lg font-bold text-primary">
                                  {format(parseISO(event.date), "d")}
                                </span>
                                <span className="text-xs text-primary">{format(parseISO(event.date), "MMM")}</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap gap-2 mb-2">
                                <Badge variant="secondary">{event.category}</Badge>
                                <Badge variant="outline" className="capitalize">
                                  {event.type}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                              <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span>{format(parseISO(event.date), "MMMM d, yyyy")}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span>
                                    {format(parseISO(event.date), "h:mm a")} ({event.duration} min)
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span>{event.attendees} attendees</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={event.avatar} alt={event.host} />
                                <AvatarFallback>{event.host.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{event.host}</p>
                                <p className="text-xs text-muted-foreground">{event.hostRole}</p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              {event.registered ? (
                                <>
                                  <Button>
                                    <Video className="mr-2 h-4 w-4" />
                                    Join Event
                                  </Button>
                                  <Button variant="outline">Add to Calendar</Button>
                                </>
                              ) : (
                                <>
                                  <Button>Register Now</Button>
                                  <Button variant="outline">Learn More</Button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                      <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No events found</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        There are no upcoming events matching your filters.
                      </p>
                      <Button onClick={() => setCategoryFilter("all")}>Clear Filters</Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="my-events">
            <div className="space-y-6">
              {myEvents.length > 0 ? (
                myEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col md:flex-row items-start gap-4 flex-1">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-center">
                              <span className="text-lg font-bold text-primary">
                                {format(parseISO(event.date), "d")}
                              </span>
                              <span className="text-xs text-primary">{format(parseISO(event.date), "MMM")}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="secondary">{event.category}</Badge>
                              <Badge variant="outline" className="capitalize">
                                {event.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{format(parseISO(event.date), "MMMM d, yyyy")}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>
                                  {format(parseISO(event.date), "h:mm a")} ({event.duration} min)
                                </span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{event.attendees} attendees</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={event.avatar} alt={event.host} />
                              <AvatarFallback>{event.host.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{event.host}</p>
                              <p className="text-xs text-muted-foreground">{event.hostRole}</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button>
                              <Video className="mr-2 h-4 w-4" />
                              Join Event
                            </Button>
                            <Button variant="outline">Add to Calendar</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No registered events</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You haven&apos;t registered for any upcoming events yet.
                    </p>
                    <Button>Browse Events</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col md:flex-row items-start gap-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg bg-muted flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold">{format(parseISO(event.date), "d")}</span>
                            <span className="text-xs text-muted-foreground">{format(parseISO(event.date), "MMM")}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary">{event.category}</Badge>
                            <Badge variant="outline" className="capitalize">
                              {event.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>{format(parseISO(event.date), "MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>
                                {format(parseISO(event.date), "h:mm a")} ({event.duration} min)
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>{event.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={event.avatar} alt={event.host} />
                            <AvatarFallback>{event.host.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{event.host}</p>
                            <p className="text-xs text-muted-foreground">{event.hostRole}</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          {event.recording ? (
                            <Button>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Watch Recording
                            </Button>
                          ) : (
                            <Button variant="outline" disabled>
                              No Recording Available
                            </Button>
                          )}
                          <Button variant="ghost">View Event Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

