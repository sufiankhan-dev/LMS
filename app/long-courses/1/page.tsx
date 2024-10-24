"use client";

import React, { useState } from "react";
import {
  Book,
  FileText,
  MessageSquare,
  BarChart2,
  Calendar,
  Paperclip,
  Download,
  ExternalLink,
  Video,
  Play,
  Pause,
  RotateCcw,
  FastForward,
} from "lucide-react";

export default function OldSchoolCourseViewWithVideos() {
  const [activeTab, setActiveTab] = useState("syllabus");
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const course = {
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. John Doe",
    term: "Fall 2024",
    credits: 3,
    schedule: "MWF 10:00 AM - 11:15 AM",
    location: "Tech Building, Room 305",
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
      status: "Open",
    },
    { id: 2, title: "Quiz 1", dueDate: "2024-09-22", status: "Open" },
    {
      id: 3,
      title: "Programming Assignment 2",
      dueDate: "2024-10-06",
      status: "Not yet open",
    },
    {
      id: 4,
      title: "Midterm Exam",
      dueDate: "2024-10-20",
      status: "Not yet open",
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

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">
            {course.code}: {course.name}
          </h1>
          <p>
            {course.term} | Instructor: {course.instructor}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-200 border-b border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          {[
            "Syllabus",
            "Announcements",
            "Assignments",
            "Discussions",
            "Grades",
            "Resources",
            "Video Tutorials",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item.toLowerCase())}
              className={`px-4 py-2 font-semibold ${activeTab === item.toLowerCase() ? "bg-white border-t border-l border-r border-gray-300" : "hover:bg-gray-300"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
          <div className="bg-white border border-gray-300 p-4 mb-6">
            <h2 className="font-bold text-lg mb-2">Course Information</h2>
            <ul className="text-sm">
              <li>
                <strong>Credits:</strong> {course.credits}
              </li>
              <li>
                <strong>Schedule:</strong> {course.schedule}
              </li>
              <li>
                <strong>Location:</strong> {course.location}
              </li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 p-4">
            <h2 className="font-bold text-lg mb-2">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Course Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Email Instructor
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Student Handbook
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="w-full md:w-3/4 bg-white border border-gray-300 p-6">
          {activeTab === "syllabus" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Course Syllabus</h2>
              <h3 className="font-bold mt-4 mb-2">Course Description</h3>
              <p>{course.description}</p>
              <h3 className="font-bold mt-4 mb-2">Learning Objectives</h3>
              <ul className="list-disc list-inside">
                <li>Understand fundamental concepts of computer science</li>
                <li>Develop basic programming skills in Python</li>
                <li>
                  Apply problem-solving techniques to computational challenges
                </li>
                <li>Analyze and evaluate simple algorithms</li>
              </ul>
              <h3 className="font-bold mt-4 mb-2">Grading Policy</h3>
              <ul className="list-disc list-inside">
                <li>Assignments: 40%</li>
                <li>Quizzes: 20%</li>
                <li>Midterm Exam: 20%</li>
                <li>Final Project: 15%</li>
                <li>Class Participation: 5%</li>
              </ul>
            </div>
          )}

          {activeTab === "announcements" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Announcements</h2>
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="mb-4 pb-4 border-b border-gray-300"
                >
                  <h3 className="font-bold">{announcement.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Posted on: {announcement.date}
                  </p>
                  <p>{announcement.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "assignments" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Assignments</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Title
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Due Date
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Status
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment) => (
                    <tr key={assignment.id}>
                      <td className="border border-gray-300 p-2">
                        {assignment.title}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {assignment.dueDate}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {assignment.status}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "discussions" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Discussion Forums</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Topic
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Replies
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Last Post
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {discussions.map((discussion) => (
                    <tr key={discussion.id}>
                      <td className="border border-gray-300 p-2">
                        <a href="#" className="text-blue-600 hover:underline">
                          {discussion.title}
                        </a>
                      </td>
                      <td className="border border-gray-300 p-2">
                        {discussion.replies}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {discussion.lastPost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "grades" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Grades</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Item
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Score
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Out Of
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade) => (
                    <tr key={grade.id}>
                      <td className="border border-gray-300 p-2">
                        {grade.item}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {grade.score}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {grade.outOf}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {grade.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "resources" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Course Resources</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Title
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Type
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Size
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource) => (
                    <tr key={resource.id}>
                      <td className="border border-gray-300 p-2">
                        {resource.title}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {resource.type}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {resource.size}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded text-sm flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "video tutorials" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Video Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {videoTutorials.map((video) => (
                  <div
                    key={video.id}
                    className="border border-gray-300 p-4 rounded"
                  >
                    <h3 className="font-bold mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Duration: {video.duration}
                    </p>
                    <button
                      onClick={() => handleVideoSelect(video)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-sm flex items-center"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Watch Video
                    </button>
                  </div>
                ))}
              </div>
              {currentVideo && (
                <div className="mt-8 border border-gray-300 p-4 rounded">
                  <h3 className="font-bold mb-2">{currentVideo?.title}</h3>
                  <div className="bg-black aspect-video flex items-center justify-center text-white">
                    {/* This is a placeholder for the video player */}
                    <p>Video Player Placeholder</p>
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                      <RotateCcw className="w-6 h-6" />
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                      <FastForward className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
