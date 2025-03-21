"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/global/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Github,
  ExternalLink,
  Star,
  GitFork,
  Eye,
  MessageSquare,
  ThumbsUp,
  Code,
  Users,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ProjectsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("my-projects")

  const myProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      progress: 75,
      collaborators: [
        { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Michael Chen", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-platform-demo.vercel.app",
      stars: 24,
      forks: 8,
      watchers: 15,
      isPublic: true,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      progress: 90,
      collaborators: [{ name: "Emily Rodriguez", avatar: "/placeholder.svg?height=40&width=40" }],
      github: "https://github.com/username/task-management",
      demo: "https://task-management-demo.vercel.app",
      stars: 18,
      forks: 5,
      watchers: 12,
      isPublic: true,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "Personal Portfolio",
      description: "My personal portfolio website showcasing projects and skills.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      progress: 100,
      collaborators: [],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.vercel.app",
      stars: 5,
      forks: 2,
      watchers: 3,
      isPublic: true,
      lastUpdated: "3 weeks ago",
    },
  ]

  const collaborationProjects = [
    {
      id: 4,
      name: "AI Chatbot",
      description: "An AI-powered chatbot for customer support using natural language processing.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      progress: 60,
      owner: { name: "David Kim", avatar: "/placeholder.svg?height=40&width=40" },
      collaborators: [
        { name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Lisa Wang", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      github: "https://github.com/davidkim/ai-chatbot",
      stars: 42,
      forks: 15,
      watchers: 28,
      isPublic: true,
      lastUpdated: "5 days ago",
    },
    {
      id: 5,
      name: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts.",
      technologies: ["D3.js", "React", "Node.js", "Express"],
      progress: 80,
      owner: { name: "Emily Rodriguez", avatar: "/placeholder.svg?height=40&width=40" },
      collaborators: [{ name: "James Wilson", avatar: "/placeholder.svg?height=40&width=40" }],
      github: "https://github.com/emilyrodriguez/data-viz-dashboard",
      stars: 36,
      forks: 12,
      watchers: 20,
      isPublic: true,
      lastUpdated: "1 day ago",
    },
  ]

  const discoverProjects = [
    {
      id: 6,
      name: "Open Source CMS",
      description: "A modern, lightweight content management system built for developers.",
      technologies: ["TypeScript", "Node.js", "GraphQL", "React"],
      owner: { name: "Michael Chen", avatar: "/placeholder.svg?height=40&width=40" },
      collaborators: [
        { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "David Kim", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Lisa Wang", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      github: "https://github.com/michaelchen/open-cms",
      stars: 156,
      forks: 48,
      watchers: 92,
      isPublic: true,
      lastUpdated: "3 days ago",
      lookingForContributors: true,
    },
    {
      id: 7,
      name: "Accessibility Toolkit",
      description: "A collection of tools and components for building accessible web applications.",
      technologies: ["JavaScript", "React", "ARIA", "HTML"],
      owner: { name: "Lisa Wang", avatar: "/placeholder.svg?height=40&width=40" },
      collaborators: [{ name: "Emily Rodriguez", avatar: "/placeholder.svg?height=40&width=40" }],
      github: "https://github.com/lisawang/a11y-toolkit",
      stars: 89,
      forks: 23,
      watchers: 45,
      isPublic: true,
      lastUpdated: "1 week ago",
      lookingForContributors: true,
    },
    {
      id: 8,
      name: "Serverless Framework",
      description: "A framework for building and deploying serverless applications with ease.",
      technologies: ["TypeScript", "AWS Lambda", "Azure Functions", "Google Cloud Functions"],
      owner: { name: "James Wilson", avatar: "/placeholder.svg?height=40&width=40" },
      collaborators: [
        { name: "David Kim", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Michael Chen", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      github: "https://github.com/jameswilson/serverless-framework",
      stars: 210,
      forks: 67,
      watchers: 124,
      isPublic: true,
      lastUpdated: "2 days ago",
      lookingForContributors: false,
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <div className="flex items-center gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9 pr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="my-projects" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
            <TabsTrigger value="discover">Discover</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="space-y-6">
            {myProjects.length > 0 ? (
              myProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle>{project.name}</CardTitle>
                          {project.isPublic ? (
                            <Badge variant="outline" className="text-xs">
                              Public
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              Private
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="mt-1">{project.description}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {project.collaborators.map((collaborator, index) => (
                            <Avatar key={index} className="h-8 w-8 border-2 border-background">
                              <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                              <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Add collaborator</span>
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="mr-1 h-4 w-4" />
                            {project.stars}
                          </div>
                          <div className="flex items-center">
                            <GitFork className="mr-1 h-4 w-4" />
                            {project.forks}
                          </div>
                          <div className="flex items-center">
                            <Eye className="mr-1 h-4 w-4" />
                            {project.watchers}
                          </div>
                          <span>Updated {project.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t">
                    <div className="flex w-full justify-between">
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Discussions
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Github className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No projects yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You haven't created any projects yet. Start by creating your first project.
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Project
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="collaborations" className="space-y-6">
            {collaborationProjects.length > 0 ? (
              collaborationProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle>{project.name}</CardTitle>
                          {project.isPublic ? (
                            <Badge variant="outline" className="text-xs">
                              Public
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              Private
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="mt-1">{project.description}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8 border-2 border-background">
                            <AvatarImage src={project.owner.avatar} alt={project.owner.name} />
                            <AvatarFallback>{project.owner.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <span className="font-medium">{project.owner.name}</span>
                            <span className="text-muted-foreground ml-1">(Owner)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="mr-1 h-4 w-4" />
                            {project.stars}
                          </div>
                          <div className="flex items-center">
                            <GitFork className="mr-1 h-4 w-4" />
                            {project.forks}
                          </div>
                          <div className="flex items-center">
                            <Eye className="mr-1 h-4 w-4" />
                            {project.watchers}
                          </div>
                          <span>Updated {project.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t">
                    <div className="flex w-full justify-between">
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Discussions
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No collaborations yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You're not collaborating on any projects yet. Discover projects to contribute to.
                  </p>
                  <Button onClick={() => setActiveTab("discover")}>Discover Projects</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="discover" className="space-y-6">
            {discoverProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>{project.name}</CardTitle>
                        {project.lookingForContributors && (
                          <Badge variant="default" className="text-xs">
                            Looking for Contributors
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="mt-1">{project.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm">
                        <GitFork className="mr-2 h-4 w-4" />
                        Fork
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border-2 border-background">
                          <AvatarImage src={project.owner.avatar} alt={project.owner.name} />
                          <AvatarFallback>{project.owner.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <span className="font-medium">{project.owner.name}</span>
                          <span className="text-muted-foreground ml-1">(Owner)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center">
                          <GitFork className="mr-1 h-4 w-4" />
                          {project.forks}
                        </div>
                        <div className="flex items-center">
                          <Eye className="mr-1 h-4 w-4" />
                          {project.watchers}
                        </div>
                        <span>Updated {project.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-3 border-t">
                  <div className="flex w-full justify-between">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      Star
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

