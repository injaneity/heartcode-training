// components/navbar/navigation-bar.tsx

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ModeToggle } from "@/components/modetoggle";

export function NavigationBar() {
  return (
    <NavigationMenu className="sticky top-0 z-50 flex flex-row justify-between items-center w-full h-16 px-5">
      {/* Navigation Items */}
      <div className="flex flex-row space-x-4 overflow-x-auto">
        <NavigationMenuItem>
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Add more NavigationMenuItem components as needed */}
        <NavigationMenuItem>
          <Link href="/about-me" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/quiz" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Quiz
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Add additional items to enable horizontal scrolling */}
      </div>

      {/* Mode Toggle */}
      <ModeToggle />
    </NavigationMenu>
  );
}
