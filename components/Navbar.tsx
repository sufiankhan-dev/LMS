"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          LearnHub
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Courses</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/courses">Short-term Courses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/long-courses">Long-term Courses</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
          <form className="relative">
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-8 pr-2 py-1 rounded-full bg-white text-gray-600 placeholder-blue-200 focus:outline-none"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black"
              size={18}
            />
          </form>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 p-4">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/courses/short-term"
              className="text-white hover:text-blue-200"
            >
              Short-term Courses
            </Link>
            <Link
              href="/courses/long-term"
              className="text-white hover:text-blue-200"
            >
              Long-term Courses
            </Link>
            <Link href="/about" className="text-white hover:text-blue-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200">
              Contact
            </Link>
            <form className="relative mt-2">
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-8 pr-2 py-1 rounded-full bg-blue-400 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-200"
                size={18}
              />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
