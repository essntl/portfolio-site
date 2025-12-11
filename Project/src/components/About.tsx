import FadeContent from "./FadeContent";

function About() {
  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.1}>
        <div className="max-w-7xl mx-auto mt-16 mb-16 flex flex-col md:flex-row justify-between gap-6">
            <div className="text-white text-left flex-1 bg-black/40 backdrop-blur-md rounded-xl shadow-2xl py-8 px-12">
            <h1 className="text-center text-4xl font-bold mb-8 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed font-light">
              <p>
              I’m a 17‑year‑old student with a passion for building digital experiences. My journey in tech is driven by curiosity and a desire to create efficient, beautiful software.
              </p>
              <p>
              I specialize in crafting responsive front‑end websites using modern frameworks, while also handling the backend through server management and deployment.
              </p>
              <p>
              Outside of pure web development, I’m comfortable on the ops side too. I daily‑drive Linux, work heavily in the terminal, and maintain a home server with a fully terminal‑driven setup. I use Docker for containerized services, managed through a web‑based UI, to keep my self‑hosted projects reliable and performant.
              </p>
            </div>
            </div>
          <div className="flex flex-col text-center bg-black/50 rounded-lg shadow-md py-6 px-12">
            <h1 className="text-center text-3xl mb-4">Skills</h1>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col space-y-4 pt-12">
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
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML5"
                      className="w-10 h-10 brightness-200"
                    />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                      alt="Tailwind CSS"
                      className="w-10 h-10 brightness-200"
                    />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      className="w-10 h-10 brightness-200"
                    />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      className="w-10 h-10 brightness-200"
                    />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                      alt="Docker"
                      className="w-10 h-10 brightness-200"
                    />
                    </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    alt="Linux"
                    className="w-10 h-10 brightness-200"
                  />
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
