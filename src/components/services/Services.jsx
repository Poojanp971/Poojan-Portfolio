import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand
          <br /> to grow online
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Digital Footprint.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
            A skilled developer proficient in crafting visually appealing and intuitive designs,
            this professional excels in creating meticulous wireframes with a keen eye for
            aesthetics and seamless user flow. With a focus on both form and function, they
            bring a harmonious blend of design and functionality to their projects.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend UI</h2>
          <p>
            Specializing in implementing pixel-perfect UI designs. This expert seamlessly
            translates intricate design concepts into flawless, pixel-precise interfaces. Their
            dedication to detail ensures a visually stunning and polished user experience,
            demonstrating a commitment to achieving perfection in every aspect of UI implementation.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Solution</h2>
          <p>
            An adept backend developer renowned for creating robust and scalable server-side
            solutions. This professional excels in architecting and implementing backend systems
            with a focus on reliability, performance, and security. Their expertise ensures seamless
            integration, efficient data management, and a strong foundation for the overall stability
            of applications.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Functionality</h2>
          <p>
            Proficient in translating project requirements into tangible product features. This
            expert excels in the meticulous implementation of features, ensuring they align seamlessly
            with project objectives. With a keen understanding of user needs, this professional
            contributes to the successful realization of project goals, delivering impactful and
            well-executed features.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
