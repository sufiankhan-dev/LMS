import Link from "next/link";
import { Button } from "@/components/ui/button";

const shortTermCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "4 weeks",
    price: "$199",
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    duration: "6 weeks",
    price: "$249",
  },
  {
    id: 3,
    title: "Data Analysis with Python",
    duration: "8 weeks",
    price: "$299",
  },
];

export default function ShortTermCourses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Short-Term Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shortTermCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
              <p className="text-blue-700 font-bold mb-4">{course.price}</p>
              <Link href={`/course-view`}>
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
