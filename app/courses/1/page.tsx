"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Bell,
  FileText,
  MessageSquare,
  BarChart2,
  FolderOpen,
  Video,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Download,
  ChevronRight,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function ModernLuxuryCourseView() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("syllabus");
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const course = {
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. John Doe",
    term: "Fall 2024",
    credits: 3,
    progress: 35,
    nextDeadline: "2024-09-15",
    description:
      "This course provides a comprehensive introduction to computer science, covering fundamental concepts, programming basics, and problem-solving techniques.",
  };

  const announcements = [
    {
      id: 1,
      date: "2024-08-25",
      title: "Welcome to CS101",
      content:
        "Welcome to Introduction to Computer Science! Please review the syllabus and course schedule.",
    },
    {
      id: 2,
      date: "2024-09-01",
      title: "Assignment 1 Posted",
      content:
        "The first programming assignment has been posted. Due date: September 15, 2024.",
    },
    {
      id: 3,
      date: "2024-09-10",
      title: "Office Hours Change",
      content:
        "Office hours this week will be held on Thursday from 2-4 PM instead of the usual time.",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Programming Assignment 1",
      dueDate: "2024-09-15",
      status: "In Progress",
    },
    { id: 2, title: "Quiz 1", dueDate: "2024-09-22", status: "Not Started" },
    {
      id: 3,
      title: "Programming Assignment 2",
      dueDate: "2024-10-06",
      status: "Not Started",
    },
    {
      id: 4,
      title: "Midterm Exam",
      dueDate: "2024-10-20",
      status: "Not Started",
    },
  ];

  const discussions = [
    { id: 1, title: "Introduce Yourself", replies: 25, lastPost: "2024-08-28" },
    {
      id: 2,
      title: "Assignment 1 Questions",
      replies: 12,
      lastPost: "2024-09-05",
    },
    {
      id: 3,
      title: "Study Group for Quiz 1",
      replies: 8,
      lastPost: "2024-09-18",
    },
  ];

  const grades = [
    {
      id: 1,
      item: "Programming Assignment 1",
      score: 90,
      outOf: 100,
      weight: "10%",
    },
    { id: 2, item: "Quiz 1", score: 85, outOf: 100, weight: "15%" },
    { id: 3, item: "Class Participation", score: 45, outOf: 50, weight: "5%" },
  ];

  const resources = [
    { id: 1, title: "Course Textbook", type: "PDF", size: "25 MB" },
    { id: 2, title: "Week 1 Lecture Slides", type: "PPT", size: "5 MB" },
    { id: 3, title: "Python Installation Guide", type: "PDF", size: "2 MB" },
  ];

  const videoTutorials = [
    {
      id: 1,
      title: "Introduction to Programming Concepts",
      duration: "15:30",
      url: "https://example.com/video1.mp4",
    },
    {
      id: 2,
      title: "Variables and Data Types in Python",
      duration: "12:45",
      url: "https://example.com/video2.mp4",
    },
    {
      id: 3,
      title: "Control Structures: If Statements and Loops",
      duration: "18:20",
      url: "https://example.com/video3.mp4",
    },
    {
      id: 4,
      title: "Functions and Modules in Python",
      duration: "20:15",
      url: "https://example.com/video4.mp4",
    },
  ];

  const handleVideoSelect = (video: any) => {
    setCurrentVideo(video);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const sidebarItems = [
    { icon: Book, label: "Syllabus", section: "syllabus" },
    { icon: Bell, label: "Announcements", section: "announcements" },
    { icon: FileText, label: "Assignments", section: "assignments" },
    { icon: MessageSquare, label: "Discussions", section: "discussions" },
    { icon: BarChart2, label: "Grades", section: "grades" },
    { icon: FolderOpen, label: "Resources", section: "resources" },
    { icon: Video, label: "Video Tutorials", section: "videos" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:relative lg:translate-x-0"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">CS101</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ScrollArea className="flex-grow">
                <nav className="p-4 space-y-2">
                  {sidebarItems.map((item) => (
                    <Button
                      key={item.section}
                      variant={
                        activeSection === item.section ? "default" : "ghost"
                      }
                      className="w-full justify-start"
                      onClick={() => setActiveSection(item.section)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </ScrollArea>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
                <h1 className="text-2xl font-bold text-gray-900 ml-2 lg:ml-0">
                  {course.name}
                </h1>
              </div>
              <div className="flex items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Course Progress */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Course Progress
                </h2>
                <p className="text-sm text-gray-500">
                  Next deadline: {course.nextDeadline}
                </p>
              </div>
              <div className="w-1/3">
                <Progress value={course.progress} className="w-full" />
                <p className="text-sm text-gray-500 mt-1 text-right">
                  {course.progress}% Complete
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className=" bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            {activeSection === "syllabus" && (
              <Card>
                <CardHeader>
                  <CardTitle>Course Syllabus</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">
                    Learning Objectives
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Understand fundamental concepts of computer science</li>
                    <li>Develop basic programming skills in Python</li>
                    <li>
                      Apply problem-solving techniques to computational
                      challenges
                    </li>
                    <li>Analyze and evaluate simple algorithms</li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    Grading Policy
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Assignments: 40%</li>
                    <li>Quizzes: 20%</li>
                    <li>Midterm Exam: 20%</li>
                    <li>Final Project: 15%</li>
                    <li>Class Participation: 5%</li>
                  </ul>
                </CardContent>
              </Card>
            )}

            {activeSection === "announcements" && (
              <Card>
                <CardHeader>
                  <CardTitle>Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="mb-4 pb-4 border-b last:border-b-0"
                    >
                      <h3 className="text-lg font-semibold">
                        {announcement.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Posted on: {announcement.date}
                      </p>
                      <p>{announcement.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeSection === "assignments" && (
              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {assignments.map((assignment) => (
                      <div
                        key={assignment.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                      >
                        <div>
                          <h3 className="font-semibold">{assignment.title}</h3>
                          <p className="text-sm text-gray-500">
                            Due: {assignment.dueDate}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              assignment.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : assignment.status === "Not Started"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {assignment.status}
                          </span>
                          <Button variant="outline" size="sm" className="ml-4">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "discussions" && (
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Forums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <div
                        key={discussion.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                      >
                        <div>
                          <h3 className="font-semibold">{discussion.title}</h3>
                          <p className="text-sm text-gray-500">
                            Last post: {discussion.lastPost}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">
                            {discussion.replies} replies
                          </span>
                          <Button variant="outline" size="sm">
                            Join Discussion
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "grades" && (
              <Card>
                <CardHeader>
                  <CardTitle>Grades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {grades.map((grade) => (
                      <div
                        key={grade.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                      >
                        <div>
                          <h3 className="font-semibold">{grade.item}</h3>
                          <p className="text-sm text-gray-500">
                            Weight: {grade.weight}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {grade.score} / {grade.outOf}
                          </p>
                          <p className="text-sm text-gray-500">
                            {((grade.score / grade.outOf) * 100).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "resources" && (
              <Card>
                <CardHeader>
                  <CardTitle>Course Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                      >
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-gray-500">
                            {resource.type} - {resource.size}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "videos" && (
              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {videoTutorials.map((video) => (
                      <div
                        key={video.id}
                        className="p-4 bg-white rounded-lg shadow"
                      >
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Duration: {video.duration}
                        </p>
                        <Button onClick={() => handleVideoSelect(video)}>
                          <Play className="mr-2 h-4 w-4" />
                          Watch Video
                        </Button>
                      </div>
                    ))}
                  </div>
                  {currentVideo && (
                    <Dialog
                      open={!!currentVideo}
                      onOpenChange={() => setCurrentVideo(null)}
                    >
                      <DialogContent className="sm:max-w-[800px]">
                        <DialogHeader>
                          <DialogTitle>{currentVideo?.title}</DialogTitle>
                          <DialogDescription>
                            Duration: {currentVideo?.duration}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video bg-black flex items-center justify-center text-white">
                          <p>Video Player Placeholder</p>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4">
                          <Button onClick={togglePlayPause}>
                            {isPlaying ? (
                              <Pause className="h-4 w-4 mr-2" />
                            ) : (
                              <Play className="h-4 w-4 mr-2" />
                            )}
                            {isPlaying ? "Pause" : "Play"}
                          </Button>
                          <Button variant="outline">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Rewind
                          </Button>
                          <Button variant="outline">
                            <FastForward className="h-4 w-4 mr-2" />
                            Forward
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </main>

        {/* AI Study Assistant */}
        <div className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Tabs defaultValue="chat">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chat">AI Study Assistant</TabsTrigger>
                <TabsTrigger value="summary">Course Summary</TabsTrigger>
              </TabsList>
              <TabsContent value="chat" className="mt-4">
                <div className="bg-gray-100 p-4 rounded-lg h-48 overflow-y-auto mb-4">
                  {/* Chat messages would go here */}
                  <p className="text-gray-600">
                    AI: How can I assist you with your studies today?
                  </p>
                </div>
                <div className="flex">
                  <Input
                    placeholder="Ask a question..."
                    className="flex-grow mr-2"
                  />
                  <Button>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="summary" className="mt-4">
                <div className="bg-gray-100 p-4 rounded-lg h-48 overflow-y-auto">
                  <h3 className="font-semibold mb-2">Course Overview</h3>
                  <p>
                    This course covers fundamental concepts in computer science,
                    including:
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Basic programming in Python</li>
                    <li>Data structures and algorithms</li>
                    <li>Problem-solving techniques</li>
                    <li>Introduction to software development practices</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
