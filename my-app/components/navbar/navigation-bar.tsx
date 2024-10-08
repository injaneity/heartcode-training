import Link from "next/link";
import { ModeToggle } from "@/components/modetoggle";

export function NavigationBar() {
    return (
      <nav className="shadow w-full" >
          <div className="flex flex-row items-center h-16 mx-auto px-4">
            
            {/* Left - Horizontal Line */}
            <div className="flex-grow border-t border-gray-800 dark:border-white" style={{ maxWidth: "10vw" }}></div>
            
            {/* Center - Navigation Links with Divider */}
            <div className="flex items-center justify-center space-x-4 mx-4" style={{ maxWidth: "25vw" }}>
              <Link href="/about">
                <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-md text-sm font-medium" style={{ fontSize: '24px' }}>
                  ABOUT
                </div>
              </Link>
              <Link href="/quiz">
                <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-md text-sm font-medium" style={{ fontSize: '24px' }}>
                  QUIZ
                </div>
              </Link>
              <Link href="/contact">
                <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-md text-sm font-medium" style={{ fontSize: '24px' }}>
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
  }
  