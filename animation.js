export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { y: "100%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
};

export const skillsItem = {
  hidden: { y: "50%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
};
