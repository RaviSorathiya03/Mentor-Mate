"use client"

import { useState } from "react"
import DashboardLayout from "@/components/global/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Search, Send, Phone, Video, MoreHorizontal, PaperclipIcon, SmileIcon, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(1)
  const [message, setMessage] = useState("")

  const contacts = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      lastMessage: "That sounds great! Let's schedule a session for next week.",
      time: "10:30 AM",
      unread: 2,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Staff Engineer",
      lastMessage: "I reviewed your code. There are a few improvements we can discuss.",
      time: "Yesterday",
      unread: 0,
      online: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Tech Lead",
      lastMessage: "Here's the article on system design I mentioned.",
      time: "Yesterday",
      unread: 0,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Backend Developer",
      lastMessage: "Let me know if you have any questions about the backend architecture.",
      time: "Monday",
      unread: 0,
      online: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 1,
      text: "Hi there! How's your progress with the React project?",
      time: "10:00 AM",
    },
    {
      id: 2,
      senderId: "me",
      text: "It's going well! I've implemented the authentication flow, but I'm having some issues with state management.",
      time: "10:05 AM",
    },
    {
      id: 3,
      senderId: 1,
      text: "State management can be tricky. Are you using Redux or Context API?",
      time: "10:10 AM",
    },
    {
      id: 4,
      senderId: "me",
      text: "I'm using Context API with useReducer, but I'm not sure if I'm structuring it correctly.",
      time: "10:15 AM",
    },
    {
      id: 5,
      senderId: 1,
      text: "That's a good approach. Can you share your code so I can take a look?",
      time: "10:20 AM",
    },
    {
      id: 6,
      senderId: "me",
      text: "Sure, I'll send it over shortly. Thanks for your help!",
      time: "10:25 AM",
    },
    {
      id: 7,
      senderId: 1,
      text: "That sounds great! Let's schedule a session for next week to go through it together.",
      time: "10:30 AM",
    },
  ]

  const activeContact = contacts.find((contact) => contact.id === activeChat)

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would send the message to the server
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        </div>

        <div className="grid h-full gap-6 md:grid-cols-[320px_1fr]">
          <Card className="flex flex-col h-full">
            <CardHeader className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search conversations..." className="pl-8 pr-4" />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-[calc(100vh-16rem)]">
                <div className="px-4 py-2">
                  {contacts.map((contact) => (
                    <div key={contact.id}>
                      <button
                        className={cn(
                          "flex items-center gap-4 w-full p-3 rounded-lg text-left transition-colors",
                          activeChat === contact.id ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
                        )}
                        onClick={() => setActiveChat(contact.id)}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={contact.avatar} alt={contact.name} />
                            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {contact.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                          )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{contact.name}</p>
                            <p className="text-xs text-muted-foreground">{contact.time}</p>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread > 0 && <Badge className="ml-auto">{contact.unread}</Badge>}
                      </button>
                      <Separator className="my-1" />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            {activeContact ? (
              <>
                <CardHeader className="px-6 py-4 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                        <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {activeContact.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-semibold">{activeContact.name}</h2>
                      <p className="text-sm text-muted-foreground">{activeContact.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-5 w-5" />
                      <span className="sr-only">Call</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-5 w-5" />
                      <span className="sr-only">Video call</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[calc(100vh-24rem)]">
                    <div className="flex flex-col gap-4 p-6">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={cn("flex gap-3 max-w-[80%]", msg.senderId === "me" ? "ml-auto" : "")}
                        >
                          {msg.senderId !== "me" && (
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                              <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div
                              className={cn(
                                "rounded-lg px-4 py-2 text-sm",
                                msg.senderId === "me" ? "bg-primary text-primary-foreground" : "bg-muted",
                              )}
                            >
                              {msg.text}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <Separator />
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <PaperclipIcon className="h-5 w-5" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage()
                        }
                      }}
                      className="flex-1"
                    />
                    <Button variant="ghost" size="icon">
                      <SmileIcon className="h-5 w-5" />
                      <span className="sr-only">Add emoji</span>
                    </Button>
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-5 w-5" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="rounded-full bg-muted p-6 mb-4">
                  <MessageSquare className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Select a conversation or start a new one to begin messaging with mentors and peers.
                </p>
                <Button>Start a New Conversation</Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

