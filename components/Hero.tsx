import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-blue-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Unlock Your Potential with CityLearn
            </h1>
            <p className="mt-4 max-w-3xl text-xl text-gray-500">
              Learn without limits with our wide collection of courses. Explore
              now!
            </p>
            <div className="mt-8">
              <Link href={"/search"}>
                <Button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none">
                  Get started
                  <ArrowRight
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-xl">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  src="/upscaleImage.png"
                  alt="Students learning"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-full object-cover object-center"
                />
              </div>
              {/* <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full object-cover"
                      src="/maleImage.jpg"
                      alt="Student avatar"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Jane Doe
                    </p>
                    <p className="text-xs text-gray-500">
                      Web Development Student
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
