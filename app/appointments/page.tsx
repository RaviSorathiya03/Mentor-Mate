"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/global/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, Video, MessageSquare, Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function AppointmentsPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("calendar")


  const upcomingSessions = [
    {
      id: 1,
      mentor: "Sarah Johnson",
      title: "Frontend Development Career Path",
      date: new Date(2025, 2, 25, 15, 0),
      duration: 60,
      type: "video",
      status: "confirmed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      mentor: "Michael Chen",
      title: "React Performance Optimization",
      date: new Date(2025, 2, 28, 11, 0),
      duration: 45,
      type: "video",
      status: "confirmed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      mentor: "Emily Rodriguez",
      title: "System Design Principles",
      date: new Date(2025, 3, 2, 13, 30),
      duration: 90,
      type: "video",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pastSessions = [
    {
      id: 4,
      mentor: "David Kim",
      title: "Backend Architecture Overview",
      date: new Date(2025, 2, 15, 10, 0),
      duration: 60,
      type: "video",
      status: "completed",
      feedback: 4.5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      mentor: "Lisa Wang",
      title: "Product Management Basics",
      date: new Date(2025, 2, 10, 14, 0),
      duration: 45,
      type: "video",
      status: "completed",
      feedback: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      mentor: "James Wilson",
      title: "Data Science for Beginners",
      date: new Date(2025, 2, 5, 16, 30),
      duration: 60,
      type: "video",
      status: "completed",
      feedback: 4,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM"
  ]

  const calendarEvents = [
    { date: new Date(2025, 2, 25), count: 1 },
    { date: new Date(2025, 2, 28), count: 1 },
    { date: new Date(2025, 3, 2), count: 1 },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <div className="flex items-center gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Schedule New Session
            </Button>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingSessions.length > 0 ? (
              upcomingSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={session.avatar} alt={session.mentor} />
                          <AvatarFallback>{session.mentor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{session.title}</h3>
                          <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 md:ml-auto">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{format(session.date, "MMMM d, yyyy")}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{format(session.date, "h:mm a")} ({session.duration} min)</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Video className="h-3 w-3" />
                          <span>Video Call</span>
                        </Badge>
                        {session.status === "pending" ? (
                          <Badge variant="secondary">Pending Confirmation</Badge>
                        ) : (
                          <Badge variant="default">Confirmed</Badge>
                        )}
                      </div>
                      <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                        <Button size="sm" className="flex-1 md:flex-none">
                          Join Session
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 md:flex-none">
                          Reschedule
                        </Button>
                        <Button size="sm" variant="ghost" className="flex-1 md:flex-none">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No upcoming sessions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You don't have any mentorship sessions scheduled yet.
                  </p>
                  <Button>Schedule a Session</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {pastSessions.length > 0 ? (
              pastSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={session.avatar} alt={session.mentor} />
                          <AvatarFallback>{session.mentor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{session.title}</h3>
                          <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 md:ml-auto">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{format(session.date, "MMMM d, yyyy")}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{format(session.date, "h:mm a")} ({session.duration} min)</span>
                        </Badge>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                        <div className="flex items-center gap-1 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(session.feedback) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          <span className="text-sm font-medium ml-1">{session.feedback}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          View Notes
                        </Button>
                        <Button size="sm" variant="ghost">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No past sessions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You haven't completed any mentorship sessions yet.
                  </p>
                  <Button>Schedule Your First Session</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Session Calendar</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => setDate(new Date())}>
                      <span className="sr-only">Go to today</span>
                      Today
                    </Button>
                    <div className="flex">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-r-none"
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
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-l-none"
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
                  </div>
                </div>
                <CardDescription>
                  View and manage your scheduled mentorship sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-[350px]">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      modifiers={{
                        hasEvent: (date) => 
                          calendarEvents.some(event => 
                            event.date.getDate() === date.getDate() && 
                            event.date.getMonth() === date.getMonth() && 
                            event.date.getFullYear() === date.getFullYear()
                          )
                      }}
                      modifiersStyles={{
                        hasEvent: { 
                          fontWeight: 'bold',
                          backgroundColor: 'hsl(var(--primary) / 0.1)',
                          color: 'hsl(var(--primary))'
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">
                        {date ? format(date, "MMMM d, yyyy") : "Select a date"}
                      </h3>
                      <Select defaultValue="60">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Session Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                          <SelectItem value="90">90 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => {
                        const isBooked = upcomingSessions.some(session => 
                          date && 
                          session.date.getDate() === date.getDate() && 
                          session.date.getMonth() === date.getMonth() && 
                          session.date.getFullYear() === date.getFullYear() && 
                          format(session.date, "h:mm a") === slot
                        );
                        
                        return (
                          <Button
                            key={slot}
                            variant={isBooked ? "secondary" : "outline"}
                            className={cn(
                              "justify-start h-auto py-3",
                              isBooked && "opacity-50 cursor-not-allowed"
                            )}
                            disabled={isBooked}
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {slot}
                            {isBooked && <span className="ml-auto text-xs">Booked</span>}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Schedule Session</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
