import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-full flex flex-col mt-10">
      <section className="w-[70%] m-auto bg-black text-white flex flex-col gap-14 p-16 rounded-2xl">
        <h2 className="  italic text-center text-4xl md:text-6xl">
          Build faster websites
        </h2>
        <p className="text-center">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </p>
        <Button className={"w-20 text-center m-auto"}>get started</Button>
      </section>
      <p className="italic m-auto text-center mt-24">
        Copyright © 2024. All rights reserved
        <br />
        Made by Web3Templates
      </p>
    </div>
  );
}
