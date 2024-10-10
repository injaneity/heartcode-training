// ./components/Landing.tsx

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { NavigationBar } from "@/components/navbar/navigation-bar";
import { FlipWords } from "@/components/ui/flip-words";
import cassetteImg from "@/public/casette.png";

const Landing: React.FC = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleInteraction = () => {
    if (hasInteracted) return; // Prevent further interactions

    setHasInteracted(true);

    if (scrollAreaRef.current) {
      const scrollAmount = scrollAreaRef.current.scrollWidth / 3; // Scroll to left third
      scrollAreaRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      // After scrolling, navigate to /about after a delay matching scroll duration
      setTimeout(() => {
        router.push("/about");
      }, 1000); // Adjust delay as needed
    }
  };

  useEffect(() => {
    if (hasInteracted && scrollAreaRef.current) {
      const handleScroll = () => {
        if (scrollAreaRef.current) {
          const maxScrollLeft = scrollAreaRef.current.scrollWidth - scrollAreaRef.current.clientWidth;
          if (scrollAreaRef.current.scrollLeft < maxScrollLeft / 3) {
            scrollAreaRef.current.scrollLeft = maxScrollLeft / 3;
          }
        }
      };

      const scrollElement = scrollAreaRef.current;
      scrollElement.addEventListener("scroll", handleScroll);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [hasInteracted]);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* NavigationBar with glowAbout prop */}
      <NavigationBar glowAbout={hasInteracted} />

      {/* ScrollArea for horizontal scrolling */}
      <ScrollArea className="w-full h-full" ref={scrollAreaRef} horizontal={true}>
        <div className="flex flex-row items-center space-x-4 p-4 min-w-max" style={{ minHeight: '96vh' }}>
          {/* Cassette Image */}
          <div
            className="flex-shrink-0 relative cursor-pointer"
            onMouseEnter={handleInteraction}
            onClick={handleInteraction}
          >
            <Image src={cassetteImg} alt="Cassette" width={300} height={300} />
            {/* Conditional Text */}
            {hasInteracted && (
              <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2">
                <h1 className="font-bold text-2xl">
                  Taking drugs is not{" "}
                  <span className="text-3xl">
                    <FlipWords words={["bad", "a bad idea", "nice"]} />
                  </span>
                </h1>
              </div>
            )}
          </div>

          {/* Additional Content to Enable Scrolling */}
          <h1 className="text-2xl font-bold whitespace-nowrap">DRUGS ARE BAD</h1>
          <div className="flex-shrink-0">
            <Image src="/weed.webp" alt="Graph Illustration" width={500} height={300} />
          </div>
          <h3 className="text-lg whitespace-nowrap">This is your lungs on drugs</h3>
          {/* More Content to Enable Horizontal Scrolling */}
          <h3 className="text-lg whitespace-nowrap">More Content Here</h3>
          <h3 className="text-lg whitespace-nowrap">More Content Here</h3>
          <h3 className="text-lg whitespace-nowrap">More Content Here</h3>
          <h3 className="text-lg whitespace-nowrap">More Content Here</h3>
          <h3 className="text-lg whitespace-nowrap">More Content Here</h3>
          <h3 className="text-lg whitespace-nowrap">More Content Here</h3>
        </div>
        {/* Horizontal ScrollBar */}
        <ScrollBar orientation="horizontal" className="mt-2" />
      </ScrollArea>
    </div>
  );
};

export default Landing;
