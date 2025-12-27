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
          <div className="flex flex-col items-center justify-center h-full w-full text-4xl gap-8">
            <div className="flex flex-row items-start justify-start w-full h-fit bg--900/20">
              <Image
                src="/asset/asset-8.gif"
                width={50}
                height={50}
                alt=""
                className=""
              />
              <div>
                <div className="inline-block text-5xl w-full">
                  <div className="w-full text-left">
                    <span className="text-6xl">2X</span> Smart India Hackathon Winner:{" "}
                  </div>
                </div>{" "}
                <span className="relative">
                  1/50,000 Teams in{" "}
                  <Image
                    src="/icons/flag.png"
                    width={100}
                    height={100}
                    alt=""
                    className="inline-block absolute bottom-0 -z-10 -translate-x-1/10 opacity-80"
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
                    className="inline-block"
                  />{" "}
                  Solution Challenge
                  <span className="relative inline-block">
                    {" "}
                    Against 64,000 Teams in{" "}
                    <span className="relative">
                      <Image
                        src="/icons/flag.png"
                        width={120}
                        height={120}
                        alt=""
                        className="inline-block absolute bottom-0 -z-10 opacity-80 scale-x-125 scale-y-125 -translate-y-1"
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
                <span className="text-5xl">World Finalist</span> IEEE Yesist:{" "}
                <span className="relative">
                  <span className="relative">Across the </span>{" "}
                  <Image
                    src="/icons/earth.png"
                    width={70}
                    height={70}
                    alt=""
                    className="absolute top-0 right-0 translate-x-1/1 -translate-y-1/4 animate-spin opacity-75"
                  />{" "}
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <p className="text-left text-2xl my-10">
// I am a Fourth Year Computer Science Undergrad at M.I.E.T. Working as
// a Software Engineer Intern at Scorora. I've built award-winning
// products at the intersection of Web Development and A.I. Ranked 1 in
// India against 50,000 teams in Smart India Hackathon. World Finalist
// in IEEE YESIST Hackathon 2025. Top 100 out of 64,000 teams across
// India in Google Solution Challenge 2025. Passionate about crafting
// scalable and accessible interfaces, I work with React.js, Tailwind
// CSS, JavaScript, and FastAPI, while exploring CV, NLP, and
// Generative AI. While you're here, feel free to check out my projects
// or get in touch.
// </p>

// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Hero() {
//   const DURATION = 3000;

//   const blobImages = [
//     "/blobs/blob-1.webp",
//     "/blobs/blob-2.webp",
//     "/blobs/blob-3.webp",
//   ];
//   const [currentBlobIndex, setCurrentBlobIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBlobIndex((prevIndex) => (prevIndex + 1) % blobImages.length);
//     }, DURATION);

//     return () => clearInterval(interval);
//   }, [blobImages.length]);

//   return (
//     <section className="relative h-screen w-full mt-[40px] bg--900/10 max-w-7xl mx-auto">
//       <div className="flex flex-col items-center justify-start h-full w-full text-center text-[220px] leading-28">
//         <h1 className="relative">
//           <span className="flex items-center justify-center -rotate-4 -z-10">
//             <Image
//               src="/pins.gif"
//               width={250}
//               height={250}
//               loading="eager"
//               unoptimized
//               alt=""
//               className="rotate-200 scale-y-[-1] -z-10 translate-x-1/3"
//             />
//             <span className="">PRACHI</span>
//             <Image
//               src="/pins.gif"
//               width={250}
//               height={250}
//               loading="eager"
//               unoptimized
//               alt=""
//               className="rotate-[5deg] -z-10 -translate-x-1/4"
//             />
//           </span>{" "}
//           <div className="relative">
//             <div className="inline-block -rotate-6">SAYS</div>{" "}
//             <div className="inline-block rotate-12 scale-125">HI</div>
//           </div>
//         </h1>
//         <div className="flex flex-row items-center justify-center h-full w-full">
//           <Image
//             src="/worker.gif"
//             width={600}
//             height={600}
//             alt=""
//             className="-translate-y-1/6 mr-auto"
//           />
//           <div
//             className="relative m-20 mb-40"
//             style={{ width: 500, height: 500 }}
//           >
//             {blobImages.map((src, index) => (
//               <Image
//                 key={src}
//                 src={src}
//                 width={500}
//                 height={500}
//                 alt=""
//                 className={`absolute inset-0 transition-opacity duration-1000 ${
//                   index === currentBlobIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // <p className="text-left text-2xl my-10">
// // I am a Fourth Year Computer Science Undergrad at M.I.E.T. Working as
// // a Software Engineer Intern at Scorora. I've built award-winning
// // products at the intersection of Web Development and A.I. Ranked 1 in
// // India against 50,000 teams in Smart India Hackathon. World Finalist
// // in IEEE YESIST Hackathon 2025. Top 100 out of 64,000 teams across
// // India in Google Solution Challenge 2025. Passionate about crafting
// // scalable and accessible interfaces, I work with React.js, Tailwind
// // CSS, JavaScript, and FastAPI, while exploring CV, NLP, and
// // Generative AI. While you're here, feel free to check out my projects
// // or get in touch.
// // </p>
