// import Image from "next/image";

import TitleRotator from "@/components/MyTitles";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

export default function Home() {
    return (
    <div className="mx-4 lg:mx-12 flex flex-col h-full lg:flex-row">
      <div className="flex flex-col flex-1 justify-center my-5">
        <h1 className="text-5xl font-bold mb-2">{"Hi, I\'m Mostafa Saleh"}</h1>
        <TitleRotator />
        <p className="text-sm mt-4 mb-8 font-semibold">Dedicated junior software engineer with experience in developing high-quality applications and solutions. Adept at all phases of the development lifecycle
          from requirements analysis and design to implementation, testing, and deployment. Passionate about learning new technologies and tools to improve efficiency and productivity. </p>
        <p className="mb-2 font-bold">Want to hire me?</p>
        <div className="flex flex-col md:flex-row">
          <a
            href={process.env.BASE_URL + "/Mostafa_Ahmed_Saleh.pdf"} download="Mostafa_Ahmed_Saleh.pdf">
            <Button
              variant={"outline"}
              className="mb-4 md:mr-12 px-6 text-md font-bold bg-primary text-background border-trans hover:bg-background hover:text-foreground hover:border-foreground">
              Here is my resume
            </Button>
          </a>
          <Link
            href="/contact">
            <Button
              variant={"outline"}
              className="px-6 text-md bg-background text-foreground font-bold border-foreground hover:bg-primary hover:text-background hover:border-trans">
              {"Let\'s Talk"}
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex md:mt-5 lg:absolute lg:bottom-3">
          <Link
            href="https://github.com/mosash112">
            <Button
              variant={"outline"}
              className="mr-8 p-2 border-muted rounded-full bg-trans text-muted hover:border-none hover:bg-primary hover:text-background">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6"
              />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mostafa-saleh-832271213/">
            <Button
              variant={"outline"}
              className="mr-8 p-2 border-muted rounded-full bg-trans text-muted hover:border-none hover:bg-primary hover:text-background">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-6 h-6"
              />
            </Button>
          </Link>
          <Link
            href="https://www.facebook.com/mostafa.saleh.2000/">
            <Button
              variant={"outline"}
              className="mr-8 p-3 border-muted rounded-full bg-trans text-muted hover:border-none hover:bg-primary hover:text-background">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-4 h-4"
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <img src={process.env.BASE_URL + "/imgs/home-3.png"} alt="my image" />
      </div>
    </div>
  );
}
