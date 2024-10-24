"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courseData = {
  title: "Introduction to User Experience Design",
  description:
    "This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.",
  rating: 4.8,
  reviews: 5831,
  duration: "22 Total Hours, 105 Lectures, All levels",
  languages: ["English", "Spanish", "Italian", "German"],
  price: 49.5,
  originalPrice: 99,
  discount: 50,
  instructor: {
    name: "Ronald Richards",
    title: "UI/UX Designer",
    image: "/maleImage.jpg",
    reviews: 40445,
    students: 500,
    courses: 15,
    bio: "With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.",
  },
  syllabus: [
    { title: "Introduction to UX Design", lessons: 5, duration: "1 hour" },
    { title: "Basics of User-Centered Design", lessons: 5, duration: "1 hour" },
    { title: "Elements of User Experience", lessons: 5, duration: "1 hour" },
    { title: "Visual Design Principles", lessons: 5, duration: "1 hour" },
  ],
};

const reviews = [
  {
    id: 1,
    name: "Mark Doe",
    rating: 5,
    date: "22nd March, 2024",
    comment:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    date: "20th March, 2024",
    comment:
      "Great course for beginners! The instructor explains everything clearly. I would have liked more practical exercises, but overall it's a solid introduction to UX design.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    rating: 5,
    date: "18th March, 2024",
    comment:
      "This course exceeded my expectations. The content is up-to-date and relevant to current industry practices. I feel much more confident in my UX skills after completing this course.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Student",
    comment:
      "Bytesize's tech courses are top-notch! As someone who's always looking to stay ahead in this rapidly evolving tech world, I appreciate the up-to-date content and engaging instructors.",
    image: "/maleImage.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Professional",
    comment:
      "I've taken several courses on Bytesize, and they've all been excellent. The platform is easy to use, and the course quality is consistently high.",
    image: "/maleImage.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Career Changer",
    comment:
      "Bytesize helped me transition into a new career in tech. The courses are comprehensive and provide practical skills that are in demand in the job market.",
    image: "/maleImage.jpg",
  },
];

const relatedCourses = [
  {
    id: 1,
    title: "Beginner's Guide to Design",
    instructor: "Sarah Johnson",
    price: 39.99,
    rating: 4.5,
    reviews: 1200,
    image: "/web-development-courses.jpg",
  },
  {
    id: 2,
    title: "Advanced UX Techniques",
    instructor: "Michael Brown",
    price: 59.99,
    rating: 4.8,
    reviews: 980,
    image: "/web-development-courses.jpg",
  },
  {
    id: 3,
    title: "UI Design Masterclass",
    instructor: "Emily Davis",
    price: 49.99,
    rating: 4.7,
    reviews: 1500,
    image: "/web-development-courses.jpg",
  },
  {
    id: 4,
    title: "Design Thinking Workshop",
    instructor: "David Wilson",
    price: 44.99,
    rating: 4.6,
    reviews: 800,
    image: "/web-development-courses.jpg",
  },
];

export default function CourseDetails() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-gray-700">
          Categories
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{courseData.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
          <p className="text-gray-600 mb-4">{courseData.description}</p>

          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(courseData.rating) ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({courseData.reviews.toLocaleString()} ratings)
              </span>
            </div>
            <span className="text-sm text-gray-600">{courseData.duration}</span>
          </div>

          <div className="flex items-center mb-4">
            <Image
              src={courseData.instructor.image}
              alt={courseData.instructor.name}
              width={40}
              height={40}
              className="rounded-full object-cover w-8 h-8 mr-2"
            />
            <span className="text-sm text-gray-600">
              Created by{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                {courseData.instructor.name}
              </Link>
            </span>
          </div>

          <div className="flex items-center mb-8">
            <span className="text-sm text-gray-600 mr-4">
              🌐 {courseData.languages.join(", ")}
            </span>
          </div>

          <Tabs defaultValue="description" className="mb-8">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <h2 className="text-xl font-semibold mb-2">Course Description</h2>
              <p className="text-gray-600 mb-4">
                This interactive e-learning course will introduce you to User
                Experience (UX) design, the art of creating products and
                services that are intuitive, enjoyable, and user-friendly. Gain
                a solid foundation in UX principles and learn to apply them in
                real-world scenarios through engaging modules and interactive
                exercises.
              </p>
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">
                At Bytesize, we understand the significance of formal
                recognition for your hard work and dedication to continuous
                learning. Upon successful completion of our courses, you will
                earn a prestigious certification that not only validates your
                expertise but also opens doors to new opportunities in your
                chosen field.
              </p>
            </TabsContent>
            <TabsContent value="instructor">
              <div className="flex items-start mb-4">
                <Image
                  src={courseData.instructor.image}
                  alt={courseData.instructor.name}
                  width={100}
                  height={100}
                  className="rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {courseData.instructor.name}
                  </h2>
                  <p className="text-gray-600">{courseData.instructor.title}</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-8">
                  <p className="font-semibold">
                    {courseData.instructor.reviews.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Reviews</p>
                </div>
                <div className="mr-8">
                  <p className="font-semibold">
                    {courseData.instructor.students.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
                <div>
                  <p className="font-semibold">
                    {courseData.instructor.courses}
                  </p>
                  <p className="text-sm text-gray-600">Courses</p>
                </div>
              </div>
              <p className="text-gray-600">{courseData.instructor.bio}</p>
            </TabsContent>
            <TabsContent value="syllabus">
              <h2 className="text-xl font-semibold mb-4">Course Syllabus</h2>
              {courseData.syllabus.map((section, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleSection(index)}
                  >
                    <span className="font-semibold">{section.title}</span>
                    {expandedSections.includes(index) ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                  {expandedSections.includes(index) && (
                    <div className="mt-2 text-gray-600">
                      <p>{section.lessons} Lessons</p>
                      <p>{section.duration}</p>
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="reviews">
              <h2 className="text-xl font-semibold mb-4">Learner Reviews</h2>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold mr-2">
                    {courseData.rating}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(courseData.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {courseData.reviews.toLocaleString()} ratings
                </p>
              </div>
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 py-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
              <Button variant="outline" className="mt-4">
                View more Reviews
              </Button>
            </TabsContent>
          </Tabs>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              What Our Customers Say About Us
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-center">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={50}
                  height={50}
                  className="rounded-full mx-auto mb-4 object-cover w-10 h-10"
                />
                <p className="text-gray-600 mb-4">
                  "{testimonials[currentTestimonial].comment}"
                </p>
                <p className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <ChevronRight className="w-6  h-6" />
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">More Courses Like This</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={250}
                    height={150}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {course.instructor}
                    </p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 font-bold mr-1">
                        {course.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({course.reviews.toLocaleString()})
                      </span>
                    </div>
                    <p className="font-bold">${course.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/web-development-courses.jpg"
                alt={courseData.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold">
                    ${courseData.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${courseData.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {courseData.discount}% off
                  </span>
                </div>
                <Button className="w-full mb-2 bg-blue-700 hover:bg-blue-600">
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full mb-4">
                  Buy Now
                </Button>
                <p className="text-sm text-center text-gray-500 mb-4">
                  30-Day Money-Back Guarantee
                </p>
                <h3 className="font-semibold mb-2">This course includes:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>22 hours on-demand video</li>
                  <li>105 downloadable resources</li>
                  <li>Full lifetime access</li>
                  <li>Access on mobile and TV</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
