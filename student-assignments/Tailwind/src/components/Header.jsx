import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react"; // آیکون منو و بستن

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full container mx-auto flex justify-between items-center flex-row-reverse p-5 md:flex-row">
      <article>
        <span className="font-bold">Tailwind</span> css
      </article>

      <article className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"bg-white"}>
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4 p-3">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Components</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Documentation</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Blocks</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuLink>About</NavigationMenuLink>
            <NavigationMenuLink>Blog</NavigationMenuLink>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </article>

      <article className="hidden md:flex gap-2.5">
        <Button className={"text-black bg-white hover:bg-primary/10"}>
          log in
        </Button>
        <Button>sign in</Button>
      </article>

      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-72 ml-2 bg-white shadow-md p-5 flex flex-col gap-4 md:hidden">
          <NavigationMenu className={"w-full"}>
            <NavigationMenuList className={"flex flex-col w-full"}>
              <ul className="grid w-[200px] gap-4 p-3">
                <li>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Blog</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </li>
              </ul>
              <div className="w-full h-[1px] bg-black m-auto opacity-25"></div>
              <ul className="grid w-[200px] gap-4 p-3">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Components</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Documentation</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Blocks</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 mt-4 justify-center">
            <Button className={"text-black bg-white hover:bg-primary/10"}>
              log in
            </Button>
            <Button>sign in</Button>
          </div>
        </div>
      )}
    </header>
  );
}
