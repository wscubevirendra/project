
"use client";

import { Carousel } from "flowbite-react";

export default function Carosel() {
  return (
    <div className="h-80 sm:h-80 xl:h-[600px] 2xl:h-96 ">
      <Carousel slide={false}>
        <img src="img/IMG-20240419-WA0005.jpg" alt="..." />
        <img src="img/IMG-20240419-WA0006.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
