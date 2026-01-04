import FadeContent from "./FadeContent";
import {
  SiHtml5,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiDocker,
  SiLinux,
} from "react-icons/si";

function About() {
  return (
    <FadeContent duration={2} blur={false} ease="power3.out" threshold={0.5}>
      <div className="max-w-7xl mx-auto mt-16 mb-16 flex flex-col md:flex-row justify-between gap-6">
        <div className="text-white text-left flex-1 bg-black/40 backdrop-blur-md rounded-xl shadow-2xl py-8 px-12">
          <h1 className="text-center text-4xl font-bold mb-8 bg-clip-text text-transparent font-outfit">
            About Me
          </h1>
          <div className="space-y-6 text-gray-200 text-lg leading-relaxed font-light">
            <p>
              I’m a 17‑year‑old student with a passion for building digital
              experiences. My journey in tech is driven by curiosity and a
              desire to create efficient, beautiful software.
            </p>
            <p>
              I specialize in crafting responsive front‑end websites using
              modern frameworks, while also handling the backend through server
              management and deployment.
            </p>
            <p>
              Outside of pure web development, I’m comfortable on the ops side
              too. I daily‑drive Linux, work heavily in the terminal, and
              maintain a home server with a fully terminal‑driven setup. I use
              Docker for containerized services, managed through a web‑based UI,
              to keep my self‑hosted projects reliable and performant.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center bg-black/50 rounded-lg shadow-md py-6 px-12">
          <h1 className="text-center text-4xl font-bold md:mb-8 bg-clip-text text-transparent font-outfit">
            Skills
          </h1>
          <div className="flex flex-col md:flex-row sm:flex-col gap-8">
            <div className="flex flex-col space-y-4 pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-3xl font-bold text-white">7</h3>
                <p className="text-sm text-gray-300">Projects Made</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-3xl font-bold text-white">2</h3>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-3xl font-bold text-white">2</h3>
                <p className="text-sm text-gray-300">Jobs Completed</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="grid grid-cols-1 gap-4 justify-items-center">
                {/* HTML5 */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SiHtml5 className="w-8 h-8 text-orange-500" />
                </div>

                {/* Tailwind */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SiTailwindcss className="w-8 h-8 text-cyan-400" />
                </div>

                {/* TypeScript */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SiTypescript className="w-8 h-8 text-blue-500" />
                </div>

                {/* React */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SiReact className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Docker */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SiDocker className="w-8 h-8 text-blue-600" />
                </div>

                {/* Linux */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SiLinux className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}

export default About;
