// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     quote: string;
//     name: string;
//     title: string;
//     profile: any;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollerRef = useRef<HTMLUListElement>(null);

//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     // Start animation on mount
//     setStart(true);
//   }, []);

//   const getDirection = () => {
//     return direction === "left" ? "forwards" : "reverse";
//   };

//   const getSpeed = () => {
//     switch (speed) {
//       case "fast":
//         return "20s";
//       case "normal":
//         return "40s";
//       default:
//         return "80s";
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//       style={
//         {
//           "--animation-direction": getDirection(),
//           "--animation-duration": getSpeed(),
//         } as React.CSSProperties
//       }
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.concat(items).map((item, idx) => (
//           <li
//             key={idx}
//             className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 p-8 md:p-16 md:w-[60vw] bg-gray-50 border-gray-300"
//           >
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
//               ></div>
//               <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-gray-900 dark:text-gray-100 font-normal">
//                 {item.quote}
//               </span>
//               <div className="relative z-20 mt-6 flex flex-row items-center">
//                 <span className="flex flex-row gap-1">
//                   <div className="me-3">
//                     <Image
//                       src={item.profile}
//                       width={55}
//                       height={55}
//                       alt="profile"
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <span className="text-xl leading-[1.6] text-gray-900 dark:text-gray-200 font-bold">
//                       {item.name}
//                     </span>
//                     <span className="text-sm leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
//                       {item.title}
//                     </span>
//                   </div>
//                 </span>
//               </div>
//             </blockquote>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // "use client";

// // import React, { useEffect, useRef, useState } from "react";
// // import { cn } from "@/lib/utils";
// // import Image from "next/image";

// // export const InfiniteMovingCards = ({
// //   items,
// //   direction = "left",
// //   speed = "fast",
// //   pauseOnHover = true,
// //   className,
// // }: {
// //   items: {
// //     quote: string;
// //     name: string;
// //     title: string;
// //     profile: any;
// //   }[];
// //   direction?: "left" | "right";
// //   speed?: "fast" | "normal" | "slow";
// //   pauseOnHover?: boolean;
// //   className?: string;
// // }) => {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const scrollerRef = useRef<HTMLUListElement>(null);

// //   const [isDragging, setIsDragging] = useState(false);
// //   const [startX, setStartX] = useState(0);
// //   const [scrollLeft, setScrollLeft] = useState(0);

// //   const speedMultiplier = getSpeedMultiplier(speed);

// //   function getSpeedMultiplier(speed: string) {
// //     switch (speed) {
// //       case "fast":
// //         return 4;
// //       case "normal":
// //         return 2;
// //       case "slow":
// //         return 1;
// //       default:
// //         return 2;
// //     }
// //   }

// //   // Effect to handle continuous scrolling
// //   useEffect(() => {
// //     const scrollInterval = setInterval(() => {
// //       if (!isDragging) {
// //         const scrollAmount =
// //           direction === "left" ? speedMultiplier : -speedMultiplier;
// //         scrollerRef.current!.scrollLeft += scrollAmount;
// //       }
// //     }, 30); // Approximately 33ms for ~30fps

// //     return () => clearInterval(scrollInterval);
// //   }, [isDragging, direction, speedMultiplier]);

// //   // Mouse Events
// //   const handleMouseDown = (e: React.MouseEvent) => {
// //     setIsDragging(true);
// //     setStartX(e.pageX - scrollerRef.current!.offsetLeft);
// //     setScrollLeft(scrollerRef.current!.scrollLeft);
// //     containerRef.current!.style.cursor = "grabbing"; // Change cursor to grabbing
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDragging(false);
// //     containerRef.current!.style.cursor = "default"; // Reset cursor
// //   };

// //   const handleMouseUp = () => {
// //     setIsDragging(false);
// //     containerRef.current!.style.cursor = "default"; // Reset cursor
// //   };

// //   const handleMouseMove = (e: React.MouseEvent) => {
// //     if (!isDragging) return;
// //     const x = e.pageX - scrollerRef.current!.offsetLeft;
// //     const walk = (x - startX) * 2; // Adjust sensitivity for dragging
// //     scrollerRef.current!.scrollLeft = scrollLeft - walk;
// //   };

// //   // Touch Events
// //   const handleTouchStart = (e: React.TouchEvent) => {
// //     setIsDragging(true);
// //     setStartX(e.touches[0].clientX - scrollerRef.current!.offsetLeft);
// //     setScrollLeft(scrollerRef.current!.scrollLeft);
// //     containerRef.current!.style.cursor = "grabbing"; // Change cursor to grabbing
// //   };

// //   const handleTouchEnd = () => {
// //     setIsDragging(false);
// //     containerRef.current!.style.cursor = "default"; // Reset cursor
// //   };

// //   const handleTouchMove = (e: React.TouchEvent) => {
// //     if (!isDragging) return;
// //     const x = e.touches[0].clientX - scrollerRef.current!.offsetLeft;
// //     const walk = (x - startX) * 2; // Adjust sensitivity for dragging
// //     scrollerRef.current!.scrollLeft = scrollLeft - walk;
// //   };

// //   return (
// //     <div
// //       ref={containerRef}
// //       className={cn(
// //         "scroller relative z-20 w-screen overflow-hidden cursor-default [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
// //         className
// //       )}
// //       onMouseDown={handleMouseDown}
// //       onMouseLeave={handleMouseLeave}
// //       onMouseUp={handleMouseUp}
// //       onMouseMove={handleMouseMove}
// //       onTouchStart={handleTouchStart}
// //       onTouchEnd={handleTouchEnd}
// //       onTouchMove={handleTouchMove}
// //     >
// //       <ul
// //         ref={scrollerRef}
// //         className={cn(
// //           "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
// //           pauseOnHover && "hover:[animation-play-state:paused]"
// //         )}
// //       >
// //         {items.concat(items).map((item, idx) => (
// //           <li
// //             key={idx}
// //             className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 p-8 md:p-16 md:w-[60vw] bg-gray-50 border-gray-300"
// //           >
// //             <blockquote>
// //               <div
// //                 aria-hidden="true"
// //                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
// //               ></div>
// //               <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-gray-900 dark:text-gray-100 font-normal">
// //                 {item.quote}
// //               </span>
// //               <div className="relative z-20 mt-6 flex flex-row items-center">
// //                 <span className="flex flex-row gap-1">
// //                   <div className="me-3">
// //                     <Image
// //                       src={item.profile}
// //                       width={55}
// //                       height={55}
// //                       alt="profile"
// //                       className="w-14 h-14 rounded-full object-cover"
// //                     />
// //                   </div>
// //                   <div className="flex flex-col gap-1">
// //                     <span className="text-xl leading-[1.6] text-gray-900 dark:text-gray-200 font-bold">
// //                       {item.name}
// //                     </span>
// //                     <span className="text-sm leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
// //                       {item.title}
// //                     </span>
// //                   </div>
// //                 </span>
// //               </div>
// //             </blockquote>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    profile: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div
      className={cn(
        "relative z-20 w-screen md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 md:left-24 2xl:left-48 z-10 bg-purple-500 hover:bg-purple-500 md:text-black md:bg-white text-white size-10 md:size-16"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4 md:text-black text-white" />
        </Button>
        <ul className="flex w-[90vw] md:w-[60vw]">
          <li
            key={currentIndex}
            className="w-full relative rounded-2xl border border-b-0 flex-shrink-0 p-8 md:p-16 bg-gray-50 border-gray-300 transition-all duration-300 ease-in-out"
            style={{ maxWidth: "800px", height: "400px", margin: "0 auto" }}
          >
            <blockquote className="h-full flex flex-col justify-between">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-gray-900 dark:text-gray-100 font-normal max-h-[200px] mb-4">
                {items[currentIndex]?.quote}
              </span>
              <div className="relative z-20 mt-auto flex flex-row items-center">
                <span className="flex flex-row gap-1">
                  <div className="me-3">
                    <Image
                      src={items[currentIndex]?.profile}
                      width={55}
                      height={55}
                      alt="profile"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl leading-[1.6] text-gray-900 dark:text-gray-200 font-bold">
                      {items[currentIndex]?.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
                      {items[currentIndex]?.title}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        </ul>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 md:right-24 2xl:right-48 z-10 bg-purple-500 hover:bg-purple-500 md:bg-white size-10 md:size-16"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4 text-white md:text-black" />
        </Button>
      </div>
    </div>
  );
};
