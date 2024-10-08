"use client"; // Must be the first line

import React from "react";
import Image from "next/image"; // Added import for Image
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import graph2 from "@/app/assets/graph2.png"

export default function AboutMe() {
  return (
    <>
      {/* Accordion Section */}
      <Image src={graph2} alt="Graph Illustration" width={500} height={300} />
      <h1>Hi! I&#39;m Zane</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What am I studying?</AccordionTrigger>
          <AccordionContent>
            I&#39;m studying Computer Science at Singapore Management University!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What hobbies do I have?</AccordionTrigger>
          <AccordionContent>
            Outside of school, I enjoy playing the flute, and playing football with my friends.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Contact Me</AccordionTrigger>
          <AccordionContent>
            You can find me on email at zane.chee.2023@scis.smu.edu.sg
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
