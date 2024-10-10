// ./components/NavigationBar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/modetoggle";
import React from "react";

interface NavigationBarProps {
  glowAbout: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ glowAbout }) => {
  const pathname = usePathname();

  return (
    <nav className="shadow w-full">
      <div className="flex flex-row items-center h-16 mx-auto px-4">
        
        {/* Left - Horizontal Line */}
        <div className="flex-grow border-t border-gray-800 dark:border-white" style={{ maxWidth: "10vw" }}></div>
        
        {/* Center - Navigation Links with Divider */}
        <div className="flex items-center justify-center space-x-4 mx-10" style={{ maxWidth: "25vw" }}>
          {/* ABOUT Link */}
          <Link href="/about">
            <div
              className={`px-2 py-2 rounded-md text-sm ${
                pathname === "/about" ? "text-red-500" : "text-gray-700 dark:text-gray-300"
              }`}
              style={{
                fontSize: '24px',
                textShadow: glowAbout
                  ? '0 0 10px rgba(220, 91, 71, 0.8), 0 0 20px rgba(220, 91, 71, 0.8)'
                  : 'none',
                transition: 'text-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/about" && !glowAbout) {
                  e.currentTarget.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/about" && !glowAbout) {
                  e.currentTarget.style.textShadow = 'none';
                }
              }}
            >
              ABOUT
            </div>
          </Link>
          
          <div style={{ fontSize: '18px' }}>|</div>
          
          {/* QUIZ Link */}
          <Link href="/quiz">
            <div
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                pathname === "/quiz" ? "text-red-500" : "text-gray-700 dark:text-gray-300"
              }`}
              style={{
                fontSize: '24px',
                textShadow: pathname === "/quiz" 
                  ? '0 0 10px rgba(220, 91, 71, 0.8), 0 0 20px rgba(220, 91, 71, 0.8)'
                  : 'none',
                transition: 'text-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/quiz") {
                  e.currentTarget.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/quiz") {
                  e.currentTarget.style.textShadow = 'none';
                }
              }}
            >
              QUIZ
            </div>
          </Link>
          
          <div style={{ fontSize: '18px' }}>|</div>
          
          {/* CONTACT Link */}
          <Link href="/contact">
            <div
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                pathname === "/contact" ? "text-red-500" : "text-gray-700 dark:text-gray-300"
              }`}
              style={{
                fontSize: '24px',
                textShadow: pathname === "/contact" 
                  ? '0 0 10px rgba(220, 91, 71, 0.8), 0 0 20px rgba(220, 91, 71, 0.8)'
                  : 'none',
                transition: 'text-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/contact") {
                  e.currentTarget.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/contact") {
                  e.currentTarget.style.textShadow = 'none';
                }
              }}
            >
              CONTACT
            </div>
          </Link>
        </div>

        {/* Right - Horizontal Line */}
        <div className="flex-grow border-t border-gray-800 dark:border-white"></div>
        
        {/* Mode Toggle */}
        <div className="ml-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
