"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export type ProjectType = {
  category: string;
  name: string;
  description: string;
  stack?: string[];
  link: string;
  github: string;
  images: string[];
  visibility: boolean;
};

export function Project({
  name,
  description,
  stack,
  link,
  github,
  images,
  visibility,
}: ProjectType) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Card
      className={`project mb-12 m-3 border-none glass-card overflow-hidden rounded-3xl group`}
    >
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-7xl w-full bg-trans border-none shadow-none flex justify-center items-center p-0 [&>button]:hidden">
          <div className="relative w-full">
            <DialogClose className="absolute -top-10 right-2 lg:-right-12 z-50 rounded-full bg-background/90 text-foreground hover:bg-background border-2 border-border p-2 transition-all shadow-md cursor-pointer">
              <X className="w-6 h-6" />
            </DialogClose>
            <Carousel
              opts={{ startIndex: lightboxIndex, loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {images?.map((img, i) => (
                  <CarouselItem key={i} className="flex justify-center items-center w-full">
                    <Image
                      src={process.env.NEXT_PUBLIC_BASE_URL + img}
                      alt="full screen image"
                      className="rounded-lg object-contain w-full h-auto max-h-[85vh]"
                      width={1200}
                      height={800}
                      quality={100}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-background text-foreground border-none left-0 lg:-left-12" />
              <CarouselNext className="bg-background text-foreground border-none right-0 lg:-right-12" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-outfit font-extrabold tracking-tight group-hover:text-primary transition-colors">{name}</CardTitle>
        <CardDescription className="text-foreground text-base">
          {description}
        </CardDescription>
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-bold rounded-full shadow-lg shadow-primary/20">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="w-full flex px-5">
        {images.length > 0 ? (
          <div className="flex-1">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full max-w-xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2">
                {images?.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 sm:basis-1 pl-2 "
                  >
                    <Image
                      src={process.env.NEXT_PUBLIC_BASE_URL + images[index]}
                      alt="project images"
                      className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity w-full h-auto max-h-[280px] object-contain"
                      onClick={() => {
                        setLightboxIndex(index);
                        setLightboxOpen(true);
                      }}
                      width={800}
                      height={500}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-trans border-none" />
              <CarouselNext className="bg-trans border-none" />
            </Carousel>
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex gap-6">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
              View Project
            </a>
          ) : null}
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          ) : null}
        </div>
        <div className="px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-foreground/60 border border-border/50">
          Slide {current} of {count}
        </div>
      </CardFooter>
    </Card>
  );
}
