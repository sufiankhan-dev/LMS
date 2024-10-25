"use client";

import React, { useState } from "react";
import { Book, Search } from "lucide-react";
import { longCourcesCategories, longCourses } from "@/data/constants";
import Link from "next/link";

export default function OldSchoolCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = longCourses.filter(
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
            {longCourcesCategories.map((category) => (
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
                      <Link className="w-full" href={`/courses/long-courses/1`}>
                        {course.name}
                      </Link>
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
