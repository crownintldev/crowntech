import React from "react";
import { motion } from "framer-motion";
import leftlogo from "../../../public/assets/images/logoleft.svg";
import logodot from "../../../public/assets/images/logodot.svg";
import logoright from "../../../public/assets/images/logoright.svg";
import Image from "next/image";

const firstImageVariants = {
  initial: { x: "-100vw", opacity: 0 },
   animate: { x: 0, opacity: 1 },
  exit: { opacity: 0, transition: { duration: .6 } },
};

const secondImageVariants = {
  initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: .9 } },
};

const thirdImageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
 exit: { opacity: 0, transition: { duration: .6 } },
};

const transition = {
  duration: 1,
  ease: "easeInOut",
};
const Preloader = () => (
  
  <motion.div className="preloader bg-white " style={{ position: "relative" }}>

    <motion.div
      variants={firstImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: .5 }}
      style={{ position: "absolute", zIndex: 5 }}
    >
      <Image
        src={leftlogo}
        alt="left logo"
        width={200}
        height={200}
        className="image w-96 h-96  "
      />
    </motion.div>
    <motion.div
      variants={secondImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, delay: .9 }}
      style={{ position: "absolute", zIndex: 2 }}
    >
      <Image
        src={logodot}
        loading="lazy"
        alt="logodot"
        width={200}
        height={200}
        className="image w-96 h-96 mb-2"
      />
    </motion.div>
    <motion.div
      variants={thirdImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: .5 }}
      style={{ position: "absolute", zIndex: 3 }}
    >
      <Image
        src={logoright}
        alt="logo right"
        width={200}
        height={200}
        className="image ml-3 w-96 h-96 mb-2"
      />
    </motion.div>

  </motion.div> 
);

export default Preloader;
