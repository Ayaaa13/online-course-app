import React from "react";
import Header from "./header";
import SectionOne from "./section-one";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import SectionFour from "./section-four";
import SectionFive from "./section-five";
import SectionSix from "./section-six";
import { motion, useScroll } from "framer-motion";
import Footer from "./footer";
import Copyright from "./copyright";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="container">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
