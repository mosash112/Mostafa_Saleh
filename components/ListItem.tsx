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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gradient-to-b from-foreground/70 to-foreground hover:bg-navbar hover:text-primary focus:bg-navbar focus:text-primary",
                        className!
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {description}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default ListItem;