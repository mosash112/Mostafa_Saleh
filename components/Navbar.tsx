"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
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
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
    return (
        <div className="w-full bg-navbar ">
            <NavigationMenu className="ml-4 lg:ml-12">
                <NavigationMenuItem className="list-none">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <h1 className="text-xl">Mostafa A. Saleh</h1>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuList className="hidden md:flex">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>My Portfolio</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[1fr_1fr_1fr] bg-secondary">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-foreground/70 to-foreground p-6 no-underline outline-none focus:shadow-md hover:bg-navbar hover:text-primary focus:bg-navbar focus:text-primary"
                                            href="/work/mern"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                MERN
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
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
                                    <ListItem href="/work/backend"
                                        title=""
                                        description="Work in progress..."
                                        className={""} />
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact me
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
        </div>
    )
}