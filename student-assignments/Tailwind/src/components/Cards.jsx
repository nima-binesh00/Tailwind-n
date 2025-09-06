import { useState } from "react";

function Card({ image, title, desc }) {
  return (
    <article
      className={`flex justify-between gap-4 p-4 border cursor-pointer transition-shadow duration-300 hover:shadow-2xl `}
    >
      <div
        className={`bg-[url(${image})] bg-center w-52 impo h-16 rounded-b-full`}
      ></div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-pretty text-gray-600 text-sm">{desc}</p>
      </div>
    </article>
  );
}

export default function Cards() {
  return (
    <section>
      <div className="ml-11">
        <h2 className="text-[30px] font-extrabold italic">
          Everything you need to start a website
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consequuntur.
        </p>
      </div>

      <section className="grid mt-10 p-10 gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          image="/images/nextjs.png"
          title="Performance Optimization"
          desc="Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed."
        />
        <Card
          image="/images/ts.png"
          title="Performance Optimization"
          desc="Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed."
        />
        <Card
          image="/images/tailwind.png"
          title="Performance Optimization"
          desc="Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed."
        />
        <Card
          image="/images/redux.png"
          title="Performance Optimization"
          desc="Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed."
        />
        <Card
          image="/images/react.svg"
          title="Performance Optimization"
          desc="Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed."
        />
        <Card
          image="/images/react.png"
          title="Performance Optimization"
          desc="Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed."
        />
      </section>
      <h2 className="text-3xl gap-x-16 text-center mt-3">
        Works with your technologies
      </h2>
      <article className="flex justify-center mt-14 ">
        <div className=" hover:scale-125 transition duration-700 ease-in-out bg-[url(/images/react.png)] bg-center w-24 impo h-11 rounded-b-full "></div>
        <div className=" hover:scale-125 transition duration-700 ease-in-out bg-[url(/images/js.png)] bg-center w-24 impo h-11 rounded-b-full "></div>
        <div className=" hover:scale-125 transition duration-700 ease-in-out bg-[url(/images/nextjs.png)] bg-center w-24 impo h-11 rounded-b-full "></div>
        <div className=" hover:scale-125 transition duration-700 ease-in-out bg-[url(/images/redux.png)] bg-center w-24 impo h-11 rounded-b-full "></div>
        <div className=" hover:scale-125 transition duration-700 ease-in-out bg-[url(/images/tailwind.png)] bg-center w-24 impo h-11 rounded-b-full "></div>
        <div className=" hover:scale-125 transition duration-700 ease-in-out bg-[url(/images/ts.png)] bg-center w-24 impo h-11 rounded-b-full "></div>
      </article>
    </section>
  );
}
