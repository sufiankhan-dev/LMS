"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Star,
  Clock,
  BarChart,
  Book,
  User,
  Settings,
  Mic,
  Gift,
  Trophy,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function EnhancedLuxuryCourseView() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [vrMode, setVrMode] = useState(false);
  const [voiceControlActive, setVoiceControlActive] = useState(false);
  const [collaborationMode, setCollaborationMode] = useState(false);
  const [userXp, setUserXp] = useState(0);
  const [userLevel, setUserLevel] = useState(1);

  const course = {
    title: "Advanced 3D Modeling and Animation Mastery",
    instructor: "Maria Whittle",
    rating: 4.9,
    students: 15420,
    lastUpdated: "April 2024",
    description:
      "Dive into the world of 3D modeling and animation with this cutting-edge course. Learn advanced techniques, work on real-world projects, and collaborate with peers in our immersive learning environment.",
    progress: 35,
  };

  const lessons = [
    {
      id: 1,
      title: "Introduction to Advanced 3D Modeling",
      duration: "1.5 hours",
      xp: 100,
    },
    {
      id: 2,
      title: "Complex Surface Modeling Techniques",
      duration: "2 hours",
      xp: 150,
    },
    {
      id: 3,
      title: "Advanced Character Rigging",
      duration: "2.5 hours",
      xp: 200,
    },
    {
      id: 4,
      title: "Photorealistic Rendering Masterclass",
      duration: "3 hours",
      xp: 250,
    },
    {
      id: 5,
      title: "Animation Principles in 3D",
      duration: "2.5 hours",
      xp: 200,
    },
  ];

  const aiRecommendations = [
    { id: 1, title: "Sculpting Techniques in ZBrush", match: 95 },
    { id: 2, title: "Advanced Texturing in Substance Painter", match: 88 },
    { id: 3, title: "Procedural Modeling in Houdini", match: 82 },
  ];

  useEffect(() => {
    // Simulate XP gain and level up
    const interval = setInterval(() => {
      setUserXp((prevXp) => {
        const newXp = prevXp + 10;
        if (newXp >= 1000) {
          setUserLevel((prevLevel) => prevLevel + 1);
          return 0;
        }
        return newXp;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleVoiceControl = () => {
    setVoiceControlActive(true);
    // Simulated voice recognition
    setTimeout(() => {
      setVoiceControlActive(false);
      // Simulate a voice command
      setCurrentLesson((prev) => (prev + 1) % lessons.length);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Advanced Course View</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={handleVoiceControl}>
              <Mic
                className={`h-6 w-6 ${voiceControlActive ? "text-primary" : ""}`}
              />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6" />
            </Button>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player / 3D Model Viewer */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                {vrMode ? (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    VR Mode Active
                  </div>
                ) : (
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=480&width=640"
                      alt="Course thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <Button
                      className="absolute inset-0 m-auto h-16 w-16 rounded-full"
                      size="icon"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setVrMode(!vrMode)}
                  >
                    {vrMode ? "Exit VR" : "Enter VR"}
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Play className="h-4 w-4 mr-2" /> Play Animation
                  </Button>
                </div>
              </div>
            </Card>

            {/* Course Info */}
            <div>
              <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>Instructor: {course.instructor}</span>
                <span>•</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {course.rating} ({course.students.toLocaleString()} students)
                </div>
                <span>•</span>
                <span>Last updated {course.lastUpdated}</span>
              </div>
              <p className="text-gray-700">{course.description}</p>
            </div>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>
                  {lessons.length} lessons •{" "}
                  {lessons.reduce(
                    (acc, lesson) => acc + parseFloat(lesson.duration),
                    0
                  )}{" "}
                  hours total
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between py-2 border-b last:border-b-0"
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${index === currentLesson ? "bg-primary text-primary-foreground" : "bg-gray-200"}`}
                        >
                          {index + 1}
                        </div>
                        <span>{lesson.title}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {lesson.duration}
                        </span>
                        <Badge variant="secondary">+{lesson.xp} XP</Badge>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Collaboration Space */}
            <Card>
              <CardHeader>
                <CardTitle>Collaboration Space</CardTitle>
                <CardDescription>
                  Work together in real-time with your peers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span>Enable Collaboration Mode</span>
                  <Switch
                    checked={collaborationMode}
                    onCheckedChange={setCollaborationMode}
                  />
                </div>
                {collaborationMode && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Collaboration mode is active. You can now see and interact
                      with other students in real-time.
                    </p>
                    <Button>Start Collaborative Session</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Adaptive Quiz */}
            <Card>
              <CardHeader>
                <CardTitle>Adaptive Quiz</CardTitle>
                <CardDescription>
                  Test your knowledge with AI-powered questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Quiz</Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress and Gamification */}
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="w-full mb-2" />
                <p className="text-center mb-4">{course.progress}% Complete</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">Level {userLevel}</p>
                    <Progress value={(userXp / 1000) * 100} className="w-24" />
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-semibold">{userXp} XP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Learning Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Based on your progress and learning style, we recommend:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Complete "Advanced Character Rigging"</li>
                  <li>Take the "3D Texturing Fundamentals" workshop</li>
                  <li>Practice with the "Weekly 3D Modeling Challenge"</li>
                </ol>
              </CardContent>
            </Card>

            {/* AI Course Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiRecommendations.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between"
                    >
                      <span>{course.title}</span>
                      <Badge variant="secondary">{course.match}% Match</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span>Online Learners</span>
                  <Badge variant="secondary">1,234</Badge>
                </div>
                <Button className="w-full mb-2">Join Discussion Forum</Button>
                <Button variant="outline" className="w-full">
                  Find Study Buddy
                </Button>
              </CardContent>
            </Card>

            {/* AI Chatbot */}
            <Card>
              <CardHeader>
                <CardTitle>AI Learning Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40&text=AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">EduBot</p>
                    <p className="text-sm text-gray-500">
                      Always here to help!
                    </p>
                  </div>
                </div>
                <Button className="w-full" onClick={() => setAiChatOpen(true)}>
                  <Bot className="mr-2 h-4 w-4" /> Ask EduBot
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* AI Chatbot Modal */}
      {aiChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Chat with EduBot</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] mb-4">
                {/* Chat messages would go here  */}
                <div className="p-2 bg-gray-100 rounded mb-2">
                  <p className="font-semibold">EduBot</p>
                  <p>
                    Hello! How can I assist you with your 3D modeling course
                    today?
                  </p>
                </div>
              </ScrollArea>
              <div className="flex space-x-2">
                <Input placeholder="Type your message..." />
                <Button>Send</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" onClick={() => setAiChatOpen(false)}>
                Close
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
