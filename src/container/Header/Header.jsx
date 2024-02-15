import React from "react";
import { easeInOut, motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  }
}


const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Tanbir</h1>
            </div>
          </div>

          
          <div className="tag-cmp app__flex">
            <p className="p-text"><span className="tag-bell">🔔</span> Available for Freelance Work</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text p-bio">As a full-stack developer, I am skilled in both front-end and back-end development, allowing me to create dynamic and responsive web applications. With expertise in a variety of programming languages, frameworks, and tools, I possess a versatile skill set that enables me to take on any project with confidence.</p>
          </div>
          <div className="btn-cmp app__flex">
            <button className="p-text">Download CV</button>
            <button className="p-text">Contact Now</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeInOut }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
       {[images.react, images.javascript, images.git].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
          
        </div>
       ))} 
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
