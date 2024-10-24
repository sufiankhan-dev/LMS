import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/Hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <HeroSection />

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose LearnHub
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CheckCircle className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
                <p className="text-gray-600">
                  Expert-curated courses designed for your success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Learn alongside a global community of learners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Trophy className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold mb-2">
                  Recognized Certifications
                </h3>
                <p className="text-gray-600">
                  Earn certificates valued by top employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Top Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Development", icon: <BookOpen />, courses: 120 },
                { name: "Business", icon: <Users />, courses: 85 },
                { name: "IT & Software", icon: <CheckCircle />, courses: 200 },
                { name: "Design", icon: <Trophy />, courses: 65 },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-blue-100 p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-blue-600 mb-1">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.courses} Courses
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((course) => (
                <div
                  key={course}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src="/web-development-courses.jpg"
                    alt="Course thumbnail"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Web Development Bootcamp
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn full-stack web development from scratch.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">$99.99</span>
                      <Link href={"/course-view"}>
                        <Button variant="outline">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center">
              <Button className="mt-10 bg-blue-700 hover:bg-blue-600 flex justify-center items-center text-lg px-6 py-3 font-normal">
                Show More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-32">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Become an Instructor
                </h2>
                <p className="mb-6">
                  Share your knowledge and empower learners worldwide. Join our
                  community of expert instructors.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-100"
                >
                  Start Teaching
                </Button>
              </div>
              <div className="=">
                <img
                  src="/image-instructor.png"
                  alt="Instructor teaching"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-32">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Transform Your Life Through Education
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/image11.png"
                  alt="Student learning"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-xl mb-6">
                  Learners around the world are launching new careers, advancing
                  in their fields, and enriching their lives.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Find Your Course
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LearnHub</h3>
              <p>Empowering learners worldwide with quality education.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses">All Courses</Link>
                </li>
                <li>
                  <Link href="/instructors">Instructors</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/learners">Learners</Link>
                </li>
                <li>
                  <Link href="/partners">Partners</Link>
                </li>
                <li>
                  <Link href="/developers">Developers</Link>
                </li>
                <li>
                  <Link href="/beta-testers">Beta Testers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-400">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-400">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
