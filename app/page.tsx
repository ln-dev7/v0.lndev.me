import { Github, Linkedin, Twitter } from "lucide-react";
import { projects } from "@/constants/projects";
import { awards } from "@/constants/awards";
import { works } from "@/constants/works";
import { funs } from "@/constants/funs";

export default function Home() {
  return (
    <div className="bg-zinc-950 relative overflow-hidden text-slate-50 px-4 py-12 flex flex-col items-center gap-6 w-full min-h-screen">
      <img
        src="/circles.png"
        alt="circles"
        className="opacity-10 absolute -left-[20%] -top-[20%] -rotate-45"
      />
      <img
        src="/circles.png"
        alt="circles"
        className="hidden 2xl:block opacity-10 absolute -bottom-1/4 -right-1/4 rotate-90"
      />
      <header className="mx-auto w-full max-w-[640px] flex gap-4 justify-between">
        <a
          className="flex items-center space-x-2 cursor-pointer"
          href="https://leonelngoya.com"
          target="_blank"
        >
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <span className="text-lg font-bold">lndev</span>
            <span>/ FrontEnd Developer</span>
          </div>
        </a>
        <div className="flex items-center space-x-1">
          <a
            href="https://linkedin.com/in/lndev"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center text-sm font-medium duration-300 hover:bg-zinc-900 rounded-md cursor-pointer"
          >
            <Linkedin className="w-4 h-4 fill-current" />
            <span className="sr-only">@in/lndev</span>
          </a>
          <a
            href="https://twitter.com/ln_dev7"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center text-sm font-medium duration-300 hover:bg-zinc-900 rounded-md cursor-pointer"
          >
            <Twitter className="w-4 h-4 fill-current" />
            <span className="sr-only">@ln_dev7</span>
          </a>
          <a
            href="https://github.com/ln-dev7"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center text-sm font-medium duration-300 hover:bg-zinc-900 rounded-md cursor-pointer"
          >
            <Github className="w-4 h-4 fill-current" />
            <span className="sr-only">@ln-dev7</span>
          </a>
        </div>
      </header>
      <div className="mx-auto w-full max-w-[640px] flex items-center justify-start">
        <span className="opacity-30 text-xs">{">> "}Leonel Ngoya aka LN</span>
      </div>
      <main className="mx-auto w-full max-w-[640px] flex flex-col items-start space-y-8">
        <div className="w-full flex flex-col items-start space-y-5">
          <h2 className="text-xl font-bold">{">> "}Works</h2>
          <ul className="w-full flex flex-col items-start space-y-4">
            {works.map((work, index) => (
              <li key={index} className="w-full">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 flex flex-col items-start space-y-1 w-full duration-300 hover:bg-zinc-900 border border-zinc-900"
                >
                  <span className="underline underline-offset-4 font-bold">
                    {work.name}
                  </span>
                  <span className="lowercase text-md">- {work.poste}</span>
                  <span className="opacity-30 text-xs block self-end">
                    {work.duration}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col items-start space-y-5">
          <h2 className="text-xl font-bold">{">> "}Projects</h2>
          <ul className="w-full flex flex-col items-start space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="w-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 flex flex-col items-start space-y-1 w-full duration-300 hover:bg-zinc-900"
                >
                  <span className="underline underline-offset-4 font-bold">
                    {project.name}
                  </span>
                  <span className="lowercase text-md">
                    {project.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col items-start space-y-5">
          <h2 className="text-xl font-bold">
            {">> "}For fun {":)"}{" "}
          </h2>
          <ul className="w-full flex flex-col items-start space-y-4">
            {funs.map((fun, index) => (
              <li key={index} className="w-full">
                <a
                  href={fun.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 flex flex-col sm:flex-row gap-1 items-start sm:items-center justify-between space-y-1 w-full duration-300 border border-zinc-700 border-dotted hover:bg-zinc-900"
                >
                  <span className="underline underline-offset-4 font-bold">
                    {fun.name}
                  </span>

                  <img
                    className="w-10"
                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${fun.name}`}
                    alt="avatar"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col items-start space-y-5">
          <h2 className="text-xl font-bold">{">> "}Awards</h2>
          <ul className="flex w-full flex-col items-start space-y-4">
            {awards.map((award, index) => (
              <li key={index} className="w-full">
                <a
                  href={award.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 flex flex-col items-start space-y-1 w-full duration-300 hover:bg-zinc-900"
                >
                  <span className="underline underline-offset-4 font-bold">
                    {award.name}
                  </span>
                  <span className="lowercase text-md">{award.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="mx-auto w-full max-w-[640px] flex items-center justify-start border-t border-zinc-900 border-dashed pt-6">
        <a
          href="https://leonelngoya.com"
          target="_blank"
          rel="noreferrer"
          className="opacity-30 w-full h-full text-xs underline underline-offset-2 duration-300 hover:opacity-100"
        >
          {"-> "}Coded by Leonel Ngoya
        </a>
      </div>
      <div className="mx-auto w-full max-w-[640px] flex items-center justify-start border-t border-zinc-900 border-dashed py-6">
        <a href="https://www.buymeacoffee.com/lndev">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a croissant&emoji=🥐&slug=lndev&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
        </a>
      </div>
    </div>
  );
}
