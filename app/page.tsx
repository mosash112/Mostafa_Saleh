import TitleRotator from "@/components/MyTitles";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4 lg:mx-12 flex flex-col flex-1 lg:flex-row items-center justify-center gap-10">
      <div className="flex flex-col flex-1 justify-center my-5 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-down font-outfit tracking-tight leading-tight">
          {"Hi, I'm Mostafa Saleh"}
        </h1>
        <div className="text-2xl opacity-90 mb-2">
          <TitleRotator />
        </div>
        <p className="text-base md:text-lg mt-4 mb-8 font-medium animate-fade-up !leading-[1.8] text-foreground/80">
          Dedicated software engineer with experience in developing
          high-quality applications and solutions. Adept at all phases of the
          development lifecycle from requirements analysis and design to
          implementation, testing, and deployment. Passionate about learning new
          technologies and tools to improve efficiency and productivity.
        </p>
        <p className="mb-4 font-bold animate-fade-up text-primary uppercase tracking-widest text-sm">Want to hire me?</p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
          <a
            href={process.env.NEXT_PUBLIC_BASE_URL + "/Mostafa Ahmed Saleh - feb2026.pdf"}
            download="Mostafa Ahmed Saleh - feb2026.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              className="w-full px-8 h-12 text-lg font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform"
            >
              Get my CV
            </Button>
          </a>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant={"outline"}
              className="w-full px-8 h-12 text-lg font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              {"Let's Talk"}
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 mt-8 animate-fade-up">
          <Link href="https://github.com/mosash112">
            <Button
              variant={"outline"}
              className="w-12 h-12 p-0 border-2 border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/mostafa-saleh-832271213/">
            <Button
              variant={"outline"}
              className="w-12 h-12 p-0 border-2 border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
            </Button>
          </Link>
          <Link href="https://www.facebook.com/mostafa.saleh.2000/">
            <Button
              variant={"outline"}
              className="w-12 h-12 p-0 border-2 border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center animate-fade-left">
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 animate-pulse" />
          <Image
            src={process.env.NEXT_PUBLIC_BASE_URL + "/imgs/home-3.png"}
            alt="Mostafa Saleh"
            width={500}
            height={500}
            className="rounded-3xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
