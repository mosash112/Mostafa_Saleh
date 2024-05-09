// import Image from "next/image";

import TitleRotator from "@/components/MyIntro";

export default function Home() {
  return (
    <div className="flex justify-center items-evenly h-full">
      <div className="ml-12 flex flex-col flex-1 justify-center">
        <h1 className="text-5xl font-bold mb-2">Hi, I'm Mostafa Saleh</h1>
        <TitleRotator />
        <p>Dedicated full stack developer with experience in developing high-quality applications and solutions. Adept at all phases of the development lifecycle
          from requirements analysis and design to implementation, testing, and deployment. Passionate about learning new technologies and tools to
          improve efficiency and productivity. </p>
      </div>
      <div className="flex-1">

      </div>
    </div>
  );
}
