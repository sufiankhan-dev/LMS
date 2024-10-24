import Link from "next/link";
import { Button } from "@/components/ui/button";

const longTermCourses = [
  {
    id: 4,
    title: "Full-Stack Web Development Bootcamp",
    duration: "24 weeks",
    price: "$1999",
  },
  {
    id: 5,
    title: "Data Science and Machine Learning",
    duration: "32 weeks",
    price: "$2499",
  },
  {
    id: 6,
    title: "UX/UI Design Professional Certificate",
    duration: "36 weeks",
    price: "$2199",
  },
];

export default function LongTermCourses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Long-Term Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {longTermCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
              <p className="text-blue-700 font-bold mb-4">{course.price}</p>
              <Link href={`/courses-view`}>
                <Button className="w-full bg-blue-700 hover:bg-blue-600">
                  View Course
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
