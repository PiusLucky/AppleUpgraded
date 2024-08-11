"use client"

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay"


function CarouselSection() {
  const images = [
    "/images/cal_0.png",
    "/images/cal_1.jpg",
    "/images/cal_2.png",
  ];

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [autoplay, setAutoplay] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <section>
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi} plugins={autoplay?[
        Autoplay({
          delay: 2000,
        }),
      ]: []}>
        <CarouselContent className="">
          {images.map((imgSrc, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-3/3">
              <div className="p-1">
                <img src={imgSrc} alt="carousel" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-between my-[10px] mx-[34px]">
        <div></div>
        <div className="flex gap-[14px]"> 
         {images.map((_, index) => (
          <div key={index} className={cn("w-[10px] h-[10px] rounded-full", index === current - 1? "bg-black/80": "bg-black/40")}></div>
         ))}
        </div>
        <div onClick={() => setAutoplay(!autoplay)} className="hover:cursor-pointer">
          {!autoplay?
            <img src="/images/play_icon.svg"  />
          :
            <p className="text-red-500">Stop</p>
          }
          
        </div>
      
      </div>


    </section>
  );
}

export default CarouselSection;
