import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full mt-[40px] bg--900/10 max-w-7xl mx-auto">
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
        <div className="flex flex-row items-start justify-center h-full w-full bg--900">
          <Image
            src="/worker.gif"
            width={600}
            height={600}
            alt=""
            className="-translate-y-1/6 mr-auto"
          />
          <p className="text-left text-2xl my-10">
            I am a Fourth Year Computer Science Undergrad at M.I.E.T. Working as
            a Software Engineer Intern at Scorora. I've built award-winning
            products at the intersection of Web Development and A.I. Ranked 1 in
            India against 50,000 teams in Smart India Hackathon. World Finalist
            in IEEE YESIST Hackathon 2025. Top 100 out of 64,000 teams across
            India in Google Solution Challenge 2025. Passionate about crafting
            scalable and accessible interfaces, I work with React.js, Tailwind
            CSS, JavaScript, and FastAPI, while exploring CV, NLP, and
            Generative AI. While you're here, feel free to check out my projects
            or get in touch.
          </p>
        </div>
      </div>
    </section>
  );
}
