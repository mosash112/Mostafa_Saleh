"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export type ProjectType = {
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
    images: string[];
}

export function Project({ name, description, link, github, images }: ProjectType) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Card className="project mb-5 m-3 bg-gradient-to-tl from-secondary/30 to-card">
            <CardHeader>
                <CardTitle className="">{name}</CardTitle>
                <CardDescription className="text-card-forground">{description}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex px-5">
                {images.length > 0 ? <div className="flex-1">
                    <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        className="w-full max-w-xl mx-auto"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-2">
                            {images?.map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 sm:basis-1 pl-2 ">
                                    <img src={images[index]} alt="project images" className="rounded-lg" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-transparent border-none" />
                        <CarouselNext className="bg-transparent border-none" />
                    </Carousel>
                    <div className="py-2 text-center text-sm text-card-foreground">
                        Slide {current} of {count}
                    </div>
                </div> : null}
            </CardContent>
            <CardFooter className="flex flex-row gap-10">
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
                {github ? <a href={github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> Github
                </a> : null}
            </CardFooter>
        </Card>
    );
};