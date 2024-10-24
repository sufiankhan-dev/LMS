"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ChevronDown,
  Star,
  Clock,
  DollarSign,
  BarChart,
  Book,
  Users,
  Play,
  X,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { coursesPage } from "@/data/constants";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [previewCourse, setPreviewCourse] = useState<
    (typeof coursesPage)[0] | null
  >(null);
  const coursesPerPage = 6;

  const categories = [
    "All",
    "Development",
    "Data Science",
    "Marketing",
    "Design",
  ];
  const subcategories = {
    All: ["All"],
    Development: ["All", "Web Development", "Mobile Development"],
    "Data Science": ["All", "Machine Learning", "Python"],
    Marketing: ["All", "Digital Marketing"],
    Design: ["All", "UX/UI"],
  };
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = coursesPage.filter(
    (course) =>
      (searchTerm === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || course.category === selectedCategory) &&
      (selectedSubcategory === "All" ||
        course.subcategory === selectedSubcategory) &&
      (selectedLevel === "All" || course.level === selectedLevel) &&
      course.price >= priceRange[0] &&
      course.price <= priceRange[1]
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default: // popularity
        return b.students - a.students;
    }
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleCourseSelection = (courseId: number) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const getRecommendedCourses = () => {
    // This is a simple recommendation system based on the user's selected courses
    const userSkills = selectedCourses.flatMap(
      (id) => coursesPage.find((c) => c.id === id)?.skills || []
    );
    return coursesPage
      .filter((course) => !selectedCourses.includes(course.id))
      .filter((course) =>
        course.skills.some((skill) => userSkills.includes(skill))
      )
      .slice(0, 3);
  };

  const difficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  useEffect(() => {
    // Simulate loading enrolled courses for the user
    const enrolledCourses = coursesPage
      .filter((course) => course.enrolled)
      .map((course) => course.id);
    setSelectedCourses(enrolledCourses);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Explore Courses</h1>

        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low-high">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="price-high-low">
                  Price: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                      <Select
                        onValueChange={(value) => {
                          setSelectedCategory(value);
                          setSelectedSubcategory("All");
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="subcategory">
                    <AccordionTrigger>Subcategory</AccordionTrigger>
                    <AccordionContent>
                      <Select
                        onValueChange={(value) => setSelectedSubcategory(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                        <SelectContent>
                          {subcategories[
                            selectedCategory as keyof typeof subcategories
                          ].map((subcategory) => (
                            <SelectItem key={subcategory} value={subcategory}>
                              {subcategory}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="level">
                    <AccordionTrigger>Level</AccordionTrigger>
                    <AccordionContent>
                      <Select
                        onValueChange={(value) => setSelectedLevel(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          {levels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                      <Slider
                        min={0}
                        max={200}
                        step={1}
                        value={priceRange}
                        onValueChange={(value: number[]) =>
                          setPriceRange(value)
                        }
                        className="mt-2"
                      />
                      <div className="flex justify-between mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Course Comparison */}
            {selectedCourses.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Course Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedCourses.map((id) => {
                      const course = coursesPage.find((c) => c.id === id);
                      return course ? (
                        <li
                          key={id}
                          className="flex justify-between items-center"
                        >
                          <span className="truncate">{course.title}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleCourseSelection(id)}
                          >
                            <X size={16} />
                          </Button>
                        </li>
                      ) : null;
                    })}
                  </ul>
                  {selectedCourses.length > 1 && (
                    <Button className="w-full mt-4">Compare Courses</Button>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Course Recommendations */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {getRecommendedCourses().map((course) => (
                    <li
                      key={course.id}
                      className="flex justify-between items-center"
                    >
                      <span className="truncate">{course.title}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCourseSelection(course.id)}
                      >
                        Add
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Course Grid */}
          <main className="w-full  lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="flex flex-col h-full">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle className="line-clamp-2">
                        {course.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({course.students.toLocaleString()} students)
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <BarChart className="w-4 h-4 mr-1" />
                        <span>{course.level}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`w-2 h-2 rounded-full ml-2 ${difficultyColor(course.level)}`}
                              ></div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Course Difficulty: {course.level}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {course.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {course.enrolled && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress
                            value={course.progress}
                            className="w-full"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        ${course.price.toFixed(2)}
                      </span>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setPreviewCourse(course)}
                            >
                              <Play className="w-4 h-4 mr-1" /> Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>{previewCourse?.title}</DialogTitle>
                              <DialogDescription>
                                Course Preview
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <Tabs defaultValue="overview">
                                <TabsList>
                                  <TabsTrigger value="overview">
                                    Overview
                                  </TabsTrigger>
                                  <TabsTrigger value="curriculum">
                                    Curriculum
                                  </TabsTrigger>
                                  <TabsTrigger value="instructor">
                                    Instructor
                                  </TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview">
                                  <h3 className="text-lg font-semibold mb-2">
                                    Course Description
                                  </h3>
                                  <p className="text-muted-foreground">
                                    This is a detailed description of the
                                    course, outlining the main topics covered,
                                    learning outcomes, and who this course is
                                    best suited for.
                                  </p>
                                  <h3 className="text-lg font-semibold mt-4 mb-2">
                                    What You'll Learn
                                  </h3>
                                  <ul className="list-disc list-inside text-muted-foreground">
                                    <li>Key concept 1</li>
                                    <li>Important skill 2</li>
                                    <li>Fundamental principle 3</li>
                                    <li>Practical application 4</li>
                                  </ul>
                                </TabsContent>
                                <TabsContent value="curriculum">
                                  <h3 className="text-lg font-semibold mb-2">
                                    Course Curriculum
                                  </h3>
                                  <ul className="space-y-2">
                                    <li className="flex justify-between items-center">
                                      <span>1. Introduction to the Course</span>
                                      <Badge>30 mins</Badge>
                                    </li>
                                    <li className="flex justify-between items-center">
                                      <span>
                                        2. Core Concepts and Principles
                                      </span>
                                      <Badge>1 hour</Badge>
                                    </li>
                                    <li className="flex justify-between items-center">
                                      <span>3. Practical Applications</span>
                                      <Badge>2 hours</Badge>
                                    </li>
                                    <li className="flex justify-between items-center">
                                      <span>4. Advanced Techniques</span>
                                      <Badge>1.5 hours</Badge>
                                    </li>
                                    <li className="flex justify-between items-center">
                                      <span>
                                        5. Final Project and Conclusion
                                      </span>
                                      <Badge>2 hours</Badge>
                                    </li>
                                  </ul>
                                </TabsContent>
                                <TabsContent value="instructor">
                                  <div className="flex items-start space-x-4">
                                    <img
                                      src="/placeholder.svg?height=100&width=100"
                                      alt="Instructor"
                                      className="w-24 h-24 rounded-full"
                                    />
                                    <div>
                                      <h3 className="text-lg font-semibold">
                                        {previewCourse?.instructor}
                                      </h3>
                                      <p className="text-muted-foreground">
                                        Expert in {previewCourse?.category}
                                      </p>
                                      <p className="mt-2 text-muted-foreground">
                                        Brief bio of the instructor,
                                        highlighting their expertise,
                                        experience, and teaching style. This
                                        section helps students connect with the
                                        instructor and understand their
                                        qualifications.
                                      </p>
                                    </div>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          onClick={() => toggleCourseSelection(course.id)}
                        >
                          {selectedCourses.includes(course.id)
                            ? "Remove"
                            : "Add to Compare"}
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                {Array.from(
                  { length: Math.ceil(sortedCourses.length / coursesPerPage) },
                  (_, i) => (
                    <Button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      className="px-4 py-2"
                    >
                      {i + 1}
                    </Button>
                  )
                )}
              </nav>
            </div>
          </main>
        </div>

        {/* Social Proof */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">
            What Our Students Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex J.",
                role: "Web Developer",
                content:
                  "The courses here have been instrumental in advancing my career. Highly recommended!",
              },
              {
                name: "Sarah L.",
                role: "Data Scientist",
                content:
                  "I love the practical approach of these courses. They have helped me apply ML concepts in real-world scenarios.",
              },
              {
                name: "Mike T.",
                role: "UX Designer",
                content:
                  "The UX/UI courses are top-notch. I have learned so much and its reflected in my work.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
