"use client"

import DashboardLayout from "@/components/global/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PlusCircle, Pencil, Github, Linkedin, Twitter, FileText, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

export default function ProfilePage() {
  const user = useUser();
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GraphQL",
    "UI/UX Design",
    "System Design",
    "API Development",
    "Testing",
    "CI/CD",
  ]

  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading the frontend development team, implementing new features, and optimizing performance.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed responsive web applications using React and TypeScript.",
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2012 - 2016",
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      file: "aws-certification.pdf",
    },
    {
      id: 2,
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
      file: "psm-certification.pdf",
    },
  ]

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce-platform",
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-management",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            <Button size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Become a Mentor
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <Card className="col-span-full md:col-span-2">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt={""} />
                    <AvatarFallback className="text-4xl">{user?.user?.firstName!.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Change avatar</span>
                  </Button>
                </div>
                <h2 className="text-2xl font-bold">{user?.user?.firstName}{" "}{user?.user?.lastName}</h2>
                <p className="text-muted-foreground mb-4">Senior Frontend Developer</p>
                <div className="flex justify-center gap-2 mb-6">
                  <Button size="icon" variant="outline">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
                <Separator className="my-4" />
                <div className="w-full text-left">
                  <h3 className="font-medium mb-2">About</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Passionate frontend developer with 5+ years of experience building modern web applications.
                    Specializing in React, TypeScript, and Next.js.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Mentor</Badge>
                      <Badge variant="outline">Mentee</Badge>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span> San Francisco, CA
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Member since:</span> January 2023
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="col-span-full md:col-span-5">
            <Tabs defaultValue="skills">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Skills & Expertise</CardTitle>
                      <CardDescription>Showcase your technical and professional skills</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Skill
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="experience" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Work Experience</CardTitle>
                      <CardDescription>Your professional journey and roles</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Experience
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {experiences.map((exp) => (
                        <div key={exp.id} className="flex gap-4">
                          <div className="mt-1 flex-shrink-0">
                            <Briefcase className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{exp.role}</h3>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {exp.company} • {exp.period}
                            </p>
                            <p className="text-sm">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Your academic background and qualifications</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Education
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {education.map((edu) => (
                        <div key={edu.id} className="flex gap-4">
                          <div className="mt-1 flex-shrink-0">
                            <GraduationCap className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{edu.degree}</h3>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {edu.institution} • {edu.period}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="certifications" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Certifications</CardTitle>
                      <CardDescription>Professional certifications and achievements</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Certification
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {certifications.map((cert) => (
                        <div key={cert.id} className="flex gap-4">
                          <div className="mt-1 flex-shrink-0">
                            <Award className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{cert.name}</h3>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {cert.issuer} • {cert.date}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{cert.file}</span>
                              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="projects" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Projects</CardTitle>
                      <CardDescription>Showcase your work and contributions</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Project
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                          <CardHeader className="p-4">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{project.name}</CardTitle>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link href={project.github} target="_blank">
                                <Github className="mr-2 h-4 w-4" />
                                View on GitHub
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

