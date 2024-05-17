import Link from "next/link"
import { NavigationMenuLink } from "./ui/navigation-menu"
import { cn } from "@/lib/utils"

type Props = {
    className: string,
    title: string,
    description: string,
    href: string,
}

function ListItem({ className, title, description, href }: Props) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors bg-trans text-accent border-2 border-navbar rounded-md hover:bg-primary hover:text-background hover:border-trans",
                        className!
                    )}
                >
                    <div className="text-sm font-bold leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug">
                        {description}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default ListItem;