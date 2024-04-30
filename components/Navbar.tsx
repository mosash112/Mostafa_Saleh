"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
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
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[1fr_1fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
                                <ListItem href="/work/frontend" title="Front-end">
                                    Re-usable frontend built using react js with bootstrap, Tailwind CSS.
                                </ListItem>
                                <ListItem href="/work/backend" title="Back-end">
                                    Backend apis built using node js with express js, SQL and no-SQL databases.
                                </ListItem>
                            </li>
                            <li className="row-span-3">
                                <ListItem href="/work/frontend" title=".Net Core">
                                    Re-usable frontend built using react js with bootstrap, Tailwind CSS.
                                </ListItem>
                                <ListItem href="/work/backend" title="Flutter">
                                    Backend apis built using node js with express js, SQL and no-SQL databases.
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
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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