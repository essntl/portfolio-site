import SplitText from "./SplitText";
import FadeContent from "./FadeContent";
import ElectricBorder from "./ElectricBorder";
import AnimatedContent from "./AnimatedContent";
import profileImg from "../assets/img.jpg";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  const [contactHovered, setContactHovered] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    }
  };

  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.1}>
      <div className="flex items-center justify-center flex-col space-y-6">
        <AnimatedContent duration={1} ease="power3.out" distance={30}>
          <img
            src={profileImg}
            alt=""
            className="rounded-4xl w-48 h-48 object-cover"
          />
        </AnimatedContent>
        <div className="">
          <SplitText
            text="Hello, I'm Artyom"
            tag="h1"
            className="text-5xl font-semibold h-auto p-2"
            delay={70}
            duration={2}
            ease="elastic.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <AnimatedContent duration={1} ease="power3.out" distance={20}>
            <p>
              I specialize in front-end development and user-focused tech
              solutions
            </p>
          </AnimatedContent>
        </div>
        <AnimatedContent duration={1} ease="power3.out" distance={30}>
          <div className="flex space-x-4">
            <div
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
            >
              <ElectricBorder
                color="#eb4c4c"
                thickness={contactHovered ? 2 : 1}
                speed={contactHovered ? 1.5 : 1}
                chaos={contactHovered ? 0.4 : 0.2}
                className="rounded-lg hover:scale-105 transition-all py-3"
              >
                <a
                  className="bg-gray-950/30 border border-gray-700/20 text-white rounded-lg px-4 py-3 hover:cursor-pointer hover:bg-red-600/10 transition-all"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Contact Me
                </a>
              </ElectricBorder>
            </div>

            <div
              onMouseEnter={() => setProjectsHovered(true)}
              onMouseLeave={() => setProjectsHovered(false)}
            >
              <ElectricBorder
                color="#A78BFA"
                thickness={projectsHovered ? 2 : 1}
                speed={projectsHovered ? 1.5 : 1}
                chaos={projectsHovered ? 0.4 : 0.2}
                className="rounded-lg hover:scale-105 transition-all py-3"
              >
                <a
                  className="bg-gray-900/40 border border-gray-700/20 text-white rounded-lg px-4 py-3 hover:cursor-pointer hover:bg-purple-600/10 transition-all"
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                >
                  View Projects
                </a>
              </ElectricBorder>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </FadeContent>
  );
}
export default Hero;
