"use client";
import { Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, ArrowRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  categories,
  categories1,
  courses,
  faqItems,
  features,
  partners,
  pricingPlans,
  testimonials,
} from "@/data/constants";
import Link from "next/link";

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-20 pb-24 sm:pb-32">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Unlock Your Potential with Expert-Led Courses
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Join millions of learners worldwide and master new skills from
                industry-leading experts. Start your learning journey today.
              </p>
              <div className="mt-10 max-w-xl mx-auto">
                <form className="sm:flex">
                  <div className="flex-1">
                    <Input
                      type="search"
                      placeholder="What do you want to learn?"
                      className="w-full h-12 px-4 bg bg-primary-foreground text-muted-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button
                      type="submit"
                      className="w-full h-12 px-8 font-medium"
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Search Courses
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-sm font-semibold text-center text-primary uppercase tracking-wide mb-3">
                Explore top categories
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories1.map((category) => (
                  <Button key={category} variant="outline" className="text-sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">5M+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">4.7</div>
                  <div className="text-sm text-muted-foreground">
                    Avg. Rating
                  </div>
                </div>
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Choose Your Course",
                description:
                  "Browse our extensive catalog and find the perfect course for your goals.",
              },
              {
                step: 2,
                title: "Learn at Your Pace",
                description:
                  "Access course materials anytime, anywhere, and learn at your own speed.",
              },
              {
                step: 3,
                title: "Earn Your Certificate",
                description:
                  "Complete your course and receive a recognized certificate of achievement.",
              },
            ].map((item, index) => (
              <Card key={item.step} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Expanded Course Showcase Section */}
        <section className="py-20 px-4 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Our Courses
          </h2>
          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses
              .filter(
                (course) =>
                  activeCategory === "All" || course.category === activeCategory
              )
              .map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>
                          <Users className="inline mr-1" size={16} />{" "}
                          {course.students.toLocaleString()} students
                        </span>
                        <span>
                          <Star
                            className="inline mr-1"
                            size={16}
                            fill="currentColor"
                          />{" "}
                          {course.rating}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
          <div className="text-center mt-12">
            <Link href={"/courses"} className={buttonVariants()}>
              View All Courses
            </Link>
          </div>
        </section>

        {/* Expanded Features Section */}
        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-20 px-4 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full flex flex-col ${plan.popular ? "border-primary" : ""}`}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.name !== "Enterprise" && (
                        <span className="text-muted-foreground"> /month</span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="text-primary mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Us"
                        : "Get Started"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Expanded Testimonials Section with Carousel */}
        <section className="py-20 px-4 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.name}>
                    <Card className="h-full">
                      <CardHeader className="flex flex-col items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full mb-4"
                        />
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Partners/Accreditations Section */}
        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Partners and Accreditations
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-28"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Call-to-Action Section with FAQ */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of students and transform your career today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-xs bg-primary-foreground text-primary"
              />
              <Button size="lg" variant="secondary">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="outline-none border-none">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-start">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
