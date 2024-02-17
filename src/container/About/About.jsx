import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { client, urlFor } from "../../client";

import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        A Programmer,<span> A Designer, </span> <br />& <span>An Artist </span>
      </h2>
      <p className="about-para-info">
        Tanbir is a seasoned full-stack web developer based in Kolkata, India.
        With a CS degree from Techno India University, I bring creativity and
        technical expertise to every project. Passionate about improving user
        experiences, I thrive in dynamic environments and enjoy exploring the
        city's food scene in my free time.
        <br />
        <br />
        Fun Fact: My go-to celebration after solving a coding problem? A
        delicious cup of artisanal coffee. ☕️
      </p>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
