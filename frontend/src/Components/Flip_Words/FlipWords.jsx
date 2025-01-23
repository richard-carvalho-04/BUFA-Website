import React from "react";
import { FlipWord } from "../ui/flip-words";

export function FlipWords() {
  const words = ["BUFA", "Belgaum United ","Football Academy"];

  return (
    (<div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-y-5 md:h-24 justify-center items-center px-4 text-5xl font-normal text-neutral-600 dark:text-neutral-400 mb-10">
        <p className="col-span-3 md:text-right text-center">Welcome to </p>
        <img className="inline w-20 h-20 m-auto col-span-1" src="/images/logo.png" alt="" />
        <div className="md:relative">
          <FlipWord words={words} className="col-span-3" />
        </div>
        
    </div>
           <p className="text-xl text-center"> Explore opportunities, connect with the best, and unleash your potential.</p>
    </div>
  )
  );
}
