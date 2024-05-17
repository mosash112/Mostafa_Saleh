"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

const titles = ["Software Engineer", "MERN Stack Developer", "Flutter Android Developer", "Desktop Developer"];

function TitleRotator() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000 })
    )
    return (
        <Carousel plugins={[plugin.current]} opts={{ align: 'start', loop: true, }} className="mb-2">
            <CarouselContent>
                {titles?.map((_, index) => (
                    <CarouselItem key={index}>
                        <h2 className="text-2xl font-bold text-primary">{titles[index]}</h2>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default TitleRotator;


