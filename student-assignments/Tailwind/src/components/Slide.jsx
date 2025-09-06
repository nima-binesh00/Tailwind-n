import React from "react";
import { Button } from "./ui/button";

export default function Slide() {
  return (
    <section className="w-full flex items-center justify-between pl-2.5 gap-x-2 flex-col-reverse lg:flex-row ">
      <article className="flex flex-col gap-4 w-[100%]">
        <h1 className="text-3xl font-bold leading-tight">
          Scalable Apps with Frameworks
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate et neque earum iste hic consequatur nulla deserunt
          architecto numquam!
        </p>
        <div className="flex gap-3 ml-5">
          <Button className=" w-36 hover:bg-primary/10">
            download for free
          </Button>
          <Button className={"text-black bg-white border-black border-1"}>
            git hub repo
          </Button>
        </div>
      </article>

      <div
        className="
    bg-[url('/hero-source.svg')] 
    impo bg-center 
    w-[100%]
    h-[500px]
  "
      ></div>
    </section>
  );
}
