"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full mt-[28px] bg--900/10 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center justify-start h-full w-full text-center text-[220px] leading-28">
        <h1 className="relative">
          <span className="flex items-center justify-center -rotate-4 -z-10">
            <Image
              src="/pins.gif"
              width={250}
              height={250}
              loading="eager"
              unoptimized
              alt=""
              className="rotate-200 scale-y-[-1] -z-10 translate-x-1/3"
            />
            <span className="">PRACHI</span>
            <Image
              src="/pins.gif"
              width={250}
              height={250}
              loading="eager"
              unoptimized
              alt=""
              className="rotate-[5deg] -z-10 -translate-x-1/4"
            />
          </span>{" "}
          <div className="relative">
            <div className="inline-block -rotate-6">SAYS</div>{" "}
            <div className="inline-block rotate-12 scale-125">HI</div>
          </div>
        </h1>
        <div className="flex flex-row items-center justify-center h-full w-full">
          <Image
            src="/worker.gif"
            width={600}
            height={600}
            alt=""
            className="-translate-y-1/6 mr-auto size-[680px]"
          />
          <div className="flex flex-col items-center justify-center h-fit w-full text-4xl gap-5 self-start my-20">
            <div className="flex flex-row items-start justify-start w-full h-fit">
              <Image
                src="/asset/asset-8.gif"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <div>
                <div className="inline-block text-4xl w-full">
                  <div className="w-full text-left">
                    <span className="text-6xl">2X</span>{" "}
                    <Image
                      src="/icons/winner.png"
                      width={60}
                      height={60}
                      alt=""
                      className="inline-block -translate-y-1/10 -mx-1 animate-dance"
                    />{" "}
                    Smart India Hackathon Winner:{" "}
                  </div>
                </div>{" "}
                <span className="relative group">
                  <Image
                    src="/icons/sih.png"
                    width={60}
                    height={60}
                    alt=""
                    className="inline-block -translate-y-1/10 animate-blink"
                  />{" "}
                  <span className="text-6xl">1</span>/50,000 Teams in{" "}
                  <Image
                    src="/icons/flag.png"
                    width={100}
                    height={100}
                    alt=""
                    className="inline-block absolute bottom-0 -z-10 -translate-x-1/10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />{" "}
                  India
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start w-full h-fit bg--900/20 leading-[120%] text-left">
              <Image
                src="/asset/asset-8.gif"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <div className="flex flex-row items-start justify-start">
                <div className="text-5xl w-fit whitespace-nowrap">Top 100:</div>
                <div className="relative">
                  <Image
                    src="/icons/google.png"
                    width={120}
                    height={120}
                    alt=""
                    className="inline-block animate-scaling"
                  />{" "}
                  Solution Challenge
                  <span className="relative inline-block">
                    {" "}
                    Against 64,000 Teams in{" "}
                    <span className="relative group">
                      <Image
                        src="/icons/flag.png"
                        width={120}
                        height={120}
                        alt=""
                        className="inline-block absolute bottom-0 -z-10 opacity-80 scale-x-125 scale-y-125 -translate-y-1  group-hover:opacity-100 transition-opacity duration-300"
                      />{" "}
                      India
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-full h-fit">
              <Image
                src="/asset/asset-8.gif"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <span>
                <span className="text-5xl relative">
                  World{" "}
                  <Image
                    src="/icons/earth.png"
                    width={70}
                    height={70}
                    alt=""
                    className="inline-block animate-spin opacity-75 -mx-2"
                  />{" "}
                  Finalist
                </span>{" "}
                IEEE Yesist{" "}
                <Image
                  src="/icons/ieee.png"
                  width={60}
                  height={60}
                  alt=""
                  className="inline-block opacity-75 animate-bouncing"
                />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
