"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      (typeof window !== "undefined" &&
        localStorage.getItem("theme") === "dark") ||
      false
  );


  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="w-full bg-background/95 backdrop-blur-md z-[100] sticky top-0 border-b border-border/40 shadow-sm">
      <NavigationMenu className="bg-trans">
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <h1 className="text-2xl font-outfit font-bold tracking-tight text-foreground">
                  Mostafa A. Saleh
                </h1>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              My Portfolio
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-2 bg-background border-2 border-border/50 shadow-2xl rounded-xl z-[101]">
                <li className="col-span-1">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-trans text-foreground border-2 border-foreground p-6 no-underline outline-none
                                             hover:bg-primary hover:text-background hover:border-trans"
                      href="/work/full-stack"
                    >
                      <div className="mb-2 mt-4 text-lg font-bold">Full Stack</div>
                      <p className="text-sm leading-tight text-left">
                        Professional full-stack applications built using React (Next.js, Vite), Node.js (NestJS), and .NET.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="col-span-1 flex flex-col gap-3">
                  <ListItem
                    href="/work/flutter"
                    title="Flutter"
                    description="Mobile applications built using the Flutter framework."
                    className="h-full"
                  />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="">Contact me</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden absolute right-3 top-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FontAwesomeIcon icon={faBars} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 glass-card border-border/50">
            <DropdownMenuItem className="focus:bg-primary focus:text-primary-foreground transition-colors font-medium">
              <Link href="/" legacyBehavior passHref>
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="font-outfit font-bold text-lg text-primary tracking-tight">Portfolio</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/work/full-stack">Full Stack</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/work/flutter">Flutter</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-primary" />
            <DropdownMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                Contact me
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        onClick={() => toggleTheme()}
        className="hidden md:flex md:absolute md:right-12 top-0 py-1 px-2 bg-trans text-navbar-foreground hover:bg-accent"
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="xl" />
        )}
      </Button>
    </div>
  );
}
