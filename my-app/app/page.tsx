// pages/Home.tsx or pages/index.tsx

import Image from "next/image";
import img from "@/public/weed.webp";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="w-full h-full" style={{ maxHeight: '100vh' }}>
      <ScrollArea className="w-full h-full">
        <div className="flex flex-row items-center space-x-4 p-4 min-w-max" style={{ minHeight: '96vh' }}>
        <h1 className="text-2xl font-bold whitespace-nowrap">DRUGS ARE BAD</h1>
          <div className="flex-shrink-0">
            <Image src={img} alt="Graph Illustration" width={500} height={300} />
          </div>
          <h3 className="text-lg whitespace-nowrap">This is your lungs on drugs</h3>
          {/* Add more content to enable horizontal scrolling */}
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
}
