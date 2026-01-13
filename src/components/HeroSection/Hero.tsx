"use client";

import Image from "next/image";
import InlineImage from "@/src/components/common/InlineImage";
import { BackgroundImageProvider } from "@/src/components/common";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-full w-full">
      <section className="relative h-screen w-11/12 max-w-[1400px] mx-auto overflow-x-hidden">
        <div className="font-more-sugar flex flex-row items-center justify-center h-fit w-11/12 mx-auto gap-x-4 py-2">
          <Link
            className="relative group flex items-center gap-x-2"
            href="https://www.linkedin.com/in/prachi2k5sharma"
            target="_blank"
          >
            <InlineImage
              src="/header/linkedin-icon.png"
              width={100}
              height={102}
              alt=""
              className="aspect-100/102 w-7 md:w-10"
            />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-40 h-full py-3 transition-all duration-1000 text-base md:text-xl font-medium">
              LinkedIn
            </span>
          </Link>
          <Link
            className="relative group flex items-center gap-x-2"
            href="https://github.com/Prachi04Sharma"
            target="_blank"
          >
            <InlineImage
              src="/header/github-icon.png"
              width={256}
              height={250}
              alt=""
              className="aspect-256/250 w-7 md:w-10"
            />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-40 h-full py-3 transition-all duration-1000 text-base md:text-xl font-medium">
              GitHub
            </span>
          </Link>
          <Link
            className="relative group flex items-center gap-x-2"
            href="https://leetcode.com/u/Prachi_04sharma/"
            target="_blank"
          >
            <InlineImage
              src="/header/leetcode-icon-new.png"
              width={100}
              height={121}
              alt=""
              className="aspect-100/121 w-7 md:w-10"
            />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-40 h-full py-3 transition-all duration-1000 text-base md:text-xl font-medium">
              LeetCode
            </span>
          </Link>
          <Link
            className="relative group flex items-center gap-x-2"
            href="/Prachi_Sharma_Resume.pdf"
            target="_blank"
          >
            <InlineImage
              src="/header/resume-icon.png"
              width={100}
              height={120}
              alt=""
              className="aspect-100/120 w-7 md:w-10"
            />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-40 h-full py-3 transition-all duration-1000 text-base md:text-xl font-medium">
              Resume
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-start h-full w-full text-center text-[60px] sm:text-[120px] md:text-[120px] lg:text-[180px] leading-2">
          <h1 className="relative">
            <span className="flex items-center justify-center -rotate-4 -z-10">
              <Image
                src="/pins.gif"
                width={250}
                height={250}
                loading="eager"
                unoptimized
                alt=""
                className="rotate-200 scale-y-[-1] -z-10 translate-x-1/3 max-sm:size-30 max-md:size-40"
              />
              <span>PRACHI</span>
              <Image
                src="/pins.gif"
                width={250}
                height={250}
                loading="eager"
                unoptimized
                alt=""
                className="rotate-[5deg] -z-10 -translate-x-1/4 max-sm:size-30 max-md:size-40"
              />
            </span>{" "}
            <div className="relative">
              <div className="inline-block -rotate-6">SAYS</div>{" "}
              <div className="inline-block rotate-12 scale-125">HI</div>
            </div>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center h-full w-fit font-more-sugar md:mt-10">
            <Image
              src="/worker.gif"
              width={600}
              height={600}
              alt=""
              className="-translate-y-1/10 md:-translate-y-1/6 md:mr-auto w-full sm:size-[450px] md:size-[400px] lg:size-[550px] xl:size-[600px]"
            />
            <div className="flex flex-col items-start justify-start h-fit w-fit text-lg md:text-xl font-medium lg:text-2xl xl:text-3xl gap-3 md:gap-5 self-start md:my-20 max-md:-translate-y-1/8">
              <div className="text-left flex flex-row items-start justify-start">
                <Image
                  src="/asset/asset-8.gif"
                  alt="Winner"
                  width={60}
                  height={60}
                  className="max-lg:size-8 max-lg:mt-4 max-sm:mt-0"
                />
                <span>
                  2X{" "}
                  <InlineImage
                    src="/icons/winner.png"
                    width={60}
                    height={60}
                    alt=""
                    className="inline-block -translate-y-1/10 -mx-1 animate-dance max-sm:size-10"
                  />{" "}
                  Smart India Hackathon Winner:
                  <br className="max-xl:hidden" />
                  <InlineImage
                    src="/icons/sih.png"
                    width={60}
                    height={60}
                    alt=""
                    className="-translate-y-1/10 hover:animate-blink max-sm:size-10"
                  />{" "}
                  1/50,000 Teams in{" "}
                  <BackgroundImageProvider
                    image={{
                      src: "/icons/flag.png",
                      alt: "India flag",
                    }}
                  >
                    India
                  </BackgroundImageProvider>
                </span>
              </div>
              <div className="text-left flex flex-row items-start justify-start">
                <Image
                  src="/asset/asset-8.gif"
                  alt="Winner"
                  width={60}
                  height={60}
                  className="max-lg:size-8 max-lg:mt-4 max-sm:mt-0"
                />
                <span>
                  Top 100:{" "}
                  <InlineImage
                    src="/icons/google.png"
                    width={256}
                    height={98}
                    alt=""
                    className="inline-block -translate-y-1/10 -mx-1 hover:animate-scaling aspect-256/98 max-sm:w-20 w-40"
                  />{" "}
                  Solution Challenge
                  <br className="max-xl:hidden" /> Against 64,000 Teams in{" "}
                  <BackgroundImageProvider
                    image={{
                      src: "/icons/flag.png",
                      alt: "India flag",
                    }}
                  >
                    India
                  </BackgroundImageProvider>
                </span>
              </div>
              <div className="text-left flex flex-row items-start justify-start">
                <Image
                  src="/asset/asset-8.gif"
                  alt="Winner"
                  width={60}
                  height={60}
                  className="max-lg:size-8 max-lg:mt-4 max-sm:mt-0"
                />
                <span>
                  World{" "}
                  <InlineImage
                    src="/icons/earth.png"
                    width={70}
                    height={70}
                    alt=""
                    className="inline-block -translate-y-1/10 -mx-1 animate-spin max-sm:size-10"
                  />{" "}
                  Finalist IEEE Yesist{" "}
                  <Image
                    src="/icons/ieee.png"
                    width={60}
                    height={60}
                    alt=""
                    className="inline-block opacity-75 hover:animate-bouncing max-sm:size-10"
                  />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
