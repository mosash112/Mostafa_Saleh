"use client"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ListItem from "./ListItem"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') || false);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark'); // Persist preference
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="w-full bg-trans sticky top-0">
            <NavigationMenu className="bg-trans">
                <NavigationMenuList className="hidden md:flex">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h1 className="text-xl ">Mostafa A. Saleh</h1>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="">My Portfolio</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[1fr_1fr_1fr] bg-background">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-trans text-foreground border-2 border-foreground p-6 no-underline outline-none
                                             hover:bg-primary hover:text-background hover:border-trans"
                                            href="/work/mern"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-bold">
                                                MERN
                                            </div>
                                            <p className="text-sm leading-tight">
                                                Profissional website built using React js (vite js, next js) and node js.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li className="row-span-3">
                                    <ListItem href="/work/frontend"
                                        title="Front-end"
                                        className="mb-2"
                                        description="Re-usable frontend built using React, Vite and NextJs." />

                                    <ListItem href="/work/backend"
                                        title="Back-end"
                                        description=" Backend apis built using nodeJs and .Net."
                                        className={""} />
                                </li>
                                <li className="row-span-3">
                                    <ListItem href="/work/flutter"
                                        title="Flutter"
                                        description="apps built using Flutter."
                                        className={""} />
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
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                Home
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-primary" />
                        <DropdownMenuLabel>My Portfolio</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/work/mern">
                                MERN
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/work/frontend">
                                Front-end
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/work/backend">
                                Back-end
                            </Link>
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
            <Button onClick={() => toggleTheme()} className="hidden md:flex md:absolute md:right-12 top-0 py-1 px-2 bg-trans text-navbar-foreground hover:bg-accent">
                {theme == 'light'
                    ? <FontAwesomeIcon icon={faMoon} size="xl" />
                    : <FontAwesomeIcon icon={faSun} size="xl" />}
            </Button>
        </div>
    )
}