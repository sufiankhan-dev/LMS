"use client";

import React, { useState } from "react";
import { Book, ChevronRight, ChevronDown, Search } from "lucide-react";

export default function OldSchoolCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All Courses",
    "Computer Science",
    "Mathematics",
    "Literature",
    "History",
    "Science",
  ];

  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Programming",
      instructor: "Dr. John Doe",
      credits: 3,
      enrolled: 150,
    },
    {
      id: 2,
      code: "MATH201",
      name: "Calculus I",
      instructor: "Prof. Jane Smith",
      credits: 4,
      enrolled: 120,
    },
    {
      id: 3,
      code: "LIT105",
      name: "World Literature",
      instructor: "Dr. Emily Brown",
      credits: 3,
      enrolled: 80,
    },
    {
      id: 4,
      code: "HIST202",
      name: "Modern World History",
      instructor: "Prof. Michael Johnson",
      credits: 3,
      enrolled: 100,
    },
    {
      id: 5,
      code: "BIO101",
      name: "Introduction to Biology",
      instructor: "Dr. Sarah Lee",
      credits: 4,
      enrolled: 130,
    },
    {
      id: 6,
      code: "PHYS201",
      name: "Physics for Engineers",
      instructor: "Prof. Robert Chen",
      credits: 4,
      enrolled: 90,
    },
    {
      id: 7,
      code: "CS202",
      name: "Data Structures and Algorithms",
      instructor: "Dr. Alice Wang",
      credits: 3,
      enrolled: 110,
    },
    {
      id: 8,
      code: "CHEM101",
      name: "General Chemistry",
      instructor: "Prof. David Miller",
      credits: 4,
      enrolled: 140,
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="flex">
        {/* Left Navigation */}
        <nav className="w-64 bg-gray-200 min-h-screen p-4 border-r border-gray-300">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-blue-800">
              FutureConnect LMS
            </h1>
          </div>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left p-2 rounded ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-300"
                  }`}
                >
                  <Book className="inline-block mr-2 h-4 w-4" />
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="bg-white border border-gray-300 rounded shadow-sm p-4 mb-6">
            <h2 className="text-xl font-bold mb-4">Course Catalog</h2>
            <div className="flex items-center mb-4">
              <label htmlFor="search" className="mr-2 font-bold">
                Search:
              </label>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="search"
                  placeholder="Enter course name or code"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-left">
                    Course Code
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Course Name
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Instructor
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Credits
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Enrolled
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.instructor}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {course.credits}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {course.enrolled}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-sm">
                        Enroll
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Course Information */}
          <div className="bg-white border border-gray-300 rounded shadow-sm p-4">
            <h3 className="text-lg font-bold mb-2">Course Information</h3>
            <p className="text-sm mb-4">
              Select a course from the table above to view detailed information.
            </p>
            <div className="border-t border-gray-300 pt-4">
              <h4 className="font-bold mb-2">Course Policies</h4>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Students must maintain a GPA of 2.0 or higher to remain in
                  good academic standing.
                </li>
                <li>
                  Attendance is mandatory for all scheduled class sessions.
                </li>
                <li>Late assignments will be penalized 10% per day.</li>
                <li>
                  Academic honesty is expected; plagiarism will result in course
                  failure.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
