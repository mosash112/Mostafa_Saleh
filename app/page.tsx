// import Image from "next/image";

import TitleRotator from "@/components/MyTitles";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

export default function Home() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="mx-4 lg:mx-12 flex flex-col h-full lg:flex-row">
      <div className="flex flex-col flex-1 justify-center my-5">
        <h1 className="text-5xl font-bold mb-2">{"Hi, I\'m Mostafa Saleh"}</h1>
        <TitleRotator />
        <p className="text-sm mt-4 mb-8">Dedicated full stack developer with experience in developing high-quality applications and solutions. Adept at all phases of the development lifecycle
          from requirements analysis and design to implementation, testing, and deployment. Passionate about learning new technologies and tools to
          improve efficiency and productivity. </p>
        <div className="flex">
          <Link
            href="/">
            <Button
              variant={"outline"}
              className="mr-12 px-6 text-md bg-navbar text-primary border-primary hover:border-navbar hover:bg-primary hover:text-navbar">
              Hire Me
            </Button>
          </Link>
          <Link
            href="/contact">
            <Button
              variant={"outline"}
              className="px-6 text-md bg-primary text-navbar border-navbar hover:border-primary hover:bg-navbar hover:text-primary">
              {"Let\'s Talk"}
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex md:mt-5 lg:absolute lg:bottom-3">
          <Link
            href="https://github.com/mosash112">
            <Button
              variant={"outline"}
              className="mr-8 p-2 border-navbar rounded-full text-navbar hover:border-primary hover:bg-navbar hover:text-primary">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6"
              />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mostafa-saleh-832271213/">
            <Button
              variant={"outline"}
              className="mr-8 p-2 border-navbar rounded-full text-navbar hover:border-primary hover:bg-navbar hover:text-primary">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-5"
              />
            </Button>
          </Link>
          <Link
            href="https://www.facebook.com/mostafa.saleh.2000/">
            <Button
              variant={"outline"}
              className="mr-8 p-3 border-navbar rounded-full text-navbar hover:border-primary hover:bg-navbar hover:text-primary">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-3"
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <img src={process.env.BASE_URL + "/imgs/home-1.png"} alt="" />
      </div>
    </div>
  );
}
