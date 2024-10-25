import { Star, Users, Book, Trophy, ArrowRight, Check } from "lucide-react";
// Type for Navigation Items
export interface NavItem {
  name: string;
  link: string;
}

// Type for Categories
export type Category = string;

// Type for Feature Item
export interface Feature {
  icon: any;
  title: string;
  description: string;
}

// Type for Testimonial
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

// Type for Pricing Plan
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

// Type for Partner
export interface Partner {
  name: string;
  logo: string;
}

// Type for FAQ Item
export interface FAQItem {
  question: string;
  answer: string;
}

// Type for Course
export interface Course {
  title: string;
  category: string;
  students: number;
  rating: number;
  image: string;
}

// Type for Courses on the Courses Page
export interface CourseDetail extends Course {
  id: number;
  instructor: string;
  subcategory: string;
  level: string;
  price: number;
  duration: string;
  skills: string[];
  progress: number;
  enrolled: boolean;
}

export type LongCourse = {
  id: number;
  code: string;
  name: string;
  instructor: string;
  credits: number;
  enrolled: number;
};
// Using the types with data

export const navItems: NavItem[] = [
  { name: "Pricing", link: "/pricing" },
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];

export const categories1: Category[] = [
  "Programming",
  "Data Science",
  "Business",
  "Design",
  "Marketing",
  "...",
];

export const categories: Category[] = [
  "All",
  "Development",
  "Business",
  "Design",
  "Marketing",
  "Personal Development",
];

export const features: Feature[] = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Book,
    title: "Diverse Course Catalog",
    description: "Explore a wide range of subjects to suit your learning goals",
  },
  {
    icon: Trophy,
    title: "Certification",
    description: "Earn recognized certificates to boost your career prospects",
  },
  {
    icon: ArrowRight,
    title: "Self-Paced Learning",
    description: "Study at your own pace and on your own schedule",
  },
  {
    icon: Star,
    title: "Interactive Content",
    description: "Engage with quizzes, projects, and peer discussions",
  },
  {
    icon: Check,
    title: "Lifetime Access",
    description:
      "Enjoy unlimited access to course materials even after completion",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Software Developer",
    content:
      "This platform transformed my career. The courses are top-notch and the instructors are fantastic.",
    image: "/image.png",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Specialist",
    content:
      "I have taken several courses here and each one has been incredibly valuable. Highly recommended!",
    image: "/image.png",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    content:
      "The design courses helped me land my dream job. The practical projects were especially useful.",
    image: "/image.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    content:
      "As a business owner, the insights I gained from the courses here have been invaluable. Great investment!",
    image: "/image.png",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      "Access to 100+ courses",
      "Basic certifications",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "Access to all courses",
      "Advanced certifications",
      "Priority email support",
      "Live Q&A sessions",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom course creation",
      "Dedicated account manager",
      "API access",
      "Advanced analytics",
    ],
    popular: false,
  },
];

export const partners: Partner[] = [
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original-wordmark.svg",
  },
  {
    name: "Amazone",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  {
    name: "Github",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for an account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately!",
  },
  {
    question: "Are the certificates recognized?",
    answer:
      "Yes, our certificates are industry-recognized and can be added to your LinkedIn profile or resume to showcase your skills.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Our platform is fully responsive and we have mobile apps for both iOS and Android for learning on-the-go.",
  },
  {
    question: "What if I am not satisfied with a course?",
    answer:
      "We offer a 30-day money-back guarantee. If you are not satisfied with a course, you can request a full refund within the first 30 days of purchase.",
  },
];

export const longCourcesCategories: Category[] = [
  "All Courses",
  "Computer Science",
  "Mathematics",
  "Literature",
  "History",
  "Science",
];

export const longCourses: LongCourse[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    instructor: "Dr. John Doe",
    credits: 3,
    enrolled: 150,
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus I",
    instructor: "Prof. Jane Smith",
    credits: 4,
    enrolled: 120,
  },
  {
    id: 3,
    code: "LIT105",
    name: "World Literature",
    instructor: "Dr. Emily Brown",
    credits: 3,
    enrolled: 80,
  },
  {
    id: 4,
    code: "HIST202",
    name: "Modern World History",
    instructor: "Prof. Michael Johnson",
    credits: 3,
    enrolled: 100,
  },
  {
    id: 5,
    code: "BIO101",
    name: "Introduction to Biology",
    instructor: "Dr. Sarah Lee",
    credits: 4,
    enrolled: 130,
  },
  {
    id: 6,
    code: "PHYS201",
    name: "Physics for Engineers",
    instructor: "Prof. Robert Chen",
    credits: 4,
    enrolled: 90,
  },
  {
    id: 7,
    code: "CS202",
    name: "Data Structures and Algorithms",
    instructor: "Dr. Alice Wang",
    credits: 3,
    enrolled: 110,
  },
  {
    id: 8,
    code: "CHEM101",
    name: "General Chemistry",
    instructor: "Prof. David Miller",
    credits: 4,
    enrolled: 140,
  },
];

export const courses: Course[] = [
  {
    title: "Web Development Bootcamp",
    category: "Development",
    students: 15000,
    rating: 4.8,
    image:
      "https://cdn.dribbble.com/users/33073/screenshots/13948086/media/115a6a398820dea51ac704393cea1e9d.png?resize=400x0",
  },
  {
    title: "Origami Mastery",
    category: "Design",
    students: 12000,
    rating: 4.7,
    image:
      "https://www.picmaker.com/templates/_next/image?url=https%3A%2F%2Fstatic.picmaker.com%2Fscene-prebuilts%2Fthumbnails%2FYT-0016.png&w=3840&q=75",
  },
  {
    title: "UX/UI Design Fundamentals",
    category: "Design",
    students: 8000,
    rating: 4.9,
    image:
      "https://img.freepik.com/free-psd/education-template-design_23-2151095367.jpg?semt=ais_hybrid",
  },
  {
    title: "Business Analytics & Intelligence",
    category: "Business",
    students: 10000,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-Ibjq862gUT1ktxgabLfy4DjNWYDlRhrdg&s",
  },
  {
    title: "Machine Learning A-Z",
    category: "Development",
    students: 20000,
    rating: 4.8,
    image:
      "https://365datascience.com/resources/courses/q21akqudbj-the-machine-learning-process-a-z-thumbnail-for-promo.webp",
  },
  {
    title: "Forex Trading Strategies",
    category: "Business",
    students: 5000,
    rating: 4.5,
    image:
      "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/82082/optimized_large_thumb_stage.jpg",
  },
];

export const coursesPage: CourseDetail[] = [
  {
    id: 1,
    title: "Advanced Web Development Bootcamp",
    instructor: "Dr. John Doe",
    category: "Development",
    subcategory: "Web Development",
    level: "Advanced",
    price: 149.99,
    duration: "12 weeks",
    rating: 4.8,
    students: 3500,
    image:
      "https://cdn.dribbble.com/users/33073/screenshots/13948086/media/115a6a398820dea51ac704393cea1e9d.png?resize=400x0",
    skills: ["React", "Node.js", "GraphQL"],
    progress: 75,
    enrolled: true,
  },
  {
    id: 2,
    title: "Machine Learning & AI: Comprehensive Guide",
    instructor: "Prof. Jane Smith",
    category: "Data Science",
    subcategory: "Machine Learning",
    level: "Intermediate",
    price: 199.99,
    duration: "10 weeks",
    rating: 4.9,
    students: 2800,
    image:
      "https://365datascience.com/resources/courses/q21akqudbj-the-machine-learning-process-a-z-thumbnail-for-promo.webp",
    skills: ["Python", "TensorFlow", "Scikit-learn"],
    progress: 30,
    enrolled: true,
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Mike Johnson",
    category: "Marketing",
    subcategory: "Digital Marketing",
    level: "Beginner",
    price: 89.99,
    duration: "8 weeks",
    rating: 4.5,
    students: 5000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZyWVPqX5kNzziqQj1VcLUGdiUHvSDRizgw&s",
    skills: ["SEO", "Social Media", "Content Marketing"],
    progress: 0,
    enrolled: false,
  },
  {
    id: 4,
    title: "UX/UI Design: From Concept to Prototype",
    instructor: "Sarah Lee",
    category: "Design",
    subcategory: "UX/UI",
    level: "Intermediate",
    price: 129.99,
    duration: "6 weeks",
    rating: 4.7,
    students: 1800,
    image:
      "https://img.freepik.com/free-psd/education-template-design_23-2151095367.jpg?semt=ais_hybrid",
    skills: ["Figma", "User Research", "Prototyping"],
    progress: 0,
    enrolled: false,
  },
  {
    id: 5,
    title: "Data Analysis with Python",
    instructor: "Dr. David Wang",
    category: "Data Science",
    subcategory: "Python",
    level: "Beginner",
    price: 79.99,
    duration: "8 weeks",
    rating: 4.6,
    students: 4200,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230510174745/Data-Analysis-with-Python.webp",
    skills: ["Python", "Pandas", "Matplotlib"],
    progress: 50,
    enrolled: true,
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    instructor: "Emily Chen",
    category: "Development",
    subcategory: "Mobile Development",
    level: "Intermediate",
    price: 159.99,
    duration: "10 weeks",
    rating: 4.8,
    students: 2100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUDvfZmbED12pFBLG5el8sasaTgplysEP4A&s",
    skills: ["React Native", "JavaScript", "Mobile UI"],
    progress: 0,
    enrolled: false,
  },
  // Add more courses as needed
];
