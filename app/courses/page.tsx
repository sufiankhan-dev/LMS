"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const courseTypes = [
  {
    title: "Short Courses",
    description:
      "Intensive, focused learning experiences designed to quickly build specific skills.",
    icon: Clock,
    benefits: [
      "Complete in 4-8 weeks",
      "Focused on specific skills",
      "Flexible schedule",
      "Ideal for busy professionals",
    ],
    courses: [
      {
        id: 1,
        title: "Introduction to Python Programming",
        duration: "4 weeks",
      },
      { id: 2, title: "Digital Marketing Fundamentals", duration: "6 weeks" },
      { id: 3, title: "Data Analysis with Excel", duration: "5 weeks" },
    ],
    link: "courses/short-courses",
  },
  {
    title: "Long Courses",
    description:
      "Comprehensive programs offering in-depth knowledge and extensive skill development.",
    icon: Book,
    benefits: [
      "In-depth learning experience",
      "Develop comprehensive skill sets",
      "Industry-recognized certifications",
      "Career advancement opportunities",
    ],
    courses: [
      {
        id: 1,
        title: "Full Stack Web Development Bootcamp",
        duration: "24 weeks",
      },
      {
        id: 2,
        title: "Data Science and Machine Learning",
        duration: "32 weeks",
      },
      {
        id: 3,
        title: "UX/UI Design Professional Certificate",
        duration: "28 weeks",
      },
    ],
    link: "courses/long-courses",
  },
];

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Choose Your Learning Path
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Select the course duration that best fits your goals and schedule
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {courseTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">
                      {type.title}
                    </CardTitle>
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {type.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">
                    Sample Courses:
                  </h3>
                  <ul className="space-y-2">
                    {type.courses.map((course) => (
                      <li
                        key={course.id}
                        className="flex justify-between items-center"
                      >
                        <span>{course.title}</span>
                        <span className="text-sm text-gray-500">
                          {course.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={type.link}>
                      Explore {type.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
