import SplitText from "./SplitText";
import FadeContent from "./FadeContent";
import ElectricBorder from "./ElectricBorder";
import AnimatedContent from "./AnimatedContent";
import profileImg from "../assets/img.jpg";


function Hero() {
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
        <AnimatedContent
          duration={1}
          ease="power3.out"
          distance={30}
          className="mt-4"
        >
          <div className="flex space-x-4">
            <ElectricBorder
              color="#eb4c4c"
              thickness={1}
              speed={1}
              chaos={0.1}
              className="rounded-lg hover:scale-105 transition-all"
            >
              <button
                className="bg-black/20 backdrop-blur-lg border border-gray-700/20 rounded-lg px-4 py-3 hover:cursor-pointer hover:bg-red-600/10 transition-all"
                onClick={() => window.open("https://google.com", "_blank")}
                type="button"
              >
                Contact Me
              </button>
            </ElectricBorder>

            <ElectricBorder
              color="#A78BFA"
              thickness={1}
              speed={1}
              chaos={0.1}
              className="rounded-lg hover:scale-105 transition-all"
            >
              <button
                className="bg-black/20 backdrop-blur-lg border border-gray-700/20 rounded-lg px-4 py-3 hover:cursor-pointer hover:bg-purple-600/10 transition-all"
                onClick={() => window.open("https://google.com", "_blank")}
                type="button"
              >
                View Projects
              </button>
            </ElectricBorder>

          </div>
        </AnimatedContent>
      </div>
    </FadeContent>
  );
}
export default Hero;
