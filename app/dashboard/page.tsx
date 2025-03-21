"use client"

import DashboardLayout from "@/components/global/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Users, BookOpen, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  



  const upcomingSessions = [
    {
      id: 1,
      mentor: "Sarah Johnson",
      title: "Frontend Development Career Path",
      date: "Tomorrow, 3:00 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      mentor: "Michael Chen",
      title: "React Performance Optimization",
      date: "Friday, 11:00 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recommendedMentors = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Senior Software Engineer at Google",
      skills: ["React", "Node.js", "System Design"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Emily Wong",
      role: "Product Manager at Microsoft",
      skills: ["Product Strategy", "UX Design", "Agile"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Data Scientist at Amazon",
      skills: ["Python", "Machine Learning", "Data Visualization"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "comment",
      user: "James Wilson",
      content: "Commented on your post about React hooks",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      type: "follow",
      user: "Lisa Chen",
      content: "Started following you",
      time: "Yesterday",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      type: "post",
      user: "Robert Johnson",
      content: "Shared a new article: 'Modern JavaScript Patterns'",
      time: "2 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href="/mentors">Find Mentors</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/communities">Join Communities</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mentorship Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Communities Joined</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">3 new since yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">+8 from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-full lg:col-span-4">
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions for the week</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center gap-4 p-3 rounded-lg border">
                      <Avatar>
                        <AvatarImage src={session.avatar} alt={session.mentor} />
                        <AvatarFallback>{session.mentor.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{session.title}</p>
                        <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{session.date}</span>
                        </Badge>
                        <Button size="sm" variant="outline">
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/appointments">View All Sessions</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No upcoming sessions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You don&apos;t have any mentorship sessions scheduled yet.
                  </p>
                  <Button asChild>
                    <Link href="/mentors">Find a Mentor</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="col-span-full lg:col-span-3">
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>Recent activities in your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={activity.avatar} alt={activity.user} />
                      <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.content}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-sm" asChild>
                  <Link href="/activities">View All Activities</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Mentors</CardTitle>
            <CardDescription>Based on your skills and interests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendedMentors.map((mentor) => (
                <div key={mentor.id} className="flex flex-col p-4 rounded-lg border">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{mentor.name}</p>
                      <p className="text-sm text-muted-foreground">{mentor.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 flex gap-2">
                    <Button size="sm" className="flex-1">
                      Connect
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

