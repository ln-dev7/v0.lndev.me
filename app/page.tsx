import { Github, Linkedin, Twitter } from "lucide-react";
import { projects } from "@/constants/projects";
import { awards } from "@/constants/awards";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-slate-50 px-4 py-12 flex flex-col items-center gap-6 w-full min-h-screen">
      <header className="mx-auto w-full max-w-[640px] flex gap-4 justify-between">
        <a className="flex items-center space-x-2 cursor-pointer" href="/">
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
          <h2 className="text-xl">{">> "}Projects</h2>
          <ul className="w-full flex flex-col items-start space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="w-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 flex flex-col items-start space-y-1 w-full duration-300 hover:bg-zinc-900"
                >
                  <span className="underline underline-offset-4">
                    {project.name}
                  </span>
                  <span className="lowercase text-md">{project.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col items-start space-y-5">
          <h2 className="text-xl">{">> "}Awards</h2>
          <ul className="flex w-full flex-col items-start space-y-4">
            {awards.map((award, index) => (
              <li key={index} className="w-full">
                <a
                  href={award.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 flex flex-col items-start space-y-1 w-full duration-300 hover:bg-zinc-900"
                >
                  <span className="underline underline-offset-4">
                    {award.name}
                  </span>
                  <span className="lowercase text-md">{award.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="mx-auto w-full max-w-[640px] flex items-center justify-start border-t border-zinc-900 border-dashed py-6">
        <a
          href="https://leonelngoya.com"
          target="_blank"
          rel="noreferrer"
          className="opacity-30 text-xs underline underline-offset-2"
        >
          {"-> "}Coded by Leonel Ngoya
        </a>
      </div>
    </div>
  );
}
