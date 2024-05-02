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

export function Navbar() {
    return (
        <div className="w-full bg-navbar">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>My work</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[1fr_1fr_1fr] bg-secondary">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-foreground/70 to-foreground p-6 no-underline outline-none focus:shadow-md hover:bg-navbar hover:text-primary focus:bg-navbar focus:text-primary"
                                            href="/work/mern"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                MERN
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Profissional website built using React js (vite js, next js) and node js.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li className="row-span-3">
                                    <ListItem href="/work/frontend" title="Front-end" className="mb-2">
                                        Re-usable frontend built using React, Vite and NextJs.
                                    </ListItem>
                                    <ListItem href="/work/backend" title="Back-end">
                                        Backend apis built using nodeJs and .Net.
                                    </ListItem>
                                </li>
                                <li className="row-span-3">
                                    <ListItem href="/work/backend" title="">
                                        Work in progress...
                                    </ListItem>
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
                    {/* <NavigationMenuItem>
                    <Link href="/login" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Log in
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gradient-to-b from-foreground/70 to-foreground hover:bg-navbar hover:text-primary focus:bg-navbar focus:text-primary",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"