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

export function Navbar() {
    return (
        <div className="w-full bg-navbar">
            <NavigationMenu className="ml-4 lg:ml-12">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h1 className="text-xl">Mostafa A. Saleh</h1>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
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
        </div>
    )
}