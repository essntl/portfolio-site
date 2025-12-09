import SplitText from "./SplitText";
import FadeContent from "./FadeContent";

function Hero() {
  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.1}>
        <div className="flex items-center justify-center flex-col space-y-6">
          <img src="src/assets/img.jpg" alt="" className="rounded-4xl w-48 h-48 object-cover"/>
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
              threshold={0.5}
              rootMargin="-100px"
              textAlign="center"
            />
            <p>I specialize in front-end development and user-focused tech solutions</p>
          </div>
        </div>
    </FadeContent>
  );
}
export default Hero;
