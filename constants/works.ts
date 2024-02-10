interface Work {
  name: string;
  url: string;
  poste: string;
  duration: string;
  stacks: string[];
}

export const works: Work[] = [
  {
    name: "Survaii",
    duration: "01 / 2024 - Present",
    url: "https://survaii.io",
    poste: "FrontEnd Developer",
    stacks: ["NextJS", "Apollo", "GraphQL", "TypeScript", "TailwindCSS"],
  },
  {
    name: "Gloovee",
    duration: "01 / 2023 - 01 / 2024",
    url: "https://gloovee.com/",
    poste: "FrontEnd Developer",
    stacks: ["NextJS", "TypeScript", "React Native"],
  },
  {
    name: "LPI",
    duration: "04 / 2023 - 09 / 2023",
    url: "https://www.learningplanetinstitute.org/en/",
    poste: "FrontEnd Developer",
    stacks: ["VueJS", "StoryBook"],
  },
  {
    name: "Mboa Digital",
    duration: "06 / 2022 - 04 / 2023",
    url: "https://mboadigital.tech/",
    poste: "Consultant Digital",
    stacks: ["ReactJS", "TypeScript", "StoryBook"],
  },
  {
    name: "Indepedent Freelancer",
    duration: "06 / 2021 - Present",
    url: "https://leonelngoya.com/work",
    poste: "FrontEnd Developer",
    stacks: ["ReactJS", "NextJS"],
  },
];
