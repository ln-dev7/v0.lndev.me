import Link from "next/link";
import { motion } from "framer-motion";
import { container, item } from "../animation";

export default function Contact() {
  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="my-96 p-1 font-archivo overflow-hidden ">
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-9xl text-6xl lg:text-right text-center"
        >
          Let's Talk
        </motion.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="font-latoBold  lg:text-6xl text-2xl underline">
          <motion.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://twitter.com">Twitter </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://instagramotion.com">Instagram</Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://dribbble.com"> Dribbble</Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://gmail.com"> Email</Link>
              </motion.li>
            </div>
          </motion.ul>
        </div>
      </div>
    </motion.main>
  );
}
