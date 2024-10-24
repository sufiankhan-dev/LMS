"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "4 weeks",
    price: "$199",
    type: "short-term",
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    duration: "6 weeks",
    price: "$249",
    type: "short-term",
  },
  {
    id: 3,
    title: "Data Analysis with Python",
    duration: "8 weeks",
    price: "$299",
    type: "short-term",
  },
  {
    id: 4,
    title: "Full-Stack Web Development Bootcamp",
    duration: "24 weeks",
    price: "$1999",
    type: "long-term",
  },
  {
    id: 5,
    title: "Data Science and Machine Learning",
    duration: "32 weeks",
    price: "$2499",
    type: "long-term",
  },
  {
    id: 6,
    title: "UX/UI Design Professional Certificate",
    duration: "36 weeks",
    price: "$2199",
    type: "long-term",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(allCourses);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = allCourses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Courses</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="search"
            placeholder="Search for courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="bg-blue-700 hover:bg-blue-700">
            Search
          </Button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
              <p className="text-blue-700 font-bold mb-2">{course.price}</p>
              <p className="text-gray-600 mb-4">Type: {course.type}</p>
              <Link href={"/course-view"}>
                <Button className="w-full bg-blue-700 hover:bg-blue-600">
                  View Course
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {searchResults.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No courses found. Try a different search term.
        </p>
      )}
    </div>
  );
}
