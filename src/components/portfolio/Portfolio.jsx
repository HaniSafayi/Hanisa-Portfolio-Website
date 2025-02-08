import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Platinum Events",
    img: `${import.meta.env.BASE_URL}hero.png`,
    desc: "This is a Next.js project that features seamless payment processing, capability to purchase tickets for any event and .",
    link: "https://github.com/hanisafayi/Platinum-Events",
  },
  {
    id: 2,
    title: "Zuret Car rental website",
    img: `${import.meta.env.BASE_URL}banner.jpg`,
    desc: "This is a Nest.js project that provides a catalog of available cars, allowing users to select the desired vehicle.",
    link: "https://github.com/hanisafayi/Car-rental-website",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "And many more.. check out my github page!",
    link: "https://github.com/hanisafayi",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>
                  {item.id === 3 ? "Go To GitHub" : "View Project"}
                </button>
              </a>
            ) : (
              <button>{item.id === 3 ? "Go To GitHub" : "View Project"}</button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
