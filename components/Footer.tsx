import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default async function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-3 md:px-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 uppercase">
              Education is an Evolution, not a Revolution
            </h2>
            <p className="text-gray-300">
              Empowering learners worldwide with quality education.
            </p>
          </div>
          {/* <div className="flex justify-start md:justify-end items-start">
            <div className="flex flex-col items-center">
              <div className="w-36 h-14 flex flex-col">
                <div className="flex-1 bg-black"></div>
                <div className="flex-1 bg-red-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
              </div>
              <span className="text-sm font-bold underline text-white px-2 py-1 mb-2">
                <span className="font-normal">MADE IN</span> GERMANY
              </span>
            </div>
          </div> */}
          <div className="flex justify-start md:justify-end items-start">
            <div className="flex flex-col items-center">
              <div className="w-36 h-14 flex">
                <div className="w-1/4 bg-red-600"></div>{" "}
                {/* Red vertical stripe */}
                <div className="w-3/4 flex flex-col">
                  <div className="flex-1 bg-green-600"></div>{" "}
                  {/* Green horizontal stripe */}
                  <div className="flex-1 bg-white"></div>{" "}
                  {/* White horizontal stripe */}
                  <div className="flex-1 bg-black"></div>{" "}
                  {/* Black horizontal stripe */}
                </div>
              </div>
              <span className="text-sm font-bold underline text-white px-2 py-1 mb-2">
                <span className="font-normal">MADE IN</span> UAE
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex mb-8">
          <div className="flex flex-col items-center">
            <div className="w-36 h-14 flex flex-col">
              <div className="flex-1 bg-black"></div>
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-yellow-400"></div>
            </div>
            <span className="text-sm font-bold underline text-white px-2 py-1 mb-2">
              <span className="font-normal">MADE IN</span> GERMANY
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 px-3 md:px-10">
          <div>
            <h3 className="font-bold text-lg mb-4 underline">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gray-300">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Hire us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 underline">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="hover:text-gray-300">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gray-300">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link href="" className="hover:text-gray-300">
                  Case Studies
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 underline">Community</h3>
            <ul className="space-y-2">
              <li>Learners</li>
              <li>Partners</li>
              <li>Developers</li>
            </ul>
            {/* {services.map((service: any, idx: any) => (
              <ul className="mb-2" key={idx}>
                <li>
                  <Link
                    href={`/services/${service.link}`}
                    key={idx}
                    className="hover:text-gray-300 duration-100"
                  >
                    {service.title}
                  </Link>
                </li>
              </ul>
            ))} */}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 underline">Contact us</h3>
            <ul className="space-y-2">
              <li>contact@learnhub.com</li>
              <li>+49 1523 2323683</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-wrap justify-between items-center px-3 md:px-10">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://github.com"
              className="text-gray-400 hover:text-white"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://terraform.io"
              className="text-gray-400 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M8.49 22.51v-6.14L15.52 20v-5.88l-7.03-3.63v-6.14l7.03 3.63V1.49L8.49 5.12V0L1.46 3.63v16.75L8.49 22.51z" />
              </svg>
              <span className="sr-only">Terraform</span>
            </Link>
            <Link
              href="https://artifacthub.io"
              className="text-gray-400 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm-8.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" />
              </svg>
              <span className="sr-only">ArtifactHUB</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 LearnHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export const revalidate = 60;
